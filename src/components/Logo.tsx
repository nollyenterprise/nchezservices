import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'on-white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  layout?: 'image' | 'horizontal' | 'stacked';
  showSubtext?: boolean;
}

/**
 * Official Nchez Services Limited Logo Component
 * Uses nchezz.jpeg / nchezz-crop.jpeg from the image folder
 */
export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'dark',
  size = 'md',
  layout = 'image',
  showSubtext = true,
}) => {
  // Use uploaded /image/nchexx.jpeg for logo
  const [imgSrc, setImgSrc] = useState('/image/nchexx.jpeg');
  const isLight = variant === 'light';

  const handleImageError = () => {
    if (imgSrc === '/image/nchexx.jpeg') {
      setImgSrc('/public/image/nchexx.jpeg');
    } else if (imgSrc === '/public/image/nchexx.jpeg') {
      setImgSrc('/image/nchezz-crop.jpeg');
    } else if (imgSrc === '/image/nchezz-crop.jpeg') {
      setImgSrc('/image/nchezz.jpeg');
    } else {
      setImgSrc('/nchezz.jpeg');
    }
  };

  // Prominent height classes ensuring the logo is boldly visible
  const imageHeights = {
    sm: 'h-9 sm:h-10',
    md: 'h-11 sm:h-13',
    lg: 'h-16 sm:h-20',
    xl: 'h-24 sm:h-28',
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
      className={`${imageHeights[size]} w-auto max-h-full object-contain transition-transform duration-300 group-hover:scale-105`}
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
  if (isLight) {
    return (
      <div 
        id="company-logo" 
        className={`inline-flex items-center justify-center bg-white rounded-lg px-3 py-1 shadow-sm border border-white/30 select-none ${className}`}
      >
        {mainImage}
      </div>
    );
  }

  return (
    <div id="company-logo" className={`inline-flex items-center justify-center select-none ${className}`}>
      {mainImage}
    </div>
  );
};
