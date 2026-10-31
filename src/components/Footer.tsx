import React from 'react';
import { Link } from 'react-router-dom';
import { NyloteumLogo } from './NyloteumLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#414b3b]/12 bg-[#fffdf8] pt-[45px] pb-[20px]">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-[35px] pb-[30px] sm:flex-row">
          <div className="max-w-[300px]">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <NyloteumLogo size="footer" />
            </Link>
            <p className="mt-[10px] mb-0 text-[12px] leading-[1.7] text-[#626759]">
              Scan clothing labels, understand what you’re buying, and choose pieces made to last.
            </p>
          </div>

          <div className="flex gap-[56px] max-[620px]:gap-[35px]">
            <div>
              <strong className="mb-[13px] block font-['Manrope'] text-[11px] font-bold tracking-[0.8px] text-[#414b3b] uppercase">
                Product
              </strong>
              <a
                href="#how"
                className="my-[8px] block text-[11.5px] text-[#626759] hover:text-[#ab8742]"
              >
                How it works
              </a>
              <a
                href="#personalize"
                className="my-[8px] block text-[11.5px] text-[#626759] hover:text-[#ab8742]"
              >
                Personalize
              </a>
              <a
                href="#learn"
                className="my-[8px] block text-[11.5px] text-[#626759] hover:text-[#ab8742]"
              >
                Explore tabs
              </a>
              <a
                href="#pricing"
                className="my-[8px] block text-[11.5px] text-[#626759] hover:text-[#ab8742]"
              >
                Pricing
              </a>
            </div>

            <div>
              <strong className="mb-[13px] block font-['Manrope'] text-[11px] font-bold tracking-[0.8px] text-[#414b3b] uppercase">
                Contact
              </strong>
              <a
                href="mailto:contact@nyloteum.com"
                className="my-[8px] block text-[11.5px] text-[#626759] hover:text-[#ab8742]"
              >
                contact@nyloteum.com
              </a>
              <a
                href="https://instagram.com/nyloteum"
                target="_blank"
                rel="noopener noreferrer"
                className="my-[8px] block text-[11.5px] text-[#626759] hover:text-[#ab8742]"
              >
                @nyloteum
              </a>
              <a
                href="https://linkedin.com/company/nyloteum"
                target="_blank"
                rel="noopener noreferrer"
                className="my-[8px] block text-[11.5px] text-[#626759] hover:text-[#ab8742]"
              >
                LinkedIn · Nyloteum
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-[12px] border-t border-[#414b3b]/12 py-[17px] text-[10.5px] text-[#626759] sm:flex-row">
          <span>© {new Date().getFullYear()} Nyloteum. All rights reserved.</span>
          <span className="inline-flex items-center gap-2 font-semibold text-[#414b3b]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ab8742]" />
            Buy better. Wear longer.
          </span>
        </div>
      </div>
    </footer>
  );
};
