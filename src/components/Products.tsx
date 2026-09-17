import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../data/content';
import { ProductItem } from '../types';
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react';

interface ProductsProps {
  onSelectProduct: (product: ProductItem) => void;
  onRequestProductQuote: (productName: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ 
  onSelectProduct,
  onRequestProductQuote 
}) => {
  return (
    <section id="products" className="py-24 bg-[#FAFAFA] text-[#231F20] border-t border-[#D9D9D9] scroll-mt-20">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center mb-3">
            <span 
              id="products-eyebrow"
              className="text-xs uppercase font-bold tracking-[0.25em] text-[#E10600]"
            >
              PRODUCTS &amp; EQUIPMENT
            </span>
          </div>
          <h2
            id="products-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#32135C] tracking-tight leading-tight"
          >
            Quality products, ready to deploy
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            Direct OEM sourcing and certified inventories meeting rigorous standards for upstream, industrial, and infrastructure applications.
          </p>
        </motion.div>

        {/* 3 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <div
                id={`product-tile-${product.id}`}
                className="group bg-white border-2 border-[#32135C]/15 rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:border-[#E10600] transition-all duration-300 h-full w-full"
              >
              {/* Product Image Area - High-Def Frame with Badge & Title Overlay */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-gray-900 flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      if (product.id === 'valves') target.src = '/images/valve.jpg';
                      else if (product.id === 'pumps') target.src = '/images/pumps.jpg';
                      else target.src = '/images/service-equipment.jpg';
                    }
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F11]/90 via-[#0F0F11]/35 to-transparent pointer-events-none" />

                {/* Top-Left Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 bg-white/95 text-[#32135C] text-xs font-bold uppercase tracking-wider rounded-md border border-white/40 shadow-sm">
                    {product.category}
                  </span>
                </div>

                {/* Name on Image overlay */}
                <div className="absolute bottom-4 left-5 right-5 z-10">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-md">
                    {product.name}
                  </h3>
                </div>
              </div>

              {/* Product Details Area with Equalized Heights */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-white">
                <div className="flex flex-col flex-1">
                  {/* Equalized Description Area */}
                  <div className="min-h-[5.5rem] flex items-start mb-5">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
                      {product.description}
                    </p>
                  </div>

                  {/* Highlights Bullet List with Red Checkmarks */}
                  {product.highlights && product.highlights.length > 0 && (
                    <div className="space-y-2.5 mb-6 pt-4 border-t border-gray-100 min-h-[5.5rem] flex flex-col justify-center">
                      {product.highlights.slice(0, 3).map((hl, idx) => (
                        <div key={idx} className="text-xs sm:text-sm text-gray-800 font-medium flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#E10600] flex-shrink-0 mt-0.5 stroke-[2.5]" />
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Standards Pills */}
                  {product.standards && product.standards.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.standards.map((std, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-[#F3E6EC]/60 text-[#32135C] text-[11px] font-bold rounded-md border border-[#32135C]/15">
                          {std}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Action Row - Locked to Bottom */}
                <div className="pt-5 border-t border-[#32135C]/15 flex items-center justify-between gap-3 mt-auto">
                  <button
                    type="button"
                    onClick={() => onSelectProduct(product)}
                    id={`product-specs-btn-${product.id}`}
                    className="text-xs font-bold uppercase tracking-wider text-[#32135C] hover:text-[#E10600] transition-colors cursor-pointer py-1.5 flex items-center gap-1.5"
                  >
                    <span>Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onRequestProductQuote(product.name)}
                    id={`product-quote-btn-${product.id}`}
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-[#E10600] hover:bg-[#BF0500] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer shadow-md active:scale-95"
                  >
                    <span>Get Quote</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
