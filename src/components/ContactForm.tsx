import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, SERVICES } from '../data/content';
import { QuoteFormData, ServiceId } from '../types';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ChevronDown,
  ArrowRight
} from 'lucide-react';

interface ContactFormProps {
  initialService?: ServiceId | '';
  initialProduct?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ 
  initialService = '',
  initialProduct = '' 
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    company: '',
    serviceInterest: (initialService as ServiceId) || 'equipment',
    message: '',
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        serviceInterest: initialService as ServiceId,
      }));
    }
    if (initialProduct) {
      setFormData((prev) => ({
        ...prev,
        message: `Hello Nchez Services Limited team, I would like to request a quotation and technical specification sheet for: ${initialProduct}. Please include pricing, lead time to Port Harcourt, and standard documentation options.`,
      }));
    }
  }, [initialService, initialProduct]);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [refNumber, setRefNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email address, and project details.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      const generatedRef = 'NSL-' + Math.floor(100000 + Math.random() * 900000);
      setRefNumber(generatedRef);
      setStatus('success');
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      company: '',
      serviceInterest: 'equipment',
      message: '',
    });
    setStatus('idle');
  };

  const directMailtoUrl = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
    `Enquiry from ${formData.fullName || 'Client'} [${formData.serviceInterest}]`
  )}&body=${encodeURIComponent(
    `Name: ${formData.fullName}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nService: ${formData.serviceInterest}\n\nProject Scope:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0F0F11] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center mb-3">
            <span 
              id="contact-eyebrow"
              className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#E10600]"
            >
              GET IN TOUCH
            </span>
          </div>

          <h2
            id="contact-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Let's Discuss Your Project
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed font-normal">
            Tell us about your requirements. Our engineering team will respond within two business days to discuss how Nchez Services Limited can support your project.
          </p>
        </div>

        {/* Straight 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <a
              id="contact-email-card"
              href={`mailto:${COMPANY_INFO.email}`}
              className="group block p-5 sm:p-6 rounded-xl bg-[#18181B] border border-white/10 hover:border-[#E10600] transition-all duration-300 shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/[0.06] border border-white/10 text-[#E10600] group-hover:bg-[#E10600] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <Mail className="w-5 h-5 transition-colors" />
                </div>
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    EMAIL ADDRESS
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-white group-hover:text-[#E10600] transition-colors break-all">
                    {COMPANY_INFO.email}
                  </div>
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              id="contact-phone-card"
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="group block p-5 sm:p-6 rounded-xl bg-[#18181B] border border-white/10 hover:border-[#E10600] transition-all duration-300 shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/[0.06] border border-white/10 text-[#E10600] group-hover:bg-[#E10600] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <Phone className="w-5 h-5 transition-colors" />
                </div>
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    PHONE
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-white group-hover:text-[#E10600] transition-colors">
                    {COMPANY_INFO.phone}
                  </div>
                </div>
              </div>
            </a>

            {/* Office Card */}
            <div id="contact-location-card" className="p-5 sm:p-6 rounded-xl bg-[#18181B] border border-white/10 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/[0.06] border border-white/10 text-[#E10600] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    OPERATING OFFICE
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-gray-200 leading-snug">
                    {COMPANY_INFO.address}
                  </div>
                  <div className="text-xs text-gray-400 pt-0.5">
                    Rivers State, Nigeria
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Rectangular Form Card */}
          <div className="lg:col-span-7 w-full">
            {status === 'success' ? (
              <div id="contact-form-success" className="bg-[#18181B] border border-white/15 p-6 sm:p-10 rounded-2xl text-center space-y-6 animate-in fade-in duration-300 shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="max-w-md mx-auto space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    Enquiry Submitted Successfully
                  </h3>
                  <p className="text-sm text-gray-300">
                    Thank you for reaching out to Nchez Services Limited. Our engineering team will review your specifications and respond promptly.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#0F0F11] border border-white/10 text-left max-w-md mx-auto shadow-inner">
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Tracking Reference:</div>
                  <div className="text-2xl font-mono font-bold text-[#E10600] mt-0.5">{refNumber}</div>
                  <div className="text-xs text-gray-300 mt-2">
                    Enquiry Destination: <span className="font-bold text-white">{COMPANY_INFO.email}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={directMailtoUrl}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#E10600] hover:bg-[#BF0500] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Open in Email Client</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form id="quote-contact-form" onSubmit={handleSubmit} className="bg-[#18181B] p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/10 shadow-2xl space-y-6">
                {status === 'error' && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-xs text-red-200 flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 text-[#E10600] flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                      Full Name <span className="text-[#E10600]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#0F0F11] border border-white/15 focus:border-[#E10600] focus:ring-1 focus:ring-[#E10600] rounded-lg px-4 py-3.5 text-white text-sm sm:text-base focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                      Email Address <span className="text-[#E10600]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0F0F11] border border-white/15 focus:border-[#E10600] focus:ring-1 focus:ring-[#E10600] rounded-lg px-4 py-3.5 text-white text-sm sm:text-base focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Company & Service of Interest */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-company" className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                      Company (Optional)
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#0F0F11] border border-white/15 focus:border-[#E10600] focus:ring-1 focus:ring-[#E10600] rounded-lg px-4 py-3.5 text-white text-sm sm:text-base focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-service" className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                      Service of Interest
                    </label>
                    <div className="relative">
                      <select
                        id="contact-service"
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value as ServiceId })}
                        className="w-full bg-[#0F0F11] border border-white/15 focus:border-[#E10600] focus:ring-1 focus:ring-[#E10600] rounded-lg px-4 py-3.5 pr-10 text-white text-sm sm:text-base focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#0F0F11] text-gray-400">
                          Select a service...
                        </option>
                        {SERVICES.map((srv) => (
                          <option key={srv.id} value={srv.id} className="bg-[#0F0F11] text-white">
                            {srv.title}
                          </option>
                        ))}
                        <option value="general" className="bg-[#0F0F11] text-white">
                          General Industrial Engineering Enquiry
                        </option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-400 pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                {/* Row 3: Project Details Textarea */}
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                    Project Details <span className="text-[#E10600]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project scope, timeline, and location..."
                    className="w-full bg-[#0F0F11] border border-white/15 focus:border-[#E10600] focus:ring-1 focus:ring-[#E10600] rounded-lg px-4 py-3.5 text-white placeholder-gray-500 text-sm sm:text-base focus:outline-none transition-colors resize-y min-h-[120px]"
                  />
                </div>

                {/* Row 4: Submit Button */}
                <div className="pt-2">
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-[#E10600] hover:bg-[#BF0500] active:scale-[0.99] text-white font-bold text-xs sm:text-sm uppercase tracking-widest rounded-lg shadow-xl shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-70 disabled:pointer-events-none"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>SUBMITTING ENQUIRY...</span>
                      </>
                    ) : (
                      <>
                        <span>SUBMIT ENQUIRY</span>
                        <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
