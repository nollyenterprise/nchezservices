import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO, SERVICES } from '../data/content';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenAbout: () => void;
  onOpenServices?: (serviceId?: string) => void;
  onOpenContact?: () => void;
  onRequestQuote: () => void;
  onOpenPolicy: (type: 'privacy' | 'terms') => void;
  onSelectService: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenAbout,
  onOpenServices,
  onOpenContact,
  onRequestQuote,
  onOpenPolicy, 
  onSelectService 
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#18181B] text-white pt-16 pb-12 border-t-4 border-[#E10600]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Brand & Tagline Column */}
          <div className="lg:col-span-4 space-y-4">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-block transition-transform hover:scale-[1.02]"
            >
              <div className="inline-flex items-center justify-center rounded-lg bg-white px-3 sm:px-4 py-2 shadow-sm">
                <Logo variant="dark" size="lg" imageSrc="/image/ncheyyy.jpg" />
              </div>
            </a>
            
            <p className="text-sm text-gray-200 max-w-sm leading-relaxed font-medium">
              Nchez Services Limited provides industrial equipment supply, logistics, technical procurement, and fabrication solutions engineered for continuous operational performance.
            </p>
          </div>

          {/* Contact Block Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E10600] mb-4">
              Direct Inquiries
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-gray-200 font-normal">
              <a 
                href={`mailto:${COMPANY_INFO.email}`} 
                className="flex items-start gap-2.5 hover:text-[#E10600] transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#E10600] flex-shrink-0 mt-0.5" />
                <span className="group-hover:underline break-all text-white font-medium">{COMPANY_INFO.email}</span>
              </a>

              <a 
                href={`tel:${COMPANY_INFO.phoneRaw}`} 
                className="flex items-start gap-2.5 hover:text-[#E10600] transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#E10600] flex-shrink-0 mt-0.5" />
                <span className="group-hover:underline text-white font-medium">{COMPANY_INFO.phone}</span>
              </a>

              <div className="flex items-start gap-2.5 text-gray-200">
                <MapPin className="w-4 h-4 text-[#E10600] flex-shrink-0 mt-0.5" />
                <span className="text-white font-normal">{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column - Matching the Navbar Pages */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E10600] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-200 font-normal">
              <li>
                <button 
                  type="button"
                  onClick={onOpenAbout}
                  className="hover:text-white hover:underline transition-colors cursor-pointer text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => {
                    if (onOpenServices) {
                      onOpenServices();
                    } else {
                      handleNavClick({ preventDefault: () => {} } as React.MouseEvent<HTMLAnchorElement>, '#services');
                    }
                  }}
                  className="hover:text-white hover:underline transition-colors cursor-pointer text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <a 
                  href="#products" 
                  onClick={(e) => handleNavClick(e, '#products')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => {
                    if (onOpenContact) {
                      onOpenContact();
                    } else {
                      onRequestQuote();
                    }
                  }}
                  className="hover:text-white hover:underline transition-colors cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Capabilities Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E10600] mb-4">
              Our Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-200 font-normal">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => onSelectService(s.id)}
                    className="text-left hover:text-[#E10600] hover:underline transition-colors cursor-pointer"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-300 font-medium">
          <div>
            © 2026 Nchez Services Limited. All rights reserved.
          </div>

          <div className="flex items-center gap-6 font-semibold">
            <button
              type="button"
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-white/20">·</span>
            <button
              type="button"
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
