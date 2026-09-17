import React from 'react';
import { ProductItem } from '../types';
import { X, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestQuote,
}) => {
  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-[#32135C]/20 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#32135C] text-white p-6 sm:p-8 flex items-start justify-between border-b-4 border-[#E10600]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E10600]">
              Product Overview · Nchez Services Limited Inventory
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
              {product.name}
            </h3>
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
          
          <div className="h-64 sm:h-72 w-full rounded-xl overflow-hidden relative border border-gray-200">
            <img 
              src={product.image} 
              alt={product.name}
              loading="lazy"
              decoding="async"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.dataset.triedFallback) {
                  target.dataset.triedFallback = 'true';
                  if (product.id === 'valves') target.src = '/images/valve.jpg';
                  else if (product.id === 'pumps') target.src = '/images/pumps.jpg';
                  else target.src = '/images/service-equipment.jpg';
                }
              }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 text-xs font-semibold text-white flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#E10600]" />
              <span>Sourced directly from verified OEM facilities</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#32135C] mb-2">
              Product Information
            </h4>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              {product.description}
            </p>
          </div>

          {product.highlights && product.highlights.length > 0 && (
            <div className="bg-[#FAFAFA] p-5 rounded-xl border border-gray-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#32135C] mb-3">
                Key Technical Specifications &amp; Range
              </h4>
              <ul className="space-y-2">
                {product.highlights.map((hl, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-[#E10600] font-bold">•</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {product.standards && product.standards.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#32135C] mb-2">
                Manufacturing &amp; Testing Standards
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.standards.map((std, idx) => (
                  <span key={idx} className="px-3 py-1 bg-[#F3E6EC]/70 text-[#32135C] text-xs font-bold rounded-md border border-[#32135C]/20">
                    {std}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="bg-[#F3E6EC]/40 p-5 rounded-xl border border-[#32135C]/15">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#32135C] mb-2">
              Quality &amp; Supply Guarantee
            </h4>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
              All deliveries include complete OEM certification, traceability records, and Material Test Reports (MTR) inspected to standard compliance guidelines.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-[#FAFAFA] border-t border-[#32135C]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 bg-white hover:bg-gray-100 border border-[#32135C]/20 text-xs font-semibold uppercase tracking-wider rounded-md text-[#32135C] transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onRequestQuote(product.name);
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#E10600] hover:bg-[#BF0500] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#E10600]/30"
          >
            <span>Get Quote For {product.name}</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </div>
  );
};
