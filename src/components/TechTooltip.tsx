import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TechTooltipProps {
  term?: string;
  explanation?: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom';
}

export const TECH_DICTIONARY: Record<string, { title: string; benefit: string }> = {
  OLED: {
    title: 'Màn hình OLED PureBlack',
    benefit: 'Tự phát quang theo từng điểm ảnh, độ tương phản vô cực 1.000.000:1, sắc đen sâu tuyệt đối và giảm 70% ánh sáng xanh có hại.',
  },
  '2.8K OLED': {
    title: 'Độ phân giải 2.8K OLED 120Hz',
    benefit: 'Mật độ điểm ảnh siêu sắc nét, hiển thị màu điện ảnh 100% DCI-P3 chuẩn xác cho thiết kế mỹ thuật và đồ họa chuyên nghiệp.',
  },
  '3.2K': {
    title: 'Màn hình 3.2K Calibrated',
    benefit: 'Được cân chỉnh màu sắc quang học tại nhà máy với độ sai lệch Delta E < 0.8, bảo toàn độ chính xác màu tuyệt đối.',
  },
  vPro: {
    title: 'Nền tảng Intel vPro Enterprise',
    benefit: 'Bảo mật cấp phần cứng từ xa, phát hiện mã độc bằng AI và hỗ trợ quản trị IT doanh nghiệp ngay cả khi máy tính tắt nguồn.',
  },
  'Thunderbolt 4': {
    title: 'Giao tiếp Thunderbolt 4 kép',
    benefit: 'Băng thông siêu tốc 40Gbps, xuất tín hiệu đồng thời 2 màn hình 4K hoặc 1 màn hình 8K, tích hợp sạc nhanh hai chiều.',
  },
  NPU: {
    title: 'Vi xử lý thần kinh AI NPU',
    benefit: 'Xử lý các mô hình AI ngôn ngữ và đồ họa cục bộ trên máy với tốc độ cao, hoàn toàn bảo mật và tiết kiệm điện năng gấp 3 lần CPU.',
  },
  'RTX 4070': {
    title: 'NVIDIA RTX 4070 Studio',
    benefit: 'Kiến trúc Ada Lovelace với nhân Ray Tracing thế hệ 3 và DLSS 3.5, tối ưu hóa hơn 100 ứng dụng đồ họa chuyên nghiệp (Adobe, Blender).',
  },
  '175W TGP': {
    title: 'Total Graphics Power 175W',
    benefit: 'Cung cấp mức điện năng tối đa cho GPU giúp giải phóng toàn bộ xung nhịp đồ họa đỉnh cao mà không bị nghẽn nhiệt.',
  },
  'Vapor Chamber': {
    title: 'Buồng hơi tản nhiệt kim loại lỏng',
    benefit: 'Dẫn nhiệt nhanh gấp 10 lần ống đồng truyền thống bằng dung môi bốc hơi tuần hoàn, giữ máy mát mẻ ngay cả khi tải nặng.',
  },
  '240Hz': {
    title: 'Tần số quét 240Hz 0.2ms',
    benefit: 'Tốc độ làm tươi cực nhanh loại bỏ hoàn toàn hiện tượng bóng mờ và xé hình, phản hồi tức thì trong từng thao tác đồ họa và game.',
  },
  LPDDR5X: {
    title: 'Bộ nhớ RAM LPDDR5X 7500 MT/s',
    benefit: 'Băng thông truyền dữ liệu siêu tốc, giúp mở hàng chục ứng dụng nặng cùng lúc mà không xảy ra tình trạng trễ ram.',
  },
  'Titanium Grade 5': {
    title: 'Hợp kim Titan Hàng Không Grade 5',
    benefit: 'Độ bền cơ học vượt trội, cứng hơn 200% so với nhôm thông thường nhưng nhẹ hơn đáng kể và kháng ăn mòn muối biển tuyệt đối.',
  },
};

export const TechTooltip: React.FC<TechTooltipProps> = ({
  term,
  explanation,
  children,
  position = 'top',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Look up dictionary if term is provided
  const dictInfo = term ? TECH_DICTIONARY[term] : null;
  const title = dictInfo ? dictInfo.title : term;
  const desc = explanation || (dictInfo ? dictInfo.benefit : '');

  if (!desc) {
    return <>{children}</>;
  }

  return (
    <span
      className="relative inline-flex items-center group/tooltip"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
      }}
    >
      <span className="cursor-help underline decoration-[#8e95a5]/40 decoration-dotted underline-offset-2 transition-colors group-hover/tooltip:decoration-[#575e6d]">
        {children}
      </span>

      <span className="inline-block ml-0.5 text-[#858e9f] group-hover/tooltip:text-[#575e6d] text-[10px] select-none">
        <span className="material-symbols-outlined text-[13px] leading-none">info</span>
      </span>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: position === 'top' ? 6 : -6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: position === 'top' ? 6 : -6, scale: 0.95 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className={`absolute ${
              position === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
            } left-1/2 -translate-x-1/2 z-50 w-64 sm:w-72 p-3 bg-[#1a1e26] text-white text-left rounded shadow-xl border border-[#575e6d] pointer-events-none`}
          >
            {title && (
              <div className="flex items-center gap-1.5 mb-1 pb-1 border-b border-[#575e6d]/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8e95a5]"></span>
                <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-[#e9ecf2]">
                  {title}
                </span>
              </div>
            )}
            <p className="text-[12px] text-[#c5cbd6] font-light leading-relaxed font-sans">
              {desc}
            </p>

            {/* Little pointer triangle */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1a1e26] border-r border-b border-[#575e6d] transform rotate-45 ${
                position === 'top' ? '-bottom-1 border-l-0 border-t-0' : '-top-1 border-r-0 border-b-0'
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};
