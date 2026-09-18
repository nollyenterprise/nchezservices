import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  imageSrc?: string;
  variant?: 'light' | 'dark' | 'on-white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  layout?: 'image' | 'horizontal' | 'stacked';
  showSubtext?: boolean;
}

/**
 * Official Nchez Services Limited Logo Component
 */
export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  imageSrc = '/image/ncheyyy.jpg',
  variant = 'dark',
  size = 'md',
  layout = 'image',
  showSubtext = true,
}) => {
  const [imgSrc, setImgSrc] = useState(imageSrc);
  const isLight = variant === 'light';
  const handleImageError = () => {
    setImgSrc(imageSrc);
  };

  // Prominent height classes ensuring the logo is boldly visible
  const imageHeights = {
    sm: 'h-10 sm:h-12',
    md: 'h-12 sm:h-14',
    lg: 'h-16 sm:h-20',
    xl: 'h-20 sm:h-24',
  };

  const titleSizes = {
    sm: 'text-[16px]',
    md: 'text-[19px] sm:text-[20px]',
    lg: 'text-[26px]',
    xl: 'text-[34px]',
  };

  const subSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-[13px]',
    xl: 'text-[16px]',
  };

  const mainImage = (
    <img
      src={imgSrc}
      alt="Nchez Services Limited"
      className={`${imageHeights[size]} w-auto max-w-full max-h-full rounded-lg object-contain transition-transform duration-300 group-hover:scale-105`}
      onError={handleImageError}
      loading="eager"
      decoding="async"
      referrerPolicy="no-referrer"
    />
  );

  // Horizontal layout with explicit side text if requested
  if (layout === 'horizontal') {
    return (
      <div id="company-logo" className={`inline-flex items-center gap-3 select-none ${className}`}>
        {mainImage}
        <div className="flex flex-col justify-center leading-none">
          <span
            className={`font-display font-bold tracking-tight ${titleSizes[size]} ${
              isLight ? 'text-white' : 'text-[#32135C]'
            }`}
          >
            Nchez
          </span>
          {showSubtext && (
            <span
              className={`font-sans font-semibold lowercase tracking-wide mt-0.5 ${subSizes[size]} ${
                isLight ? 'text-white/85' : 'text-[#32135C]'
              }`}
            >
              services limited
            </span>
          )}
        </div>
      </div>
    );
  }

  // Stacked layout
  if (layout === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center text-center gap-2 select-none ${className}`}>
        {mainImage}
      </div>
    );
  }

  // Default image layout: renders logo badge cleanly
  return (
    <div id="company-logo" className={`inline-flex items-center justify-center select-none ${className}`}>
      {mainImage}
    </div>
  );
};
