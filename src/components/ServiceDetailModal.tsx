import React from 'react';
import { ServiceItem } from '../types';
import { 
  X, 
  CheckCircle, 
  ArrowUpRight, 
  ShieldCheck, 
  Wrench, 
  Truck, 
  TrendingDown, 
  Flame,
  Zap,
  Wind,
  Building2
} from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestQuote,
}) => {
  if (!service) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-8 h-8 text-[#E10600]" />;
      case 'Flame':
        return <Flame className="w-8 h-8 text-[#E10600]" />;
      case 'Wind':
        return <Wind className="w-8 h-8 text-[#E10600]" />;
      case 'Building2':
        return <Building2 className="w-8 h-8 text-[#E10600]" />;
      case 'Wrench':
        return <Wrench className="w-8 h-8 text-[#E10600]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-[#E10600]" />;
      case 'Truck':
        return <Truck className="w-8 h-8 text-[#E10600]" />;
      case 'TrendingDown':
        return <TrendingDown className="w-8 h-8 text-[#E10600]" />;
      default:
        return <Wrench className="w-8 h-8 text-[#E10600]" />;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#32135C]/20 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#32135C] text-white p-6 sm:p-8 flex items-start justify-between border-b-4 border-[#E10600]">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
              {getIcon(service.icon)}
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E10600] flex items-center gap-2">
                <span>Service {service.number}</span>
                <span>·</span>
                <span>Industrial Solutions</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                {service.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#18181B]">
          
          {/* Prominent Service Image */}
          <div className="relative h-48 sm:h-56 w-full rounded-xl overflow-hidden bg-gray-900 border-2 border-[#32135C]/15 shadow-inner">
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 bg-[#32135C]/90 text-white font-semibold text-xs px-3 py-1 rounded-md border border-white/20">
              SERVICE #{service.number}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E10600] mb-2">
              Operational Scope
            </h4>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              {service.fullDescription}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="bg-[#F3E6EC]/40 p-5 rounded-xl border border-[#32135C]/20">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#32135C] mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E10600] stroke-[2.5]" />
              Standard Scope of Supply &amp; Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-normal">
                  <CheckCircle className="w-4 h-4 text-[#E10600] stroke-[2.5] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* QA/QC & Standards */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#32135C] mb-2">
              Quality Assurance &amp; Compliance Benchmarks
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.specs.map((spec, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-[#F3E6EC] text-[#32135C] text-xs font-medium border border-[#32135C]/20"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-[#F3E6EC]/25 border-t border-[#32135C]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#796094] font-medium">
            Backed by Port Harcourt Hub Logistics &amp; Certified Fleet
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 bg-white hover:bg-gray-100 border border-[#32135C]/20 text-xs font-semibold uppercase tracking-wider rounded-md text-[#32135C] transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(service.id);
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#E10600] hover:bg-[#BF0500] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#E10600]/30"
            >
              <span>Get Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
