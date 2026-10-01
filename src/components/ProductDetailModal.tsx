import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types';
import { TechTooltip } from './TechTooltip';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  onClose: () => void;
  onConfigure: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  isWishlisted,
  onToggleWishlist,
  onClose,
  onConfigure,
  onQuickAdd,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'box' | 'warranty'>('overview');

  if (!isOpen || !product) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + '₫';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 bg-white rounded-lg max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-[#d8dce4] overflow-hidden my-auto"
          >
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-[#d8dce4] flex items-center justify-between bg-[#f8f9fc]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-mono text-[#858e9f] uppercase tracking-wider">
                    {product.brand} • {product.categoryLabel}
                  </span>
                  <span className="text-[11px] font-mono text-[#575e6d] font-semibold bg-[#e9ecf2] px-2 py-0.5 rounded">
                    {product.screenSize}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#1a1e26] font-semibold">
                  {product.name}
                </h2>
              </div>
              <div className="flex items-center gap-2">
                {/* Wishlist toggle */}
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  onClick={() => onToggleWishlist(product.id)}
                  aria-label={isWishlisted ? 'Xóa khỏi yêu thích' : 'Lưu vào yêu thích'}
                  className={`w-9 h-9 rounded-full flex items-center justify-center border shadow-xs transition-colors cursor-pointer ${
                    isWishlisted
                      ? 'bg-[#ba1a1a] text-white border-[#ba1a1a]'
                      : 'bg-white text-[#858e9f] hover:text-[#ba1a1a] border-[#d8dce4]'
                  }`}
                  title={isWishlisted ? 'Đã lưu trong yêu thích' : 'Lưu vào yêu thích'}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {isWishlisted ? 'favorite' : 'favorite_border'}
                  </span>
                </motion.button>

                <button
                  onClick={onClose}
                  className="text-[#858e9f] hover:text-[#1a1e26] p-2 rounded hover:bg-white transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-[#d8dce4] bg-white px-4 sm:px-6 overflow-x-auto text-[13px]">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-3 px-4 font-medium border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'overview'
                    ? 'border-[#575e6d] text-[#1a1e26]'
                    : 'border-transparent text-[#596273] hover:text-[#1a1e26]'
                }`}
              >
                Tổng quan thiết kế
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`py-3 px-4 font-medium border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'specs'
                    ? 'border-[#575e6d] text-[#1a1e26]'
                    : 'border-transparent text-[#596273] hover:text-[#1a1e26]'
                }`}
              >
                Bảng thông số chi tiết
              </button>
              <button
                onClick={() => setActiveTab('box')}
                className={`py-3 px-4 font-medium border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'box'
                    ? 'border-[#575e6d] text-[#1a1e26]'
                    : 'border-transparent text-[#596273] hover:text-[#1a1e26]'
                }`}
              >
                Hộp sản phẩm &amp; Phụ kiện
              </button>
              <button
                onClick={() => setActiveTab('warranty')}
                className={`py-3 px-4 font-medium border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'warranty'
                    ? 'border-[#575e6d] text-[#1a1e26]'
                    : 'border-transparent text-[#596273] hover:text-[#1a1e26]'
                }`}
              >
                Đặc quyền VIP &amp; Bảo hành
              </button>
            </div>

            {/* Tab Body with AnimatePresence */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
              <AnimatePresence mode="wait">
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div className="aspect-[16/9] max-h-72 w-full rounded bg-[#f1f3f7] border border-[#d8dce4] overflow-hidden flex items-center justify-center p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-serif font-semibold text-[#1a1e26] mb-2">
                        {product.subtitle}
                      </h3>
                      <p className="text-[14px] text-[#596273] leading-relaxed font-light">
                        {product.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#e7eaf0]">
                      <div className="bg-[#f8f9fc] p-4 rounded border border-[#d8dce4]">
                        <span className="text-xs font-mono uppercase text-[#858e9f] block mb-1">
                          {product.highlightSpecs.label1}
                        </span>
                        <span className="text-lg font-serif font-semibold text-[#1a1e26]">
                          {product.highlightSpecs.val1}
                        </span>
                      </div>
                      <div className="bg-[#f8f9fc] p-4 rounded border border-[#d8dce4]">
                        <span className="text-xs font-mono uppercase text-[#858e9f] block mb-1">
                          {product.highlightSpecs.label2}
                        </span>
                        <span className="text-lg font-serif font-semibold text-[#1a1e26]">
                          {product.highlightSpecs.val2}
                        </span>
                      </div>
                      <div className="bg-[#f8f9fc] p-4 rounded border border-[#d8dce4]">
                        <span className="text-xs font-mono uppercase text-[#858e9f] block mb-1">
                          {product.highlightSpecs.label3}
                        </span>
                        <span className="text-lg font-serif font-semibold text-[#1a1e26]">
                          {product.highlightSpecs.val3}
                        </span>
                      </div>
                    </div>

                    {/* Finishes */}
                    <div>
                      <h4 className="text-xs font-mono uppercase text-[#636a7a] tracking-wider mb-2 font-semibold">
                        Tùy chọn hoàn thiện kim loại:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.finishes.map((f) => (
                          <div
                            key={f.id}
                            className="flex items-center gap-3 p-3 rounded border border-[#d8dce4] bg-[#f8f9fc]"
                          >
                            <span
                              className="w-5 h-5 rounded-full border border-black/20 shrink-0"
                              style={{ backgroundColor: f.colorHex }}
                            ></span>
                            <div>
                              <span className="text-xs font-semibold text-[#1a1e26] block">
                                {f.name}
                              </span>
                              <span className="text-[11px] text-[#596273]">{f.material}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'specs' && (
                  <motion.div
                    key="specs"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="divide-y divide-[#e7eaf0] border border-[#d8dce4] rounded overflow-hidden"
                  >
                    <div className="grid grid-cols-3 p-3.5 bg-[#f8f9fc] text-xs font-mono font-medium text-[#636a7a]">
                      <div className="col-span-1">Hạng mục</div>
                      <div className="col-span-2">Chi tiết thông số phần cứng (Di chuột xem giải thích)</div>
                    </div>

                    <div className="grid grid-cols-3 p-3.5 text-[13px]">
                      <div className="col-span-1 text-[#596273] font-medium">Vi xử lý (CPU)</div>
                      <div className="col-span-2 text-[#1a1e26]">
                        {product.specs.cpu.includes('vPro') ? (
                          <>
                            {product.specs.cpu.split('vPro')[0]}
                            <TechTooltip term="vPro">vPro Enterprise</TechTooltip>
                            {product.specs.cpu.split('vPro')[1]}
                          </>
                        ) : product.specs.cpu.includes('NPU') ? (
                          <>
                            {product.specs.cpu.split('NPU')[0]}
                            <TechTooltip term="NPU">NPU AI</TechTooltip>
                            {product.specs.cpu.split('NPU')[1]}
                          </>
                        ) : (
                          product.specs.cpu
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 p-3.5 text-[13px]">
                      <div className="col-span-1 text-[#596273] font-medium">Card đồ họa (GPU)</div>
                      <div className="col-span-2 text-[#1a1e26]">
                        {product.specs.gpu.includes('RTX 4070') ? (
                          <>
                            {product.specs.gpu.split('RTX 4070')[0]}
                            <TechTooltip term="RTX 4070">RTX 4070</TechTooltip>
                            {product.specs.gpu.split('RTX 4070')[1]}
                          </>
                        ) : (
                          product.specs.gpu
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 p-3.5 text-[13px]">
                      <div className="col-span-1 text-[#596273] font-medium">Bộ nhớ RAM</div>
                      <div className="col-span-2 text-[#1a1e26]">
                        {product.specs.ram.includes('LPDDR5X') ? (
                          <>
                            {product.specs.ram.split('LPDDR5X')[0]}
                            <TechTooltip term="LPDDR5X">LPDDR5X</TechTooltip>
                            {product.specs.ram.split('LPDDR5X')[1]}
                          </>
                        ) : (
                          product.specs.ram
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 p-3.5 text-[13px]">
                      <div className="col-span-1 text-[#596273] font-medium">Ổ cứng lưu trữ</div>
                      <div className="col-span-2 text-[#1a1e26]">{product.specs.storage}</div>
                    </div>

                    <div className="grid grid-cols-3 p-3.5 text-[13px]">
                      <div className="col-span-1 text-[#596273] font-medium">Màn hình hiển thị</div>
                      <div className="col-span-2 text-[#1a1e26]">
                        {product.specs.display.includes('OLED') ? (
                          <>
                            {product.specs.display.split('OLED')[0]}
                            <TechTooltip term="OLED">OLED</TechTooltip>
                            {product.specs.display.split('OLED')[1]}
                          </>
                        ) : (
                          product.specs.display
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 p-3.5 text-[13px]">
                      <div className="col-span-1 text-[#596273] font-medium">Trọng lượng máy</div>
                      <div className="col-span-2 text-[#1a1e26]">{product.specs.weight}</div>
                    </div>

                    <div className="grid grid-cols-3 p-3.5 text-[13px]">
                      <div className="col-span-1 text-[#596273] font-medium">Pin &amp; Nguồn điện</div>
                      <div className="col-span-2 text-[#1a1e26]">{product.specs.battery}</div>
                    </div>

                    <div className="grid grid-cols-3 p-3.5 text-[13px]">
                      <div className="col-span-1 text-[#596273] font-medium">Cổng giao tiếp</div>
                      <div className="col-span-2 text-[#1a1e26]">
                        {product.specs.ports.includes('Thunderbolt 4') ? (
                          <>
                            {product.specs.ports.split('Thunderbolt 4')[0]}
                            <TechTooltip term="Thunderbolt 4">Thunderbolt 4</TechTooltip>
                            {product.specs.ports.split('Thunderbolt 4')[1]}
                          </>
                        ) : (
                          product.specs.ports
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 p-3.5 text-[13px]">
                      <div className="col-span-1 text-[#596273] font-medium">Cơ khí khung vỏ</div>
                      <div className="col-span-2 text-[#1a1e26]">
                        {product.specs.chassis.includes('Titan') ? (
                          <>
                            {product.specs.chassis.split('Titan')[0]}
                            <TechTooltip term="Titanium Grade 5">Titan</TechTooltip>
                            {product.specs.chassis.split('Titan')[1]}
                          </>
                        ) : (
                          product.specs.chassis
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 p-3.5 text-[13px]">
                      <div className="col-span-1 text-[#596273] font-medium">Bảo mật sinh trắc</div>
                      <div className="col-span-2 text-[#1a1e26]">{product.specs.security}</div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'box' && (
                  <motion.div
                    key="box"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="bg-[#f8f9fc] p-6 rounded border border-[#d8dce4] space-y-4">
                      <h4 className="text-base font-serif font-semibold text-[#1a1e26]">
                        Quy cách đóng gói Signature Atelier Box:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#596273]">
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[#575e6d] text-base">check_circle</span>
                          <span>Thân máy {product.name} nguyên seal kiểm định nhiệt độ</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[#575e6d] text-base">check_circle</span>
                          <span>Củ sạc GaN siêu nhỏ gọn chuẩn Type-C Power Delivery</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[#575e6d] text-base">check_circle</span>
                          <span>Cáp Thunderbolt 4 bọc dù bện sợi kim loại chống gãy gập</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[#575e6d] text-base">check_circle</span>
                          <span>Khăn lau vi sợi dệt công nghệ cao chống tĩnh điện</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[#575e6d] text-base">check_circle</span>
                          <span>Thẻ chứng nhận xuất xưởng kèm chữ ký kỹ sư trưởng</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[#575e6d] text-base">check_circle</span>
                          <span>Tài liệu hướng dẫn &amp; Thẻ VIP Concierge Pass</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'warranty' && (
                  <motion.div
                    key="warranty"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="bg-[#f8f9fc] p-6 rounded border border-[#d8dce4] space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded bg-[#e9ecf2] flex items-center justify-center text-[#575e6d]">
                          <span className="material-symbols-outlined">verified_user</span>
                        </span>
                        <div>
                          <h4 className="text-base font-serif font-semibold text-[#1a1e26]">
                            {product.specs.warranty}
                          </h4>
                          <p className="text-xs text-[#858e9f]">Dịch vụ bảo hành tận nơi chuẩn VIP toàn quốc</p>
                        </div>
                      </div>
                      <div className="text-xs text-[#596273] space-y-2 pt-3 border-t border-[#e7eaf0]">
                        <p>• <strong>Kỹ thuật viên tại chỗ:</strong> Chuyên viên hỗ trợ kỹ thuật có mặt tại địa chỉ của khách hàng trong vòng 24 giờ sau khi ghi nhận sự cố.</p>
                        <p>• <strong>Máy thay thế tạm thời:</strong> Cung cấp thiết bị cấu hình tương đương để công việc của quý khách không bị gián đoạn trong thời gian xử lý.</p>
                        <p>• <strong>Hotline VIP riêng:</strong> Đầu số ưu tiên 0777 6362 97 không phải chờ đợi hàng đợi máy.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-6 border-t border-[#d8dce4] bg-[#f8f9fc] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono text-[#858e9f] uppercase block">
                  Giá niêm yết
                </span>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#1a1e26]">
                  {formatPrice(product.basePrice)}
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    onClose();
                    onQuickAdd(product);
                  }}
                  className="flex-1 sm:flex-none px-6 py-3 rounded border border-[#d8dce4] bg-white hover:bg-[#f1f3f7] text-[#1a1e26] text-[13px] font-medium transition-colors cursor-pointer"
                >
                  Thêm Nhanh Vào Giỏ
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onConfigure(product);
                  }}
                  className="flex-1 sm:flex-none px-8 py-3 rounded bg-[#575e6d] hover:bg-[#2b3240] text-white text-[13px] font-semibold transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Tùy Biến Cấu Hình</span>
                  <span className="material-symbols-outlined text-[18px]">tune</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
