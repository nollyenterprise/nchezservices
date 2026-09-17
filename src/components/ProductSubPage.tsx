import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../data/content';
import { ProductItem } from '../types';
import { 
  ArrowRight, 
  ArrowLeft, 
  ArrowUpRight, 
  Phone,
  ShieldCheck,
  CheckCircle2,
  FileCheck
} from 'lucide-react';

interface ProductSubPageProps {
  productId: string;
  onNavigateHome: () => void;
  onNavigateAllProducts: () => void;
  onSelectSubpage: (productId: string) => void;
  onRequestQuote: (serviceId?: string, productName?: string) => void;
  onContactTeam: () => void;
}

export const ProductSubPage: React.FC<ProductSubPageProps> = ({
  productId,
  onNavigateHome: _onNavigateHome,
  onNavigateAllProducts,
  onSelectSubpage,
  onRequestQuote,
  onContactTeam,
}) => {
  // Find current product
  const currentProduct: ProductItem = 
    PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];

  // Get related products (the other ones)
  const relatedProducts = PRODUCTS.filter((p) => p.id !== currentProduct.id);

  // Scroll to top whenever productId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId]);

  return (
    <div id={`product-subpage-${currentProduct.id}`} className="min-h-screen bg-white text-[#18181B] font-sans">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Matching Image 1 Style)                                  */}
      {/* ========================================================================= */}
      <section 
        id="product-subpage-hero"
        className="relative w-full overflow-hidden bg-[#0A0D17] min-h-[500px] sm:min-h-[560px] lg:min-h-[600px] flex items-center"
      >
        {/* Photographic Background with Rich Vignette & Subtle Blueprint Grid */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.05, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src={currentProduct.image || '/image/valve.jpg'}
            alt={currentProduct.name}
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.dataset.triedFallback) {
                target.dataset.triedFallback = 'true';
                target.src = '/image/valve.jpg';
              }
            }}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-[center_30%] sm:object-[right_25%] md:object-[right_20%] filter brightness-[0.85] contrast-[1.08]"
          />

          {/* Blueprint Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)`,
              backgroundSize: '48px 48px'
            }}
          />

          {/* Deep Navy/Purple Gradients matching Image 1 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070A14]/95 via-[#0D152A]/85 to-transparent lg:to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D17] via-transparent to-black/40" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-36 pb-20 sm:pt-40 sm:pb-28 w-full">
          <div className="max-w-3xl">
            
            {/* Eyebrow: PRODUCT */}
            <motion.div 
              className="inline-flex items-center mb-5"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span 
                id="product-subpage-hero-eyebrow"
                className="text-xs sm:text-sm uppercase font-semibold tracking-[0.25em] text-[#E10600]"
              >
                PRODUCT
              </span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1 
              id="product-subpage-hero-headline"
              className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {currentProduct.heroHeadline || currentProduct.name}
            </motion.h1>

            {/* Clear Subtext */}
            <motion.p 
              className="text-gray-100 text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-9 max-w-2xl drop-shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
            >
              {currentProduct.heroSubtext || currentProduct.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <button
                id="product-hero-quote-btn"
                type="button"
                onClick={() => onRequestQuote('equipment', currentProduct.name)}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#E10600] hover:bg-[#C80500] text-white font-medium text-sm tracking-wider uppercase rounded-lg shadow-[0_6px_20px_rgba(225,6,0,0.35)] hover:shadow-[0_10px_24px_rgba(225,6,0,0.5)] transition-all duration-200 active:scale-95 cursor-pointer touch-manipulation"
              >
                <span>GET QUOTE</span>
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </button>

              <button
                id="product-hero-contact-btn"
                type="button"
                onClick={onContactTeam}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium text-sm tracking-wider uppercase rounded-lg border border-white/25 backdrop-blur-md transition-all duration-200 active:scale-95 cursor-pointer touch-manipulation"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </button>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 2. OVERVIEW & SPECIFICATIONS SECTION (Matching Image 2 Style)            */}
      {/* ========================================================================= */}
      <section id="product-overview-section" className="py-20 sm:py-28 bg-white relative overflow-hidden">
        {/* Subtle grid blueprint background */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Image with Red Corner Accent & Standards Badges */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-[#0A0D17] aspect-[4/3] sm:aspect-[16/11]">
                  <img
                    src={currentProduct.overviewImage || currentProduct.image || '/image/valve.jpg'}
                    alt={currentProduct.name}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.triedFallback) {
                        target.dataset.triedFallback = 'true';
                        target.src = '/image/valve.jpg';
                      }
                    }}
                    className="w-full h-full object-cover object-center filter brightness-[0.97] contrast-[1.04]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Red Corner Accent Bracket (Matching Image 2) */}
                <div className="hidden sm:block absolute -bottom-4 -right-4 w-20 h-20 border-r-2 border-b-2 border-[#E10600] pointer-events-none" />
              </div>

              {/* Compliance & Quality Standards Badges */}
              <div className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-[#32135C] font-semibold text-sm uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#E10600]" />
                  <span>Quality & Code Compliance</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {currentProduct.standards.map((std, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-300 text-gray-800 text-xs font-semibold rounded-md shadow-2xs"
                    >
                      <FileCheck className="w-3.5 h-3.5 text-[#E10600]" />
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Text Column: Detailed Overview & Specifications */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Eyebrow: [PRODUCT NAME] */}
              <div className="space-y-3">
                <div className="inline-flex items-center">
                  <span 
                    id="product-overview-eyebrow"
                    className="text-xs sm:text-sm uppercase font-semibold tracking-[0.25em] text-[#E10600]"
                  >
                    {currentProduct.name.toUpperCase()}
                  </span>
                </div>

                {/* Main Headline */}
                <h2 
                  id="product-overview-headline"
                  className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#32135C] tracking-tight leading-[1.18]"
                >
                  {currentProduct.overviewHeadline || `Certified OEM equipment engineered for severe service operations`}
                </h2>
              </div>

              {/* Explanatory Paragraphs */}
              <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
                {currentProduct.overviewParagraphs && currentProduct.overviewParagraphs.length > 0 ? (
                  currentProduct.overviewParagraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
                ) : (
                  <p>{currentProduct.description}</p>
                )}
              </div>

              {/* Key Features & Highlights */}
              <div className="space-y-3 pt-2">
                <h3 className="font-display text-lg font-bold text-[#18181B] tracking-tight">
                  Product Highlights & Engineering Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentProduct.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#E10600] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800 text-sm sm:text-base leading-snug font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications List */}
              {currentProduct.applications && (
                <div className="space-y-3 pt-2">
                  <h3 className="font-display text-sm uppercase tracking-wider font-bold text-gray-600">
                    Target Operating Applications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentProduct.applications.map((app, idx) => (
                      <span 
                        key={idx}
                        className="px-3.5 py-1.5 bg-[#32135C]/5 border border-[#32135C]/15 text-[#32135C] text-xs font-semibold rounded-lg"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 3. RELATED PRODUCTS & NAVIGATION BAR (Matching Image 5 Style)              */}
      {/* ========================================================================= */}
      <section id="related-products-section" className="py-16 sm:py-24 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="mb-8 sm:mb-10">
            <div className="inline-flex items-center mb-2">
              <span className="text-xs sm:text-sm uppercase font-semibold tracking-[0.25em] text-[#E10600]">
                RELATED PRODUCTS
              </span>
            </div>
          </div>

          {/* Related Products Cards Grid (Image 5 Style) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
            {relatedProducts.slice(0, 3).map((relProd) => (
              <button
                key={relProd.id}
                type="button"
                id={`related-product-card-${relProd.id}`}
                onClick={() => onSelectSubpage(relProd.id)}
                className="group w-full text-left bg-[#F0F4F8] hover:bg-white border border-transparent hover:border-[#E10600] rounded-2xl p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer touch-manipulation active:scale-[0.99]"
              >
                <span className="font-display font-bold text-base sm:text-lg text-[#18181B] group-hover:text-[#32135C] transition-colors pr-3">
                  {relProd.name}
                </span>
                <ArrowRight className="w-5 h-5 text-[#E10600] group-hover:translate-x-1.5 transition-transform duration-200 flex-shrink-0" strokeWidth={2} />
              </button>
            ))}
          </div>

          {/* Bottom Navigation Bar (Matching Image 5: All Products on left, Contact Us on right) */}
          <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
            {/* Left Button: All Products */}
            <button
              type="button"
              id="back-to-all-products-btn"
              onClick={onNavigateAllProducts}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-gray-700 hover:text-[#32135C] transition-colors cursor-pointer touch-manipulation py-2 px-1"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2]" />
              <span>All Products</span>
            </button>

            {/* Right Button: Contact Us */}
            <button
              type="button"
              id="product-subpage-contact-action-btn"
              onClick={onContactTeam}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#E10600] hover:bg-[#C80500] text-white font-bold text-sm tracking-wider uppercase rounded-xl shadow-[0_8px_24px_rgba(225,6,0,0.35)] hover:shadow-[0_12px_28px_rgba(225,6,0,0.5)] transition-all duration-200 active:scale-95 cursor-pointer touch-manipulation"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 4. CLOSING CTA BANNER BEFORE FOOTER ("LET'S POWER YOUR NEXT PROJECT.")   */}
      {/* ========================================================================= */}
      <section 
        id="product-subpage-closing-cta"
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
              id="product-cta-get-quote"
              onClick={() => onRequestQuote('equipment', currentProduct.name)}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#E10600] hover:bg-[#C80500] text-white font-bold text-sm tracking-wider uppercase rounded-xl shadow-[0_10px_25px_rgba(225,6,0,0.4)] hover:shadow-[0_14px_30px_rgba(225,6,0,0.55)] transition-all duration-200 active:scale-95 cursor-pointer touch-manipulation"
            >
              <span>GET QUOTE</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Outlined / Deep Purple: CONTACT US */}
            <button
              type="button"
              id="product-cta-contact-team"
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
