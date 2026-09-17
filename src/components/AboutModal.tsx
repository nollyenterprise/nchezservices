import React from 'react';
import { 
  X, 
  ShieldCheck, 
  Check, 
  MapPin, 
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
import { COMPANY_INFO } from '../data/content';
import { Logo } from './Logo';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: () => void;
  onViewFullPage?: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onRequestQuote,
  onViewFullPage,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#32135C]/20 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#32135C] text-white p-6 sm:p-7 flex items-start justify-between border-b-4 border-[#E10600]">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2.5 rounded-xl shadow-md border border-white/20">
              <Logo variant="dark" size="sm" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E10600] flex items-center gap-2">
                <span>CORPORATE OVERVIEW</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                About Nchez Services Limited
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

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-[#18181B]">
          
          {/* Section 2: Engineering partners, not just contractors */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7">
              <h4 className="font-display text-xl sm:text-2xl font-bold text-[#32135C] mb-3 leading-tight">
                Engineering partners, not just contractors
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed font-normal mb-4">
                Nchez Services Limited is an international engineering and energy company built on a simple principle: deliver complex infrastructure with uncompromising precision and transparency. We integrate engineering, procurement, construction, and long-term support into a single, accountable partnership.
              </p>
              
              <div className="space-y-2.5">
                {[
                  'Multidisciplinary engineering teams under one roof',
                  'ISO-certified quality and safety management systems',
                  'Global delivery with local execution capability',
                  'Single-point accountability from concept to operation'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                    <div className="w-4 h-4 rounded-[3px] bg-[#E10600] text-white flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 bg-[#F8F9FA] border border-[#32135C]/15 p-5 rounded-xl space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E10600] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#32135C]">
                    Operational Headquarters
                  </div>
                  <div className="text-xs text-gray-600 mt-0.5">
                    {COMPANY_INFO.address}
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#32135C]/10 flex items-center gap-2 text-xs text-[#32135C] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#E10600]" />
                <span>ISO 9001:2015 &amp; ISO 14001:2015 Certified</span>
              </div>
            </div>
          </div>

          {/* Section 3: Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-[#F8F9FA] border border-gray-200">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-7 h-7 rounded-lg bg-[#32135C] text-[#E10600] flex items-center justify-center">
                  <Target className="w-4 h-4" />
                </div>
                <h5 className="font-display text-base font-bold text-[#32135C]">Our Mission</h5>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                To provide innovative, reliable, and sustainable engineering solutions that empower industries across Africa, while maintaining the highest standards of safety, quality, and environmental responsibility.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F8F9FA] border border-gray-200">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-7 h-7 rounded-lg bg-[#32135C] text-[#E10600] flex items-center justify-center">
                  <Eye className="w-4 h-4" />
                </div>
                <h5 className="font-display text-base font-bold text-[#32135C]">Our Vision</h5>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                To be recognized as Africa's most trusted and innovative industrial engineering company, setting the benchmark for excellence in engineering, procurement, and project delivery.
              </p>
            </div>
          </div>

          {/* Section 4: What Drives Us Forward */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#E10600] mb-3">
              WHAT DRIVES US FORWARD (CORE VALUES)
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { icon: Shield, title: 'Safety First', desc: 'Zero harm philosophy and strict international standards.' },
                { icon: Award, title: 'Quality Excellence', desc: 'Engineering precision that exceeds client expectations.' },
                { icon: Users, title: 'Client Focus', desc: 'Lasting partnerships built on trust and reliability.' },
                { icon: Zap, title: 'Innovation & Agility', desc: 'Modern tooling and rapid turnaround response.' },
                { icon: Globe, title: 'Global Compliance', desc: 'Strict adherence to international safety codes.' },
                { icon: TrendingUp, title: 'Sustainable Growth', desc: 'Empowering local content and industrial capacity.' }
              ].map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="p-3.5 rounded-xl border border-gray-200 bg-white hover:border-[#E10600] transition-colors">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon className="w-4 h-4 text-[#E10600]" />
                      <span className="text-xs font-bold text-[#32135C]">{val.title}</span>
                    </div>
                    <p className="text-[11px] text-gray-600 leading-relaxed">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 5: Why Choose Nchez Metrics Banner */}
          <div className="bg-[#32135C] text-white p-6 rounded-2xl">
            <div className="text-center mb-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E10600]">
                WHY CHOOSE NCHEZ SERVICES LIMITED?
              </span>
              <p className="text-xs text-gray-300 mt-1 max-w-xl mx-auto">
                Over 15 years of proven expertise delivering high-performance engineering solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">15+</div>
                <div className="text-[11px] text-gray-300 uppercase tracking-wider mt-1">Years Experience</div>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">200+</div>
                <div className="text-[11px] text-gray-300 uppercase tracking-wider mt-1">Projects Completed</div>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">8+</div>
                <div className="text-[11px] text-gray-300 uppercase tracking-wider mt-1">Industries Served</div>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">98%</div>
                <div className="text-[11px] text-gray-300 uppercase tracking-wider mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-[#F8F9FA] border-t border-[#32135C]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-600 font-normal">
            Ready to discuss your project requirements with our engineering team?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {onViewFullPage && (
              <button
                onClick={() => {
                  onClose();
                  onViewFullPage();
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-white hover:bg-gray-100 border border-[#32135C]/20 text-xs font-semibold uppercase tracking-wider rounded-md text-[#32135C] transition-colors cursor-pointer"
              >
                View Full Page
              </button>
            )}
            <button
              onClick={() => {
                onClose();
                onRequestQuote();
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#E10600] hover:bg-[#BF0500] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#E10600]/30"
            >
              <span>Work With Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
