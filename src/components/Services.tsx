import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';
import { 
  ShieldCheck, 
  Truck, 
  TrendingDown, 
  Wrench, 
  ArrowRight
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceItem: ServiceItem) => void;
  onRequestQuoteWithService: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ 
  onSelectService,
  onRequestQuoteWithService: _onRequestQuoteWithService 
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#E10600]" strokeWidth={2} />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-[#E10600]" strokeWidth={2} />;
      case 'TrendingDown':
        return <TrendingDown className="w-5 h-5 text-[#E10600]" strokeWidth={2} />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-[#E10600]" strokeWidth={2} />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#E10600]" strokeWidth={2} />;
    }
  };

  return (
    <section 
      id="services" 
      className="py-20 sm:py-24 bg-white text-[#18181B] relative border-b border-gray-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center mb-3">
            <span 
              id="services-eyebrow"
              className="text-xs uppercase font-semibold tracking-[0.25em] text-[#E10600]"
            >
              WHAT WE DO
            </span>
          </div>
          <h2
            id="services-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#32135C] tracking-tight leading-tight"
          >
            Engineering & Industrial Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            Four core capabilities, one accountable partner. We architect, supply, transport, and construct high-performance industrial assets, delivering certainty from initial procurement to long-term field operations.
          </p>
        </motion.div>

        {/* Photographic Cards Grid - 100% Clickable on Mobile, Tablet & Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {SERVICES.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex"
              >
                <button
                  type="button"
                  id={`service-card-${service.id}`}
                  onClick={() => onSelectService(service)}
                  className="group relative w-full text-left min-h-[400px] sm:min-h-[430px] lg:min-h-[450px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between p-5 sm:p-7 bg-[#0A0D17] border border-gray-700/60 hover:border-[#E10600] active:scale-[0.99] touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600]"
                >
                  {/* Full Background Photographic Image - Highly Visible & Sharp */}
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.triedFallback) {
                        target.dataset.triedFallback = 'true';
                        target.src = '/image/Strategic Procurement.jpg';
                      }
                    }}
                    className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.06] group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Carefully Balanced Gradient: Clear photo above, protected readable text below */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D17] via-[#0A0D17]/60 to-black/25 group-hover:via-[#0A0D17]/50 transition-colors duration-300 pointer-events-none" />

                  {/* Top Row: Service Number Indicator (01, 02, 03...) */}
                  <div className="relative z-10 flex items-center justify-between pointer-events-none">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-black/75 backdrop-blur-md border border-white/25 text-white font-mono font-semibold text-xs tracking-wider shadow-md">
                      {service.number}
                    </span>
                  </div>

                  {/* Bottom Content Area: Frosted high-contrast container */}
                  <div className="relative z-10 space-y-3 pt-4 pointer-events-none">
                    {/* Icon + Title Row */}
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-black/70 backdrop-blur-md border border-white/20 flex-shrink-0 shadow-sm">
                        {getIcon(service.icon)}
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-red-100 transition-colors leading-snug drop-shadow-md">
                        {service.title}
                      </h3>
                    </div>

                    {/* Short Description - High contrast & readable */}
                    <p className="text-gray-100 text-sm sm:text-base font-normal leading-relaxed drop-shadow-sm">
                      {service.shortDescription}
                    </p>

                    {/* Red "Learn more ->" Link */}
                    <div className="pt-2 flex items-center justify-between border-t border-white/20">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#E10600] group-hover:text-red-400 transition-colors">
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 stroke-[2] transition-transform duration-300 group-hover:translate-x-1.5" />
                      </span>
                    </div>
                  </div>

                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
