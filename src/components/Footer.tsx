import React from 'react';
import { Link } from 'react-router-dom';
import { NyloteumLogo } from './NyloteumLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#fffefa] pt-[45px] pb-[20px]">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-[35px] pb-[30px] sm:flex-row">
          <div className="max-w-[300px]">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <NyloteumLogo />
            </Link>
            <p className="mt-[13px] mb-0 text-[12px] leading-[1.7] text-[#647773]">
              Scan clothing labels, understand what you’re buying, and choose pieces made to last.
            </p>
          </div>

          <div className="flex gap-[56px] max-[620px]:gap-[35px]">
            <div>
              <strong className="mb-[13px] block font-['Manrope'] text-[11px] font-bold text-[#173a36]">
                Product
              </strong>
              <a
                href="#how"
                className="my-[8px] block text-[11.5px] text-[#647773] hover:text-[#0d6457]"
              >
                How it works
              </a>
              <a
                href="#personalize"
                className="my-[8px] block text-[11.5px] text-[#647773] hover:text-[#0d6457]"
              >
                Personalize
              </a>
              <a
                href="#learn"
                className="my-[8px] block text-[11.5px] text-[#647773] hover:text-[#0d6457]"
              >
                Explore tabs
              </a>
              <a
                href="#pricing"
                className="my-[8px] block text-[11.5px] text-[#647773] hover:text-[#0d6457]"
              >
                Pricing
              </a>
            </div>

            <div>
              <strong className="mb-[13px] block font-['Manrope'] text-[11px] font-bold text-[#173a36]">
                Contact
              </strong>
              <a
                href="mailto:hello@nyloteum.com"
                className="my-[8px] block text-[11.5px] text-[#647773] hover:text-[#0d6457]"
              >
                hello@nyloteum.com
              </a>
              <a
                href="https://instagram.com/nyloteum"
                target="_blank"
                rel="noopener noreferrer"
                className="my-[8px] block text-[11.5px] text-[#647773] hover:text-[#0d6457]"
              >
                @nyloteum
              </a>
              <a
                href="https://linkedin.com/company/nyloteum"
                target="_blank"
                rel="noopener noreferrer"
                className="my-[8px] block text-[11.5px] text-[#647773] hover:text-[#0d6457]"
              >
                LinkedIn · Nyloteum
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-[12px] border-t border-[#173a36]/12 py-[17px] text-[10.5px] text-[#7c897e] sm:flex-row">
          <span>© {new Date().getFullYear()} Nyloteum. All rights reserved.</span>
          <span>Buy better. Wear longer.</span>
        </div>
      </div>
    </footer>
  );
};
