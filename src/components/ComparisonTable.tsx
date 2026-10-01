import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COMPARISON_ROWS, COMPARISON_PRICES, PRODUCTS } from '../data/products';
import { Product } from '../types';

interface ComparisonTableProps {
  onConfigure: (product: Product) => void;
  onQuickBuy: (product: Product) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  onConfigure,
  onQuickBuy,
}) => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const getProductById = (id: string) => {
    return PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  };

  return (
    <section className="py-16 sm:py-20" id="configurator">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-14"
        >
          <span className="text-[11px] text-[#636a7a] uppercase tracking-widest block mb-2 font-semibold font-sans">
            Thông Số Minh Bạch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1a1e26] font-semibold mb-4">
            So Sánh Nhanh Các Phiên Bản
          </h2>
          <p className="text-[15px] text-[#596273] font-light">
            Tất cả sản phẩm đều được kiểm định áp lực nhiệt 72 giờ trước khi xuất xưởng.
          </p>
        </motion.div>

        {/* Spec Table */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-x-auto border border-[#d8dce4] rounded bg-white shadow-sm"
        >
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="border-b border-[#d8dce4] bg-[#f1f3f7]">
                <th className="py-5 px-6 text-[11px] font-mono text-[#858e9f] uppercase tracking-wider w-1/5">
                  Thông số
                </th>
                <th className="py-5 px-6 text-xl font-serif text-[#1a1e26] font-medium w-1/5">
                  HP Spectre 14
                </th>
                <th className="py-5 px-6 text-xl font-serif text-[#1a1e26] font-medium bg-[#e9ecf2]/70 border-x border-[#d8dce4]/60 w-1/5">
                  Lenovo ThinkPad X1
                </th>
                <th className="py-5 px-6 text-xl font-serif text-[#1a1e26] font-medium w-1/5">
                  Asus ROG Zephyrus G16
                </th>
                <th className="py-5 px-6 text-xl font-serif text-[#1a1e26] font-medium bg-[#f0edee]/60 w-1/5">
                  Dell XPS 16
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d8dce4] text-[13px]">
              {COMPARISON_ROWS.map((row, idx) => {
                const isHovered = hoveredRow === idx;
                return (
                  <tr
                    key={row.label}
                    onMouseEnter={() => setHoveredRow(idx)}
                    onMouseLeave={() => setHoveredRow(null)}
                    className={`transition-colors ${
                      isHovered ? 'bg-[#f7f9fb]' : ''
                    }`}
                  >
                    <td className="py-4 px-6 text-[#596273] font-medium bg-[#f1f3f7]/50">
                      {row.label}
                    </td>
                    <td className="py-4 px-6 text-[#1a1e26]">{row.hp}</td>
                    <td className="py-4 px-6 text-[#1a1e26] font-semibold bg-[#e9ecf2]/30 border-x border-[#d8dce4]/40">
                      {row.lenovo}
                    </td>
                    <td className="py-4 px-6 text-[#1a1e26]">{row.asus}</td>
                    <td className="py-4 px-6 text-[#1a1e26] bg-[#f0edee]/30">{row.dell}</td>
                  </tr>
                );
              })}

              {/* Pricing Row */}
              <tr className="bg-[#f1f3f7]/70">
                <td className="py-6 px-6 text-[#596273] font-medium">Giá niêm yết</td>

                {/* HP */}
                <td className="py-6 px-6">
                  <span className="block text-xl font-serif text-[#1a1e26] font-semibold mb-2">
                    {COMPARISON_PRICES.hp.price}
                  </span>
                  <button
                    onClick={() => onConfigure(getProductById(COMPARISON_PRICES.hp.productId))}
                    className="w-full bg-white border border-[#d8dce4] hover:border-[#8e95a5] text-[#1a1e26] py-2 rounded text-[13px] font-medium transition-colors shadow-sm cursor-pointer"
                  >
                    {COMPARISON_PRICES.hp.action}
                  </button>
                </td>

                {/* Lenovo (Featured) */}
                <td className="py-6 px-6 bg-[#e9ecf2]/50 border-x border-[#d8dce4]/60">
                  <span className="block text-xl font-serif text-[#1a1e26] font-semibold mb-2">
                    {COMPARISON_PRICES.lenovo.price}
                  </span>
                  <button
                    onClick={() => onQuickBuy(getProductById(COMPARISON_PRICES.lenovo.productId))}
                    className="w-full bg-[#575e6d] text-white py-2 rounded text-[13px] font-semibold hover:bg-[#2b3240] transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>{COMPARISON_PRICES.lenovo.action}</span>
                    <span className="material-symbols-outlined text-[15px]">flash_on</span>
                  </button>
                </td>

                {/* Asus */}
                <td className="py-6 px-6">
                  <span className="block text-xl font-serif text-[#1a1e26] font-semibold mb-2">
                    {COMPARISON_PRICES.asus.price}
                  </span>
                  <button
                    onClick={() => onConfigure(getProductById(COMPARISON_PRICES.asus.productId))}
                    className="w-full bg-white border border-[#d8dce4] hover:border-[#8e95a5] text-[#1a1e26] py-2 rounded text-[13px] font-medium transition-colors shadow-sm cursor-pointer"
                  >
                    {COMPARISON_PRICES.asus.action}
                  </button>
                </td>

                {/* Dell */}
                <td className="py-6 px-6 bg-[#f0edee]/40">
                  <span className="block text-xl font-serif text-[#1a1e26] font-semibold mb-2">
                    {COMPARISON_PRICES.dell.price}
                  </span>
                  <button
                    onClick={() => onConfigure(getProductById(COMPARISON_PRICES.dell.productId))}
                    className="w-full bg-white border border-[#d8dce4] hover:border-[#8e95a5] text-[#1a1e26] py-2 rounded text-[13px] font-medium transition-colors shadow-sm cursor-pointer"
                  >
                    {COMPARISON_PRICES.dell.action}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};
