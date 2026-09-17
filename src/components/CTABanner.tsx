import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, PhoneCall } from 'lucide-react';

interface CTABannerProps {
  onRequestQuote: () => void;
  onContactTeam: () => void;
}

export const CTABanner: React.FC<CTABannerProps> = ({ 
  onRequestQuote, 
  onContactTeam 
}) => {
  return (
    <section 
      id="closing-cta-banner" 
      className="relative py-20 sm:py-28 bg-[#231F20] text-white overflow-hidden"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1513828583688-c52646db42dd?q=75&w=1200&auto=format&fit=crop"
          alt="Industrial operations"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F11]/95 via-[#32135C]/80 to-[#0F0F11]/95" />
        <div className="absolute inset-0 bg-[#E10600]/20 mix-blend-multiply" />
      </div>

      <motion.div 
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-gray-200 text-xs font-medium uppercase tracking-[0.2em] mb-4 backdrop-blur-sm border border-white/20">
          Engineered Reliability
        </div>

        <h2
          id="closing-cta-headline"
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6"
        >
          Let's Power Your Next Project.
        </h2>

        <p className="font-sans text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          From expedited equipment supplies to heavy logistics and certified fabrication, Nchez Services Limited delivers the dependability your operations demand.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="cta-banner-quote-btn"
            onClick={onRequestQuote}
            className="w-full sm:w-auto px-8 py-4 bg-[#E10600] hover:bg-[#BF0500] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-md transition-all duration-200 shadow-xl shadow-[#E10600]/40 hover:shadow-[#E10600]/60 active:scale-95 flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>GET QUOTE</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            id="cta-banner-contact-btn"
            onClick={onContactTeam}
            className="w-full sm:w-auto px-8 py-4 bg-[#32135C] hover:bg-[#230D42] text-white border-2 border-white/30 hover:border-[#E10600] text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-md transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <PhoneCall className="w-4 h-4 text-[#E10600] stroke-[2.5]" />
            <span>CONTACT US</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};
