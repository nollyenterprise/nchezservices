import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../data/content';
import { ProductSubPage } from './ProductSubPage';
import { 
  ArrowRight,
  ArrowUpRight,
  Phone
} from 'lucide-react';

interface ProductsPageProps {
  onNavigateHome: () => void;
  onRequestQuote: (serviceId?: string, productName?: string) => void;
  onContactTeam: () => void;
  initialSelectedProductId?: string | null;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigateHome,
  onRequestQuote,
  onContactTeam,
  initialSelectedProductId = null
}) => {
  const [activeSubpageId, setActiveSubpageId] = useState<string | null>(initialSelectedProductId);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    setActiveSubpageId(initialSelectedProductId);
    if (initialSelectedProductId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [initialSelectedProductId]);

  // Unique product categories for tabs
  const categories = ['All', ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];

  // Filter products by selected category tab
  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleScrollToGrid = () => {
    const gridElem = document.getElementById('products-grid-section');
    if (gridElem) {
      const offset = 80;
      const topPos = gridElem.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  };

  // If a subpage is selected, render the dedicated ProductSubPage component
  if (activeSubpageId) {
    return (
      <ProductSubPage
        productId={activeSubpageId}
        onNavigateHome={onNavigateHome}
        onNavigateAllProducts={() => {
          setActiveSubpageId(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectSubpage={(newId) => {
          setActiveSubpageId(newId);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onRequestQuote={onRequestQuote}
        onContactTeam={onContactTeam}
      />
    );
  }

  return (
    <div id="products-page-container" className="min-h-screen bg-white text-[#18181B] font-sans">
      
      {/* ========================================================================= */}
      {/* SECTION 1: HERO BANNER (Matching Services Main Page Style)                */}
      {/* ========================================================================= */}
      <section 
        id="products-hero-banner" 
        className="relative w-full overflow-hidden bg-[#0A0D17] min-h-[560px] sm:min-h-[620px] flex items-center"
      >
        {/* Photographic Background */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.05, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src="/image/valve.jpg"
            alt="Certified OEM energy equipment and valves"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-[center_35%] sm:object-[right_25%] filter brightness-[0.88] contrast-[1.05]"
          />
          
          {/* Subtle Grid blueprint pattern overlay */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)`,
              backgroundSize: '48px 48px'
            }}
          />

          {/* Deep Navy/Purple Branding Vignette and Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070A14]/92 via-[#0D152A]/80 to-transparent lg:to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D17] via-transparent to-black/30" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-36 pb-20 sm:pt-40 sm:pb-28 w-full">
          <div className="max-w-3xl">
            
            {/* Eyebrow: EQUIPMENT & PRODUCTS */}
            <motion.div 
              className="inline-flex items-center mb-5"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span 
                id="products-hero-eyebrow"
                className="text-xs sm:text-sm uppercase font-semibold tracking-[0.25em] text-[#E10600]"
              >
                EQUIPMENT & PRODUCTS
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              id="products-hero-headline"
              className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              OEM Equipment & Materials Supply
            </motion.h1>

            {/* Subtext description */}
            <motion.p 
              className="text-gray-100 text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-9 max-w-2xl drop-shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
            >
              Direct factory procurement of API-certified valves, process pumps, flanges, and piping hardware backed by full manufacturer warranties and 100% material traceability.
            </motion.p>

            {/* Dual CTA Buttons */}
            <motion.div 
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <button
                id="products-hero-start-btn"
                type="button"
                onClick={() => onRequestQuote('equipment')}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#E10600] hover:bg-[#C80500] text-white font-medium text-sm tracking-wider uppercase rounded-lg shadow-[0_6px_20px_rgba(225,6,0,0.35)] hover:shadow-[0_10px_24px_rgba(225,6,0,0.5)] transition-all duration-200 active:scale-95 cursor-pointer touch-manipulation"
              >
                <span>GET QUOTE</span>
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </button>

              <button
                id="products-hero-view-btn"
                type="button"
                onClick={handleScrollToGrid}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium text-sm tracking-wider uppercase rounded-lg border border-white/25 backdrop-blur-md transition-all duration-200 active:scale-95 cursor-pointer touch-manipulation"
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </button>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 2: PRODUCTS SHOWCASE WITH CATEGORY TABS                           */}
      {/* ========================================================================= */}
      <section 
        id="products-grid-section" 
        className="py-16 sm:py-24 bg-white relative scroll-mt-20 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* Category Tabs Bar */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 sm:mb-12 pb-3 border-b border-gray-200">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer touch-manipulation ${
                    isActive
                      ? 'bg-[#32135C] text-white shadow-md shadow-[#32135C]/20 border border-[#32135C]'
                      : 'bg-[#F1F5F9] text-gray-700 hover:bg-gray-200 hover:text-[#32135C] border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Product Cards Grid - Matching Services Page Card Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredProducts.map((product) => (
              <button
                type="button"
                key={product.id}
                id={`product-card-full-${product.id}`}
                onClick={() => {
                  setActiveSubpageId(product.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative w-full text-left min-h-[420px] sm:min-h-[450px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between p-5 sm:p-7 bg-[#0A0D17] border border-gray-700/60 hover:border-[#E10600] active:scale-[0.99] touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600]"
              >
                {/* Background Photographic Image */}
                <img
                  src={product.image || '/image/valve.jpg'}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      target.src = '/image/valve.jpg';
                    }
                  }}
                  className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.06] group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D17] via-[#0A0D17]/65 to-black/30 group-hover:via-[#0A0D17]/55 transition-colors duration-300 pointer-events-none" />

                {/* Top Row: Number badge + Category tag */}
                <div className="relative z-10 flex items-center justify-between pointer-events-none">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-black/75 backdrop-blur-md border border-white/25 font-mono text-white font-semibold text-xs tracking-wider shadow-md">
                    {product.number || '01'}
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide">
                    <span>{product.category}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E10600]" />
                  </span>
                </div>

                {/* Bottom Content Row */}
                <div className="relative z-10 space-y-3.5 pt-4 pointer-events-none">
                  
                  {/* Title & Standards */}
                  <div className="space-y-1">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-red-100 transition-colors drop-shadow-md">
                      {product.name}
                    </h3>
                    
                    {/* Standards Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {product.standards.slice(0, 3).map((std, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-white/10 backdrop-blur-md border border-white/20 text-gray-200 text-[11px] font-mono rounded">
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-100 text-sm sm:text-base font-normal leading-relaxed drop-shadow-sm line-clamp-2">
                    {product.description}
                  </p>

                  {/* Action Link */}
                  <div className="pt-2 flex items-center justify-between border-t border-white/20">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#E10600] group-hover:text-red-400 transition-colors">
                      <span>View Specifications</span>
                      <ArrowRight className="w-4 h-4 stroke-[2] transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                  </div>
                </div>

              </button>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 3: CLOSING CTA BANNER BEFORE FOOTER ("LET'S POWER YOUR NEXT PROJECT.") */}
      {/* ========================================================================= */}
      <section 
        id="products-closing-cta"
        className="relative py-20 sm:py-28 bg-gradient-to-b from-[#1C0A33] via-[#32135C] to-[#1C0A33] text-white text-center overflow-hidden"
      >
        {/* Glow ambient circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E10600]/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8">
          
          {/* Badge: ENGINEERED RELIABILITY */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-xs font-mono tracking-widest text-white/90 uppercase mb-6 shadow-sm">
            ENGINEERED RELIABILITY
          </div>

          {/* Big Headline */}
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.12]">
            Let's Power Your Next Project.
          </h2>

          {/* Subtitle */}
          <p className="text-white/80 text-base sm:text-lg lg:text-xl font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
            From API-certified valves and heavy pumps to precision flanges and piping hardware, Nchez Services Limited delivers genuine equipment backed by full material dossiers.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            {/* Solid Red: GET QUOTE */}
            <button
              type="button"
              id="main-products-cta-get-quote"
              onClick={() => onRequestQuote('equipment')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#E10600] hover:bg-[#C80500] text-white font-bold text-sm tracking-wider uppercase rounded-xl shadow-[0_10px_25px_rgba(225,6,0,0.4)] hover:shadow-[0_14px_30px_rgba(225,6,0,0.55)] transition-all duration-200 active:scale-95 cursor-pointer touch-manipulation"
            >
              <span>GET QUOTE</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Outlined / Deep Purple: CONTACT US */}
            <button
              type="button"
              id="main-products-cta-contact-team"
              onClick={onContactTeam}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#250E45] hover:bg-[#32135C] text-white font-medium text-sm tracking-wider uppercase rounded-xl border border-white/20 hover:border-white/40 shadow-sm transition-all duration-200 active:scale-95 cursor-pointer touch-manipulation"
            >
              <Phone className="w-4 h-4 text-[#E10600]" />
              <span>CONTACT US</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
