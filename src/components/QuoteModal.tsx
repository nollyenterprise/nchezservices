import React, { useState } from 'react';
import { X, CheckCircle, Send, Shield } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/content';
import { ServiceId } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceId | '';
  initialProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
  initialProduct = '',
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    serviceCategory: initialService || 'equipment',
    productInterest: initialProduct || '',
    urgency: 'Standard (1-2 weeks)',
    deliveryLocation: 'Port Harcourt, Nigeria',
    specifications: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#32135C]/20 overflow-hidden my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#32135C] text-white px-6 py-5 flex items-center justify-between border-b-4 border-[#E10600]">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#E10600]">
              <span>COMMERCIAL INQUIRY</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Get a Fast-Track Quote
            </h3>
          </div>
          <button
            onClick={resetAndClose}
            aria-label="Close modal"
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-[#E10600]/10 text-[#E10600] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="font-display text-2xl font-bold text-[#32135C]">
                Quote Request Received
              </h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-[#18181B]">{formData.fullName}</span>. Our technical procurement team in Port Harcourt is reviewing your requirements and will contact you within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-8 py-3 bg-[#E10600] hover:bg-[#BF0500] text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-lg cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#32135C] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Engr. Emeka Okon"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#32135C]/20 text-sm focus:outline-none focus:border-[#E10600] focus:ring-1 focus:ring-[#E10600]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#32135C] mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Energy Operations Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#32135C]/20 text-sm focus:outline-none focus:border-[#E10600] focus:ring-1 focus:ring-[#E10600]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#32135C] mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#32135C]/20 text-sm focus:outline-none focus:border-[#E10600] focus:ring-1 focus:ring-[#E10600]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#32135C] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 803 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#32135C]/20 text-sm focus:outline-none focus:border-[#E10600] focus:ring-1 focus:ring-[#E10600]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#32135C] mb-1">
                    Service Capability
                  </label>
                  <select
                    value={formData.serviceCategory}
                    onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value as ServiceId })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#32135C]/20 text-sm bg-white focus:outline-none focus:border-[#E10600]"
                  >
                    {SERVICE_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#32135C] mb-1">
                    Delivery Location
                  </label>
                  <input
                    type="text"
                    placeholder="Port Harcourt / Onne / Lagos / Offshore"
                    value={formData.deliveryLocation}
                    onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#32135C]/20 text-sm focus:outline-none focus:border-[#E10600]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#32135C] mb-1">
                  Scope and Specifications
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe the machinery specs, quantities, part numbers, or project timeline..."
                  value={formData.specifications}
                  onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#32135C]/20 text-sm focus:outline-none focus:border-[#E10600]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#E10600] hover:bg-[#BF0500] text-white font-semibold text-sm uppercase tracking-wider rounded-lg shadow-xl shadow-[#E10600]/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  {loading ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Submit Quote Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-[#796094]">
                <Shield className="w-3.5 h-3.5 text-[#E10600]" />
                <span>NDA Protected • Official Response within 24 Hours</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
