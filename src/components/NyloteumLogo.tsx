import React from 'react';

interface NyloteumLogoProps {
  className?: string;
  light?: boolean;
}

export const NyloteumLogo: React.FC<NyloteumLogoProps> = ({
  className = '',
  light = false,
}) => {
  return (
    <span
      className={`inline-flex items-center gap-[10px] font-['Manrope'] text-[21px] font-extrabold tracking-[-0.8px] select-none ${
        light ? 'text-[#fffefa]' : 'text-[#173a36]'
      } ${className}`}
    >
      <span
        className="grid h-[31px] w-[31px] -rotate-12 place-items-center text-white"
        style={{
          borderRadius: '50% 50% 50% 8px',
          background: '#0d6457',
        }}
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="rotate-12"
        >
          <path
            d="M19.5 4.5c-8.5 0-13 3.7-13 9.2 0 3.2 2.2 5.3 5.1 5.3 5.2 0 7.9-6.1 7.9-14.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M4 21c2-5 5.7-8.7 11-11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      nyloteum
    </span>
  );
};
