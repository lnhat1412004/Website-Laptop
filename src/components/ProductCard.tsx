import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { TechTooltip } from './TechTooltip';

interface ProductCardProps {
  product: Product;
  index: number;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  onViewDetail: (product: Product) => void;
  onConfigure: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  index,
  isWishlisted,
  onToggleWishlist,
  onViewDetail,
  onConfigure,
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + '₫';
  };

  const isFeatured = product.tag === 'Khuyên Dùng';

  // Helper to intelligently wrap spec text with TechTooltip
  const renderSpecWithTooltip = (label: string, value: string) => {
    const valUpper = value.toUpperCase();
    const lblUpper = label.toUpperCase();

    if (valUpper.includes('THUNDERBOLT')) {
      return (
        <TechTooltip term="Thunderbolt 4">
          <span className="text-[#1a1e26] font-medium">{value}</span>
        </TechTooltip>
      );
    }
    if (valUpper.includes('RTX 4070') || valUpper.includes('RTX 4080')) {
      return (
        <TechTooltip term="RTX 4070">
          <span className="text-[#1a1e26] font-medium">{value}</span>
        </TechTooltip>
      );
    }
    if (valUpper.includes('TGP') || lblUpper.includes('TGP')) {
      return (
        <TechTooltip term="175W TGP">
          <span className="text-[#1a1e26] font-medium">{value}</span>
        </TechTooltip>
      );
    }
    if (valUpper.includes('BUỒNG HƠI') || lblUpper.includes('TẢN NHIỆT')) {
      return (
        <TechTooltip term="Vapor Chamber">
          <span className="text-[#1a1e26] font-medium">{value}</span>
        </TechTooltip>
      );
    }
    if (valUpper.includes('240HZ')) {
      return (
        <TechTooltip term="240Hz">
          <span className="text-[#1a1e26] font-medium">{value}</span>
        </TechTooltip>
      );
    }
    if (valUpper.includes('LPDDR5X')) {
      return (
        <TechTooltip term="LPDDR5X">
          <span className="text-[#1a1e26] font-medium">{value}</span>
        </TechTooltip>
      );
    }
    if (valUpper.includes('3.2K')) {
      return (
        <TechTooltip term="3.2K">
          <span className="text-[#1a1e26] font-medium">{value}</span>
        </TechTooltip>
      );
    }
    if (valUpper.includes('TITANIUM') || lblUpper.includes('VẬT LIỆU')) {
      return (
        <TechTooltip term="Titanium Grade 5">
          <span className="text-[#1a1e26] font-medium">{value}</span>
        </TechTooltip>
      );
    }

    return (
      <span className="text-[#1a1e26] font-medium block truncate" title={value}>
        {value}
      </span>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.7,
        delay: Math.min(index * 0.12, 0.4),
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -3 }}
      className={`luminous-card luminous-card-hover rounded p-6 lg:p-8 transition-all duration-300 relative group ${
        isFeatured ? 'border-[#8e95a5] shadow-md ring-1 ring-[#8e95a5]/30' : ''
      }`}
    >
      {/* Top right badges: Recommended Pill & Heart Wishlist Toggle */}
      <div className="absolute -top-3 right-6 sm:right-8 flex items-center gap-2 z-10">
        {isFeatured && (
          <div className="bg-[#575e6d] text-white text-[11px] font-semibold px-3 py-0.5 rounded uppercase tracking-wider shadow-sm">
            Khuyên Dùng
          </div>
        )}

        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          aria-label={isWishlisted ? 'Xóa khỏi yêu thích' : 'Lưu vào yêu thích'}
          className={`w-7 h-7 rounded-full flex items-center justify-center border shadow-xs transition-colors cursor-pointer ${
            isWishlisted
              ? 'bg-[#ba1a1a] text-white border-[#ba1a1a]'
              : 'bg-white text-[#858e9f] hover:text-[#ba1a1a] border-[#d8dce4]'
          }`}
          title={isWishlisted ? 'Đã lưu trong danh sách yêu thích' : 'Lưu vào danh sách yêu thích'}
        >
          <span className="material-symbols-outlined text-[15px]">
            {isWishlisted ? 'favorite' : 'favorite_border'}
          </span>
        </motion.button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Product Image */}
        <div className="lg:col-span-4 aspect-[4/3] rounded bg-[#f1f3f7] overflow-hidden border border-[#d8dce4] relative flex items-center justify-center p-2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded"
          />
          {product.category === 'accessory' && (
            <span className="absolute top-2 left-2 bg-white/90 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-mono font-medium text-[#596273] border border-[#d8dce4]">
              Chính hãng
            </span>
          )}
        </div>

        {/* Center: Specs & Info */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`px-2.5 py-0.5 rounded text-[11px] uppercase tracking-wider font-medium border ${
                  isFeatured
                    ? 'bg-[#e9ecf2] text-[#1a1e26] border-[#8e95a5]'
                    : 'bg-[#f1f3f7] text-[#1a1e26] border-[#d8dce4]'
                }`}
              >
                {product.categoryLabel}
              </span>
              <span className="text-[12px] text-[#858e9f] font-mono font-medium">
                {product.screenSize}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-[#1a1e26] font-semibold mb-2">
              {product.name}
            </h3>

            {/* Subtitle with Tooltip on keywords like OLED or vPro */}
            <p className="text-[13px] text-[#596273] font-light mb-6 leading-relaxed">
              {product.subtitle.includes('OLED') ? (
                <>
                  {product.subtitle.split('OLED')[0]}
                  <TechTooltip term="OLED">OLED</TechTooltip>
                  {product.subtitle.split('OLED')[1]}
                </>
              ) : (
                product.subtitle
              )}
            </p>
          </div>

          {/* 3 Technical Metrics with interactive benefit tooltips */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 border-t border-[#e7eaf0] pt-4 text-[13px]">
            <div>
              <span className="block text-[#858e9f] text-[11px] font-mono uppercase mb-0.5">
                {product.highlightSpecs.label1}
              </span>
              {renderSpecWithTooltip(product.highlightSpecs.label1, product.highlightSpecs.val1)}
            </div>
            <div>
              <span className="block text-[#858e9f] text-[11px] font-mono uppercase mb-0.5">
                {product.highlightSpecs.label2}
              </span>
              {renderSpecWithTooltip(product.highlightSpecs.label2, product.highlightSpecs.val2)}
            </div>
            <div>
              <span className="block text-[#858e9f] text-[11px] font-mono uppercase mb-0.5">
                {product.highlightSpecs.label3}
              </span>
              {renderSpecWithTooltip(product.highlightSpecs.label3, product.highlightSpecs.val3)}
            </div>
          </div>
        </div>

        {/* Right: Pricing and CTAs */}
        <div className="lg:col-span-3 lg:border-l lg:border-[#d8dce4] lg:pl-8 flex lg:flex-col justify-between items-end lg:items-start h-full pt-4 lg:pt-0 border-t lg:border-t-0 border-[#d8dce4]">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#858e9f] block mb-1">
              Giá khởi điểm
            </span>
            <span className="text-2xl sm:text-3xl font-serif text-[#1a1e26] font-semibold">
              {formatPrice(product.basePrice)}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-2 w-full lg:w-auto mt-4">
            {isFeatured ? (
              <button
                onClick={() => onConfigure(product)}
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded bg-[#575e6d] text-white hover:bg-[#2b3240] transition-colors shadow-sm cursor-pointer"
              >
                <span className="text-[13px] font-semibold">Tùy biến ngay</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            ) : (
              <button
                onClick={() => onViewDetail(product)}
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded bg-[#f1f3f7] border border-[#d8dce4] hover:bg-[#575e6d] hover:text-white transition-colors cursor-pointer group/btn"
              >
                <span className="text-[13px] font-medium">Xem chi tiết</span>
                <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </button>
            )}

            {/* Quick secondary action */}
            {!isFeatured && product.category !== 'accessory' && (
              <button
                onClick={() => onConfigure(product)}
                className="text-[12px] text-[#596273] hover:text-[#1a1e26] underline text-center lg:text-left py-1 cursor-pointer"
              >
                Tùy biến cấu hình này →
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
