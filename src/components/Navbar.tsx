import React, { useState } from 'react';

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenConfigurator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenConfigurator,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'all', label: 'Tất cả sản phẩm', href: '#collections' },
    { id: 'ultrabook', label: 'Máy mỏng nhẹ', href: '#collections' },
    { id: 'gaming', label: 'Máy Chơi Game', href: '#collections' },
    { id: 'workstation', label: 'Máy trạm', href: '#collections' },
    { id: 'accessory', label: 'Phụ kiện', href: '#collections' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#eceff4]/90 backdrop-blur-md border-b border-[#d3d8e2] transition-all">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between h-16 w-full">
        {/* Brand Logo */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-xl sm:text-2xl font-serif font-semibold tracking-wider text-[#1a1e26] uppercase flex items-center gap-2 group"
          >
            <span className="group-hover:text-[#575e6d] transition-colors">NHATLM</span>
            <span className="hidden sm:inline-block text-[#858e9f] text-[11px] tracking-widest pl-2 border-l border-[#d8dce4] font-sans font-medium">
              DELL • HP • LENOVO • ASUS
            </span>
          </a>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  const el = document.getElementById('collections');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-[13px] font-medium transition-colors duration-200 pb-1 cursor-pointer ${
                  isActive
                    ? 'text-[#1a1e26] border-b-2 border-[#575e6d]'
                    : 'text-[#596273] hover:text-[#1a1e26] border-b-2 border-transparent'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Trailing Icon Actions and Primary Action Button */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            aria-label="Tìm kiếm sản phẩm"
            className="text-[#596273] hover:text-[#1a1e26] hover:bg-white/60 p-2 rounded transition-colors cursor-pointer"
            title="Tìm kiếm (Ctrl + K)"
          >
            <span className="material-symbols-outlined">search</span>
          </button>

          {/* Wishlist Trigger with Heart Icon */}
          <button
            onClick={onOpenWishlist}
            aria-label="Danh sách yêu thích"
            className="text-[#596273] hover:text-[#1a1e26] hover:bg-white/60 p-2 rounded transition-colors relative cursor-pointer"
            title="Danh sách máy yêu thích"
          >
            <span className={`material-symbols-outlined ${wishlistCount > 0 ? 'text-[#ba1a1a]' : ''}`}>
              {wishlistCount > 0 ? 'favorite' : 'favorite_border'}
            </span>
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-0.5 min-w-4 h-4 px-1 rounded-full bg-[#ba1a1a] text-white text-[10px] font-semibold flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Shopping Cart Trigger */}
          <button
            onClick={onOpenCart}
            aria-label="Giỏ hàng"
            className="text-[#596273] hover:text-[#1a1e26] hover:bg-white/60 p-2 rounded transition-colors relative cursor-pointer"
            title="Giỏ hàng của bạn"
          >
            <span className="material-symbols-outlined">shopping_bag</span>
            {cartCount > 0 ? (
              <span className="absolute top-1 right-0.5 min-w-4 h-4 px-1 rounded-full bg-[#575e6d] text-white text-[10px] font-semibold flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            ) : (
              <span className="absolute top-1.5 right-1 w-2 h-2 rounded-full bg-[#8e95a5]"></span>
            )}
          </button>

          {/* Primary Action Button */}
          <button
            onClick={onOpenConfigurator}
            className="hidden sm:inline-flex items-center justify-center gap-1.5 bg-[#575e6d] text-white px-4 py-1.5 rounded text-[13px] font-medium transition-all duration-200 active:scale-[0.98] hover:bg-[#2b3240] shadow-sm cursor-pointer ml-1"
          >
            <span>Tùy biến cấu hình</span>
            <span className="material-symbols-outlined text-[16px]">tune</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#596273] hover:text-[#1a1e26] p-1.5 rounded cursor-pointer"
            aria-label="Menu"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#d8dce4] bg-[#f8f9fc] px-4 py-4 space-y-3">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  setMobileMenuOpen(false);
                  const el = document.getElementById('collections');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-left text-sm py-2 px-3 rounded font-medium cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-white text-[#1a1e26] font-semibold shadow-sm'
                    : 'text-[#596273]'
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWishlist();
              }}
              className="text-left text-sm py-2 px-3 rounded font-medium text-[#596273] hover:text-[#1a1e26] flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#ba1a1a]">favorite</span>
                <span>Danh sách yêu thích</span>
              </span>
              {wishlistCount > 0 && (
                <span className="bg-[#ba1a1a] text-white text-[11px] px-2 py-0.5 rounded-full">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConfigurator();
              }}
              className="mt-2 w-full flex items-center justify-center gap-2 bg-[#575e6d] text-white py-2.5 rounded text-sm font-medium cursor-pointer"
            >
              <span>Thiết Kế Cấu Hình</span>
              <span className="material-symbols-outlined text-sm">tune</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
