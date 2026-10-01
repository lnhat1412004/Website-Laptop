import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onClearWishlist: () => void;
  onViewDetail: (product: Product) => void;
  onConfigure: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onClearWishlist,
  onViewDetail,
  onConfigure,
  onQuickAdd,
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + '₫';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Drawer content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 bg-white w-full max-w-lg h-full shadow-2xl flex flex-col border-l border-[#d8dce4]"
          >
            {/* Drawer Header */}
            <div className="p-4 sm:p-6 border-b border-[#d8dce4] flex items-center justify-between bg-[#f8f9fc]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ba1a1a]">favorite</span>
                <h2 className="text-xl font-serif font-semibold text-[#1a1e26]">
                  Danh Sách Yêu Thích ({wishlistProducts.length})
                </h2>
              </div>
              <div className="flex items-center gap-2">
                {wishlistProducts.length > 0 && (
                  <button
                    onClick={onClearWishlist}
                    className="text-xs text-[#858e9f] hover:text-[#ba1a1a] transition-colors cursor-pointer mr-2"
                    title="Xóa toàn bộ danh sách"
                  >
                    Xóa tất cả
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="text-[#858e9f] hover:text-[#1a1e26] p-1.5 rounded hover:bg-white transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col justify-between">
              {wishlistProducts.length === 0 ? (
                <div className="my-auto text-center py-16 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#f1f3f7] mx-auto flex items-center justify-center text-[#858e9f]">
                    <span className="material-symbols-outlined text-2xl">favorite_border</span>
                  </div>
                  <h3 className="text-lg font-serif font-medium text-[#1a1e26]">
                    Chưa có thiết bị nào trong danh sách
                  </h3>
                  <p className="text-xs text-[#596273] max-w-xs mx-auto leading-relaxed">
                    Nhấp vào biểu tượng trái tim trên các mẫu ultrabook hoặc máy trạm để lưu lại và so sánh thuận tiện.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {wishlistProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="p-4 rounded border border-[#d8dce4] bg-[#f8f9fc] flex gap-3 relative group"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded border border-[#d8dce4] shrink-0"
                      />
                      <div className="flex-1 min-w-0 pr-6">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono uppercase text-[#858e9f]">
                            {product.brand}
                          </span>
                          <span className="text-[10px] font-mono px-1.5 py-0.2 bg-[#e9ecf2] rounded text-[#575e6d]">
                            {product.screenSize}
                          </span>
                        </div>
                        <h4 className="text-[14px] font-medium text-[#1a1e26] truncate mt-0.5">
                          {product.name}
                        </h4>
                        <p className="text-[11px] text-[#596273] line-clamp-1 mt-0.5 font-light">
                          {product.subtitle}
                        </p>
                        <div className="text-sm font-serif font-semibold text-[#1a1e26] mt-2">
                          {formatPrice(product.basePrice)}
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-wrap items-center gap-2 mt-3 pt-2 border-t border-[#e7eaf0]">
                          <button
                            onClick={() => {
                              onViewDetail(product);
                              onClose();
                            }}
                            className="text-xs px-2.5 py-1 rounded border border-[#d8dce4] bg-white hover:bg-[#f1f3f7] text-[#1a1e26] cursor-pointer"
                          >
                            Chi tiết
                          </button>
                          <button
                            onClick={() => {
                              onConfigure(product);
                              onClose();
                            }}
                            className="text-xs px-2.5 py-1 rounded bg-[#575e6d] hover:bg-[#2b3240] text-white cursor-pointer"
                          >
                            Tùy biến
                          </button>
                          <button
                            onClick={() => onQuickAdd(product)}
                            className="text-xs px-2.5 py-1 rounded bg-white border border-[#575e6d] text-[#575e6d] hover:bg-[#575e6d] hover:text-white cursor-pointer flex items-center gap-1"
                          >
                            <span>Thêm giỏ</span>
                            <span className="material-symbols-outlined text-[13px]">shopping_bag</span>
                          </button>
                        </div>
                      </div>

                      {/* Remove button */}
                      <button
                        onClick={() => onRemoveFromWishlist(product.id)}
                        className="absolute top-3 right-3 text-[#ba1a1a] hover:opacity-80 p-1 cursor-pointer"
                        title="Xóa khỏi yêu thích"
                      >
                        <span className="material-symbols-outlined text-[18px]">favorite</span>
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Bottom return action */}
              {wishlistProducts.length > 0 && (
                <div className="pt-4 border-t border-[#d8dce4] mt-6">
                  <button
                    onClick={onClose}
                    className="w-full bg-[#f1f3f7] hover:bg-[#e9ecf2] text-[#1a1e26] py-2.5 rounded text-[13px] font-medium transition-colors cursor-pointer text-center"
                  >
                    Tiếp tục xem các mẫu máy khác
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
