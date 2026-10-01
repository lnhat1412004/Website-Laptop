import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { luxuryEase } from '../utils/motion';

export const ValueGuarantees: React.FC = () => {
  const [selectedGuarantee, setSelectedGuarantee] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: luxuryEase,
      },
    },
  };

  return (
    <section className="border-y border-[#d3d8e2] bg-[#f4f6f9] py-8 sm:py-10 shadow-xs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#d8dce4]"
        >
          {/* Feature 1 */}
          <motion.div
            variants={itemVariants}
            onClick={() => setSelectedGuarantee('concierge')}
            className="px-4 sm:px-6 py-4 flex items-start gap-4 cursor-pointer group hover:bg-white/50 rounded transition-colors"
          >
            <div className="w-12 h-12 rounded bg-white border border-[#d8dce4] flex-shrink-0 flex items-center justify-center group-hover:border-[#8e95a5] shadow-xs">
              <span className="material-symbols-outlined text-[#636a7a] text-2xl group-hover:scale-110 transition-transform">
                bolt
              </span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-serif text-[#1a1e26] font-medium mb-1 group-hover:text-[#575e6d] transition-colors">
                Giao Hỏa Tốc 2 Giờ
              </h3>
              <p className="text-[13px] text-[#596273] font-light leading-relaxed mb-2">
                Giao hàng bảo an nguyên seal bằng chuyên cơ mặt đất tại nội thành Hà Nội &amp; TP. Hồ Chí Minh. Chuyên viên mở hộp và hướng dẫn cài đặt riêng.
              </p>
              <span className="text-[11px] text-[#636a7a] font-semibold tracking-wider uppercase block font-sans">
                Dịch vụ Aether Concierge →
              </span>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            variants={itemVariants}
            onClick={() => setSelectedGuarantee('trial')}
            className="px-4 sm:px-6 py-4 flex items-start gap-4 cursor-pointer group hover:bg-white/50 rounded transition-colors"
          >
            <div className="w-12 h-12 rounded bg-white border border-[#d8dce4] flex-shrink-0 flex items-center justify-center group-hover:border-[#8e95a5] shadow-xs">
              <span className="material-symbols-outlined text-[#636a7a] text-2xl group-hover:scale-110 transition-transform">
                sync
              </span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-serif text-[#1a1e26] font-medium mb-1 group-hover:text-[#575e6d] transition-colors">
                30 Ngày Dùng Thử Hoàn Toàn
              </h3>
              <p className="text-[13px] text-[#596273] font-light leading-relaxed mb-2">
                Trải nghiệm thực tế máy trong không gian làm việc của bạn. Hỗ trợ hoàn tiền 100% hoặc đổi phiên bản cấu hình khác mà không tính phí khấu hao.
              </p>
              <span className="text-[11px] text-[#636a7a] font-semibold tracking-wider uppercase block font-sans">
                Cam kết không rủi ro →
              </span>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            variants={itemVariants}
            onClick={() => setSelectedGuarantee('installment')}
            className="px-4 sm:px-6 py-4 flex items-start gap-4 cursor-pointer group hover:bg-white/50 rounded transition-colors"
          >
            <div className="w-12 h-12 rounded bg-white border border-[#d8dce4] flex-shrink-0 flex items-center justify-center group-hover:border-[#8e95a5] shadow-xs">
              <span className="material-symbols-outlined text-[#636a7a] text-2xl group-hover:scale-110 transition-transform">
                credit_card
              </span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-serif text-[#1a1e26] font-medium mb-1 group-hover:text-[#575e6d] transition-colors">
                Trả Góp 0% Tối Giản
              </h3>
              <p className="text-[13px] text-[#596273] font-light leading-relaxed mb-2">
                Kỳ hạn thanh toán linh hoạt 6 - 12 - 24 tháng qua thẻ tín dụng quốc tế hoặc đối tác tài chính công nghệ cao. Phê duyệt hồ sơ trực tuyến trong 3 phút.
              </p>
              <span className="text-[11px] text-[#636a7a] font-semibold tracking-wider uppercase block font-sans">
                Thủ tục bảo mật 100% →
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Guarantee Details Modal */}
      <AnimatePresence>
        {selectedGuarantee && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-lg max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#d8dce4] relative"
            >
              <button
                onClick={() => setSelectedGuarantee(null)}
                className="absolute top-4 right-4 text-[#858e9f] hover:text-[#1a1e26] p-1 cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              {selectedGuarantee === 'concierge' && (
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#636a7a] tracking-wider block mb-2 font-semibold">
                    Aether Concierge Service
                  </span>
                  <h3 className="text-2xl font-serif font-semibold text-[#1a1e26] mb-3">
                    Đặc Quyền Giao Hỏa Tốc 2 Giờ
                  </h3>
                  <p className="text-[14px] text-[#596273] leading-relaxed mb-4 font-light">
                    Đơn hàng của bạn sẽ được bàn giao trực tiếp bằng xe riêng chuyên dụng có kiểm soát nhiệt độ và chống sốc khí nén. Chuyên viên kỹ thuật mang găng tay trắng sẽ hỗ trợ mở seal, chuyển giao dữ liệu từ máy cũ và kích hoạt gói bảo hành VIP.
                  </p>
                  <div className="bg-[#f1f3f7] p-3 rounded text-xs space-y-1 font-mono text-[#596273]">
                    <div>• Khu vực áp dụng: Tất cả các quận nội thành Hà Nội &amp; TP.HCM</div>
                    <div>• Thời gian cam kết: Trong vòng 120 phút kể từ lúc xác nhận đơn</div>
                    <div>• Chi phí: Hoàn toàn miễn phí cho tất cả dòng máy Flagship</div>
                  </div>
                </div>
              )}

              {selectedGuarantee === 'trial' && (
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#636a7a] tracking-wider block mb-2 font-semibold">
                    Chính Sách Dùng Thử 30 Ngày
                  </span>
                  <h3 className="text-2xl font-serif font-semibold text-[#1a1e26] mb-3">
                    Trải Nghiệm Thực Tế Tuyệt Đối An Tâm
                  </h3>
                  <p className="text-[14px] text-[#596273] leading-relaxed mb-4 font-light">
                    Nếu bạn cảm thấy trọng lượng, bàn phím, hay màn hình chưa hoàn toàn đồng điệu với phong cách làm việc của mình trong vòng 30 ngày, NHATLM sẽ hoàn tiền 100% hoặc đổi sang phiên bản khác ngay lập tức.
                  </p>
                  <div className="bg-[#f1f3f7] p-3 rounded text-xs space-y-1 font-mono text-[#596273]">
                    <div>• Điều kiện: Giữ nguyên hộp phụ kiện và không biến dạng vật lý do tai nạn</div>
                    <div>• Quy trình hoàn tiền: Chuyển khoản trong 24 giờ sau khi kiểm tra máy</div>
                    <div>• Miễn phí hoàn toàn phí hoàn trả</div>
                  </div>
                </div>
              )}

              {selectedGuarantee === 'installment' && (
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#636a7a] tracking-wider block mb-2 font-semibold">
                    Chương Trình Tài Chính Đặc Quyền
                  </span>
                  <h3 className="text-2xl font-serif font-semibold text-[#1a1e26] mb-3">
                    Trả Góp 0% Lãi Suất Minh Bạch
                  </h3>
                  <p className="text-[14px] text-[#596273] leading-relaxed mb-4 font-light">
                    Liên kết với hơn 26 ngân hàng lớn tại Việt Nam (Vietcombank, Techcombank, VPBank, HSBC, Standard Chartered...). Bạn có thể chọn kỳ hạn 6, 12, hoặc 24 tháng mà không phát sinh bất kỳ khoản lãi suất hay phí ẩn nào.
                  </p>
                  <div className="bg-[#f1f3f7] p-3 rounded text-xs space-y-1 font-mono text-[#596273]">
                    <div>• Không thế chấp, không chứng minh thu nhập phức tạp</div>
                    <div>• Phê duyệt trực tuyến qua OTP trong 3 phút</div>
                    <div>• Giữ nguyên mọi quyền lợi bảo hành và quà tặng cao cấp</div>
                  </div>
                </div>
              )}

              <button
                onClick={() => setSelectedGuarantee(null)}
                className="mt-6 w-full bg-[#575e6d] text-white py-2 rounded text-xs font-semibold hover:bg-[#2b3240] transition-colors cursor-pointer"
              >
                Đã hiểu
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
