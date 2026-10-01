import React from 'react';
import { motion, Variants } from 'framer-motion';
import { luxuryEase } from '../utils/motion';

interface HeroProps {
  onExplore: () => void;
  onOpenConfigurator: () => void;
  onSelectDellXPS: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExplore,
  onOpenConfigurator,
  onSelectDellXPS,
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: luxuryEase,
      },
    },
  };

  return (
    <section className="relative pt-24 sm:pt-28 pb-16 overflow-hidden light-titanium-gradient border-b border-[#d3d8e2]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header Banner & Action Bar */}
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto pt-4 mb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/80 border border-[#d8dce4] shadow-sm mb-5 backdrop-blur-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#8e95a5] animate-pulse"></span>
            <span className="text-[11px] text-[#596273] font-semibold tracking-wider uppercase font-sans">
                • CHÀO MỪNG BẠN ĐẾN VỚI THẾ GIỚI CÔNG NGHỆ NHATLM •
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl text-[#1a1e26] font-serif tracking-tight font-semibold mb-5 leading-[1.15]"
          >
            Tinh hoa công nghệ, chuẩn mực khác biệt
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-[#596273] max-w-2xl mb-8 leading-relaxed font-light"
          >
            Từ những chiếc Laptop cao cấp đến hệ thống PC hiệu năng mạnh mẽ, mỗi sản phẩm đều được lựa chọn với tiêu chuẩn khắt khe về thiết kế, hiệu năng và độ tin cậy.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={onExplore}
              className="bg-[#575e6d] text-white px-8 py-3.5 rounded text-[15px] font-semibold tracking-wide hover:bg-[#2b3240] transition-all shadow-sm active:scale-[0.98] cursor-pointer"
            >
              Khám phá ngay
            </button>
            <button
              onClick={onOpenConfigurator}
              className="bg-white border border-[#d8dce4] hover:border-[#8e95a5] text-[#1a1e26] px-8 py-3.5 rounded text-[15px] font-medium inline-flex items-center gap-2 hover:bg-[#f1f3f7] transition-all shadow-sm active:scale-[0.98] cursor-pointer"
            >
              <span>Tùy biến cấu hình</span>
              <span className="material-symbols-outlined text-[#636a7a]">tune</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Integrated Hero Hardware Showcase Frame with Docked Floating Specs Console */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: luxuryEase }}
          className="w-full relative rounded-lg border border-[#d8dce4] overflow-hidden bg-white shadow-sm group"
        >
          <div className="relative w-full aspect-[21/9] min-h-[380px] max-h-[560px] bg-[#15181e] overflow-hidden flex items-center justify-center">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKrjViwTHuU_nQpWaYL1gYh6eIoiyAhmWxXe9DXXiJT_u49cI7zMc2d0NRQTdhr8JeNN_kduwwsXjAETHkTdphVU4M_JYH8Q1dVn1rGA3rtMnSignYyf_BgcIFui22ruBqR9Bbur1mteoCOUKFJFrRcTFPj2omPGiXsSH9nG33oVvIhv7OJR8O8Dcj3COI0KIN9N9w59LHsc0_XwUTKETkGbokOOaHiqfX4V3spBreZd0aoDrZnoA"
              alt="Dell XPS 16 Titanium siêu mỏng 11.2mm"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.015]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#15181e]/85 via-[#15181e]/25 to-transparent pointer-events-none"></div>

            <div className="absolute bottom-6 left-6 sm:left-8 text-left z-10 flex flex-col sm:flex-row sm:items-end justify-between right-6 sm:right-8">
              <div>
                <span className="text-[11px] font-sans font-semibold text-[#e9ecf2] tracking-widest uppercase block mb-1">
                  Thiết kế nguyên khối
                </span>
                <p className="text-xl sm:text-2xl lg:text-3xl text-white font-serif font-medium">
                  Dell XPS 16 Titanium — 11.2mm
                </p>
              </div>

              <button
                onClick={onSelectDellXPS}
                className="mt-3 sm:mt-0 inline-flex items-center gap-2 bg-white/20 hover:bg-white/35 backdrop-blur-md text-white border border-white/30 text-xs px-4 py-2 rounded font-medium transition-all"
              >
                <span>Xem chi tiết flagship</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Docked Dashboard Metrics Console */}
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#d8dce4] bg-white py-6 px-4 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="px-4 py-3 sm:py-2"
            >
              <span className="text-[12px] text-[#636a7a] uppercase block mb-1 tracking-wider font-mono font-medium">
                Vật liệu khung vỏ
              </span>
              <div className="text-2xl sm:text-3xl font-serif text-[#1a1e26] font-semibold mb-1">
                1.1 <span className="text-base font-light text-[#596273] font-sans">kg</span>
              </div>
              <p className="text-[13px] text-[#596273] font-light leading-relaxed">
                Titanium Grade 5 siêu nhẹ, gia công CNC sai số dưới 0.01mm.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="px-4 py-3 sm:py-2"
            >
              <span className="text-[12px] text-[#636a7a] uppercase block mb-1 tracking-wider font-mono font-medium">
                Hiệu suất pin
              </span>
              <div className="text-2xl sm:text-3xl font-serif text-[#1a1e26] font-semibold mb-1">
                22 <span className="text-base font-light text-[#596273] font-sans">giờ</span>
              </div>
              <p className="text-[13px] text-[#596273] font-light leading-relaxed">
                Lõi pin Silicon-Carbon mật độ cao, sạc nhanh 80% trong 35 phút.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="px-4 py-3 sm:py-2"
            >
              <span className="text-[12px] text-[#636a7a] uppercase block mb-1 tracking-wider font-mono font-medium">
                Chuẩn hiển thị
              </span>
              <div className="text-2xl sm:text-3xl font-serif text-[#1a1e26] font-semibold mb-1">
                3.2K <span className="text-base font-light text-[#596273] font-sans">120Hz</span>
              </div>
              <p className="text-[13px] text-[#596273] font-light leading-relaxed">
                OLED PureBlack, 100% DCI-P3 chuẩn màu quang học delta E &lt; 0.8.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="px-4 py-3 sm:py-2"
            >
              <span className="text-[12px] text-[#636a7a] uppercase block mb-1 tracking-wider font-mono font-medium">
                Trí tuệ nhân tạo
              </span>
              <div className="text-2xl sm:text-3xl font-serif text-[#1a1e26] font-semibold mb-1">
                45 <span className="text-base font-light text-[#596273] font-sans">TOPS</span>
              </div>
              <p className="text-[13px] text-[#596273] font-light leading-relaxed">
                Vi xử lý NPU độc lập, xử lý mô hình ngôn ngữ lớn cục bộ bảo mật.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
