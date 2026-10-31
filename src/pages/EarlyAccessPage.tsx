import React from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { NyloteumLogo } from '../components/NyloteumLogo';

// ============================================================================
// FOUNDER CONFIGURATION CONSTANTS — Paste your live validation links below
// ============================================================================
const GOOGLE_FORMS_URL = 'https://forms.gle/P9Kvqr3ahvyL7Xd58';
const BUY_ME_A_COFFEE_URL = 'https://buymeacoffee.com/nyloteum';

const FOUNDER_CONTACTS = {
  email: 'contact@nyloteum.com',
  instagramHandle: '@nyloteum',
  instagramUrl: 'https://instagram.com/nyloteum',
  linkedinName: 'Nyloteum',
  linkedinUrl: 'https://linkedin.com/company/nyloteum',
};

interface LocationState {
  selectedPlan?: string;
}

export const EarlyAccessPage: React.FC = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const state = location.state as LocationState | null;
  const selectedPlan = state?.selectedPlan || searchParams.get('plan') || '';

  return (
    <div className="min-h-screen bg-[#fbf7ee] text-[#414b3b]">
      {/* Topbar matching main landing page */}
      <header className="topbar">
        <div className="wrap flex h-[82px] items-center justify-between max-[620px]:h-[70px]">
          <Link to="/" aria-label="Nyloteum home">
            <NyloteumLogo size="nav" />
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[13px] font-bold text-[#927134] transition-colors hover:text-[#ab8742]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to home</span>
          </Link>
        </div>
      </header>

      <main className="relative overflow-hidden py-[72px] max-[620px]:py-[48px]">
        {/* Subtle solid organic warm gold circle behind the card */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[-120px] right-[-90px] h-[380px] w-[380px] rounded-full bg-[#ab8742]/22"
        />

        <div className="wrap relative max-w-[860px]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
            className="rounded-[24px] border border-[#ab8742]/24 bg-[#fffdfa] p-[44px] shadow-[0_24px_70px_rgba(138,106,48,0.14)] max-[620px]:p-[26px]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="eyebrow">
                <span className="dot" />
                <span>Early access · Founder’s note</span>
              </div>

              {selectedPlan && (
                <span className="rounded-full bg-[#ab8742]/20 px-[13px] py-[6px] text-[11px] font-bold text-[#7d5f28]">
                  Noted your interest in: {selectedPlan}
                </span>
              )}
            </div>

            <h1 className="mt-[18px] mb-[16px] font-['Manrope'] text-[clamp(32px,4.5vw,48px)] leading-[1.08] font-bold tracking-[-2px] text-[#414b3b]">
              You like our product?{' '}
              <span className="text-[#ab8742]">We like it too.</span>
            </h1>

            <p className="mb-[34px] max-w-[640px] text-[15px] leading-[1.8] text-[#6c6858]">
              We are sorry we cannot provide Nyloteum to you just yet—our team is currently working hard to bring it to life. However, we are deeply grateful that you put in the effort to interact with our page and share our vision for ending fast fashion.
            </p>

            {/* Two Calm Action Cards */}
            <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
              {/* Card 1: Google Form Survey */}
              <div className="flex flex-col justify-between rounded-[18px] border border-[#ab8742]/26 bg-[#fbf7ee] p-[26px]">
                <div>
                  <span className="mb-[14px] inline-block rounded-full bg-[#ab8742]/20 px-[10px] py-[5px] text-[10px] font-bold text-[#7d5f28]">
                    2-minute survey
                  </span>
                  <h2 className="mb-[9px] text-[19px] font-bold tracking-[-0.5px] text-[#414b3b]">
                    Help shape Nyloteum
                  </h2>
                  <p className="mb-[24px] text-[13px] leading-[1.7] text-[#6c6858]">
                    Want to help us develop Nyloteum in the way that works best for you? Tell us which fabrics, features, and shopping habits matter most.
                  </p>
                </div>

                <a
                  href={GOOGLE_FORMS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nylo-btn w-full"
                >
                  <span>Fill out the survey</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              {/* Card 2: Buy Us a Coffee (Warm Ochre/Gold #ab8742) */}
              <div className="flex flex-col justify-between rounded-[18px] bg-[#ab8742] p-[26px] text-[#fffdfa] shadow-[0_18px_45px_rgba(171,135,66,0.22)]">
                <div>
                  <span className="mb-[14px] inline-block rounded-full bg-[#414b3b]/22 px-[10px] py-[5px] text-[10px] font-bold text-[#fffdfa]">
                    100+ hours of research
                  </span>
                  <h2 className="mb-[9px] text-[19px] font-bold tracking-[-0.5px] text-[#fffdfa]">
                    Buy us a coffee
                  </h2>
                  <p className="mb-[24px] text-[13px] leading-[1.7] font-medium text-[#fffdfa]/92">
                    We have put 100+ hours of research into building an unbiased textile database. If you believe in a buy-once, keep-forever wardrobe, you can support us directly here.
                  </p>
                </div>

                <a
                  href={BUY_ME_A_COFFEE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nylo-btn w-full !bg-[#414b3b] !text-[#fffdfa] hover:!bg-[#2f372b]"
                >
                  <span>Buy us a coffee</span>
                  <span aria-hidden="true" className="text-[#f3ead7]">↗</span>
                </a>
              </div>
            </div>

            {/* Contacts Row */}
            <div className="mt-[34px] border-t border-[#ab8742]/20 pt-[24px] text-center">
              <p className="mb-[12px] text-[12px] font-medium text-[#6c6858]">
                Want to learn more or get in touch with the founders?
              </p>

              <div className="flex flex-wrap items-center justify-center gap-x-[32px] gap-y-[10px] text-[13px] font-bold text-[#927134]">
                <a
                  href={`mailto:${FOUNDER_CONTACTS.email}`}
                  className="transition-colors hover:text-[#ab8742] hover:underline"
                >
                  {FOUNDER_CONTACTS.email}
                </a>
                <a
                  href={FOUNDER_CONTACTS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#ab8742] hover:underline"
                >
                  Instagram · {FOUNDER_CONTACTS.instagramHandle}
                </a>
                <a
                  href={FOUNDER_CONTACTS.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#ab8742] hover:underline"
                >
                  LinkedIn · {FOUNDER_CONTACTS.linkedinName}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};
