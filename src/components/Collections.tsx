import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface CollectionsProps {
  products: Product[];
  selectedCategory: string;
  wishlist: string[];
  onToggleWishlist: (productId: string) => void;
  onSelectCategory: (cat: string) => void;
  onViewDetail: (product: Product) => void;
  onConfigure: (product: Product) => void;
}

export const Collections: React.FC<CollectionsProps> = ({
  products,
  selectedCategory,
  wishlist,
  onToggleWishlist,
  onSelectCategory,
  onViewDetail,
  onConfigure,
}) => {
  const categories = [
    { id: 'all', label: 'Tất cả tuyển chọn' },
    { id: 'ultrabook', label: 'Máy mỏng nhẹ' },
    { id: 'workstation', label: 'Sáng tạo & Máy trạm' },
    { id: 'gaming', label: 'Gaming & Lab AI' },
    { id: 'accessory', label: 'Phụ kiện cao cấp' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-16 sm:py-20" id="collections">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#d8dce4]"
        >
          <div>
            <span className="text-[11px] text-[#636a7a] uppercase tracking-widest block mb-2 font-semibold font-sans">
              Bộ Sưu Tập Chủ Lực
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1a1e26] font-semibold">
              Tuyển Chọn Theo Nhu Cầu
            </h2>
          </div>
          <p className="text-[15px] text-[#596273] max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            Được phân hạng chuẩn xác dựa trên tần suất công việc cao cấp và thẩm mỹ cơ học tối giản.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center gap-2 mb-8"
        >
          {categories.map((c) => {
            const isActive = selectedCategory === c.id;
            return (
              <button
                key={c.id}
                onClick={() => onSelectCategory(c.id)}
                className={`px-4 py-2 rounded text-[13px] font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#575e6d] text-white shadow-sm'
                    : 'bg-white border border-[#d8dce4] text-[#596273] hover:text-[#1a1e26] hover:border-[#8e95a5]'
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </motion.div>

        {/* Product Cards Stack with AnimatePresence */}
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {filteredProducts.map((product, idx) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={idx}
                  isWishlisted={wishlist.includes(product.id)}
                  onToggleWishlist={onToggleWishlist}
                  onViewDetail={onViewDetail}
                  onConfigure={onConfigure}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16 bg-white rounded border border-[#d8dce4]">
              <p className="text-[#596273] text-sm">Không có thiết bị phù hợp với bộ lọc hiện tại.</p>
              <button
                onClick={() => onSelectCategory('all')}
                className="mt-3 text-xs text-[#575e6d] underline font-medium cursor-pointer"
              >
                Xem tất cả danh mục
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
