import React from 'react';

interface FooterProps {
  onOpenPolicy: (title: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  return (
    <footer className="w-full bg-[#e6e9ef] border-t border-[#d3d8e2]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-16 flex flex-col gap-8 w-full">
        {/* Upper Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-[#d8dce4]">
          <div className="max-w-xl">
            <span className="text-xl sm:text-2xl font-serif font-semibold tracking-wider text-[#1a1e26] uppercase block">
              NHATLM
            </span>
            <p className="text-[13px] text-[#596273] font-light mt-1.5 leading-relaxed">
              NhATLM — Trung tâm phân phối ủy quyền Flagship: HP Spectre, Lenovo ThinkPad, Asus ROG, Dell XPS — Đẳng cấp kỹ nghệ &amp; dịch vụ VIP tận nơi.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px]">
            <button
              onClick={() => onOpenPolicy('Chính sách Bảo hành & Cam kết')}
              className="text-[#1a1e26] hover:text-[#575e6d] transition-colors duration-200 cursor-pointer"
            >
              Chính sách Bảo hành &amp; Cam kết
            </button>
            <button
              onClick={() => onOpenPolicy('Chăm sóc Toàn diện')}
              className="text-[#596273] hover:text-[#1a1e26] transition-colors duration-200 cursor-pointer"
            >
              Chăm sóc Toàn diện
            </button>
            <button
              onClick={() => onOpenPolicy('Hỗ trợ Khách hàng VIP')}
              className="text-[#596273] hover:text-[#1a1e26] transition-colors duration-200 cursor-pointer"
            >
              Hỗ trợ Khách hàng VIP
            </button>
            <button
              onClick={() => onOpenPolicy('Chính sách Bảo mật')}
              className="text-[#596273] hover:text-[#1a1e26] transition-colors duration-200 cursor-pointer"
            >
              Chính sách Bảo mật
            </button>
            <button
              onClick={() => onOpenPolicy('Điều khoản Dịch vụ')}
              className="text-[#596273] hover:text-[#1a1e26] transition-colors duration-200 cursor-pointer"
            >
              Điều khoản Dịch vụ
            </button>
          </div>
        </div>

        {/* Lower Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#596273] text-[12px] font-mono">
          <p>© 2026 NHATLM TECHNOLOGY. BẢO LƯU MỌI QUYỀN.</p>
          <div className="flex items-center gap-4">
            <span className="text-[#858e9f]">VIỆT NAM / TIẾNG VIỆT</span>
            <span className="w-1 h-1 rounded-full bg-[#8e95a5]"></span>
            <span className="text-[#858e9f]">PHIÊN BẢN TITANIUM SLATE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
