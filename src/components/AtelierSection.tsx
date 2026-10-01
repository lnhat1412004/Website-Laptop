import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AtelierSectionProps {
  onOpenAppointment: () => void;
}

export const AtelierSection: React.FC<AtelierSectionProps> = ({ onOpenAppointment }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [invitationCode, setInvitationCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const randomCode = 'AETHER-VIP-' + Math.floor(100000 + Math.random() * 900000);
    setInvitationCode(randomCode);
    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#eceff4] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="border border-[#d8dce4] rounded-lg bg-white shadow-sm overflow-hidden p-6 sm:p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Atelier Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <span className="text-[11px] text-[#636a7a] uppercase tracking-widest block mb-2 font-semibold font-sans">
                Không Gian Trải Nghiệm
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1a1e26] font-semibold mb-4">
                Hệ Thống Atelier &amp; Flagship
              </h2>
              <p className="text-[15px] text-[#596273] font-light mb-8 leading-relaxed">
                Kính mời quý khách trực tiếp cầm nắm, trải nghiệm độ hoàn thiện của từng khớp bản lề Titanium và cảm nhận hệ sinh thái Nhatlm tại không gian kiến trúc tối giản.
              </p>

              <div className="space-y-6 mb-8">
                <div className="border-l-2 border-[#575e6d] pl-4">
                  <h4 className="text-lg text-[#1a1e26] font-serif font-medium">
                    NhatLM Flagship Hà Nội
                  </h4>
                  <p className="text-[13px] text-[#596273]">
                    Đ. Nguyễn Khang/447 P. Yên Hòa, Cầu Giấy, Hà Nội 100000
                  </p>
                  <span className="text-[12px] text-[#858e9f] font-mono block mt-1">
                    Giờ mở cửa: 08:00 - 17:30 • Hotline: 0777 6362 97
                  </span>
                </div>

                <div className="border-l-2 border-[#d8dce4] pl-4">
                  <h4 className="text-lg text-[#1a1e26] font-serif font-medium">
                    NhatLM Studio TP. Hồ Chí Minh
                  </h4>
                  <p className="text-[13px] text-[#596273]">
                    28 Nguyễn Văn Vĩnh, Phường Tân Sơn Nhất, Quận Tân Bình
                  </p>
                  <span className="text-[12px] text-[#858e9f] font-mono block mt-1">
                    Giờ mở cửa: 08:00 - 17:30 • Hotline: 0777 6362 97
                  </span>
                </div>
              </div>

              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center gap-2 bg-[#f1f3f7] hover:bg-[#575e6d] hover:text-white text-[#1a1e26] border border-[#d8dce4] px-6 py-2.5 rounded text-[13px] font-medium transition-all cursor-pointer shadow-xs active:scale-98"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                <span>Đặt lịch hẹn trải nghiệm tư vấn 1:1 riêng tư</span>
              </button>
            </motion.div>

            {/* Exclusive Member Sign Up Card Inside Frame */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="lg:col-span-6 bg-[#f1f3f7] border border-[#d8dce4] rounded p-6 sm:p-8"
            >
              <span className="text-[11px] text-[#636a7a] uppercase tracking-wider block mb-2 font-semibold font-sans">
                Đặc Quyền Hội Viên
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-[#1a1e26] font-semibold mb-3">
                Nhận Bản Tin Kỹ Nghệ &amp; Lời Mời Sự Kiện
              </h3>
              <p className="text-[13px] text-[#596273] font-light mb-6 leading-relaxed">
                Đăng ký để là người đầu tiên nhận thông tin về các lô xuất xưởng giới hạn cùng tài liệu kỹ thuật chuyên sâu từ đội ngũ thiết kế NhatLM.
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-white border border-[#8e95a5] rounded p-4 text-center space-y-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#e9ecf2] mx-auto flex items-center justify-center text-[#575e6d]">
                      <span className="material-symbols-outlined">verified</span>
                    </div>
                    <h4 className="text-base font-serif font-semibold text-[#1a1e26]">
                      Chào mừng bạn đến với NhatLM!
                    </h4>
                    <p className="text-xs text-[#596273]">
                      Mã lời mời hội viên VIP đặc quyền của bạn:
                    </p>
                    <div className="font-mono font-bold text-sm tracking-wider text-[#575e6d] bg-[#f1f3f7] py-1.5 px-3 rounded inline-block">
                      {invitationCode}
                    </div>
                    <p className="text-[11px] text-[#858e9f]">
                      Thư xác nhận điện tử đã được gửi đến <span className="font-medium text-[#1a1e26]">{email}</span>.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Địa chỉ email doanh nghiệp hoặc cá nhân"
                        required
                        className="w-full bg-white border border-[#d8dce4] focus:border-[#8e95a5] text-[#1a1e26] placeholder:text-[#858e9f] px-4 py-3 rounded text-[13px] focus:outline-none transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#575e6d] text-white text-[13px] font-semibold py-3 rounded hover:bg-[#2b3240] transition-all shadow-sm cursor-pointer"
                    >
                      Đăng Ký Nhận Thông Tin Đặc Quyền
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

              <p className="text-[11px] text-[#858e9f] font-mono mt-4">
                Bảo mật tuyệt đối. Chúng tôi không bao giờ chia sẻ thông tin của bạn với bên thứ ba.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
