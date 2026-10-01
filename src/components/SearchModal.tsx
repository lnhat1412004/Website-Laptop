import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onConfigureProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onConfigureProduct,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = PRODUCTS.filter((p) => {
    const term = searchTerm.toLowerCase();
    return (
      p.name.toLowerCase().includes(term) ||
      p.brand.toLowerCase().includes(term) ||
      p.subtitle.toLowerCase().includes(term) ||
      p.specs.cpu.toLowerCase().includes(term) ||
      p.specs.gpu.toLowerCase().includes(term) ||
      p.categoryLabel.toLowerCase().includes(term)
    );
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + '₫';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 bg-white rounded-lg max-w-2xl w-full shadow-2xl border border-[#d8dce4] overflow-hidden"
          >
            {/* Search Input Bar */}
            <div className="p-4 border-b border-[#d8dce4] flex items-center gap-3 bg-[#f8f9fc]">
              <span className="material-symbols-outlined text-[#858e9f]">search</span>
              <input
                type="text"
                autoFocus
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tìm kiếm mẫu máy (XPS, Spectre, ThinkPad, Zephyrus...), CPU, GPU..."
                className="flex-1 bg-transparent text-[14px] text-[#1a1e26] focus:outline-none placeholder:text-[#858e9f]"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-xs text-[#858e9f] hover:text-[#1a1e26] cursor-pointer"
                >
                  Xóa
                </button>
              )}
              <button
                onClick={onClose}
                className="text-xs font-mono text-[#575e6d] bg-white border border-[#d8dce4] px-2 py-1 rounded cursor-pointer"
              >
                ESC
              </button>
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto p-4 divide-y divide-[#e7eaf0]">
              {filtered.length > 0 ? (
                filtered.map((p) => (
                  <div
                    key={p.id}
                    className="py-3 flex items-center justify-between gap-4 hover:bg-[#f8f9fc] p-2 rounded transition-colors"
                  >
                    <div
                      onClick={() => {
                        onSelectProduct(p);
                        onClose();
                      }}
                      className="flex items-center gap-3 cursor-pointer min-w-0"
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-14 h-14 object-cover rounded border border-[#d8dce4] shrink-0"
                      />
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono uppercase text-[#858e9f] block">
                          {p.brand} • {p.categoryLabel}
                        </span>
                        <h4 className="text-[14px] font-medium text-[#1a1e26] truncate">
                          {p.name}
                        </h4>
                        <p className="text-xs text-[#596273] font-mono">
                          Khởi điểm: {formatPrice(p.basePrice)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => {
                          onSelectProduct(p);
                          onClose();
                        }}
                        className="text-xs px-3 py-1.5 rounded border border-[#d8dce4] bg-white hover:bg-[#f1f3f7] text-[#1a1e26] cursor-pointer"
                      >
                        Chi tiết
                      </button>
                      <button
                        onClick={() => {
                          onConfigureProduct(p);
                          onClose();
                        }}
                        className="text-xs px-3 py-1.5 rounded bg-[#575e6d] hover:bg-[#2b3240] text-white cursor-pointer"
                      >
                        Tùy biến
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-8 text-center text-xs text-[#596273]">
                  Không tìm thấy sản phẩm phù hợp với từ khóa &ldquo;{searchTerm}&rdquo;
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
