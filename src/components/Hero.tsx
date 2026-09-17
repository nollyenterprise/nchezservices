import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onRequestQuote: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuote, onExploreServices }) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center bg-[#0F0F11] text-white overflow-hidden pt-28 pb-20 border-b border-white/10"
    >
      {/* Background Image with Cinematic Lighting & Clear Visibility */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.04, opacity: 0.9 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src="/images/pexels-vik-nesh-waran-32881851-7024831.jpg"
          alt="Offshore and maritime logistics port engineer in safety gear"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_28%] sm:object-[right_25%] md:object-[right_20%] filter brightness-[0.88] contrast-[1.05]"
        />
        
        {/* Layered Gradient Overlays ensuring background photo is clearly visible while text is crisp */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F11]/90 via-[#0F0F11]/65 to-transparent lg:to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F11] via-transparent to-black/30" />
        <div className="absolute inset-0 bg-[#32135C]/10 mix-blend-multiply" />

        {/* Technical Blueprint Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-blueprint opacity-20 pointer-events-none" />
      </motion.div>

      {/* Main Hero Container - Left-aligned layout matching avajonn.png */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Eyebrow - Red tracked uppercase line */}
          <motion.div 
            className="flex items-center mb-6"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-[10px] sm:text-sm font-semibold uppercase tracking-[0.12em] sm:tracking-[0.25em] text-[#E10600]">
              EQUIPMENT SUPPLY • PROCUREMENT • LOGISTICS
            </span>
          </motion.div>

          {/* Headline - Exact 4-Line Stack from avajonn */}
          <motion.h1
            id="hero-headline"
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.98] mb-8 select-none"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>Powering</span>
            <br />
            <span>Operations.</span>
            <br />
            <span className="text-[#E10600]">Delivering</span>
            <br />
            <span className="text-[#E10600]">Value.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            id="hero-subtext"
            className="font-sans text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed font-normal drop-shadow-sm"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
          >
            Nchez Services Limited delivers comprehensive equipment supply, specialized procurement, structural fabrication, heavy haulage, and technical field support engineered to sustain continuous operations.
          </motion.p>

          {/* Dual Action Buttons */}
          <motion.div 
            id="hero-actions" 
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            {/* Primary Red Button */}
            <button
              id="hero-primary-cta"
              onClick={onRequestQuote}
              className="px-8 py-4 bg-[#E10600] hover:bg-[#BF0500] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-md transition-all duration-200 shadow-xl shadow-[#E10600]/40 hover:shadow-[#E10600]/60 active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <span>GET QUOTE</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Secondary Glass / Outline Button */}
            <button
              id="hero-secondary-cta"
              onClick={onExploreServices}
              className="px-8 py-4 bg-[#32135C]/80 hover:bg-[#32135C] text-white border-2 border-white/30 hover:border-[#E10600] text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-md backdrop-blur-md transition-all duration-200 active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer shadow-lg"
            >
              <span>EXPLORE CAPABILITIES</span>
              <ArrowUpRight className="w-4 h-4 text-[#E10600] stroke-[2.5]" />
            </button>
          </motion.div>

        </div>
      </div>

      {/* Bottom Center Scroll to Explore Indicator from avajonn.png */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.65 }}
      >
        <button
          onClick={onExploreServices}
          aria-label="Scroll down to explore capabilities"
          className="flex flex-col items-center text-center text-gray-400 hover:text-white transition-colors cursor-pointer group"
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#F90909] mb-1">
            SCROLL TO EXPLORE
          </span>
          <div className="w-0.5 h-6 bg-gradient-to-b from-[#F90909] to-transparent animate-pulse" />
        </button>
      </motion.div>
    </section>
  );
};
