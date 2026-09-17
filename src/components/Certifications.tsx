import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Leaf } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section 
      id="certifications-strip" 
      className="bg-gradient-to-r from-[#BF0500] via-[#E10600] to-[#9A0400] text-white py-14 px-4 sm:px-6 lg:px-8 shadow-xl relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Text and Title */}
          <motion.div 
            className="max-w-2xl text-center lg:text-left"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 text-white text-[11px] font-semibold uppercase tracking-[0.2em] mb-3 border border-white/20">
              <ShieldCheck className="w-4 h-4 text-white" />
              HSE &amp; Quality Excellence
            </div>
            <h3 
              id="certifications-heading"
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight"
            >
              Certified to International Standards
            </h3>
            <p className="mt-2 text-sm sm:text-base text-red-50 leading-relaxed font-normal">
              Our operations adhere to ISO 9001 (Quality Management) and ISO 14001 (Environmental Management) standards.
            </p>
          </motion.div>

          {/* Badges Side-by-Side */}
          <motion.div 
            id="iso-badges-container" 
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {/* ISO 9001 Badge */}
            <div 
              id="badge-iso-9001"
              className="bg-white text-[#18181B] rounded-xl p-4 sm:px-6 sm:py-4 flex items-center gap-4 shadow-xl border border-red-100 hover:shadow-2xl transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-[#E10600] flex items-center justify-center flex-shrink-0 shadow-sm">
                <Award className="w-6 h-6 text-white mx-auto" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-base font-bold tracking-tight text-[#18181B]">ISO 9001</span>
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-[#E10600] text-white rounded">CERTIFIED</span>
                </div>
                <div className="text-xs text-gray-700 font-medium tracking-wide">
                  Quality Management Systems
                </div>
                <div className="text-[10px] text-gray-500 mt-0.5">
                  Zero Defect Quality Assurance
                </div>
              </div>
            </div>

            {/* ISO 14001 Badge */}
            <div 
              id="badge-iso-14001"
              className="bg-white text-[#18181B] rounded-xl p-4 sm:px-6 sm:py-4 flex items-center gap-4 shadow-xl border border-red-100 hover:shadow-2xl transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-[#32135C] flex items-center justify-center flex-shrink-0 shadow-sm">
                <Leaf className="w-6 h-6 text-emerald-400 mx-auto" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-base font-bold tracking-tight text-[#18181B]">ISO 14001</span>
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-[#32135C] text-white rounded">CERTIFIED</span>
                </div>
                <div className="text-xs text-gray-700 font-medium tracking-wide">
                  Environmental Management
                </div>
                <div className="text-[10px] text-gray-500 mt-0.5">
                  Safe &amp; Sustainable Operations
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
