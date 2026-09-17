import React from 'react';
import { ABOUT_CHECKLIST, STATS, COMPANY_INFO } from '../data/content';
import { CheckCircle, ArrowUpRight, MapPin } from 'lucide-react';

interface AboutProps {
  onWorkWithUs: () => void;
}

export const About: React.FC<AboutProps> = ({ onWorkWithUs }) => {
  return (
    <section id="about" className="py-24 bg-white text-[#18181B] relative border-t border-[#F3E6EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image & Operational Presence Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#32135C]/15 shadow-xl bg-gray-900">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=75&w=800&auto=format&fit=crop"
                alt="Nchez mechanical inspection and oilfield engineering"
                className="w-full h-[460px] object-cover object-center"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F11]/90 via-transparent to-transparent" />
              
              {/* Overlay Badge: Port Harcourt Operational Hub */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 backdrop-blur-md border border-[#F3E6EC] shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#E10600] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E10600]">
                      Operational Headquarters
                    </h4>
                    <p className="text-sm font-bold text-[#32135C]">
                      Port Harcourt, Rivers State, Nigeria
                    </p>
                    <p className="text-[11px] text-[#796094] mt-0.5">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Geometric Accent Badge */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 bg-[#F90909]/10 border-2 border-[#F90909] rounded-xl -z-10" />
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-28 h-28 bg-[#32135C]/10 border border-[#32135C]/20 rounded-xl -z-10" />
          </div>

          {/* Right Column: Narrative, 4 Checklist Points, CTA */}
          <div className="lg:col-span-7">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center mb-3">
              <span 
                id="about-eyebrow"
                className="text-xs uppercase font-semibold tracking-[0.25em] text-[#E10600]"
              >
                ABOUT NCHEZ SERVICES LIMITED
              </span>
            </div>

            {/* Heading */}
            <h2
              id="about-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#32135C] tracking-tight leading-tight mb-6"
            >
              A dependable partner, not just a supplier
            </h2>

            {/* Narrative Paragraph */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 font-normal">
              At Nchez Services Limited, we understand that downtime in the energy sector carries massive financial consequences. Based in the energy heartland of Port Harcourt, we have built an uncompromising reputation for operational reliability, technical precision, and certified safety. We deliver end-to-end support across critical equipment supply, robust haulage logistics, strategic cost-reducing procurement, and specialized mechanical fabrication.
            </p>

            {/* 4 Checklist Points */}
            <div className="space-y-4 mb-10">
              {ABOUT_CHECKLIST.map((item, idx) => (
                <div 
                  key={idx} 
                  id={`about-checklist-item-${idx + 1}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#F3E6EC]/40 border border-[#32135C]/20 shadow-xs hover:border-[#E10600] transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-[#E10600] stroke-[2.5] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#32135C]">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                id="about-work-with-us-btn"
                onClick={onWorkWithUs}
                className="px-8 py-4 bg-[#E10600] hover:bg-[#BF0500] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-md transition-all duration-200 shadow-xl shadow-red-600/40 active:scale-95 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>WORK WITH US</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <div className="text-xs sm:text-sm text-[#32135C] font-medium">
                Prompt RFQ Turnaround · Direct Engineer Engagement
              </div>
            </div>

          </div>

        </div>

        {/* Supporting Operational Stat Strip */}
        <div className="mt-16 pt-12 border-t border-[#32135C]/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#F3E6EC]/30 border border-[#32135C]/15 hover:border-[#F90909] transition-colors shadow-xs">
              <div className="font-display text-2xl sm:text-3xl font-bold text-[#F90909]">
                {stat.value}
              </div>
              <div className="text-xs font-medium uppercase tracking-wider text-[#32135C] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
