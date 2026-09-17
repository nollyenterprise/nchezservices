import React from 'react';

interface ClientBrand {
  name: string;
  category: string;
  logo: React.ReactNode;
}

export const Clients: React.FC = () => {
  const clientBrands: ClientBrand[] = [
    {
      name: 'Newcross Exploration and Production Limited',
      category: 'Exploration & Production',
      logo: (
        <div className="flex items-center justify-center px-2 py-1">
          {/* Newcross exact wordmark */}
          <span className="font-sans font-bold text-2xl sm:text-3xl tracking-tight text-[#0F0F11] select-none group-hover:text-[#E10600] transition-colors">
            Newcross
          </span>
        </div>
      ),
    },
    {
      name: 'Renaissance Africa Energy Company Limited',
      category: 'Integrated Energy Group',
      logo: (
        <div className="flex items-center gap-2.5">
          {/* Africa shape with green & gold gradient + RENAISSANCE wordmark */}
          <svg className="h-10 w-auto" viewBox="0 0 240 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="africaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFCC00" />
                <stop offset="60%" stopColor="#FF7700" />
                <stop offset="100%" stopColor="#00C853" />
              </linearGradient>
            </defs>
            {/* Stylized African Continent contour */}
            <path d="M12 8C14 4 22 2 28 6C34 10 32 16 28 20C24 24 20 22 18 28C16 34 20 40 22 46C20 50 14 52 10 46C6 40 4 32 6 24C8 16 10 12 12 8Z" fill="url(#africaGrad)" />
            <path d="M22 6C28 10 30 16 26 22C24 24 20 22 19 28C22 28 28 24 30 18C32 12 28 8 22 6Z" fill="#00C853" opacity="0.9" />
            
            {/* RENAISSANCE text */}
            <text x="36" y="32" fill="#00B33C" fontFamily="sans-serif" fontSize="22" fontWeight="900" letterSpacing="0.5">
              RENAISSANCE
            </text>
            
            {/* Boxed AFRICA ENERGY COMPANY LIMITED */}
            <rect x="36" y="38" width="195" height="15" rx="2" fill="none" stroke="#00B33C" strokeWidth="0.75" />
            <text x="40" y="49" fill="#00B33C" fontFamily="sans-serif" fontSize="7.5" fontWeight="900" letterSpacing="0.8">
              AFRICA ENERGY COMPANY LIMITED
            </text>
          </svg>
        </div>
      ),
    },
    {
      name: 'Green Energy International Limited',
      category: 'Upstream Operator',
      logo: (
        <div className="flex items-center gap-2">
          {/* Green Energy International exact emblem and italic typography */}
          <svg className="h-9 w-auto" viewBox="0 0 250 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Geometric bracket link emblem */}
            <g transform="translate(2, 4) scale(0.9)">
              <path d="M18 4L6 16L12 22H24L30 16L24 10H18L14 14L16 16H20L22 14L20 12H18L18 4Z" fill="#1B4D3E" />
              <path d="M18 40L30 28L24 22H12L6 28L12 34H18L22 30L20 28H16L14 30L16 32H18L18 40Z" fill="#1B4D3E" />
              <path d="M4 18L14 18L18 22L14 26L4 26L0 22L4 18Z" fill="#2E7D32" />
            </g>
            {/* GREEN ENERGY */}
            <text x="44" y="27" fill="#1B4D3E" fontFamily="sans-serif" fontSize="19" fontWeight="900" fontStyle="italic" letterSpacing="0.5">
              GREEN ENERGY
            </text>
            {/* INTERNATIONAL LIMITED */}
            <text x="45" y="41" fill="#1B4D3E" fontFamily="sans-serif" fontSize="8" fontWeight="900" letterSpacing="2.2">
              INTERNATIONAL LIMITED
            </text>
          </svg>
        </div>
      ),
    },
    {
      name: "Carmel's",
      category: 'Precision Fabrication & Sheet Metal',
      logo: (
        <div className="flex items-center gap-2">
          {/* Carmel's exact geometric logo from uploaded image */}
          <svg className="h-9 w-auto" viewBox="0 0 260 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Triangle chevron arrowhead */}
            <path d="M0 24L18 4L18 16L7 24L18 32L18 44L0 24Z" fill="#F57C00" />
            <path d="M0 24L18 16L18 32L0 24Z" fill="#D32F2F" />
            <path d="M0 24L18 32L18 44L0 24Z" fill="#0D2149" />
            
            {/* Carmel's wordmark */}
            <text x="24" y="34" fill="#0B2046" fontFamily="sans-serif" fontSize="28" fontWeight="900" letterSpacing="-0.5">
              Carmel's
            </text>
            
            {/* Vertical divider */}
            <line x1="152" y1="8" x2="152" y2="40" stroke="#B0BEC5" strokeWidth="1.5" />
            
            {/* 3 Stacked descriptive lines */}
            <text x="160" y="18" fill="#008751" fontFamily="sans-serif" fontSize="7.5" fontWeight="900" letterSpacing="1.2">
              PRECISION
            </text>
            <text x="160" y="28" fill="#E64A19" fontFamily="sans-serif" fontSize="7.5" fontWeight="900" letterSpacing="1.2">
              FABRICATION
            </text>
            <text x="160" y="38" fill="#0277BD" fontFamily="sans-serif" fontSize="7.5" fontWeight="900" letterSpacing="1.2">
              SHEET METAL
            </text>
          </svg>
        </div>
      ),
    },
    {
      name: 'Premiovin Solutions Nigeria Limited',
      category: 'Energy Engineering',
      logo: (
        <div className="flex items-center gap-3">
          {/* Premiovin blue box with 'P' emblem */}
          <div className="w-10 h-10 bg-[#1A263F] rounded-md flex items-center justify-center p-1.5 shadow-sm">
            <svg viewBox="0 0 32 32" className="w-full h-full" fill="none">
              <rect width="32" height="32" rx="4" fill="#1A263F" />
              <path d="M7 6H25V18H15V26H7V6Z" fill="#FFFFFF" />
              <rect x="12" y="10" width="8" height="4" fill="#1A263F" />
              <rect x="15" y="20" width="10" height="6" fill="#FFFFFF" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#1A263F] tracking-wide leading-tight">
              PREMIOVIN
            </span>
            <span className="text-[8px] font-semibold text-[#E10600] uppercase tracking-wider">
              Solutions Nigeria Limited
            </span>
          </div>
        </div>
      ),
    },
  ];

  // Duplicate the array for seamless infinite looping
  const infiniteBrands = [...clientBrands, ...clientBrands, ...clientBrands, ...clientBrands];

  return (
    <section 
      id="clients" 
      className="py-20 sm:py-24 bg-white text-[#18181B] border-t border-[#32135C]/15 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        
        {/* Exact Header matching trusted clients */}
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Eyebrow: OUR CLIENTS */}
          <div className="inline-flex items-center justify-center mb-4">
            <span 
              id="clients-eyebrow"
              className="text-xs sm:text-sm uppercase font-semibold tracking-[0.25em] text-[#E10600]"
            >
              OUR CLIENTS
            </span>
          </div>

          {/* Heading: Trusted by Industry Leaders */}
          <h2
            id="clients-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#32135C] tracking-tight leading-tight"
          >
            Trusted by Industry Leaders
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto">
            We proudly serve leading organizations across the oil, gas, and marine sectors
          </p>
        </div>

      </div>

      {/* Continuously Moving Client Logos Carousel / Marquee */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Left and Right Fade Edge Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex animate-marquee-infinite gap-6 sm:gap-8 items-center pl-4 hover:pause">
          {infiniteBrands.map((client, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-64 sm:w-72 h-28 sm:h-32 bg-[#FAFAFA] hover:bg-white rounded-2xl border-2 border-[#32135C]/15 hover:border-[#E10600] shadow-[0_4px_16px_rgba(50,19,92,0.06)] hover:shadow-[0_10px_25px_rgba(225,6,0,0.15)] transition-all duration-300 flex items-center justify-center p-5 group cursor-pointer"
            >
              <div className="transform group-hover:scale-105 transition-transform duration-300 flex items-center justify-center w-full">
                {client.logo}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
