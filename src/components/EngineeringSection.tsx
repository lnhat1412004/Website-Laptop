import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { luxuryEase } from '../utils/motion';

export const EngineeringSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const pillarVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: luxuryEase,
      },
    },
  };

  return (
    <section className="py-16 sm:py-20 bg-[#f2f5f8] border-t border-[#d3d8e2] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: luxuryEase }}
          className="max-w-2xl mb-12"
        >
          <span className="text-[11px] text-[#636a7a] uppercase tracking-widest block mb-2 font-semibold font-sans">
            Đặc Quyền Kỹ Thuật
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1a1e26] font-semibold">
            Nghệ Thuật Chế Tác Vi Cơ Khí
          </h2>
        </motion.div>

        {/* Architectural Bento Grid: 3 Pillars Above */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
        >
          {/* Pillar 1 */}
          <motion.div
            variants={pillarVariants}
            whileHover={{ y: -4 }}
            className="luminous-card rounded p-7 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="w-10 h-10 rounded bg-[#f1f3f7] border border-[#d8dce4] flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#1a1e26]">architecture</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-[#1a1e26] font-medium mb-3">
                Gia Công CNC Nguyên Khối
              </h3>
              <p className="text-[14px] text-[#596273] font-light leading-relaxed">
                Mỗi khung vỏ máy đều được tiện gọt liên tục 18 giờ từ một khối phôi Titanium rắn chắc. Bề mặt được thổi hạt thủy tinh mịn màng và phủ lớp chống oxy hóa thụ động chuẩn hàng không.
              </p>
            </div>
            <button
              onClick={() => setActiveModal('cnc')}
              className="mt-6 text-xs text-[#575e6d] font-medium hover:text-[#1a1e26] flex items-center gap-1.5 pt-4 border-t border-[#e7eaf0] text-left cursor-pointer"
            >
              <span>Xem quy trình phay 5 trục</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </button>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            variants={pillarVariants}
            whileHover={{ y: -4 }}
            className="luminous-card rounded p-7 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="w-10 h-10 rounded bg-[#f1f3f7] border border-[#d8dce4] flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#1a1e26]">keyboard</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-[#1a1e26] font-medium mb-3">
                Bàn Phím Cơ Hành Trình Tinh Tế
              </h3>
              <p className="text-[14px] text-[#596273] font-light leading-relaxed">
                Switch cơ học siêu phẳng hành trình 1.5mm với đệm triệt tiêu âm học silicone. Cho cảm giác phản hồi xúc giác dứt khoát, chuẩn xác mà không tạo ra tiếng ồn khó chịu trong không gian yên tĩnh.
              </p>
            </div>
            <button
              onClick={() => setActiveModal('keyboard')}
              className="mt-6 text-xs text-[#575e6d] font-medium hover:text-[#1a1e26] flex items-center gap-1.5 pt-4 border-t border-[#e7eaf0] text-left cursor-pointer"
            >
              <span>Thử nghiệm âm học &lt; 28dB</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </button>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            variants={pillarVariants}
            whileHover={{ y: -4 }}
            className="luminous-card rounded p-7 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="w-10 h-10 rounded bg-[#f1f3f7] border border-[#d8dce4] flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#1a1e26]">fingerprint</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-[#1a1e26] font-medium mb-3">
                Bảo Mật Sinh Trắc Kép
              </h3>
              <p className="text-[14px] text-[#596273] font-light leading-relaxed">
                Cảm biến nhận diện khuôn mặt IR 3D chuẩn studio kết hợp cùng phím nguồn tích hợp quét vân tay điện dung dưới lớp kính Sapphire, mở khóa thiết bị chỉ trong 0.15 giây an toàn tuyệt đối.
              </p>
            </div>
            <button
              onClick={() => setActiveModal('security')}
              className="mt-6 text-xs text-[#575e6d] font-medium hover:text-[#1a1e26] flex items-center gap-1.5 pt-4 border-t border-[#e7eaf0] text-left cursor-pointer"
            >
              <span>Chứng chỉ mã hóa dTPM 2.0</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Macro Details Gallery Spanning Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: luxuryEase }}
            className="h-72 sm:h-80 rounded overflow-hidden border border-[#d8dce4] relative bg-[#f1f3f7] shadow-sm group"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB17yFikCG4dy5mzROmqhP1g29EpEgm1A36S64yy9XHxvbeHyCXR8whZ2QQvrzgm6j9LT9O3gZZmzmDet4Oqg9iFOOfkeho1QyTRQv4uUwv1DZengMsNra_Yk1qSfGCL9SrsNV4IbGP2ZCx74eVPU4MtBP52xNTVMrKHcyM85K6J2HcCrBupM8XLvBUXi0Ndw4bvZYNbe_Z2TlYWNaiGHoYTV9DEhn1Bn88nksHDvaqSpkp5354Hyw"
              alt="Cổng thoát khí siêu vi phay CNC chính xác"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#575e6d]/80 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-4 left-6">
              <p className="text-[12px] font-mono tracking-wider text-white uppercase font-medium">
                CỔNG THOÁT KHÍ SIÊU VI PHAY CNC CHÍNH XÁC
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: luxuryEase }}
            className="h-72 sm:h-80 rounded overflow-hidden border border-[#d8dce4] relative bg-[#f1f3f7] shadow-sm group"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbSyjmr72lpn8ccePCEM8ZXrdS4gMjaWsvTVHK-asS4XXeSMRGcMoGp9-nMOl422BloXYrMRLvdEQv-AjKZa23nlVHCPGekqn76ZrxLV2mQr5vT__YFH6IePlGe0nbe10wFOGomtaA5EM8WTxUudMyOt9ZemvXZsGPLDBqvecfXLvX3f9K0y3D8PbZvU4iwpcoxgjX1FXIK38optYJdC4boZW4i_G2ahnQo8Mw6oxeAQ-5hIWhBVE"
              alt="Mặt kính bàn rê chuẩn lực phản hồi xúc giác"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#575e6d]/80 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-4 left-6">
              <p className="text-[12px] font-mono tracking-wider text-white uppercase font-medium">
                MẶT KÍNH BÀN RÊ CHUẨN LỰC PHẢN HỒI XÚC GIÁC
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Engineering Info Modal */}
      <AnimatePresence>
        {activeModal && (
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
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-[#858e9f] hover:text-[#1a1e26] p-1 cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              {activeModal === 'cnc' && (
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#636a7a] tracking-wider block mb-2 font-semibold">
                    Tài Liệu Kỹ Thuật • Quy Trình Phay CNC 5 Trục
                  </span>
                  <h3 className="text-2xl font-serif font-semibold text-[#1a1e26] mb-3">
                    Tiện Gọt Titanium Grade 5
                  </h3>
                  <p className="text-[14px] text-[#596273] leading-relaxed mb-4 font-light">
                    Sử dụng mũi tiện kim cương đa tinh thể (PCD) với tốc độ quay 48.000 vòng/phút dưới dòng dung môi làm mát bốc hơi tức thì. Mọi chi tiết cổng kết nối, khe loa micro và buồng tản nhiệt đều được căn chỉnh bằng tia laser quang học sai số không vượt quá 0.005mm.
                  </p>
                  <div className="bg-[#f1f3f7] p-3 rounded text-xs space-y-1 font-mono text-[#596273]">
                    <div>• Dung sai cơ khí: ±0.005 mm</div>
                    <div>• Độ cứng vật liệu: 36 HRC (Titanium Grade 5)</div>
                    <div>• Lớp phủ thụ động: Anodized Oxide chống ăn mòn hóa học</div>
                  </div>
                </div>
              )}

              {activeModal === 'keyboard' && (
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#636a7a] tracking-wider block mb-2 font-semibold">
                    Báo Cáo Phòng Lab Âm Học
                  </span>
                  <h3 className="text-2xl font-serif font-semibold text-[#1a1e26] mb-3">
                    Triệt Tiêu Âm Học Tuyệt Đối
                  </h3>
                  <p className="text-[14px] text-[#596273] leading-relaxed mb-4 font-light">
                    Phòng đo tiêu chuẩn ISO 3745 tại Thụy Sĩ xác nhận tiếng gõ phím của bàn phím cơ hành trình thấp Aether đạt ngưỡng dưới 28 dBA — tương đương với tiếng thì thầm trong thư viện cách 3 mét.
                  </p>
                  <div className="bg-[#f1f3f7] p-3 rounded text-xs space-y-1 font-mono text-[#596273]">
                    <div>• Hành trình phím: 1.5 mm chuẩn công thái học</div>
                    <div>• Lực nhấn kích hoạt: 52 gf (Gram-Force) dứt khoát</div>
                    <div>• Tuổi thọ cơ học: 100.000.000 lần gõ độc lập</div>
                  </div>
                </div>
              )}

              {activeModal === 'security' && (
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#636a7a] tracking-wider block mb-2 font-semibold">
                    Kiến Trúc Bảo Mật Phần Cứng
                  </span>
                  <h3 className="text-2xl font-serif font-semibold text-[#1a1e26] mb-3">
                    Sinh Trắc Kép &amp; Chip Mã Hóa dTPM 2.0
                  </h3>
                  <p className="text-[14px] text-[#596273] leading-relaxed mb-4 font-light">
                    Cơ chế cô lập phần cứng chuyên biệt ngăn ngừa hoàn toàn các cuộc tấn công bộ nhớ đệm DMA. Dữ liệu khuôn mặt và vân tay được lưu trữ trong khoang bảo mật cách ly, không bao giờ gửi lên đám mây.
                  </p>
                  <div className="bg-[#f1f3f7] p-3 rounded text-xs space-y-1 font-mono text-[#596273]">
                    <div>• Tiêu chuẩn mã hóa: RSA-2048 &amp; ECC-256</div>
                    <div>• Thời gian mở khóa: 0.15 giây</div>
                    <div>• Tỷ lệ từ chối sai (FRR): &lt; 0.001%</div>
                  </div>
                </div>
              )}

              <button
                onClick={() => setActiveModal(null)}
                className="mt-6 w-full bg-[#575e6d] text-white py-2 rounded text-xs font-semibold hover:bg-[#2b3240] transition-colors cursor-pointer"
              >
                Đóng cửa sổ tài liệu
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
