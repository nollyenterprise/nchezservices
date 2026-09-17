import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/content';
import { ServiceItem, ServiceId } from '../types';
import { 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  ArrowUpRight, 
  Phone
} from 'lucide-react';

interface ServiceSubPageProps {
  serviceId: ServiceId;
  onNavigateHome: () => void;
  onNavigateAllServices: () => void;
  onSelectSubpage: (serviceId: ServiceId) => void;
  onRequestQuote: (serviceId?: string) => void;
  onContactTeam: () => void;
}

export const ServiceSubPage: React.FC<ServiceSubPageProps> = ({
  serviceId,
  onNavigateHome: _onNavigateHome,
  onNavigateAllServices,
  onSelectSubpage,
  onRequestQuote,
  onContactTeam,
}) => {
  // Find current service
  const currentService: ServiceItem = 
    SERVICES.find((s) => s.id === serviceId) || SERVICES[0];

  // Get related services (the other 3)
  const relatedServices = SERVICES.filter((s) => s.id !== currentService.id);

  // Scroll to top whenever serviceId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceId]);

  return (
    <div id={`service-subpage-${currentService.id}`} className="min-h-screen bg-white text-[#18181B] font-sans">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Image 1)                                                 */}
      {/* ========================================================================= */}
      <section 
        id="service-subpage-hero"
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
            src={currentService.image || '/images/pexels-vik-nesh-waran-32881851-7024831.jpg'}
            alt={currentService.title}
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.dataset.triedFallback) {
                target.dataset.triedFallback = 'true';
                target.src = '/images/pexels-vik-nesh-waran-32881851-7024831.jpg';
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
            
            {/* Eyebrow: SERVICE */}
            <motion.div 
              className="inline-flex items-center mb-5"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span 
                id="subpage-hero-eyebrow"
                className="text-xs sm:text-sm uppercase font-semibold tracking-[0.25em] text-[#E10600]"
              >
                SERVICE
              </span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1 
              id="subpage-hero-headline"
              className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {currentService.heroHeadline || currentService.title}
            </motion.h1>

            {/* Clear Subtext */}
            <motion.p 
              className="text-gray-100 text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-9 max-w-2xl drop-shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
            >
              {currentService.heroSubtext || currentService.fullDescription}
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <button
                id="subpage-hero-quote-btn"
                type="button"
                onClick={() => onRequestQuote(currentService.id)}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#E10600] hover:bg-[#C80500] text-white font-medium text-sm tracking-wider uppercase rounded-lg shadow-[0_6px_20px_rgba(225,6,0,0.35)] hover:shadow-[0_10px_24px_rgba(225,6,0,0.5)] transition-all duration-200 active:scale-95 cursor-pointer touch-manipulation"
              >
                <span>GET QUOTE</span>
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </button>

              <button
                id="subpage-hero-contact-btn"
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
      {/* 2. OVERVIEW & ASSET PERFORMANCE SECTION (Image 2)                         */}
      {/* ========================================================================= */}
      <section id="service-overview-section" className="py-20 sm:py-28 bg-white relative overflow-hidden">
        {/* Subtle grid blueprint background */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image with Corner Accent */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-[#0A0D17] aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={currentService.overviewImage || currentService.image || '/images/pexels-vik-nesh-waran-32881851-7024831.jpg'}
                  alt={currentService.title}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      target.src = '/images/pexels-vik-nesh-waran-32881851-7024831.jpg';
                    }
                  }}
                  className="w-full h-full object-cover object-center filter brightness-[0.97] contrast-[1.04]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Red Corner Accent Bracket (As seen in Image 2 bottom-right of picture) */}
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-20 h-20 border-r-2 border-b-2 border-[#E10600] pointer-events-none" />
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Eyebrow: [SERVICE NAME] */}
              <div className="inline-flex items-center">
                <span 
                  id="subpage-overview-eyebrow"
                  className="text-xs sm:text-sm uppercase font-semibold tracking-[0.25em] text-[#E10600]"
                >
                  {currentService.title.toUpperCase()}
                </span>
              </div>

              {/* Main Headline */}
              <h2 
                id="subpage-overview-headline"
                className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#32135C] tracking-tight leading-[1.18]"
              >
                {currentService.overviewHeadline || `Keeping your operations running with certified excellence`}
              </h2>

              {/* Explanatory Paragraphs */}
              <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
                {currentService.overviewParagraphs && currentService.overviewParagraphs.length > 0 ? (
                  currentService.overviewParagraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
                ) : (
                  <>
                    <p>{currentService.fullDescription}</p>
                    <p>
                      We combine rigorous engineering standards, OEM manufacturer direct alliances, and dedicated local field support to ensure your assets maintain maximum operational uptime and longevity.
                    </p>
                  </>
                )}
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 3. CORE CAPABILITIES ("WHAT WE DELIVER" - Image 3)                        */}
      {/* ========================================================================= */}
      <section id="service-capabilities-section" className="py-20 sm:py-28 bg-[#F3F6FA] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center mb-3">
              <span className="text-xs sm:text-sm uppercase font-semibold tracking-[0.25em] text-[#E10600]">
                CORE CAPABILITIES
              </span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#32135C] tracking-tight leading-tight">
              What we deliver
            </h2>
          </div>

          {/* 6 Capabilities Grid (2 Columns x 3 Rows - matching Image 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {(currentService.coreCapabilities || [
              { title: 'Quality Assurance & Certification', description: 'Comprehensive inspection, hydrostatic testing, and full documentation to international quality codes.' },
              { title: 'OEM Verified Sourcing', description: 'Direct supply lines from vetted manufacturers ensuring authentic parts and full warranty coverage.' },
              { title: '24/7 Field Support', description: 'Dedicated technical specialists ready to respond to urgent operational and shutdown requirements.' },
              { title: 'Asset Integrity Management', description: 'Condition monitoring, preventive maintenance protocols, and asset life extension strategies.' },
              { title: 'Expedited Project Logistics', description: 'Fast-track transport, route clearance, and customs handling for time-critical materials.' },
              { title: 'Technical Compliance Auditing', description: 'Full compliance tracking adhering to API, ASME, ISO, and Nigerian regulatory requirements.' },
            ]).map((cap, idx) => (
              <div
                key={idx}
                id={`capability-card-${idx}`}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md border border-gray-200/80 hover:border-[#E10600]/50 transition-all duration-300 flex items-start gap-4 sm:gap-5"
              >
                {/* Red/Orange Checkmark Icon Square (Image 3) */}
                <div className="w-10 h-10 rounded-lg bg-[#E10600] text-white flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#18181B] tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 4. KEY DELIVERABLES ("TANGIBLE OUTCOMES" - Image 4)                       */}
      {/* ========================================================================= */}
      <section id="service-deliverables-section" className="py-20 sm:py-28 bg-[#070A14] text-white relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Header */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center">
                <span className="text-xs sm:text-sm uppercase font-semibold tracking-[0.25em] text-[#E10600]">
                  KEY DELIVERABLES
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Tangible outcomes you can build on
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal pt-2">
                Every engagement produces documented, validated results, engineered to perform and built to last.
              </p>
            </div>

            {/* Right Deliverables Stack (Image 4) */}
            <div className="lg:col-span-7 space-y-3.5">
              {(currentService.keyDeliverables || [
                '100% Mill Test Reports (MTR) and material traceability certificates',
                'Factory Acceptance Test (FAT) dossiers and inspection reports',
                'OEM warranty certificates and manufacturer documentation',
                'Non-destructive testing (NDT) and hydrostatic test charts',
                'Signed Proof of Delivery (POD) and commissioning sign-offs',
                'Asset health dashboards and ongoing technical support records',
              ]).map((deliverable, idx) => (
                <div
                  key={idx}
                  id={`deliverable-item-${idx}`}
                  className="bg-[#0F172A]/85 hover:bg-[#152238] border border-white/10 hover:border-white/20 rounded-xl p-4 sm:p-5 flex items-center gap-4 transition-colors duration-200"
                >
                  {/* Red check square */}
                  <div className="w-7 h-7 rounded-md bg-[#E10600] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>

                  <span className="text-gray-100 text-sm sm:text-base font-normal leading-snug">
                    {deliverable}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 5. RELATED SERVICES & NAVIGATION BAR (Image 5)                            */}
      {/* ========================================================================= */}
      <section id="related-services-section" className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="mb-8 sm:mb-10">
            <div className="inline-flex items-center mb-2">
              <span className="text-xs sm:text-sm uppercase font-semibold tracking-[0.25em] text-[#E10600]">
                RELATED SERVICES
              </span>
            </div>
          </div>

          {/* 3 Related Service Cards Grid (Image 5) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
            {relatedServices.map((relService) => (
              <button
                key={relService.id}
                type="button"
                id={`related-service-card-${relService.id}`}
                onClick={() => onSelectSubpage(relService.id)}
                className="group w-full text-left bg-[#F0F4F8] hover:bg-white border border-transparent hover:border-[#E10600] rounded-2xl p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer touch-manipulation active:scale-[0.99]"
              >
                <span className="font-display font-bold text-base sm:text-lg text-[#18181B] group-hover:text-[#32135C] transition-colors pr-3">
                  {relService.title}
                </span>
                <ArrowRight className="w-5 h-5 text-[#E10600] group-hover:translate-x-1.5 transition-transform duration-200 flex-shrink-0" strokeWidth={2} />
              </button>
            ))}
          </div>

          {/* Bottom Navigation Bar (Image 5: All Services on left, Contact Us on right) */}
          <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
            {/* Left Button: All Services */}
            <button
              type="button"
              id="back-to-all-services-btn"
              onClick={onNavigateAllServices}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-gray-700 hover:text-[#32135C] transition-colors cursor-pointer touch-manipulation py-2 px-1"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2]" />
              <span>All Services</span>
            </button>

            {/* Right Button: Contact Us (User requested: "and that place they put Start project put Contact Us") */}
            <button
              type="button"
              id="subpage-contact-action-btn"
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
      {/* 6. CLOSING CTA BANNER ("LET'S POWER YOUR NEXT PROJECT." - Image 6)        */}
      {/* ========================================================================= */}
      <section 
        id="subpage-closing-cta"
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
            From expedited equipment supplies to heavy logistics and certified fabrication, Nchez Services Limited delivers the dependability your operations demand.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            {/* Solid Red: GET QUOTE */}
            <button
              type="button"
              id="subpage-cta-get-quote"
              onClick={() => onRequestQuote(currentService.id)}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#E10600] hover:bg-[#C80500] text-white font-bold text-sm tracking-wider uppercase rounded-xl shadow-[0_10px_25px_rgba(225,6,0,0.4)] hover:shadow-[0_14px_30px_rgba(225,6,0,0.55)] transition-all duration-200 active:scale-95 cursor-pointer touch-manipulation"
            >
              <span>GET QUOTE</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Outlined / Deep Purple: CONTACT US */}
            <button
              type="button"
              id="subpage-cta-contact-team"
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
