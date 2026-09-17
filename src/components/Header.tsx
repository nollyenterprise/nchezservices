import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { SERVICES, PRODUCTS } from '../data/content';

interface HeaderProps {
  currentPage?: 'home' | 'about' | 'services' | 'products' | 'contact' | 'privacy' | 'terms';
  onRequestQuote: () => void;
  onOpenAbout: () => void;
  onOpenServices?: (serviceId?: string) => void;
  onOpenProducts?: (productId?: string) => void;
  onOpenContact?: () => void;
  onNavigateHome?: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentPage = 'home',
  onRequestQuote, 
  onOpenAbout,
  onOpenServices,
  onOpenProducts,
  onOpenContact,
  onNavigateHome,
  onNavigateSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [mobileProductsExpanded, setMobileProductsExpanded] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const productsDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setProductsDropdownOpen(false);
    if (onNavigateSection) {
      onNavigateSection(sectionId);
    } else {
      const target = document.getElementById(sectionId);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  const isAboutPage = currentPage === 'about';
  const isServicesPage = currentPage === 'services';
  const isProductsPage = currentPage === 'products';
  const isContactPage = currentPage === 'contact';
  
  const headerBgClass = isAboutPage || isServicesPage || isProductsPage || isContactPage || isScrolled
    ? 'bg-[#32135C]/95 backdrop-blur-md py-3 shadow-[0_8px_30px_rgba(15,23,42,0.18)] border-b border-white/10'
    : 'bg-transparent py-5';

  return (
    <header
      id="main-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-precision ${headerBgClass}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        
        {/* Logo Card Container */}
        <a 
          href="#" 
          id="header-brand-link"
          className="flex items-center focus:outline-none group"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigateHome) {
              onNavigateHome();
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <span className="relative inline-flex items-center justify-center overflow-hidden rounded-xl border border-[#32135C]/20 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.12)] transition-all duration-300 h-14 sm:h-16 px-4 py-1.5 hover:shadow-xl hover:border-[#E10600]">
            <Logo variant="dark" size="md" />
          </span>
        </a>

        {/* Center Desktop Navigation: About, Services, Products, Contact Us */}
        <nav id="desktop-nav" aria-label="Primary Navigation" className="hidden lg:flex items-center gap-2">

          {/* 1. About page */}
          <div className="relative group">
            <button
              id="nav-link-about"
              type="button"
              onClick={onOpenAbout}
              className={`relative flex items-center px-4 py-2 text-sm font-medium tracking-normal transition-colors duration-200 cursor-pointer ${
                isAboutPage ? 'text-white' : 'text-white/85 hover:text-white'
              }`}
            >
              <span>About</span>
              <span 
                className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#E10600] origin-left transition-transform duration-200 ease-precision ${
                  isAboutPage ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} 
              />
            </button>
          </div>

          {/* 2. Services Link (Clicking text leads to Services Main Page; Hover or chevron toggles dropdown) */}
          <div 
            className="relative flex items-center" 
            ref={servicesDropdownRef}
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              id="nav-link-services"
              type="button"
              onClick={() => {
                setServicesDropdownOpen(false);
                if (onOpenServices) {
                  onOpenServices();
                } else {
                  handleSectionClick({ preventDefault: () => {} } as React.MouseEvent, 'services');
                }
              }}
              className={`relative flex items-center px-4 py-2 text-sm font-medium tracking-normal transition-colors duration-200 cursor-pointer touch-manipulation ${
                isServicesPage ? 'text-white' : 'text-white/85 hover:text-white'
              }`}
            >
              <span>Services</span>
              <span 
                className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#E10600] origin-left transition-transform duration-200 ease-precision ${
                  isServicesPage ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} 
              />
            </button>

            {/* Separate Chevron icon button for toggling dropdown on click */}
            <button
              type="button"
              aria-label="Toggle services dropdown"
              onClick={(e) => {
                e.stopPropagation();
                setServicesDropdownOpen((prev) => !prev);
              }}
              className="p-1.5 -ml-2 text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#E10600]' : ''}`} />
            </button>

            {/* Services Dropdown Panel */}
            {servicesDropdownOpen && (
              <div 
                id="services-navbar-dropdown"
                className="absolute top-full left-0 pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-1.5 duration-150"
              >
                <div className="bg-white rounded-xl shadow-[0_12px_36px_rgba(15,23,42,0.18)] border border-gray-100 py-2 overflow-hidden">
                  {SERVICES.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => {
                        setServicesDropdownOpen(false);
                        if (onOpenServices) {
                          onOpenServices(service.id);
                        }
                      }}
                      className="group w-full flex items-center justify-between px-4 py-2.5 text-sm font-normal text-gray-700 hover:text-[#32135C] hover:bg-gray-50/90 transition-colors text-left cursor-pointer touch-manipulation"
                    >
                      <span className="font-normal text-gray-800 group-hover:text-[#32135C] transition-colors leading-snug">
                        {service.title}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#E10600] group-hover:translate-x-1 transition-all flex-shrink-0 ml-3" strokeWidth={1.75} />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 3. Products Link (Clicking text leads to Products Main Page; Hover or chevron toggles dropdown) */}
          <div 
            className="relative flex items-center" 
            ref={productsDropdownRef}
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <button
              id="nav-link-products"
              type="button"
              onClick={() => {
                setProductsDropdownOpen(false);
                if (onOpenProducts) {
                  onOpenProducts();
                } else {
                  handleSectionClick({ preventDefault: () => {} } as React.MouseEvent, 'products');
                }
              }}
              className={`relative flex items-center px-4 py-2 text-sm font-medium tracking-normal transition-colors duration-200 cursor-pointer touch-manipulation ${
                isProductsPage ? 'text-white' : 'text-white/85 hover:text-white'
              }`}
            >
              <span>Products</span>
              <span 
                className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#E10600] origin-left transition-transform duration-200 ease-precision ${
                  isProductsPage ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} 
              />
            </button>

            {/* Chevron toggle button for Products */}
            <button
              type="button"
              aria-label="Toggle products dropdown"
              onClick={(e) => {
                e.stopPropagation();
                setProductsDropdownOpen((prev) => !prev);
              }}
              className="p-1.5 -ml-2 text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 text-[#E10600]' : ''}`} />
            </button>

            {/* Products Dropdown Panel */}
            {productsDropdownOpen && (
              <div 
                id="products-navbar-dropdown"
                className="absolute top-full left-0 pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-1.5 duration-150"
              >
                <div className="bg-white rounded-xl shadow-[0_12px_36px_rgba(15,23,42,0.18)] border border-gray-100 py-2 overflow-hidden">
                  {PRODUCTS.map((product) => (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => {
                        setProductsDropdownOpen(false);
                        if (onOpenProducts) {
                          onOpenProducts(product.id);
                        }
                      }}
                      className="group w-full flex items-center justify-between px-4 py-2.5 text-sm font-normal text-gray-700 hover:text-[#32135C] hover:bg-gray-50/90 transition-colors text-left cursor-pointer touch-manipulation"
                    >
                      <span className="font-normal text-gray-800 group-hover:text-[#32135C] transition-colors leading-snug">
                        {product.name}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#E10600] group-hover:translate-x-1 transition-all flex-shrink-0 ml-3" strokeWidth={1.75} />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 4. Contact Us */}
          <div className="relative group">
            <button
              id="nav-link-contact-us"
              type="button"
              onClick={() => {
                if (onOpenContact) {
                  onOpenContact();
                } else {
                  onRequestQuote();
                }
              }}
              className={`relative flex items-center px-4 py-2 text-sm font-medium tracking-normal transition-colors duration-200 cursor-pointer ${
                isContactPage ? 'text-white' : 'text-white/85 hover:text-white'
              }`}
            >
              <span>Contact Us</span>
              <span 
                className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#E10600] origin-left transition-transform duration-200 ease-precision ${
                  isContactPage ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} 
              />
            </button>
          </div>

        </nav>

        {/* Right CTA Button: Get Quote */}
        <div className="hidden lg:flex items-center">
          <button
            id="header-cta-quote-btn"
            onClick={onRequestQuote}
            className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium tracking-wide uppercase transition-all duration-200 ease-precision rounded-lg bg-[#E10600] text-white hover:bg-[#BF0500] shadow-[0_4px_16px_rgba(225,6,0,0.3)] hover:shadow-[0_6px_20px_rgba(225,6,0,0.45)] cursor-pointer active:scale-95"
          >
            <span>Get Quote</span>
            <ArrowRight className="w-4 h-4 stroke-[2] transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            id="mobile-quote-btn-mini"
            onClick={onRequestQuote}
            className="px-3.5 py-1.5 bg-[#E10600] hover:bg-[#BF0500] text-white text-xs font-medium uppercase tracking-wider rounded-lg shadow-sm"
          >
            Get Quote
          </button>

          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
            className="p-2 transition-colors text-white hover:text-[#E10600]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 stroke-[2]" /> : <Menu className="w-6 h-6 stroke-[2]" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer" 
          className="lg:hidden bg-[#32135C] text-white border-b-4 border-[#E10600] px-6 py-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex flex-col space-y-4">
            <div className="space-y-1">
              {/* About */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAbout();
                }}
                className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium transition-colors text-left ${
                  isAboutPage ? 'bg-white/15 text-white' : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>About</span>
                <ChevronRight className="w-4 h-4 text-[#E10600]" />
              </button>

              {/* Services Accordion: Clicking "Services" text navigates to Main Services Page directly; clicking Chevron expands subpages */}
              <div className="rounded-lg overflow-hidden bg-white/5 border border-white/10">
                <div className="w-full flex items-center justify-between py-2.5 px-3 text-sm font-medium text-white/90">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (onOpenServices) {
                        onOpenServices();
                      }
                    }}
                    className="flex-1 text-left hover:text-white font-medium cursor-pointer"
                  >
                    Services
                  </button>

                  <button
                    type="button"
                    aria-label="Toggle mobile services sub-items"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileServicesExpanded(!mobileServicesExpanded);
                    }}
                    className="p-1 text-white/70 hover:text-white cursor-pointer"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesExpanded ? 'rotate-180 text-[#E10600]' : ''}`} />
                  </button>
                </div>

                {mobileServicesExpanded && (
                  <div className="px-2 pb-2 pt-1 space-y-1 bg-black/20">
                    {SERVICES.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          if (onOpenServices) {
                            onOpenServices(service.id);
                          }
                        }}
                        className="w-full flex items-center justify-between py-2.5 px-3 text-xs font-normal text-gray-200 hover:text-white hover:bg-white/10 rounded transition-colors text-left"
                      >
                        <span className="truncate pr-2">{service.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#E10600] flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Products Accordion: Clicking "Products" text navigates to Main Products Page directly; clicking Chevron expands subpages */}
              <div className="rounded-lg overflow-hidden bg-white/5 border border-white/10">
                <div className="w-full flex items-center justify-between py-2.5 px-3 text-sm font-medium text-white/90">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (onOpenProducts) {
                        onOpenProducts();
                      } else {
                        handleSectionClick({ preventDefault: () => {} } as React.MouseEvent, 'products');
                      }
                    }}
                    className="flex-1 text-left hover:text-white font-medium cursor-pointer"
                  >
                    Products
                  </button>

                  <button
                    type="button"
                    aria-label="Toggle mobile products sub-items"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileProductsExpanded(!mobileProductsExpanded);
                    }}
                    className="p-1 text-white/70 hover:text-white cursor-pointer"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileProductsExpanded ? 'rotate-180 text-[#E10600]' : ''}`} />
                  </button>
                </div>

                {mobileProductsExpanded && (
                  <div className="px-2 pb-2 pt-1 space-y-1 bg-black/20">
                    {PRODUCTS.map((product) => (
                      <button
                        key={product.id}
                        type="button"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          if (onOpenProducts) {
                            onOpenProducts(product.id);
                          }
                        }}
                        className="w-full flex items-center justify-between py-2.5 px-3 text-xs font-normal text-gray-200 hover:text-white hover:bg-white/10 rounded transition-colors text-left"
                      >
                        <span className="truncate pr-2">{product.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#E10600] flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Us */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenContact) {
                    onOpenContact();
                  } else {
                    onRequestQuote();
                  }
                }}
                className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium transition-colors text-left ${
                  isContactPage ? 'bg-white/15 text-white' : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>Contact Us</span>
                <ChevronRight className="w-4 h-4 text-[#E10600]" />
              </button>
            </div>

            {/* Mobile Quote Button */}
            <div className="pt-2 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full py-3 bg-[#E10600] hover:bg-[#BF0500] text-white font-medium text-sm rounded-lg flex items-center justify-center gap-2 shadow-lg tracking-wider uppercase transition-colors"
              >
                <span>Get Quote</span>
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

