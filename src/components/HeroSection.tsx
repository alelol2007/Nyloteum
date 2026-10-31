import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, RefreshCw, Leaf } from 'lucide-react';
import { useEarlyAccessNavigation } from '../utils/navigation';

const SAMPLES = {
  merino: {
    topStatus: '94% Match',
    isGood: true,
    blend: '82% Merino Wool, 18% Polyamide',
    verdictTitle: 'Hiking & Sensitive Skin',
    verdictBody:
      '17.5µm merino regulates warmth without itch while core-spun nylon prevents backpack-strap pilling.',
    rows: [
      { label: 'Durability vs. Polyester', val: '95% · High' },
      { label: 'Breathability & vapor', val: '97% · Natural' },
      { label: 'Skin & dye safety', val: 'Verified safe' },
    ],
    ctaLabel: 'See 3 vetted brand swaps →',
    toggleHint: 'Tap to test a fast-fashion tag',
  },
  acrylic: {
    topStatus: '29% Match',
    isGood: false,
    blend: '56% Polyester, 34% Acrylic, 10% Wool',
    verdictTitle: 'Pilling & Sweat Trap Warning',
    verdictBody:
      'Short acrylic fibers fuzz within 5 wears, while 56% virgin polyester traps humid sweat against skin.',
    rows: [
      { label: 'Anti-pilling longevity', val: '28% · Low' },
      { label: 'Breathability & vapor', val: '31% · Traps heat' },
      { label: 'Coarse wool (>28µm)', val: 'Itch risk' },
    ],
    ctaLabel: 'Swap for lasting merino →',
    toggleHint: 'Tap to switch back to Merino',
  },
};

export const HeroSection: React.FC = () => {
  const [sampleKey, setSampleKey] = useState<'merino' | 'acrylic'>('merino');
  const { goToEarlyAccess } = useEarlyAccessNavigation();
  const sample = SAMPLES[sampleKey];

  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section className="hero-section" id="home">
        <div className="wrap relative grid grid-cols-1 items-center gap-[58px] max-[800px]:gap-[28px] lg:grid-cols-[1.03fr_0.97fr]">
          {/* Left Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.2, 0.7, 0.2, 1] }}
            className="max-[800px]:text-center"
          >
            <div className="eyebrow mb-[20px]">
              <span className="dot" />
              <span>End fast fashion · Buy once, keep forever</span>
            </div>

            <h1 className="hero-h1 max-[800px]:mx-auto">
              Decode any clothing tag. Buy pieces built for{' '}
              <em className="text-[#0d6457] not-italic">your life.</em>
            </h1>

            <p className="mb-[30px] max-w-[495px] text-[16px] leading-[1.8] text-[#647773] max-[800px]:mx-auto">
              Stop buying clothes that fall apart after three washes. Nyloteum puts hundreds of hours of textile research in your pocket—save hours of shopping, thousands of euros in bad purchases, and the planet, one scan at a time.
            </p>

            <div className="flex flex-wrap items-center gap-[20px] max-[800px]:justify-center">
              <button
                type="button"
                onClick={() => goToEarlyAccess()}
                className="nylo-btn"
              >
                <span>Download the app</span>
                <span aria-hidden="true">↗</span>
              </button>

              <button
                type="button"
                onClick={() => scrollTo('#how')}
                className="group inline-flex cursor-pointer items-center gap-2 text-[13px] font-bold text-[#0d6457]"
              >
                <span>See how it works</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            <div className="mt-[40px] flex items-center gap-[11px] text-[12px] text-[#647773] max-[800px]:justify-center">
              <span className="grid h-[29px] w-[29px] shrink-0 place-items-center rounded-full bg-[#e6edcf] text-[12px] font-bold text-[#0d6457]">
                ✓
              </span>
              <span>
                Independent fiber durability, breathability, and skin-allergy checks in 3 seconds.
              </span>
            </div>
          </motion.div>

          {/* Right Art: Flat Sage Halo + Tilted Minimal Phone + Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative grid min-h-[455px] place-items-center max-[620px]:min-h-[380px]"
          >
            {/* Solid Organic Sage Halo Circle */}
            <div
              aria-hidden="true"
              className="absolute aspect-square w-[min(410px,88%)] rounded-full bg-[#dfebd0]"
            />

            {/* Floating Card 1: Top-Left Research Note */}
            <div className="absolute top-[58px] left-0 z-10 flex items-center gap-[11px] rounded-[15px] border border-[#173a36]/8 bg-[#fffefa] px-[16px] py-[13px] shadow-[0_13px_35px_rgba(31,60,42,0.12)] max-[620px]:top-[28px] max-[620px]:left-[-4px]">
              <span className="grid h-[35px] w-[35px] place-items-center rounded-[12px] bg-[#eaf1dd] text-[#0d6457]">
                <Leaf className="h-4 w-4" />
              </span>
              <div>
                <strong className="block text-[11px] font-bold text-[#173a36]">
                  400+ hrs textile data
                </strong>
                <small className="mt-[2px] block text-[9.5px] text-[#647773]">
                  Science-backed, 0% brand ads
                </small>
              </div>
            </div>

            {/* Tilted Minimal Phone */}
            <div className="relative z-[1] h-[446px] w-[256px] rotate-[4deg] rounded-[35px] border border-[#022e4d]/18 bg-[#122a29] p-[11px] shadow-[0_28px_65px_rgba(14,63,54,0.2)] transition-transform duration-300 hover:rotate-[2deg] max-[620px]:scale-[0.9]">
              <div className="flex h-full flex-col justify-between overflow-hidden rounded-[26px] bg-[#fffefa] px-[15px] py-[21px]">
                <div>
                  <div className="mb-[17px] flex items-center justify-between text-[10px] font-bold">
                    <span className="text-[#173a36]">Nyloteum Scan</span>
                    <span
                      className={
                        sample.isGood ? 'text-[#0d6457]' : 'text-[#855b49]'
                      }
                    >
                      {sample.topStatus}
                    </span>
                  </div>

                  {/* Scanned Care Label */}
                  <div className="rounded-[11px] border border-[#173a36]/12 bg-[#fafbf6] p-[10px]">
                    <small className="mb-[4px] block text-[8px] tracking-[0.8px] text-[#647773] uppercase">
                      Scanned care label
                    </small>
                    <strong className="block font-['Manrope'] text-[11.5px] leading-snug font-bold text-[#173a36]">
                      {sample.blend}
                    </strong>
                  </div>

                  {/* Scan Result */}
                  <div
                    className={`mt-[11px] rounded-[12px] px-[11px] py-[12px] ${
                      sample.isGood ? 'bg-[#edf3df]' : 'bg-[#f5ebe6]'
                    }`}
                  >
                    <div className="mb-[7px] flex items-center gap-[8px]">
                      <span
                        className={`grid h-[23px] w-[23px] shrink-0 place-items-center rounded-full text-[11px] font-bold text-white ${
                          sample.isGood ? 'bg-[#0d6457]' : 'bg-[#855b49]'
                        }`}
                      >
                        {sample.isGood ? '✓' : '!'}
                      </span>
                      <strong className="text-[10.5px] text-[#173a36]">
                        {sample.verdictTitle}
                      </strong>
                    </div>
                    <p className="m-0 text-[9.2px] leading-[1.55] text-[#526660]">
                      {sample.verdictBody}
                    </p>
                  </div>

                  {/* Material Rows */}
                  <div className="mt-[8px]">
                    {sample.rows.map((r) => (
                      <div
                        key={r.label}
                        className="flex justify-between border-b border-[#173a36]/10 py-[8px] text-[9.2px]"
                      >
                        <span className="text-[#647773]">{r.label}</span>
                        <span
                          className={`font-bold ${
                            sample.isGood ? 'text-[#0d6457]' : 'text-[#855b49]'
                          }`}
                        >
                          {r.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => scrollTo('#learn')}
                  className="mt-[12px] w-full cursor-pointer rounded-[9px] bg-[#0d6457] py-[10px] text-center text-[9.5px] font-bold text-white transition-colors hover:bg-[#084b44]"
                >
                  {sample.ctaLabel}
                </button>
              </div>
            </div>

            {/* Floating Card 2: Bottom-Right Interactive Tag Switcher */}
            <button
              type="button"
              onClick={() =>
                setSampleKey((prev) => (prev === 'merino' ? 'acrylic' : 'merino'))
              }
              className="group absolute right-[-6px] bottom-[48px] z-10 flex cursor-pointer items-center gap-[11px] rounded-[15px] border border-[#173a36]/8 bg-[#fffefa] px-[16px] py-[12px] text-left shadow-[0_13px_35px_rgba(31,60,42,0.13)] transition-transform hover:-translate-y-0.5 max-[620px]:right-[-4px] max-[620px]:bottom-[18px]"
            >
              <span className="grid h-[35px] w-[35px] place-items-center rounded-[12px] bg-[#b6e6fa]/55 text-[#022e4d]">
                <RefreshCw className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
              </span>
              <div>
                <strong className="block text-[11px] font-bold text-[#173a36]">
                  {sampleKey === 'merino' ? 'Compare a €149 trap knit' : 'View 94% Merino match'}
                </strong>
                <small className="mt-[2px] block text-[9.5px] text-[#0d6457]">
                  {sample.toggleHint}
                </small>
              </div>
            </button>
          </motion.div>
        </div>

        {/* Minimal Scroll Hint */}
        <div className="pointer-events-none absolute bottom-[18px] left-1/2 hidden -translate-x-1/2 items-center gap-[8px] text-[10px] tracking-[1px] text-[#829084] uppercase sm:flex">
          <span className="block h-[22px] w-[1px] bg-[#9cac9b]" />
          Scroll
        </div>
      </section>

      {/* Slim Deep Navy Promise Strip (matches .promise from reference CSS) */}
      <section className="bg-[#022e4d] py-[23px] text-white" aria-label="Our promise">
        <div className="wrap flex flex-col items-center justify-center gap-3 text-center md:flex-row md:gap-[28px]">
          <strong className="font-['Manrope'] text-[15px] font-bold sm:text-[16px]">
            Hundreds of hours of lab research, distilled into seconds.
          </strong>
          <span className="hidden h-4 w-[1px] bg-[#b6e6fa]/30 md:inline-block" />
          <span className="text-[12.5px] text-[#b6e6fa]">
            We explain <em>why</em> a fabric breathes, pills, shrinks, or irritates—so you never waste €150 on fast fashion again.
          </span>
        </div>
      </section>
    </>
  );
};
