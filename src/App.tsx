/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Collections } from './components/Collections';
import { EngineeringSection } from './components/EngineeringSection';
import { ComparisonTable } from './components/ComparisonTable';
import { ValueGuarantees } from './components/ValueGuarantees';
import { AtelierSection } from './components/AtelierSection';
import { Footer } from './components/Footer';
import { ConfiguratorModal } from './components/ConfiguratorModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { AppointmentModal } from './components/AppointmentModal';
import { PolicyModal } from './components/PolicyModal';
import { PRODUCTS } from './data/products';
import { Product, CartItem } from './types';

export default function App() {
  // Navigation & Category state
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Wishlist state (Persistent via localStorage)
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('nhatlm_wishlist');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Ignore parse error
    }
    // Default initial favorited model
    return ['lenovo-thinkpad-x1'];
  });

  useEffect(() => {
    try {
      localStorage.setItem('nhatlm_wishlist', JSON.stringify(wishlist));
    } catch {
      // Ignore write errors
    }
  }, [wishlist]);

  // Modals state
  const [isConfiguratorOpen, setIsConfiguratorOpen] = useState(false);
  const [configuratorProduct, setConfiguratorProduct] = useState<Product | null>(null);

  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [policyTitle, setPolicyTitle] = useState<string | null>(null);

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'initial-thinkpad',
      productId: 'lenovo-thinkpad-x1',
      name: 'Lenovo ThinkPad X1 Carbon',
      brand: 'Lenovo',
      image: PRODUCTS[1].image,
      finish: 'Carbon Fiber Weave',
      cpu: 'Intel Core Ultra 7 165U vPro',
      ram: '32GB LPDDR5X 7500 MHz',
      storage: '1TB NVMe PCIe 4.0 Performance',
      display: '16" 3.2K 120Hz OLED Calibrated HDR 500',
      unitPrice: 45990000,
      quantity: 1,
    },
  ]);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 3500);
  };

  const handleToggleWishlist = (productId: string) => {
    const prod = PRODUCTS.find((p) => p.id === productId);
    const prodName = prod ? prod.name : 'sản phẩm';

    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast(`Đã xóa ${prodName} khỏi danh sách yêu thích`);
        return prev.filter((id) => id !== productId);
      } else {
        showToast(`Đã lưu ${prodName} vào danh sách yêu thích`);
        return [...prev, productId];
      }
    });
  };

  const handleClearWishlist = () => {
    setWishlist([]);
    showToast('Đã làm trống danh sách yêu thích');
  };

  const handleSelectTab = (tabId: string) => {
    setActiveTab(tabId);
    setSelectedCategory(tabId);
  };

  const handleExplore = () => {
    const el = document.getElementById('collections');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenConfigurator = (product?: Product) => {
    setConfiguratorProduct(product || PRODUCTS[1]);
    setIsConfiguratorOpen(true);
  };

  const handleViewDetail = (product: Product) => {
    setDetailProduct(product);
    setIsDetailOpen(true);
  };

  const handleAddToCart = (newItem: Omit<CartItem, 'id'>) => {
    const uniqueId = 'cart-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4);
    setCartItems((prev) => {
      // Check if identical configuration already exists
      const existingIdx = prev.findIndex(
        (i) =>
          i.productId === newItem.productId &&
          i.finish === newItem.finish &&
          i.cpu === newItem.cpu &&
          i.ram === newItem.ram &&
          i.storage === newItem.storage &&
          i.display === newItem.display
      );

      if (existingIdx >= 0) {
        const updated = [...prev];
        updated[existingIdx].quantity += newItem.quantity;
        return updated;
      }
      return [...prev, { ...newItem, id: uniqueId }];
    });

    showToast(`Đã thêm ${newItem.name} (${newItem.finish}) vào giỏ hàng`);
  };

  const handleQuickAdd = (product: Product) => {
    handleAddToCart({
      productId: product.id,
      name: product.name,
      brand: product.brand,
      image: product.image,
      finish: product.finishes[0]?.name || 'Titanium Slate',
      cpu: product.specs.cpu,
      ram: product.specs.ram,
      storage: product.specs.storage,
      display: product.specs.display,
      unitPrice: product.basePrice,
      quantity: 1,
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Products in wishlist
  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="min-h-screen bg-[#eceff4] text-[#1a1e26] flex flex-col font-sans selection:bg-[#e9ecf2] selection:text-[#1a1e26]">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenConfigurator={() => handleOpenConfigurator(PRODUCTS[1])}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExplore={handleExplore}
          onOpenConfigurator={() => handleOpenConfigurator(PRODUCTS[3])} // Dell XPS 16
          onSelectDellXPS={() => handleViewDetail(PRODUCTS[3])}
        />

        {/* Curated Bento Collections */}
        <Collections
          products={PRODUCTS}
          selectedCategory={selectedCategory}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            setActiveTab(cat);
          }}
          onViewDetail={handleViewDetail}
          onConfigure={handleOpenConfigurator}
        />

        {/* Engineering Precision 3-Pillar & Macro Gallery */}
        <EngineeringSection />

        {/* Quick Comparison Matrix Table */}
        <ComparisonTable
          onConfigure={handleOpenConfigurator}
          onQuickBuy={(prod) => {
            handleQuickAdd(prod);
          }}
        />

        {/* Value Guarantees Banner Bar */}
        <ValueGuarantees />

        {/* Atelier & Flagship Lounge & VIP Newsletter */}
        <AtelierSection onOpenAppointment={() => setIsAppointmentOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenPolicy={(title) => setPolicyTitle(title)} />

      {/* Interactive Modals & Drawers */}
      <ConfiguratorModal
        isOpen={isConfiguratorOpen}
        onClose={() => setIsConfiguratorOpen(false)}
        initialProduct={configuratorProduct}
        onAddToCart={handleAddToCart}
      />

      <ProductDetailModal
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        product={detailProduct}
        isWishlisted={detailProduct ? wishlist.includes(detailProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onConfigure={(prod) => {
          setIsDetailOpen(false);
          handleOpenConfigurator(prod);
        }}
        onQuickAdd={handleQuickAdd}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={handleToggleWishlist}
        onClearWishlist={handleClearWishlist}
        onViewDetail={handleViewDetail}
        onConfigure={handleOpenConfigurator}
        onQuickAdd={handleQuickAdd}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={handleViewDetail}
        onConfigureProduct={handleOpenConfigurator}
      />

      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />

      <PolicyModal
        title={policyTitle}
        onClose={() => setPolicyTitle(null)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1a1e26] text-white px-5 py-3 rounded-lg shadow-xl border border-[#575e6d] flex items-center gap-3 animate-in slide-in-from-bottom duration-300">
          <span className="material-symbols-outlined text-[#8e95a5]">info</span>
          <span className="text-[13px] font-medium">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-white/60 hover:text-white ml-2 text-xs cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
