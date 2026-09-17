import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { Certifications } from './components/Certifications';
import { Clients } from './components/Clients';
import { Partners } from './components/Partners';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { ProductsPage } from './components/ProductsPage';
import { ContactPage } from './components/ContactPage';
import { LegalPage } from './components/LegalPage';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuoteModal } from './components/QuoteModal';
import { AboutModal } from './components/AboutModal';
import { PolicyModal } from './components/PolicyModal';
import { ServiceItem, ProductItem, ServiceId } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'services' | 'products' | 'contact' | 'privacy' | 'terms'>('home');
  const [selectedServiceSubpage, setSelectedServiceSubpage] = useState<ServiceId | null>(null);
  const [selectedProductSubpage, setSelectedProductSubpage] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | null>(null);
  const [prefilledService, setPrefilledService] = useState<ServiceId | ''>('');
  const [prefilledProduct, setPrefilledProduct] = useState<string>('');

  // Actively synchronize page title, meta descriptions, and OpenGraph fields for search crawlers & social sharing
  useEffect(() => {
    let pageTitle = 'Nchez Services Limited | Multipurpose Equipment Supply, Logistics and Technical Procurement';
    let pageDesc = 'Nchez Services Limited delivers multipurpose industrial equipment supply, marine and inland logistics, engineering fabrication, and technical procurement solutions in Port Harcourt and across Nigeria.';
    let canonicalUrl = 'https://nchezservices.com/';

    if (currentPage === 'about') {
      pageTitle = 'About Us | Nchez Services Limited - Corporate Heritage & Capabilities';
      pageDesc = 'Discover Nchez Services Limited: leading indigenous engineering partner delivering industrial equipment supply, logistics, and certified technical procurement in Nigeria.';
      canonicalUrl = 'https://nchezservices.com/#about';
    } else if (currentPage === 'services') {
      if (selectedServiceSubpage) {
        const formattedName = selectedServiceSubpage.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        pageTitle = `${formattedName} | Nchez Services Limited`;
        pageDesc = `Specialized industrial capability: ${formattedName} provided with certified quality assurance, strict HSE compliance, and technical expertise by Nchez Services Limited.`;
        canonicalUrl = `https://nchezservices.com/#services/${selectedServiceSubpage}`;
      } else {
        pageTitle = 'Industrial Services & Heavy Logistics | Nchez Services Limited';
        pageDesc = 'Explore Nchez Services core engineering capabilities: equipment leasing, heavy haulage, marine logistics, strategic procurement, and structural fabrication in Nigeria.';
        canonicalUrl = 'https://nchezservices.com/#services';
      }
    } else if (currentPage === 'products') {
      if (selectedProductSubpage) {
        const formattedName = selectedProductSubpage.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        pageTitle = `${formattedName} Supply | Nchez Services Limited`;
        pageDesc = `Certified OEM procurement and rapid supply of ${formattedName} with full Mill Test Certificates and manufacturer warranties.`;
        canonicalUrl = `https://nchezservices.com/#products/${selectedProductSubpage}`;
      } else {
        pageTitle = 'OEM Equipment & Materials Supply | Nchez Services Limited';
        pageDesc = 'Certified supply of API 6D pipeline valves, centrifugal process pumps, seamless line pipes, structural steel, and line hardware across Nigeria.';
        canonicalUrl = 'https://nchezservices.com/#products';
      }
    } else if (currentPage === 'contact') {
      pageTitle = 'Contact Us & Request Technical Quotation | Nchez Services Limited';
      pageDesc = 'Contact Nchez Services technical and commercial team in Port Harcourt, Nigeria. Request equipment quotations, logistics chartering, and engineering proposals.';
      canonicalUrl = 'https://nchezservices.com/#contact';
    } else if (currentPage === 'privacy') {
      pageTitle = 'Privacy Policy & NDPA 2023 Compliance | Nchez Services Limited';
      pageDesc = 'Corporate privacy statement and data protection compliance pursuant to the Nigerian Data Protection Act (NDPA 2023).';
      canonicalUrl = 'https://nchezservices.com/#privacy';
    } else if (currentPage === 'terms') {
      pageTitle = 'Terms & Conditions of Commercial Supply | Nchez Services Limited';
      pageDesc = 'Commercial terms, Incoterms® 2020 definitions, warranty covenants, and procurement conditions governing Nchez Services Limited contracts.';
      canonicalUrl = 'https://nchezservices.com/#terms';
    }

    document.title = pageTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', pageDesc);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', pageDesc);

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', pageTitle);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', pageDesc);

    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) canonicalTag.setAttribute('href', canonicalUrl);
  }, [currentPage, selectedServiceSubpage, selectedProductSubpage]);

  const openQuoteModal = (serviceId?: string, productName?: string) => {
    if (serviceId) {
      setPrefilledService(serviceId as ServiceId);
    } else {
      setPrefilledService('');
    }
    if (productName) {
      setPrefilledProduct(productName);
    } else {
      setPrefilledProduct('');
    }
    // Navigate directly to contact page
    setSelectedService(null);
    setSelectedProduct(null);
    setIsAboutModalOpen(false);
    setIsQuoteModalOpen(false);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
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
  };

  const handleNavigateSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 80);
    } else {
      scrollToSection(sectionId);
    }
  };

  const handleOpenAboutPage = () => {
    setCurrentPage('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenServicesPage = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceSubpage(serviceId as ServiceId);
    } else {
      setSelectedServiceSubpage(null);
    }
    setCurrentPage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProductsPage = (productId?: string) => {
    if (productId) {
      setSelectedProductSubpage(productId);
    } else {
      setSelectedProductSubpage(null);
    }
    setCurrentPage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContactPage = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPolicyPage = (type: 'privacy' | 'terms') => {
    setCurrentPage(type);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#231F20] font-sans">
      {/* 1. Header: About, Services, Products, Contact Us + Get Quote */}
      <Header 
        currentPage={currentPage}
        onRequestQuote={() => openQuoteModal()} 
        onOpenAbout={handleOpenAboutPage}
        onOpenServices={handleOpenServicesPage}
        onOpenProducts={handleOpenProductsPage}
        onOpenContact={handleOpenContactPage}
        onNavigateHome={handleNavigateHome}
        onNavigateSection={handleNavigateSection}
      />

      <main className="flex-1">
        {currentPage === 'about' ? (
          <AboutPage
            onNavigateHome={handleNavigateHome}
            onExploreServices={() => handleOpenServicesPage()}
            onRequestQuote={() => openQuoteModal()}
          />
        ) : currentPage === 'services' ? (
          <ServicesPage
            onNavigateHome={handleNavigateHome}
            onSelectServiceModal={(service) => setSelectedService(service)}
            onRequestQuote={(serviceId) => openQuoteModal(serviceId)}
            onContactTeam={handleOpenContactPage}
            initialSelectedServiceId={selectedServiceSubpage}
          />
        ) : currentPage === 'products' ? (
          <ProductsPage
            onNavigateHome={handleNavigateHome}
            onRequestQuote={(serviceId, productName) => openQuoteModal(serviceId, productName)}
            onContactTeam={handleOpenContactPage}
            initialSelectedProductId={selectedProductSubpage}
          />
        ) : currentPage === 'contact' ? (
          <ContactPage
            onNavigateHome={handleNavigateHome}
            onExploreServices={() => handleOpenServicesPage()}
          />
        ) : currentPage === 'privacy' || currentPage === 'terms' ? (
          <LegalPage
            initialTab={currentPage === 'terms' ? 'terms' : 'privacy'}
            onNavigateHome={handleNavigateHome}
            onContactTeam={handleOpenContactPage}
          />
        ) : (
          <>
            {/* 2. Hero Section */}
            <Hero
              onRequestQuote={() => openQuoteModal()}
              onExploreServices={() => handleOpenServicesPage()}
            />

            {/* 3. Multipurpose Services & Capabilities */}
            <Services
              onSelectService={(service) => handleOpenServicesPage(service.id)}
              onRequestQuoteWithService={(serviceId) => openQuoteModal(serviceId)}
            />

            {/* 4. Equipment & Projects */}
            <Products
              onSelectProduct={(product) => handleOpenProductsPage(product.id)}
              onRequestProductQuote={(productName) => openQuoteModal('equipment', productName)}
            />

            {/* 5. HSE & Certifications Strip */}
            <Certifications />

            {/* 6. Strategic Partners */}
            <Partners />

            {/* 7. Continuously Moving Client Carousel */}
            <Clients />

            {/* 8. Closing CTA Banner */}
            <CTABanner
              onRequestQuote={() => openQuoteModal()}
              onContactTeam={handleOpenContactPage}
            />
          </>
        )}
      </main>

      {/* 9. Footer */}
      <Footer
        onOpenAbout={handleOpenAboutPage}
        onOpenServices={handleOpenServicesPage}
        onOpenContact={handleOpenContactPage}
        onRequestQuote={() => openQuoteModal()}
        onOpenPolicy={(type) => handleOpenPolicyPage(type)}
        onSelectService={(serviceId) => handleOpenServicesPage(serviceId)}
      />

      {/* Interactive Modals */}
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        onViewFullPage={handleOpenAboutPage}
        onRequestQuote={() => {
          setIsAboutModalOpen(false);
          openQuoteModal();
        }}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={prefilledService}
        initialProduct={prefilledProduct}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={(serviceId) => openQuoteModal(serviceId)}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={(productName) => openQuoteModal('equipment', productName)}
      />

      <PolicyModal
        type={policyType}
        onClose={() => setPolicyType(null)}
      />
    </div>
  );
}
