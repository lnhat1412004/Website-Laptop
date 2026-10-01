import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../data/products';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('AETHER Flagship Hà Nội (15 Tràng Tiền, Q. Hoàn Kiếm)');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('10:00 - 11:30');
  const [model, setModel] = useState(PRODUCTS[1].name);
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [bookingPass, setBookingPass] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    const code = 'ATELIER-VIP-' + Math.floor(1000 + Math.random() * 9000);
    setBookingPass(code);
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
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
            className="relative z-10 bg-white rounded-lg max-w-lg w-full shadow-2xl border border-[#d8dce4] overflow-hidden my-auto"
          >
            <div className="p-4 sm:p-6 border-b border-[#d8dce4] flex items-center justify-between bg-[#f8f9fc]">
              <div>
                <span className="text-[11px] font-mono text-[#858e9f] uppercase tracking-wider block font-medium">
                  ĐẶC QUYỀN KHÁCH HÀNG VIP
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#1a1e26]">
                  Đặt Lịch Trải Nghiệm Atelier 1:1
                </h3>
              </div>
              <button
                onClick={onClose}
                className="text-[#858e9f] hover:text-[#1a1e26] p-1.5 rounded cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="p-6">
              {submitted ? (
                <div className="text-center space-y-4 py-4">
                  <div className="w-14 h-14 rounded-full bg-[#f1f3f7] mx-auto flex items-center justify-center text-[#575e6d] border border-[#8e95a5]">
                    <span className="material-symbols-outlined text-3xl">done_all</span>
                  </div>
                  <h4 className="text-xl font-serif font-semibold text-[#1a1e26]">
                    Đặt Lịch Thành Công!
                  </h4>
                  <p className="text-xs font-mono uppercase text-[#636a7a]">
                    Mã tiếp đón riêng: <span className="font-bold text-[#1a1e26]">{bookingPass}</span>
                  </p>
                  <div className="bg-[#f8f9fc] p-4 rounded text-left text-xs font-mono space-y-1.5 border border-[#d8dce4] text-[#596273]">
                    <div>• Khách quý: {name} ({phone})</div>
                    <div>• Địa điểm: {location}</div>
                    <div>• Khung giờ: {timeSlot} {date ? `(Ngày ${date})` : ''}</div>
                    <div>• Dòng máy quan tâm: {model}</div>
                  </div>
                  <p className="text-[13px] text-[#596273] font-light">
                    Chuyên viên tư vấn trưởng tại Atelier đã nhận thông tin và sẽ chuẩn bị sẵn mẫu máy cùng đồ uống theo chuẩn tiếp đón phòng trưng bày.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="w-full bg-[#575e6d] text-white py-2.5 rounded text-xs font-semibold hover:bg-[#2b3240] cursor-pointer"
                  >
                    Đóng
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-xs text-[#596273] font-light">
                    Quý khách sẽ được đón tiếp trong không gian lounge riêng biệt, trực tiếp trên tay các phiên bản laptop cao cấp cùng kỹ sư tư vấn cơ học.
                  </p>

                  <div>
                    <label className="block text-xs font-medium text-[#596273] mb-1">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Lê Minh Nhật"
                      className="w-full bg-[#f8f9fc] border border-[#d8dce4] rounded p-2.5 text-[13px] focus:outline-none focus:border-[#8e95a5]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-[#596273] mb-1">
                        Số điện thoại *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0901 234 567"
                        className="w-full bg-[#f8f9fc] border border-[#d8dce4] rounded p-2.5 text-[13px] focus:outline-none focus:border-[#8e95a5]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#596273] mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nhat@example.com"
                        className="w-full bg-[#f8f9fc] border border-[#d8dce4] rounded p-2.5 text-[13px] focus:outline-none focus:border-[#8e95a5]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#596273] mb-1">
                      Chọn Flagship tiếp đón
                    </label>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-[#f8f9fc] border border-[#d8dce4] rounded p-2.5 text-[13px] focus:outline-none focus:border-[#8e95a5]"
                    >
                      <option value="AETHER Flagship Hà Nội (15 Tràng Tiền, Q. Hoàn Kiếm)">
                        AETHER Flagship Hà Nội (15 Tràng Tiền, Q. Hoàn Kiếm)
                      </option>
                      <option value="AETHER Studio TP. Hồ Chí Minh (68 Nguyễn Huệ, Quận 1)">
                        AETHER Studio TP. Hồ Chí Minh (68 Nguyễn Huệ, Quận 1)
                      </option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-[#596273] mb-1">
                        Ngày hẹn
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-[#f8f9fc] border border-[#d8dce4] rounded p-2.5 text-[13px] focus:outline-none focus:border-[#8e95a5]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#596273] mb-1">
                        Khung giờ
                      </label>
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full bg-[#f8f9fc] border border-[#d8dce4] rounded p-2.5 text-[13px] focus:outline-none focus:border-[#8e95a5]"
                      >
                        <option value="09:30 - 11:00">09:30 - 11:00</option>
                        <option value="11:00 - 12:30">11:00 - 12:30</option>
                        <option value="14:00 - 15:30">14:00 - 15:30</option>
                        <option value="16:00 - 17:30">16:00 - 17:30</option>
                        <option value="19:00 - 20:30">19:00 - 20:30</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#596273] mb-1">
                      Mẫu máy muốn trải nghiệm
                    </label>
                    <select
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      className="w-full bg-[#f8f9fc] border border-[#d8dce4] rounded p-2.5 text-[13px] focus:outline-none focus:border-[#8e95a5]"
                    >
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.brand})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#596273] mb-1">
                      Ghi chú thêm
                    </label>
                    <input
                      type="text"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Yêu cầu đồ uống hoặc thử nghiệm phần mềm chuyên biệt..."
                      className="w-full bg-[#f8f9fc] border border-[#d8dce4] rounded p-2.5 text-[13px] focus:outline-none focus:border-[#8e95a5]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 bg-[#575e6d] hover:bg-[#2b3240] text-white py-3 rounded text-[13px] font-semibold transition-all shadow-sm cursor-pointer"
                  >
                    Xác Nhận Đặt Lịch Hẹn VIP
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
