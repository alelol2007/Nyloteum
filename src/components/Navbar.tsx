import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NyloteumLogo } from './NyloteumLogo';
import { useEarlyAccessNavigation } from '../utils/navigation';

const NAV_LINKS = [
  { label: 'How it works', href: '#how' },
  { label: 'Personalize', href: '#personalize' },
  { label: 'Explore', href: '#learn' },
  { label: 'Pricing', href: '#pricing' },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { goToEarlyAccess } = useEarlyAccessNavigation();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="topbar">
      <nav
        className="wrap flex h-[82px] items-center justify-between max-[620px]:h-[70px]"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Nyloteum home"
        >
          <NyloteumLogo size="nav" />
        </Link>

        <div className="flex items-center gap-[32px] text-[13px] font-semibold text-[#626759] max-[768px]:gap-4">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleAnchorClick(e, item.href)}
              className="hidden transition-colors hover:text-[#ab8742] md:inline-block"
            >
              {item.label}
            </a>
          ))}

          <button
            type="button"
            onClick={() => goToEarlyAccess()}
            className="nylo-btn max-[620px]:px-[15px] max-[620px]:py-[11px] max-[620px]:text-[11px]"
          >
            <span>Get early access</span>
            <span aria-hidden="true" className="text-[#e2c285]">↗</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-[#414b3b]/20 text-[#414b3b] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-[#ab8742]/20 bg-[#faf6ee] py-3 md:hidden">
          <div className="wrap flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="py-2.5 text-[14px] font-semibold text-[#414b3b] hover:text-[#ab8742]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
