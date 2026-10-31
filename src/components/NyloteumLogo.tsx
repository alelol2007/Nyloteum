import React from 'react';

interface NyloteumLogoProps {
  className?: string;
  size?: 'nav' | 'footer';
}

export const NyloteumLogo: React.FC<NyloteumLogoProps> = ({
  className = '',
  size = 'nav',
}) => {
  const sizeClasses =
    size === 'footer'
      ? 'h-[74px] max-[620px]:h-[64px]'
      : 'h-[62px] max-[620px]:h-[50px]';

  return (
    <span className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/nyloteum-logo.png"
        alt="Nyloteum"
        className={`${sizeClasses} w-auto object-contain`}
      />
    </span>
  );
};
