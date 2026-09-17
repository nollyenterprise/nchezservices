import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export const Partners: React.FC = () => {
  const [mantracImgSrc, setMantracImgSrc] = useState('/images/logo-mantrac.png');

  const handleMantracError = () => {
    if (mantracImgSrc === '/images/logo-mantrac.png') {
      setMantracImgSrc('/image/logo-mantrac.png');
    } else if (mantracImgSrc === '/image/logo-mantrac.png') {
      setMantracImgSrc('/images/mantrac-logo.png');
    }
  };

  return (
    <section id="partners" className="py-24 bg-white text-[#18181B] border-t border-[#F3E6EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center mb-3">
            <span 
              id="partners-eyebrow"
              className="text-xs uppercase font-semibold tracking-[0.25em] text-[#E10600]"
            >
              PARTNERS
            </span>
          </div>
          <h2
            id="partners-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#32135C] tracking-tight leading-tight"
          >
            Alliances that power critical operations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            We collaborate directly with world-class manufacturers and authorized distributors to guarantee genuine machinery, certified warranties, and reliable operational uptime.
          </p>
        </div>

        {/* Featured Mantrac Showcase Card */}
        <div 
          id="partner-mantrac-featured"
          className="bg-gradient-to-br from-[#32135C] to-[#18181B] text-white rounded-2xl p-8 sm:p-12 border-2 border-[#32135C] shadow-2xl relative overflow-hidden group"
        >
          {/* Background red glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E10600]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Mantrac Logo */}
            <div className="lg:col-span-5 flex flex-col items-start gap-6">
              <div className="p-4 bg-white rounded-xl shadow-2xl border border-white/30 inline-flex items-center justify-center">
                <img
                  src={mantracImgSrc}
                  alt="Mantrac Partner"
                  onError={handleMantracError}
                  className="h-16 sm:h-20 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Right: Partnership Details */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                  Mantrac Strategic Alliance
                </h3>
                
                <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6 font-normal">
                  Through our strategic agreement with Mantrac, Nchez Services Limited delivers genuine industrial equipment, power systems, replacement components, and factory certified maintenance support.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-white font-medium">
                    <CheckCircle className="w-4 h-4 text-[#E10600] flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Genuine Spares</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-white font-bold">
                    <CheckCircle className="w-4 h-4 text-[#E10600] flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Factory Warranty</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-white font-bold">
                    <CheckCircle className="w-4 h-4 text-[#E10600] flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>Rapid Field Dispatch</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
