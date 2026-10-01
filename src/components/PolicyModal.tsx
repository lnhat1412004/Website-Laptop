import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PolicyModalProps {
  title: string | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ title, onClose }) => {
  return (
    <AnimatePresence>
      {title && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
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
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 bg-white rounded-lg max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#d8dce4]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#858e9f] hover:text-[#1a1e26] p-1 cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <span className="text-[11px] font-mono uppercase text-[#636a7a] tracking-wider block mb-2 font-semibold">
              QUY CHUẨN DỊCH VỤ NHATLM
            </span>
            <h3 className="text-2xl font-serif font-semibold text-[#1a1e26] mb-4">
              {title}
            </h3>

            <div className="text-[13px] text-[#596273] space-y-3 font-light leading-relaxed max-h-80 overflow-y-auto pr-2">
              {title.includes('Bảo hành') && (
                <>
                  <p>
                    <strong>1. Cam kết chính hãng:</strong> Tất cả sản phẩm laptop mang thương hiệu Dell, HP, Lenovo, Asus tại NHATLM đều được nhập khẩu nguyên chiếc theo chuẩn nhà phân phối chính thức, nguyên seal kiểm định của hãng.
                  </p>
                  <p>
                    <strong>2. Thời hạn bảo hành:</strong> Từ 24 đến 36 tháng tùy phiên bản (HP VIP Premier, Lenovo Premier Support, Asus VIP Quốc tế, Dell ProSupport Plus).
                  </p>
                  <p>
                    <strong>3. Hỗ trợ tận nơi:</strong> Kỹ thuật viên sẽ trực tiếp đến địa chỉ của quý khách trong 24 giờ kể từ khi tiếp nhận thông báo trên toàn quốc.
                  </p>
                </>
              )}

              {title.includes('Chăm sóc') && (
                <>
                  <p>
                    <strong>1. Vệ sinh &amp; Tra keo tản nhiệt miễn phí trọn đời:</strong> Định kỳ 6 tháng một lần, quý khách có thể mang máy đến Atelier hoặc yêu cầu kỹ thuật viên đến tận nơi vệ sinh buồng hơi kim loại lỏng.
                  </p>
                  <p>
                    <strong>2. Hỗ trợ nâng cấp phần cứng:</strong> Miễn phí công lắp đặt khi nâng cấp SSD hoặc phụ kiện bổ sung.
                  </p>
                </>
              )}

              {title.includes('VIP') && (
                <>
                  <p>
                    <strong>1. Tổng đài riêng:</strong> Khách hàng sở hữu thiết bị NHATLM được cấp mã VIP Pass để kết nối trực tiếp với chuyên gia kỹ thuật cấp cao qua hotline 1800 6886 mà không cần qua tổng đài tự động.
                  </p>
                  <p>
                    <strong>2. Cung cấp máy dự phòng:</strong> Trong trường hợp máy cần kiểm tra chuyên sâu, chúng tôi sẽ lập tức bàn giao một máy cấu hình tương đương để công việc của quý khách không bao giờ gián đoạn.
                  </p>
                </>
              )}

              {title.includes('Bảo mật') && (
                <>
                  <p>
                    <strong>1. Bảo vệ dữ liệu cá nhân:</strong> Chúng tôi cam kết tuyệt đối không lưu trữ, khai thác hay chuyển giao thông tin mua hàng hoặc dữ liệu máy tính của quý khách cho bất kỳ bên thứ ba nào.
                  </p>
                  <p>
                    <strong>2. Bảo mật khi bảo hành:</strong> Quý khách có quyền tháo rời ổ cứng lưu trữ cá nhân trước khi bàn giao máy cho kỹ thuật viên bảo trì phần cứng.
                  </p>
                </>
              )}

              {title.includes('Điều khoản') && (
                <>
                  <p>
                    <strong>1. Phạm vi áp dụng:</strong> Các điều khoản dịch vụ áp dụng cho tất cả khách hàng giao dịch trực tuyến tại website hoặc trực tiếp tại hệ thống Flagship &amp; Atelier NHATLM.
                  </p>
                  <p>
                    <strong>2. Quyền đổi trả 30 ngày:</strong> Áp dụng cho thiết bị giữ nguyên vẹn hình thức và phụ kiện ban đầu.
                  </p>
                </>
              )}
            </div>

            <button
              onClick={onClose}
              className="mt-6 w-full bg-[#575e6d] text-white py-2.5 rounded text-xs font-semibold hover:bg-[#2b3240] transition-colors cursor-pointer"
            >
              Đã hiểu và đồng ý
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
