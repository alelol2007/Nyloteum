import React, { useState } from 'react';
import { motion } from 'framer-motion';

type ProfileTab = 'hiker' | 'gym' | 'casual' | 'custom';

const PROFILE_CARDS: Record<
  Exclude<ProfileTab, 'custom'>,
  {
    eyebrow: string;
    piece: string;
    scores: { label: string; badge: string; good: boolean }[];
    summary: string;
  }
> = {
  hiker: {
    eyebrow: 'Active profile · Hiker',
    piece: '55% Hemp, 40% Organic Cotton, 5% Elastane',
    scores: [
      { label: 'Abrasion & pack-strap hold', badge: '96% · Strong', good: true },
      { label: 'Wet-weather vapor release', badge: '74% · Moderate', good: true },
      { label: 'Sub-zero alpine drying speed', badge: 'Cotton retains damp', good: false },
    ],
    summary:
      'Bast hemp triples tear strength for dry summer trails, though Nyloteum flags the 40% cotton content if you are packing for cold wet ascents.',
  },
  gym: {
    eyebrow: 'Active profile · Gym-Goer',
    piece: '74% Tencel™ Lyocell, 20% Merino, 6% Roica™',
    scores: [
      { label: 'High-sweat moisture wicking', badge: '95% · Fast', good: true },
      { label: 'Natural anti-odor control', badge: '98% · Zero stink', good: true },
      { label: '4-way stretch recovery', badge: '93% · Holds shape', good: true },
    ],
    summary:
      'Eucalyptus lyocell and merino move sweat vapor naturally without trapping odor-causing bacteria the way cheap virgin polyester gym shirts do.',
  },
  casual: {
    eyebrow: 'Active profile · Casual Buyer',
    piece: '100% 2-Ply Long-Staple Organic Cotton',
    scores: [
      { label: '30-wash anti-pilling grade', badge: '97% · Clean surface', good: true },
      { label: 'Collar & hem shape retention', badge: '94% · 240 GSM', good: true },
      { label: 'Home laundry simplicity', badge: '30°C machine safe', good: true },
    ],
    summary:
      'Extra-long combed cotton fibers twist cleanly without loose ends, keeping a crisp silhouette for years instead of twisting at the side seams.',
  },
};

const STEPS = [
  {
    num: '01',
    title: 'Choose your profile',
    desc: 'Pick a quick setup—Hiker, Gym-Goer, or Casual Buyer—or tap Other to set allergies, fit, natural materials, sport level, and aesthetics.',
    tag: '30-sec setup',
  },
  {
    num: '02',
    title: 'Snap any tag in-store',
    desc: 'Walk into any shop with Nyloteum open, photograph the inner composition label, and let our textile database inspect the exact blend.',
    tag: '5 free/wk · 5 tokens = €1',
  },
  {
    num: '03',
    title: 'Read the plain-English why',
    desc: 'See how the garment stands up to your needs—and understand why each fiber breathes, pills, shrinks, or irritates sensitive skin.',
    tag: 'Radical clarity',
  },
  {
    num: '04',
    title: 'Compare, learn & share',
    desc: 'Explore better-fitting brand swaps, decode care symbols, and browse community wear posts that recursively sharpen our recommendations.',
    tag: 'Living AI model',
  },
];

export const WalkthroughSection: React.FC = () => {
  const [profile, setProfile] = useState<ProfileTab>('hiker');
  const [naturalOnly, setNaturalOnly] = useState(true);
  const [fit, setFit] = useState<'Close-fit' | 'Loose'>('Close-fit');
  const [allergy, setAllergy] = useState<'Synthetic dyes' | 'Coarse wool' | 'Elastane'>('Coarse wool');
  const [sportLevel, setSportLevel] = useState<'Everyday' | 'Active' | 'Intense'>('Active');
  const [aesthetic, setAesthetic] = useState<'Minimalist' | 'Outdoor' | 'Relaxed'>('Minimalist');

  const activeData =
    profile === 'custom'
      ? {
          eyebrow: `Custom · ${naturalOnly ? '100% Natural' : 'Blends OK'} · ${fit}`,
          piece: naturalOnly
            ? '100% Superfine 17.5µm Merino Knit'
            : '85% Organic Cotton, 15% Recycled Polyamide',
          scores: [
            {
              label: `Allergy shield (${allergy})`,
              badge: 'Verified clear',
              good: true,
            },
            {
              label: `${sportLevel} sweat & ${fit.toLowerCase()} drape`,
              badge: '95% · Ideal fit',
              good: true,
            },
            {
              label: `Aesthetic match (${aesthetic})`,
              badge: '92% · Timeless',
              good: true,
            },
          ],
          summary: `Filtered strictly for ${
            naturalOnly ? 'natural fibers only' : 'high-durability blends'
          }, avoiding ${allergy.toLowerCase()} triggers while matching a ${fit.toLowerCase()} ${aesthetic.toLowerCase()} wardrobe.`,
        }
      : PROFILE_CARDS[profile];

  return (
    <>
      {/* SECTION 1: .how (Cozy Warm Oat-Sage Linen + Warm Paper 4-Card Grid) */}
      <section id="how" className="bg-[#f2efe4] py-[100px] max-[620px]:py-[76px]">
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
            className="mx-auto mb-[52px] max-w-[680px] text-center"
          >
            <div className="eyebrow mb-[14px]">
              <span className="dot" />
              <span>How Nyloteum works</span>
            </div>
            <h2 className="section-h2 text-[#414b3b]">
              From fitting room to decade-long favorite.
            </h2>
            <p className="mx-auto max-w-[560px] text-[15px] leading-[1.75] text-[#626759]">
              Set your preferences once, snap any clothing tag while you shop, and know in seconds whether a piece truly deserves a place in your closet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, idx) => (
              <motion.article
                key={s.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.09,
                  ease: [0.2, 0.7, 0.2, 1],
                }}
                className="relative flex min-h-[265px] flex-col justify-between rounded-[18px] border border-[#414b3b]/12 bg-[#fffdf8] px-[22px] py-[25px] transition-all duration-250 hover:-translate-y-[5px] hover:border-[#ab8742]/50 hover:shadow-[0_24px_70px_rgba(65,75,59,0.12)] max-[620px]:min-h-0"
              >
                <div>
                  <span className="mb-[26px] grid h-[36px] w-[36px] place-items-center rounded-[12px] bg-[#8ca87b]/32 font-['Manrope'] text-[13px] font-extrabold text-[#414b3b]">
                    {s.num}
                  </span>
                  <h3 className="mb-[10px] text-[16px] font-bold tracking-[-0.4px] text-[#414b3b]">
                    {s.title}
                  </h3>
                  <p className="m-0 text-[12.5px] leading-[1.75] text-[#626759]">
                    {s.desc}
                  </p>
                </div>

                <div>
                  <span className="mt-[18px] inline-block rounded-full bg-[#ab8742]/18 px-[10px] py-[6px] text-[9.5px] font-bold text-[#85662c]">
                    {s.tag}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: .insight (Warm Linen + Cozy Sage & Ochre Split) */}
      <section
        id="personalize"
        className="overflow-hidden bg-[#faf6ee] py-[100px] max-[620px]:py-[76px]"
      >
        <div className="wrap grid grid-cols-1 items-center gap-[70px] max-[900px]:gap-[38px] lg:grid-cols-[0.92fr_1.08fr]">
          {/* Left Visual: Layered Sage + Warm Ochre Circles + Clean Insight Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative order-2 grid min-h-[405px] place-items-center max-[620px]:min-h-[340px] lg:order-1"
          >
            <div
              aria-hidden="true"
              className="absolute right-[16px] bottom-[10px] h-[210px] w-[210px] rounded-full bg-[#ab8742]/20"
            />
            <div
              aria-hidden="true"
              className="absolute h-[320px] w-[320px] rounded-full bg-[#8ca87b]/28 max-[620px]:h-[280px] max-[620px]:w-[280px]"
            />

            <div className="relative z-[1] w-[min(375px,92%)] rounded-[20px] border border-[#ab8742]/24 bg-[#fffdf8] p-[26px] shadow-[0_24px_70px_rgba(65,75,59,0.12)]">
              <div className="eyebrow mb-[11px] !text-[9.5px]">
                <span className="dot" />
                <span>{activeData.eyebrow}</span>
              </div>

              <h3 className="mb-[15px] text-[19px] leading-snug font-bold tracking-[-0.4px] text-[#414b3b]">
                {activeData.piece}
              </h3>

              <div>
                {activeData.scores.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-2 border-t border-[#414b3b]/12 py-[11.5px] text-[11.5px]"
                  >
                    <span className="text-[#414b3b]">{row.label}</span>
                    <span
                      className={`shrink-0 rounded-full px-[9px] py-[4px] text-[9.5px] font-bold ${
                        row.good
                          ? 'bg-[#8ca87b]/30 text-[#414b3b]'
                          : 'bg-[#ab8742]/22 text-[#7d5f28]'
                      }`}
                    >
                      {row.badge}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-[12px] mb-0 text-[11px] leading-[1.65] text-[#626759]">
                {activeData.summary}
              </p>
            </div>
          </motion.div>

          {/* Right Copy + Interactive Persona & Custom Preference Selector */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.2, 0.7, 0.2, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="eyebrow mb-[14px]">
              <span className="dot" />
              <span>Tailored to you</span>
            </div>

            <h2 className="section-h2 text-[#414b3b]">
              Quick presets when you’re in a rush. Deep filters when skin or sport demands it.
            </h2>

            <p className="mb-[20px] text-[14.5px] leading-[1.85] text-[#626759]">
              A trail jacket, a gym tee, and an everyday sweater shouldn’t be judged by the same yardstick. Try switching profiles below to see how Nyloteum adapts its material assessment:
            </p>

            {/* Clean Persona Selector Pills */}
            <div className="mb-[20px] flex flex-wrap gap-[8px]">
              {(
                [
                  { id: 'hiker', label: 'Hiker' },
                  { id: 'gym', label: 'Gym-Goer' },
                  { id: 'casual', label: 'Casual Buyer' },
                  { id: 'custom', label: 'Other · Custom needs' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setProfile(tab.id)}
                  className={`cursor-pointer rounded-full px-[15px] py-[9px] text-[12px] font-bold transition-all ${
                    profile === tab.id
                      ? 'bg-[#414b3b] text-[#fffdf8] shadow-[0_8px_20px_rgba(65,75,59,0.2)]'
                      : 'border border-[#ab8742]/28 bg-[#fffdf8] text-[#626759] hover:border-[#ab8742] hover:text-[#414b3b]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Expandable Custom Preferences Panel */}
            {profile === 'custom' && (
              <div className="mb-[22px] grid gap-[11px] rounded-[16px] border border-[#ab8742]/25 bg-[#fffdf8] p-[18px] text-[12px]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-semibold text-[#414b3b]">Natural materials only</span>
                  <div className="flex gap-[6px]">
                    {[true, false].map((val) => (
                      <button
                        key={String(val)}
                        type="button"
                        onClick={() => setNaturalOnly(val)}
                        className={`cursor-pointer rounded-full px-[11px] py-[4px] text-[11px] font-bold ${
                          naturalOnly === val
                            ? 'bg-[#414b3b] text-[#fffdf8]'
                            : 'bg-[#8ca87b]/25 text-[#414b3b]'
                        }`}
                      >
                        {val ? 'Yes, 100% natural' : 'Allow technical blends'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#414b3b]/10 pt-[10px]">
                  <span className="font-semibold text-[#414b3b]">Fit & cut preference</span>
                  <div className="flex gap-[6px]">
                    {(['Close-fit', 'Loose'] as const).map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => setFit(f)}
                        className={`cursor-pointer rounded-full px-[11px] py-[4px] text-[11px] font-bold ${
                          fit === f
                            ? 'bg-[#414b3b] text-[#fffdf8]'
                            : 'bg-[#8ca87b]/25 text-[#414b3b]'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#414b3b]/10 pt-[10px]">
                  <span className="font-semibold text-[#414b3b]">Allergies to avoid</span>
                  <div className="flex flex-wrap gap-[6px]">
                    {(['Coarse wool', 'Synthetic dyes', 'Elastane'] as const).map((al) => (
                      <button
                        key={al}
                        type="button"
                        onClick={() => setAllergy(al)}
                        className={`cursor-pointer rounded-full px-[11px] py-[4px] text-[11px] font-bold ${
                          allergy === al
                            ? 'bg-[#ab8742] text-[#fffdf8]'
                            : 'bg-[#ab8742]/18 text-[#414b3b]'
                        }`}
                      >
                        {al}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#414b3b]/10 pt-[10px]">
                  <span className="font-semibold text-[#414b3b]">Sport & aesthetic</span>
                  <div className="flex flex-wrap gap-[6px]">
                    {(['Everyday', 'Active', 'Intense'] as const).map((sp) => (
                      <button
                        key={sp}
                        type="button"
                        onClick={() => setSportLevel(sp)}
                        className={`cursor-pointer rounded-full px-[10px] py-[4px] text-[10.5px] font-bold ${
                          sportLevel === sp
                            ? 'bg-[#414b3b] text-[#fffdf8]'
                            : 'bg-[#8ca87b]/25 text-[#414b3b]'
                        }`}
                      >
                        {sp}
                      </button>
                    ))}
                    {(['Minimalist', 'Outdoor', 'Relaxed'] as const).map((ae) => (
                      <button
                        key={ae}
                        type="button"
                        onClick={() => setAesthetic(ae)}
                        className={`cursor-pointer rounded-full px-[10px] py-[4px] text-[10.5px] font-bold ${
                          aesthetic === ae
                            ? 'bg-[#ab8742] text-[#fffdf8]'
                            : 'bg-[#ab8742]/16 text-[#414b3b]'
                        }`}
                      >
                        {ae}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Check-list */}
            <ul className="m-0 grid list-none gap-[13px] p-0 text-[12.5px] text-[#414b3b]">
              <li className="flex items-center gap-[10px]">
                <span className="grid h-[19px] w-[19px] shrink-0 place-items-center rounded-full bg-[#8ca87b]/34 text-[11px] font-bold text-[#414b3b]">
                  ✓
                </span>
                <span>
                  Explains clearly why a material suits or fails your exact skin and routine
                </span>
              </li>
              <li className="flex items-center gap-[10px]">
                <span className="grid h-[19px] w-[19px] shrink-0 place-items-center rounded-full bg-[#8ca87b]/34 text-[11px] font-bold text-[#414b3b]">
                  ✓
                </span>
                <span>
                  Suggests better options ranked by material integrity, peer reviews & brand trust
                </span>
              </li>
              <li className="flex items-center gap-[10px]">
                <span className="grid h-[19px] w-[19px] shrink-0 place-items-center rounded-full bg-[#8ca87b]/34 text-[11px] font-bold text-[#414b3b]">
                  ✓
                </span>
                <span>
                  Improves recursively from real wash-and-wear feedback shared by shoppers
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
};
