import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'concierge' | 'atelier'>('concierge');
  const [paymentMethod, setPaymentMethod] = useState<'transfer' | 'credit' | 'installment'>('transfer');

  // Checkout modal state
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState<string | null>(null);

  // Form fields
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerNote, setCustomerNote] = useState('');

  const rawSubtotal = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const finalTotal = Math.max(0, rawSubtotal - discount);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + '₫';
  };

  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === 'TITANIUM2025') {
      setDiscount(2000000);
      setPromoMessage('Đã áp dụng mã TITANIUM2025: Giảm 2.000.000₫');
    } else if (code === 'VIPMEMBER') {
      setDiscount(1500000);
      setPromoMessage('Đã áp dụng mã VIPMEMBER: Giảm 1.500.000₫');
    } else {
      setPromoMessage('Mã ưu đãi không hợp lệ.');
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;
    const orderId = 'AETHER-ORD-' + Math.floor(100000 + Math.random() * 900000);
    setOrderComplete(orderId);
    onClearCart();
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
                <span className="material-symbols-outlined text-[#575e6d]">shopping_bag</span>
                <h2 className="text-xl font-serif font-semibold text-[#1a1e26]">
                  Giỏ Hàng &amp; Đặt Hàng ({items.reduce((sum, i) => sum + i.quantity, 0)})
                </h2>
              </div>
              <button
                onClick={onClose}
                className="text-[#858e9f] hover:text-[#1a1e26] p-1.5 rounded hover:bg-white transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {orderComplete ? (
              /* Order Confirmation View */
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-1 overflow-y-auto p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#f1f3f7] flex items-center justify-center text-[#575e6d] border border-[#8e95a5]">
                  <span className="material-symbols-outlined text-3xl">verified</span>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[#1a1e26]">
                  Đơn Hàng Đã Được Tiếp Nhận!
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-[#636a7a]">
                  Mã đơn hàng: <span className="font-bold text-[#1a1e26]">{orderComplete}</span>
                </p>
                <p className="text-[13px] text-[#596273] font-light leading-relaxed max-w-sm">
                  Cảm ơn quý khách <span className="font-medium text-[#1a1e26]">{customerName}</span>. Chuyên viên NhatLM Concierge sẽ gọi điện thoại xác nhận trong vòng 10 phút để sắp xếp bàn giao bảo an hỏa tốc 2 giờ.
                </p>
                <div className="bg-[#f8f9fc] p-4 rounded border border-[#d8dce4] w-full text-left text-xs font-mono space-y-1 text-[#596273]">
                  <div>• Người nhận: {customerName} ({customerPhone})</div>
                  <div>• Địa chỉ: {customerAddress || 'Nhận tại Flagship'}</div>
                  <div>• Phương thức: {deliveryMethod === 'concierge' ? 'Giao hỏa tốc 2h Concierge' : 'Nhận tại Atelier'}</div>
                  <div>• Thanh toán: {paymentMethod === 'transfer' ? 'Chuyển khoản đặc quyền' : paymentMethod === 'credit' ? 'Thẻ quốc tế' : 'Trả góp 0%'}</div>
                </div>
                <button
                  onClick={() => {
                    setOrderComplete(null);
                    setIsCheckingOut(false);
                    onClose();
                  }}
                  className="w-full bg-[#575e6d] text-white py-3 rounded text-[13px] font-semibold hover:bg-[#2b3240] transition-colors cursor-pointer"
                >
                  Tiếp tục khám phá sản phẩm
                </button>
              </motion.div>
            ) : isCheckingOut ? (
              /* Checkout Step Form */
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-[#636a7a] font-semibold">
                    Thông tin bàn giao đơn hàng
                  </span>
                  <button
                    onClick={() => setIsCheckingOut(false)}
                    className="text-xs text-[#575e6d] hover:underline cursor-pointer"
                  >
                    ← Quay lại giỏ hàng
                  </button>
                </div>

                <form onSubmit={handlePlaceOrder} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-[#596273] mb-1">
                      Họ và tên quý khách *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Ví dụ: Lê Minh Nhật"
                      className="w-full bg-[#f8f9fc] border border-[#d8dce4] rounded p-2.5 text-[13px] focus:outline-none focus:border-[#8e95a5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#596273] mb-1">
                      Số điện thoại liên hệ *
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="Ví dụ: 0988 123 456"
                      className="w-full bg-[#f8f9fc] border border-[#d8dce4] rounded p-2.5 text-[13px] focus:outline-none focus:border-[#8e95a5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#596273] mb-1">
                      Hình thức nhận hàng
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <button
                        type="button"
                        onClick={() => setDeliveryMethod('concierge')}
                        className={`p-2.5 rounded border text-left cursor-pointer transition-all ${
                          deliveryMethod === 'concierge'
                            ? 'border-[#575e6d] bg-[#f1f3f7] font-semibold'
                            : 'border-[#d8dce4] bg-white'
                        }`}
                      >
                        <div className="text-[#1a1e26]">Giao Hỏa Tốc 2 Giờ</div>
                        <div className="text-[11px] text-[#858e9f]">Chuyên cơ mặt đất</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeliveryMethod('atelier')}
                        className={`p-2.5 rounded border text-left cursor-pointer transition-all ${
                          deliveryMethod === 'atelier'
                            ? 'border-[#575e6d] bg-[#f1f3f7] font-semibold'
                            : 'border-[#d8dce4] bg-white'
                        }`}
                      >
                        <div className="text-[#1a1e26]">Nhận tại Atelier</div>
                        <div className="text-[11px] text-[#858e9f]">Hà Nội / TP.HCM</div>
                      </button>
                    </div>
                  </div>

                  {deliveryMethod === 'concierge' && (
                    <div>
                      <label className="block text-xs font-medium text-[#596273] mb-1">
                        Địa chỉ nhận hàng (Nội thành Hà Nội hoặc TP.HCM) *
                      </label>
                      <textarea
                        required
                        rows={2}
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        placeholder="Số nhà, tên đường, phường, quận..."
                        className="w-full bg-[#f8f9fc] border border-[#d8dce4] rounded p-2.5 text-[13px] focus:outline-none focus:border-[#8e95a5]"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-[#596273] mb-1">
                      Phương thức thanh toán
                    </label>
                    <div className="space-y-2 text-xs">
                      <div
                        onClick={() => setPaymentMethod('transfer')}
                        className={`p-3 rounded border flex items-center justify-between cursor-pointer ${
                          paymentMethod === 'transfer'
                            ? 'border-[#575e6d] bg-[#f1f3f7] font-medium'
                            : 'border-[#d8dce4]'
                        }`}
                      >
                        <span>Chuyển khoản đặc quyền (Chiết khấu thêm 1%)</span>
                        <span className="material-symbols-outlined text-sm">account_balance</span>
                      </div>
                      <div
                        onClick={() => setPaymentMethod('credit')}
                        className={`p-3 rounded border flex items-center justify-between cursor-pointer ${
                          paymentMethod === 'credit'
                            ? 'border-[#575e6d] bg-[#f1f3f7] font-medium'
                            : 'border-[#d8dce4]'
                        }`}
                      >
                        <span>Thẻ Visa / MasterCard / Amex</span>
                        <span className="material-symbols-outlined text-sm">credit_card</span>
                      </div>
                      <div
                        onClick={() => setPaymentMethod('installment')}
                        className={`p-3 rounded border flex items-center justify-between cursor-pointer ${
                          paymentMethod === 'installment'
                            ? 'border-[#575e6d] bg-[#f1f3f7] font-medium'
                            : 'border-[#d8dce4]'
                        }`}
                      >
                        <span>Trả góp 0% lãi suất (6 / 12 / 24 tháng)</span>
                        <span className="material-symbols-outlined text-sm">payments</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#596273] mb-1">
                      Yêu cầu kỹ thuật riêng (tùy chọn)
                    </label>
                    <input
                      type="text"
                      value={customerNote}
                      onChange={(e) => setCustomerNote(e.target.value)}
                      placeholder="Ví dụ: Cài đặt hệ điều hành tiếng Anh, khắc tên laser..."
                      className="w-full bg-[#f8f9fc] border border-[#d8dce4] rounded p-2.5 text-[13px] focus:outline-none focus:border-[#8e95a5]"
                    />
                  </div>

                  <div className="pt-4 border-t border-[#d8dce4]">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#596273]">Thành tiền thanh toán:</span>
                      <span className="text-xl font-serif font-bold text-[#1a1e26]">
                        {formatPrice(finalTotal)}
                      </span>
                    </div>
                    <button
                      type="submit"
                      className="w-full mt-4 bg-[#575e6d] hover:bg-[#2b3240] text-white py-3 rounded text-[13px] font-semibold transition-all shadow-sm cursor-pointer"
                    >
                      Xác Nhận Đặt Hàng Bảo An
                    </button>
                  </div>
                </form>
              </motion.div>
            ) : (
              /* Normal Cart List View */
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col justify-between">
                {items.length === 0 ? (
                  <div className="my-auto text-center py-16 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#f1f3f7] mx-auto flex items-center justify-center text-[#858e9f]">
                      <span className="material-symbols-outlined text-2xl">shopping_bag</span>
                    </div>
                    <h3 className="text-lg font-serif font-medium text-[#1a1e26]">
                      Giỏ hàng của bạn đang trống
                    </h3>
                    <p className="text-xs text-[#596273] max-w-xs mx-auto">
                      Hãy khám phá các tuyệt tác kỹ nghệ laptop đỉnh cao và tùy biến cấu hình theo nhu cầu của bạn.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="p-4 rounded border border-[#d8dce4] bg-[#f8f9fc] flex gap-3 relative"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded border border-[#d8dce4] shrink-0"
                        />
                        <div className="flex-1 min-w-0 pr-6">
                          <h4 className="text-[14px] font-medium text-[#1a1e26] truncate">
                            {item.name}
                          </h4>
                          <div className="text-[11px] text-[#596273] space-y-0.5 mt-1 font-mono">
                            <div>Màu: {item.finish}</div>
                            <div className="truncate">CPU: {item.cpu}</div>
                            <div>RAM/SSD: {item.ram} / {item.storage}</div>
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <span className="text-sm font-serif font-semibold text-[#1a1e26]">
                              {formatPrice(item.unitPrice)}
                            </span>
                            <div className="flex items-center gap-2 border border-[#d8dce4] rounded bg-white px-2 py-0.5">
                              <button
                                onClick={() => onUpdateQuantity(item.id, -1)}
                                className="text-xs text-[#596273] hover:text-[#1a1e26] cursor-pointer"
                              >
                                -
                              </button>
                              <span className="text-xs font-mono font-medium px-1">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, 1)}
                                className="text-xs text-[#596273] hover:text-[#1a1e26] cursor-pointer"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="absolute top-3 right-3 text-[#858e9f] hover:text-[#ba1a1a] cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    ))}

                    {/* Promo Code Box */}
                    <div className="pt-2">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          placeholder="Mã ưu đãi (thử TITANIUM2025)"
                          className="flex-1 bg-[#f8f9fc] border border-[#d8dce4] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#8e95a5]"
                        />
                        <button
                          onClick={handleApplyPromo}
                          className="px-4 py-2 bg-[#575e6d] hover:bg-[#2b3240] text-white rounded text-xs font-medium cursor-pointer"
                        >
                          Áp dụng
                        </button>
                      </div>
                      {promoMessage && (
                        <p className="text-[11px] text-[#575e6d] mt-1 font-mono">{promoMessage}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Cart Footer */}
                {items.length > 0 && (
                  <div className="pt-4 border-t border-[#d8dce4] mt-6 space-y-3">
                    <div className="space-y-1.5 text-xs text-[#596273]">
                      <div className="flex justify-between">
                        <span>Tổng tiền tạm tính:</span>
                        <span className="font-mono text-[#1a1e26]">{formatPrice(rawSubtotal)}</span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-[#ba1a1a]">
                          <span>Ưu đãi đặc quyền:</span>
                          <span className="font-mono">-{formatPrice(discount)}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Phí vận chuyển bảo an:</span>
                        <span className="font-mono text-[#1a1e26]">MIỄN PHÍ</span>
                      </div>
                      <div className="flex justify-between text-sm font-semibold text-[#1a1e26] pt-2 border-t border-[#e7eaf0]">
                        <span>Tổng thanh toán:</span>
                        <span className="text-xl font-serif text-[#1a1e26]">{formatPrice(finalTotal)}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsCheckingOut(true)}
                      className="w-full bg-[#575e6d] hover:bg-[#2b3240] text-white py-3 rounded text-[13px] font-semibold transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Tiến Hành Đặt Hàng Bảo An</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
