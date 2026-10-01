import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product, CartItem } from '../types';
import { PRODUCTS } from '../data/products';

interface ConfiguratorModalProps {
  initialProduct?: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: Omit<CartItem, 'id'>) => void;
}

export const ConfiguratorModal: React.FC<ConfiguratorModalProps> = ({
  initialProduct,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product>(
    initialProduct || PRODUCTS[1]
  );

  const [selectedFinish, setSelectedFinish] = useState(
    selectedProduct.finishes[0]?.name || 'Titanium Slate'
  );
  const [selectedCpu, setSelectedCpu] = useState(0);
  const [selectedRam, setSelectedRam] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(0);
  const [selectedDisplay, setSelectedDisplay] = useState(0);

  useEffect(() => {
    if (initialProduct) {
      setSelectedProduct(initialProduct);
      setSelectedFinish(initialProduct.finishes[0]?.name || 'Titanium Slate');
      setSelectedCpu(0);
      setSelectedRam(0);
      setSelectedStorage(0);
      setSelectedDisplay(0);
    }
  }, [initialProduct]);

  const currentCpu = selectedProduct.customizable.cpus?.[selectedCpu];
  const currentRam = selectedProduct.customizable.rams?.[selectedRam];
  const currentStorage = selectedProduct.customizable.storages?.[selectedStorage];
  const currentDisplay = selectedProduct.customizable.displays?.[selectedDisplay];

  const upgradeCost =
    (currentCpu?.addPrice || 0) +
    (currentRam?.addPrice || 0) +
    (currentStorage?.addPrice || 0) +
    (currentDisplay?.addPrice || 0);

  const totalPrice = selectedProduct.basePrice + upgradeCost;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + '₫';
  };

  const handleAddToCart = () => {
    onAddToCart({
      productId: selectedProduct.id,
      name: selectedProduct.name,
      brand: selectedProduct.brand,
      image: selectedProduct.image,
      finish: selectedFinish,
      cpu: currentCpu?.name || selectedProduct.specs.cpu,
      ram: currentRam?.name || selectedProduct.specs.ram,
      storage: currentStorage?.name || selectedProduct.specs.storage,
      display: currentDisplay?.name || selectedProduct.specs.display,
      unitPrice: totalPrice,
      quantity: 1,
    });
    onClose();
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

          {/* Modal Container */}
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
                <span className="text-[11px] font-mono text-[#858e9f] uppercase tracking-wider block font-medium">
                  NHATLM ATELIER CUSTOMIZER • {selectedProduct.brand}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#1a1e26] font-semibold">
                  Tùy Biến Cấu Hình: {selectedProduct.name}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="text-[#858e9f] hover:text-[#1a1e26] p-2 rounded hover:bg-white transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Content body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-8">
              {/* Model Switcher */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#636a7a] mb-2 font-semibold">
                  Chọn Dòng Thiết Bị Cần Cấu Hình
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {PRODUCTS.filter((p) => p.category !== 'accessory').map((p) => {
                    const isCurrent = p.id === selectedProduct.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => {
                          setSelectedProduct(p);
                          setSelectedFinish(p.finishes[0]?.name || 'Titanium Slate');
                          setSelectedCpu(0);
                          setSelectedRam(0);
                          setSelectedStorage(0);
                          setSelectedDisplay(0);
                        }}
                        className={`p-3 rounded border text-left transition-all cursor-pointer ${
                          isCurrent
                            ? 'border-[#575e6d] bg-[#f1f3f7] shadow-xs'
                            : 'border-[#d8dce4] hover:border-[#8e95a5] bg-white'
                        }`}
                      >
                        <span className="block text-[11px] font-mono text-[#858e9f] uppercase">
                          {p.brand}
                        </span>
                        <span className="block text-[13px] font-medium text-[#1a1e26] truncate">
                          {p.name}
                        </span>
                        <span className="block text-xs text-[#575e6d] mt-1 font-serif font-semibold">
                          từ {formatPrice(p.basePrice)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Visualizer & Specs Preview */}
                <div className="md:col-span-5 space-y-4">
                  <div className="aspect-[4/3] rounded bg-[#f1f3f7] border border-[#d8dce4] overflow-hidden p-3 relative flex items-center justify-center">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover rounded"
                    />
                    <span className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-xs text-[10px] font-mono uppercase px-2 py-0.5 rounded border border-[#d8dce4] text-[#1a1e26]">
                      {selectedFinish}
                    </span>
                  </div>

                  {/* Hardware Finish Swatches */}
                  <div className="bg-[#f8f9fc] p-4 rounded border border-[#d8dce4]">
                    <span className="block text-xs font-mono uppercase text-[#636a7a] mb-2 font-semibold">
                      Màu sắc &amp; Hoàn thiện vỏ máy:
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {selectedProduct.finishes.map((f) => {
                        const isSelected = selectedFinish === f.name;
                        return (
                          <button
                            key={f.id}
                            onClick={() => setSelectedFinish(f.name)}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs border transition-all cursor-pointer ${
                              isSelected
                                ? 'border-[#575e6d] bg-white shadow-xs font-semibold'
                                : 'border-[#d8dce4] bg-white/60 hover:border-[#8e95a5]'
                            }`}
                          >
                            <span
                              className="w-3.5 h-3.5 rounded-full border border-black/20"
                              style={{ backgroundColor: f.colorHex }}
                            ></span>
                            <span className="text-[#1a1e26]">{f.name}</span>
                          </button>
                        );
                      })}
                    </div>
                    <p className="text-[11px] text-[#858e9f] mt-2 font-light">
                      {selectedProduct.finishes.find((f) => f.name === selectedFinish)?.material}
                    </p>
                  </div>

                  <div className="text-xs text-[#596273] space-y-1.5 bg-[#f8f9fc] p-4 rounded border border-[#d8dce4]">
                    <div className="font-semibold text-[#1a1e26] font-serif mb-1">
                      Đặc quyền đi kèm đơn hàng:
                    </div>
                    <div>✓ Chuyên cơ mặt đất bàn giao hỏa tốc 2 giờ</div>
                    <div>✓ 30 ngày trải nghiệm đổi trả hoàn tiền 100%</div>
                    <div>✓ Bảo hành VIP Premier tận nơi 2-3 năm</div>
                  </div>
                </div>

                {/* Customization Options */}
                <div className="md:col-span-7 space-y-6">
                  {/* CPU options */}
                  {selectedProduct.customizable.cpus && selectedProduct.customizable.cpus.length > 0 && (
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-[#636a7a] font-semibold">
                          1. Bộ vi xử lý (CPU &amp; NPU AI)
                        </label>
                      </div>
                      <div className="space-y-2">
                        {selectedProduct.customizable.cpus.map((cpu, index) => (
                          <div
                            key={cpu.name}
                            onClick={() => setSelectedCpu(index)}
                            className={`p-3 rounded border flex justify-between items-center cursor-pointer transition-all ${
                              selectedCpu === index
                                ? 'border-[#575e6d] bg-[#f1f3f7] font-medium shadow-xs'
                                : 'border-[#d8dce4] hover:border-[#8e95a5]'
                            }`}
                          >
                            <span className="text-[13px] text-[#1a1e26]">{cpu.name}</span>
                            <span className="text-xs text-[#575e6d] font-mono">
                              {cpu.addPrice === 0 ? 'Đã bao gồm' : `+${formatPrice(cpu.addPrice)}`}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* RAM options */}
                  {selectedProduct.customizable.rams && selectedProduct.customizable.rams.length > 0 && (
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-[#636a7a] font-semibold">
                          2. Bộ nhớ RAM LPDDR5X
                        </label>
                      </div>
                      <div className="space-y-2">
                        {selectedProduct.customizable.rams.map((ram, index) => (
                          <div
                            key={ram.name}
                            onClick={() => setSelectedRam(index)}
                            className={`p-3 rounded border flex justify-between items-center cursor-pointer transition-all ${
                              selectedRam === index
                                ? 'border-[#575e6d] bg-[#f1f3f7] font-medium shadow-xs'
                                : 'border-[#d8dce4] hover:border-[#8e95a5]'
                            }`}
                          >
                            <span className="text-[13px] text-[#1a1e26]">{ram.name}</span>
                            <span className="text-xs text-[#575e6d] font-mono">
                              {ram.addPrice === 0 ? 'Đã bao gồm' : `+${formatPrice(ram.addPrice)}`}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Storage SSD options */}
                  {selectedProduct.customizable.storages && selectedProduct.customizable.storages.length > 0 && (
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-[#636a7a] font-semibold">
                          3. Dung lượng lưu trữ PCIe 4.0 NVMe SSD
                        </label>
                      </div>
                      <div className="space-y-2">
                        {selectedProduct.customizable.storages.map((storage, index) => (
                          <div
                            key={storage.name}
                            onClick={() => setSelectedStorage(index)}
                            className={`p-3 rounded border flex justify-between items-center cursor-pointer transition-all ${
                              selectedStorage === index
                                ? 'border-[#575e6d] bg-[#f1f3f7] font-medium shadow-xs'
                                : 'border-[#d8dce4] hover:border-[#8e95a5]'
                            }`}
                          >
                            <span className="text-[13px] text-[#1a1e26]">{storage.name}</span>
                            <span className="text-xs text-[#575e6d] font-mono">
                              {storage.addPrice === 0 ? 'Đã bao gồm' : `+${formatPrice(storage.addPrice)}`}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Display options */}
                  {selectedProduct.customizable.displays && selectedProduct.customizable.displays.length > 0 && (
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-[#636a7a] font-semibold">
                          4. Màn hình OLED &amp; Chuẩn màu
                        </label>
                      </div>
                      <div className="space-y-2">
                        {selectedProduct.customizable.displays.map((disp, index) => (
                          <div
                            key={disp.name}
                            onClick={() => setSelectedDisplay(index)}
                            className={`p-3 rounded border flex justify-between items-center cursor-pointer transition-all ${
                              selectedDisplay === index
                                ? 'border-[#575e6d] bg-[#f1f3f7] font-medium shadow-xs'
                                : 'border-[#d8dce4] hover:border-[#8e95a5]'
                            }`}
                          >
                            <span className="text-[13px] text-[#1a1e26]">{disp.name}</span>
                            <span className="text-xs text-[#575e6d] font-mono">
                              {disp.addPrice === 0 ? 'Đã bao gồm' : `+${formatPrice(disp.addPrice)}`}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer Summary & Action */}
            <div className="p-4 sm:p-6 border-t border-[#d8dce4] bg-[#f8f9fc] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono text-[#858e9f] uppercase block">
                  Tổng giá trị cấu hình tùy biến
                </span>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#1a1e26]">
                  {formatPrice(totalPrice)}
                </div>
                <span className="text-xs text-[#575e6d]">
                  Hoặc trả góp 0% chỉ từ ~{formatPrice(Math.round(totalPrice / 24))}/tháng (kỳ hạn 24T)
                </span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="flex-1 sm:flex-none px-5 py-3 rounded border border-[#d8dce4] bg-white text-[#596273] hover:text-[#1a1e26] text-[13px] font-medium cursor-pointer"
                >
                  Hủy bỏ
                </button>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 sm:flex-none px-8 py-3 rounded bg-[#575e6d] hover:bg-[#2b3240] text-white text-[13px] font-semibold transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Thêm Vào Giỏ Hàng</span>
                  <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
