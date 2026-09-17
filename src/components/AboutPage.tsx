import React from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  ArrowRight, 
  Target, 
  Eye, 
  Shield, 
  Award, 
  Users, 
  Zap, 
  Globe, 
  TrendingUp
} from 'lucide-react';

interface AboutPageProps {
  onNavigateHome: () => void;
  onExploreServices: () => void;
  onRequestQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome: _onNavigateHome,
  onExploreServices,
  onRequestQuote,
}) => {
  return (
    <div id="about-page" className="min-h-screen bg-white text-[#18181B] pt-0 pb-0">

      {/* ========================================================================= */}
      {/* SECTION 1 (nchez about page 1.png): Full-width About Hero Banner          */}
      {/* ========================================================================= */}
      <section id="about-top-banner" className="relative w-full overflow-hidden mb-16 sm:mb-24 bg-[#0D1322]">
        {/* Background Image of Engineering Team */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.05, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src="/images/about-team.jpg"
            alt="Nchez Services Limited engineering team on-site"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.dataset.triedFallback) {
                target.dataset.triedFallback = 'true';
                target.src = '/image/Strategic Procurement.jpg';
              }
            }}
            className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05]"
          />
          {/* Subtle balanced gradient overlay for high image visibility and text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F1C]/85 via-[#0B0F1C]/55 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1C]/90 via-transparent to-black/20" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28 lg:pb-32">
          <div className="max-w-3xl">
            
            {/* Eyebrow with LIMITED */}
            <motion.div 
              className="flex items-center mb-6"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#E10600]">
                ABOUT NCHEZ SERVICES LIMITED
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Delivering Industrial Precision & Engineering Excellence
            </motion.h1>

            {/* Paragraph copy structured in line with Nchez Services Limited offerings */}
            <motion.p 
              className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-2xl font-normal"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
            >
              Nchez Services Limited is an international engineering and industrial support company built on a single commitment: delivering certified industrial equipment and material supply, heavy haulage and marine logistics, strategic cost-effective procurement, and precision mechanical fabrication with uncompromising standard and transparency.
            </motion.p>

            {/* Buttons: Get Quote in Red, Explore Services in Brand Purple Palette */}
            <motion.div 
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <button
                type="button"
                onClick={onRequestQuote}
                id="about-hero-get-quote-btn"
                className="px-7 sm:px-8 py-4 bg-[#E10600] hover:bg-[#BF0500] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-md shadow-xl transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
              >
                <span>GET QUOTE</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                id="about-hero-explore-services-btn"
                className="px-7 sm:px-8 py-4 bg-[#32135C] hover:bg-[#431B7B] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-md transition-all duration-300 border border-[#32135C]/60 shadow-lg flex items-center gap-2.5 cursor-pointer"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2 (nchez about 2.png): Engineering partners narrative & approach  */}
      {/* ========================================================================= */}
      <section id="about-approach" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Industrial Engineering Team Photo with "Our Approach" overlay badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-900 group">
              <img
                src="/images/about-team.jpg"
                alt="Nchez Services Limited engineering team reviewing technical plans"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    target.src = '/image/Strategic Procurement.jpg';
                  }
                }}
                className="w-full h-[460px] sm:h-[540px] lg:h-[580px] object-cover object-top filter brightness-[0.95] contrast-[1.05] group-hover:scale-102 transition-transform duration-700 ease-out"
              />

              {/* Gradient shadow for text readibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Overlaid Card: "OUR APPROACH" in bottom left */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-sm bg-[#0B0D17]/95 border-l-4 border-[#E10600] p-5 sm:p-6 rounded-r-xl shadow-2xl backdrop-blur-md">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#E10600] block mb-2">
                  OUR APPROACH
                </span>
                <p className="text-white text-xs sm:text-sm font-normal leading-relaxed">
                  Engineering precision applied with commercial discipline, delivering projects that perform for decades.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Main Heading, narrative copy, bullet points, CTA button */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#32135C] tracking-tight leading-[1.15] mb-6">
              Comprehensive Industrial Support & Technical Execution
            </h2>

            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 font-normal">
              Nchez Services Limited delivers complex infrastructure with uncompromising precision and transparency. We integrate engineering, procurement, construction, and long-term support into a single, accountable partnership, enabling our clients to focus on their operations while we handle the technical execution.
            </p>

            {/* Checklist with red square checkboxes */}
            <div className="space-y-4 mb-9">
              {[
                'Direct OEM Equipment & Spare Parts Supply (Valves, Pumps, Compressors, Flanges)',
                'Heavy-Duty Haulage, Lowbed Fleet & Marine Barging Logistics',
                'Strategic Procurement with Proven 15% to 25% Material Cost Savings',
                'Precision Mechanical Construction & ASME Code Certified Fabrication',
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-[4px] bg-[#E10600] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-gray-800 leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <button
                type="button"
                onClick={onRequestQuote}
                id="about-work-with-us-btn"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#32135C] hover:bg-[#E10600] text-white rounded-md font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer group"
              >
                <span>WORK WITH US</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 stroke-[2.5]" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3 (nchez about 3.png): Our Mission & Our Vision                   */}
      {/* ========================================================================= */}
      <section id="about-mission-vision" className="bg-[#F8F9FA] py-20 sm:py-24 border-y border-gray-200/80 mb-20 sm:mb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Our Mission */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200/70 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#32135C] text-white flex items-center justify-center shadow-md flex-shrink-0">
                    <Target className="w-6 h-6 text-[#E10600]" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#32135C]">
                    Our Mission
                  </h2>
                </div>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                  To provide innovative, reliable, and sustainable engineering solutions that empower industries across Africa, while maintaining the highest standards of safety, quality, and environmental responsibility.
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  We are dedicated to building long-term partnerships with our clients by consistently delivering exceptional value and exceeding expectations on every project.
                </p>
              </div>
            </div>

            {/* Our Vision */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200/70 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#32135C] text-white flex items-center justify-center shadow-md flex-shrink-0">
                    <Eye className="w-6 h-6 text-[#E10600]" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#32135C]">
                    Our Vision
                  </h2>
                </div>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                  To be recognized as Africa's most trusted and innovative industrial engineering company, setting the benchmark for excellence in engineering, procurement, and project delivery.
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  We envision a future where sustainable industrial development drives economic growth and improves quality of life across the continent.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4 (nchez about 4.png): Our Values / What Drives Us Forward       */}
      {/* ========================================================================= */}
      <section id="about-values" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-block mb-3">
            <span className="px-4 py-1.5 bg-[#32135C]/5 text-[#32135C] text-xs font-bold uppercase tracking-widest rounded-full border border-[#32135C]/15">
              Our Values
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#32135C] tracking-tight">
            What Drives Us Forward
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Our core values guide every decision we make and every project we undertake.
          </p>
        </div>

        {/* 6 Core Value Cards in 3x2 Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* 1. Safety First */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-200/80 hover:border-[#E10600]/60 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#32135C]/10 text-[#32135C] group-hover:bg-[#E10600] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#32135C] mb-3 group-hover:text-[#E10600] transition-colors">
                Safety First
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                We prioritize safety in every project, adhering to international standards and best practices.
              </p>
            </div>
          </div>

          {/* 2. Quality Excellence */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-200/80 hover:border-[#E10600]/60 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#32135C]/10 text-[#32135C] group-hover:bg-[#E10600] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#32135C] mb-3 group-hover:text-[#E10600] transition-colors">
                Quality Excellence
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Delivering world-class engineering solutions that exceed expectations.
              </p>
            </div>
          </div>

          {/* 3. Client Focus */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-200/80 hover:border-[#E10600]/60 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#32135C]/10 text-[#32135C] group-hover:bg-[#E10600] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#32135C] mb-3 group-hover:text-[#E10600] transition-colors">
                Client Focus
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Building lasting partnerships through exceptional service and reliability.
              </p>
            </div>
          </div>

          {/* 4. Innovation & Agility */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-200/80 hover:border-[#E10600]/60 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#32135C]/10 text-[#32135C] group-hover:bg-[#E10600] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#32135C] mb-3 group-hover:text-[#E10600] transition-colors">
                Innovation & Agility
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Pioneering responsive methods, modern tooling, and rapid turnaround across challenging operational environments.
              </p>
            </div>
          </div>

          {/* 5. Integrity & Compliance */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-200/80 hover:border-[#E10600]/60 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#32135C]/10 text-[#32135C] group-hover:bg-[#E10600] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#32135C] mb-3 group-hover:text-[#E10600] transition-colors">
                Integrity & Compliance
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Strict adherence to international codes, environmental stewardship, and uncompromising commercial transparency.
              </p>
            </div>
          </div>

          {/* 6. Sustainable Growth */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-200/80 hover:border-[#E10600]/60 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#32135C]/10 text-[#32135C] group-hover:bg-[#E10600] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#32135C] mb-3 group-hover:text-[#E10600] transition-colors">
                Sustainable Growth
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Investing in human capital, Nigerian local content development, and long-term industrial capability.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5 (nchez about 5.png): Why Choose Nchez Services Limited? (Stats) */}
      {/* ========================================================================= */}
      <section id="about-stats-banner" className="py-20 sm:py-24 bg-gradient-to-br from-[#32135C] via-[#250E44] to-[#16072B] text-white relative overflow-hidden">
        {/* Subtle geometric background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,6,0,0.18),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(50,19,92,0.6),transparent_50%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Copy matching screenshot */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm uppercase font-bold tracking-[0.25em] text-[#E10600] mb-4">
              Why Choose Nchez Services Limited
            </h2>
            <p className="text-white/90 text-base sm:text-lg lg:text-xl font-normal leading-relaxed">
              With over 6+ years of proven expertise, 200+ completed projects, and unwavering commitment to excellence, we are your trusted partner for industrial engineering solutions across Africa.
            </p>
          </div>

          {/* 4 Stats Metrics in Row matching screenshot */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center">
            
            {/* Stat 1 */}
            <div className="p-4">
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                6+
              </div>
              <div className="text-xs sm:text-sm font-medium text-white/75 mt-2 uppercase tracking-wider">
                Years Experience
              </div>
            </div>

            {/* Stat 2 */}
            <div className="p-4">
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                200+
              </div>
              <div className="text-xs sm:text-sm font-medium text-white/75 mt-2 uppercase tracking-wider">
                Projects Completed
              </div>
            </div>

            {/* Stat 3 */}
            <div className="p-4">
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                8+
              </div>
              <div className="text-xs sm:text-sm font-medium text-white/75 mt-2 uppercase tracking-wider">
                Industries Served
              </div>
            </div>

            {/* Stat 4 */}
            <div className="p-4">
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                98%
              </div>
              <div className="text-xs sm:text-sm font-medium text-white/75 mt-2 uppercase tracking-wider">
                Client Satisfaction
              </div>
            </div>

          </div>

          {/* Bottom Action inside Banner: "GET QUOTE" and "EXPLORE SERVICES" */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onRequestQuote}
              className="w-full sm:w-auto px-8 py-4 bg-[#E10600] hover:bg-[#BF0500] text-white font-bold text-xs sm:text-sm uppercase tracking-widest rounded-md transition-all duration-300 shadow-xl flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>GET QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onExploreServices}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-widest rounded-md transition-all duration-300 border border-white/20 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>EXPLORE SERVICES</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

