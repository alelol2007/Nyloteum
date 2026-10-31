import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ScanLine,
  BookOpen,
  Compass,
  Users,
  Heart,
  MessageCircle,
  Star,
  Check,
  Lock,
} from 'lucide-react';

type TabKey = 'scanner' | 'decoder' | 'learning' | 'social';

const CARE_ICONS = [
  {
    id: '30c',
    title: '30°C Gentle Cycle',
    impact: '+4–6 yrs seam & fiber life',
    desc: 'Cold-warm water with reduced spin agitation prevents wool scale felting and protects elastane snap-back.',
    svg: (
      <svg viewBox="0 0 40 40" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 13L10.5 29H29.5L33 13" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 17.5C12 15.5 15.5 19.5 20 17.5C24.5 15.5 28 19.5 31.5 17.5" strokeLinecap="round" />
        <text x="20" y="26.5" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="currentColor" stroke="none">
          30°
        </text>
        <line x1="10.5" y1="33" x2="29.5" y2="33" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'notumble',
    title: 'Do Not Tumble Dry',
    impact: 'Prevents 80% of shrinkage & pilling',
    desc: 'Heated dryer drums fracture natural fibers and melt microscopic stretch filaments. Air-drying preserves drape.',
    svg: (
      <svg viewBox="0 0 40 40" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="8" width="24" height="24" rx="3" />
        <circle cx="20" cy="20" r="8" />
        <line x1="6" y1="6" x2="34" y2="34" stroke="#ab8742" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="34" y1="6" x2="6" y2="34" stroke="#ab8742" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'flat',
    title: 'Dry Flat in Shade',
    impact: 'Keeps original shoulder & hem shape',
    desc: 'Wet wool and heavy cotton hold water weight; drying flat stops gravity from stretching knit loops.',
    svg: (
      <svg viewBox="0 0 40 40" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="8" width="24" height="24" rx="3" />
        <line x1="13" y1="20" x2="27" y2="20" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'nobleach',
    title: 'No Chlorine Bleach',
    impact: 'Protects protein bonds & skin safety',
    desc: 'Chlorine dissolves wool/silk fibers and leaves harsh alkaline residues that irritate sensitive skin.',
    svg: (
      <svg viewBox="0 0 40 40" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="20,8 33,31 7,31" strokeLinejoin="round" />
        <line x1="9" y1="10" x2="31" y2="32" stroke="#ab8742" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="31" y1="10" x2="9" y2="32" stroke="#ab8742" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'lowiron',
    title: 'Low Iron (110°C Max)',
    impact: 'Prevents synthetic glazing',
    desc: 'High soleplate temperatures flatten nylon and lyocell fibers permanently, reducing breathability.',
    svg: (
      <svg viewBox="0 0 40 40" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 14H27L31 27H8.5C8.5 21 12 18 18 18H28" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="23" r="1.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const FEED_POSTS = [
  {
    id: 'p1',
    filter: 'hiking',
    natural: true,
    user: 'Clara Lindqvist',
    handle: '@clara.trails',
    tag: 'Hiker · 14 months worn',
    piece: 'Nordkapp 220gsm ZQ Merino Crew',
    blend: '100% Traceable Merino (17.2µm)',
    stars: '5.0',
    note: 'Scanned in Munich before a Dolomites trip. 38 washes later: zero pilling under pack straps and zero skin itch.',
    likes: 184,
    comment: '@lukas_alpine: Bought this from Nyloteum’s swap list too—still looks brand new.',
    tone: '#414b3b',
  },
  {
    id: 'p2',
    filter: 'gym',
    natural: false,
    user: 'Matteo Rossi',
    handle: '@matteo.lifts',
    tag: 'Gym-Goer · 60+ sessions',
    piece: 'Kinetix AeroWeave Tencel™ Tee',
    blend: '74% Tencel™ Lyocell, 20% Merino, 6% Roica™',
    stars: '4.9',
    note: 'Replaced my smelly polyester gym shirts. Breathes far better during intervals and never holds odor.',
    likes: 142,
    comment: '@sophie_runs: Roica keeps its collar shape so much better than cheap spandex.',
    tone: '#8ca87b',
  },
  {
    id: 'p3',
    filter: 'casual',
    natural: true,
    user: 'Hannah Vermeulen',
    handle: '@hannah.wardrobe',
    tag: 'Casual · 2 years worn',
    piece: 'Atelier Meuse Heavy Flax Overshirt',
    blend: '100% European Long-Flax Linen (245gsm)',
    stars: '5.0',
    note: 'Only gets softer every summer. Learning how to read flax weight saved me from flimsy high-street blends.',
    likes: 219,
    comment: '@marc.v: 245gsm linen drapes so cleanly without elbow bagging.',
    tone: '#ab8742',
  },
];

export const EcosystemTabsPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('scanner');
  const [selectedIcon, setSelectedIcon] = useState<string>('30c');
  const [quizChoice, setQuizChoice] = useState<'a' | 'b' | null>(null);
  const [feedFilter, setFeedFilter] = useState<'all' | 'natural' | 'hiking' | 'gym'>('all');
  const [liked, setLiked] = useState<Record<string, boolean>>({ p1: true });
  const [showComments, setShowComments] = useState<Record<string, boolean>>({ p1: true });

  const currentIcon = CARE_ICONS.find((i) => i.id === selectedIcon) || CARE_ICONS[0];
  const visiblePosts = FEED_POSTS.filter((p) => {
    if (feedFilter === 'all') return true;
    if (feedFilter === 'natural') return p.natural;
    return p.filter === feedFilter;
  });

  const ITEMS: {
    id: TabKey;
    title: string;
    desc: string;
    icon: React.FC<{ className?: string }>;
  }[] = [
    {
      id: 'scanner',
      title: 'Tag Scanner & Vetted Alternatives',
      desc: 'Assess any garment in-store, then compare longer-lasting pieces ranked by material integrity and brand trustability.',
      icon: ScanLine,
    },
    {
      id: 'decoder',
      title: 'Tag & Care Icon Decoder',
      desc: 'Translate cryptic washing, drying, and ironing symbols in one tap so good clothes never shrink or pill prematurely.',
      icon: BookOpen,
    },
    {
      id: 'learning',
      title: 'Guided Textile Learning Path',
      desc: 'A bite-sized, Duolingo-style path through fabrics and care—building genuine trust through open education.',
      icon: Compass,
    },
    {
      id: 'social',
      title: 'Community Wear Feed',
      desc: 'An Instagram-like feed of real buyer photos, star ratings, and filterable wear logs that recursively train our AI.',
      icon: Users,
    },
  ];

  return (
    <section id="learn" className="bg-[#414b3b] py-[100px] text-[#fffdf8] max-[620px]:py-[76px]">
      <div className="wrap grid grid-cols-1 items-center gap-[55px] max-[800px]:gap-[38px] lg:grid-cols-2">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <div className="eyebrow mb-[14px] !text-[#e2c285]">
            <span className="dot" />
            <span>Four-tab app ecosystem</span>
          </div>

          <h2 className="section-h2 max-w-[460px] text-[#fffdf8]">
            More than a scanner. A calmer way to buy and care.
          </h2>

          <p className="mb-[28px] max-w-[490px] text-[14px] leading-[1.85] text-[#d6e1cd]">
            Customers trust Nyloteum because we never hide behind a mystery score. Select any tab below to preview how scanning, care literacy, and community reviews work together.
          </p>

          <ul className="m-0 grid list-none gap-[12px] p-0" role="tablist">
            {ITEMS.map((item) => {
              const Icon = item.icon;
              const active = activeTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex w-full cursor-pointer items-start gap-[13px] rounded-[14px] border p-[17px] text-left transition-all duration-200 ${
                      active
                        ? 'border-[#ab8742] bg-[#ab8742]/22 shadow-[0_12px_30px_rgba(0,0,0,0.16)]'
                        : 'border-[#8ca87b]/22 bg-[#fffdf8]/6 hover:border-[#ab8742]/45 hover:bg-[#fffdf8]/10'
                    }`}
                  >
                    <span
                      className={`grid h-[34px] w-[34px] shrink-0 place-items-center rounded-[11px] transition-colors ${
                        active
                          ? 'bg-[#ab8742] text-[#fffdf8]'
                          : 'bg-[#8ca87b] text-[#414b3b]'
                      }`}
                    >
                      <Icon className="h-[16px] w-[16px]" />
                    </span>
                    <span>
                      <strong className="mt-[1px] mb-[4px] block font-['Manrope'] text-[13px] font-bold text-[#fffdf8]">
                        {item.title}
                      </strong>
                      <span className="block text-[11.5px] leading-[1.6] text-[#fffdf8]/80">
                        {item.desc}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Right Column: Cozy Warm Linen App Preview Surface */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <div className="rounded-[22px] border border-[#ab8742]/35 bg-[#fffdf8] p-[28px] text-[#414b3b] shadow-[0_24px_70px_rgba(0,0,0,0.2)] max-[620px]:p-[22px]">
            <AnimatePresence mode="wait">
              {/* TAB 1: SCANNER & SWAPS */}
              {activeTab === 'scanner' && (
                <motion.div
                  key="scanner"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22 }}
                >
                  <div className="eyebrow mb-[10px] !text-[9.5px]">
                    <span className="dot" />
                    <span>After your scan · Smart alternatives</span>
                  </div>
                  <h3 className="mb-[6px] text-[20px] font-bold tracking-[-0.5px]">
                    Scanned coat scored 44%? Here is what lasts.
                  </h3>
                  <p className="mb-[18px] text-[12.5px] leading-[1.65] text-[#626759]">
                    When a piece uses weak viscose linings or PFC coatings, Nyloteum suggests alternatives matched to your profile, user wear logs, and brand trustability.
                  </p>

                  <div className="space-y-[10px]">
                    {[
                      {
                        name: 'Ventile® High-Density Organic Mac',
                        brand: 'Alkan Studio · Brand trust 9.6/10',
                        blend: '100% Extra-long staple cotton (weatherproof weave)',
                        match: '97% match',
                        price: '€235',
                      },
                      {
                        name: 'Waxed Scottish Sailcloth Jacket',
                        brand: 'Cairn & Co. · Brand trust 9.3/10',
                        blend: '100% Dry-waxed organic cotton canvas',
                        match: '93% match',
                        price: '€198',
                      },
                      {
                        name: 'Recycled Wool & Hemp Overshirt',
                        brand: 'Nordic Loom · Brand trust 9.1/10',
                        blend: '70% Responsible wool, 30% bast hemp',
                        match: '91% match',
                        price: '€165',
                      },
                    ].map((alt) => (
                      <div
                        key={alt.name}
                        className="rounded-[14px] border border-[#ab8742]/20 bg-[#faf6ee] p-[14px]"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <strong className="block font-['Manrope'] text-[13px] font-bold text-[#414b3b]">
                              {alt.name}
                            </strong>
                            <span className="text-[11px] font-semibold text-[#927134]">
                              {alt.brand}
                            </span>
                          </div>
                          <span className="shrink-0 rounded-full bg-[#8ca87b]/30 px-[9px] py-[4px] text-[10px] font-bold text-[#414b3b]">
                            {alt.match}
                          </span>
                        </div>
                        <div className="mt-[8px] flex items-center justify-between border-t border-[#414b3b]/10 pt-[8px] text-[11px] text-[#626759]">
                          <span>{alt.blend}</span>
                          <strong className="text-[#414b3b]">{alt.price}</strong>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* TAB 2: CARE ICON DECODER */}
              {activeTab === 'decoder' && (
                <motion.div
                  key="decoder"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22 }}
                >
                  <div className="eyebrow mb-[10px] !text-[9.5px]">
                    <span className="dot" />
                    <span>Interactive care symbol guide</span>
                  </div>
                  <h3 className="mb-[6px] text-[20px] font-bold tracking-[-0.5px]">
                    Tap any tag icon to decode it
                  </h3>
                  <p className="mb-[18px] text-[12.5px] leading-[1.65] text-[#626759]">
                    Half of wardrobe damage happens in the laundry room. Select a symbol below to see what it protects.
                  </p>

                  <div className="grid grid-cols-5 gap-[8px]">
                    {CARE_ICONS.map((ic) => {
                      const isSel = ic.id === currentIcon.id;
                      return (
                        <button
                          key={ic.id}
                          type="button"
                          onClick={() => setSelectedIcon(ic.id)}
                          className={`grid h-[52px] cursor-pointer place-items-center rounded-[13px] border transition-all ${
                            isSel
                              ? 'border-[#414b3b] bg-[#414b3b] text-[#fffdf8]'
                              : 'border-[#ab8742]/24 bg-[#faf6ee] text-[#414b3b] hover:border-[#ab8742]'
                          }`}
                          title={ic.title}
                        >
                          {ic.svg}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-[16px] rounded-[16px] bg-[#8ca87b]/25 p-[18px]">
                    <div className="flex items-center justify-between gap-2">
                      <strong className="font-['Manrope'] text-[15px] font-bold text-[#414b3b]">
                        {currentIcon.title}
                      </strong>
                      <span className="rounded-full bg-[#fffdf8] px-[10px] py-[4px] text-[10px] font-bold text-[#85662c]">
                        {currentIcon.impact}
                      </span>
                    </div>
                    <p className="mt-[8px] mb-0 text-[12.5px] leading-[1.65] text-[#414b3b]/85">
                      {currentIcon.desc}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: DUOLINGO-STYLE LEARNING PATH */}
              {activeTab === 'learning' && (
                <motion.div
                  key="learning"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="eyebrow !text-[9.5px]">
                      <span className="dot" />
                      <span>Unit 1 · Fiber literacy trail</span>
                    </div>
                    <span className="rounded-full bg-[#ab8742]/20 px-[10px] py-[4px] text-[10px] font-bold text-[#85662c]">
                      7-day streak · 340 XP
                    </span>
                  </div>

                  <h3 className="mt-[8px] mb-[14px] text-[20px] font-bold tracking-[-0.5px]">
                    Learn fabrics in 60-second steps
                  </h3>

                  <div className="relative space-y-[9px] pl-[4px]">
                    {[
                      { label: 'Long-staple vs. short-staple cotton', state: 'done' },
                      { label: 'Decoding care tags in 5 seconds', state: 'done' },
                      { label: 'Spotting overpriced acrylic knit blends', state: 'active' },
                      { label: 'Dyes, finishes & skin allergies', state: 'locked' },
                    ].map((step) => (
                      <div
                        key={step.label}
                        className={`flex items-center justify-between rounded-[12px] border px-[13px] py-[10px] text-[12px] ${
                          step.state === 'done'
                            ? 'border-[#414b3b]/12 bg-[#faf6ee] text-[#414b3b]'
                            : step.state === 'active'
                            ? 'border-[#ab8742] bg-[#8ca87b]/24 font-bold text-[#414b3b]'
                            : 'border-[#414b3b]/10 bg-[#faf6ee] text-[#626759]/75'
                        }`}
                      >
                        <div className="flex items-center gap-[10px]">
                          <span
                            className={`grid h-[22px] w-[22px] place-items-center rounded-full text-[11px] font-bold ${
                              step.state === 'done'
                                ? 'bg-[#8ca87b] text-[#fffdf8]'
                                : step.state === 'active'
                                ? 'bg-[#ab8742] text-[#fffdf8]'
                                : 'bg-[#414b3b]/12 text-[#626759]'
                            }`}
                          >
                            {step.state === 'done' && <Check className="h-3 w-3" />}
                            {step.state === 'active' && '3'}
                            {step.state === 'locked' && <Lock className="h-3 w-3" />}
                          </span>
                          <span>{step.label}</span>
                        </div>
                        <span className="text-[10px] font-bold text-[#927134]">
                          {step.state === 'done'
                            ? 'Done'
                            : step.state === 'active'
                            ? 'Try below'
                            : 'Next'}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Quick Interactive Question */}
                  <div className="mt-[15px] rounded-[14px] border border-[#ab8742]/22 bg-[#faf6ee] p-[14px]">
                    <p className="mb-[9px] text-[11.5px] font-bold text-[#414b3b]">
                      Quick check: Which €130 sweater resists pilling for years?
                    </p>
                    <div className="grid grid-cols-1 gap-[7px] sm:grid-cols-2">
                      <button
                        type="button"
                        onClick={() => setQuizChoice('a')}
                        className={`cursor-pointer rounded-[10px] border p-[9px] text-left text-[11px] transition-colors ${
                          quizChoice === 'a'
                            ? 'border-[#ab8742] bg-[#ab8742]/20 text-[#414b3b]'
                            : 'border-[#414b3b]/14 bg-[#fffdf8] text-[#414b3b] hover:border-[#ab8742]'
                        }`}
                      >
                        <strong>A:</strong> 52% Acrylic, 28% Nylon, 20% Alpaca
                      </button>
                      <button
                        type="button"
                        onClick={() => setQuizChoice('b')}
                        className={`cursor-pointer rounded-[10px] border p-[9px] text-left text-[11px] transition-colors ${
                          quizChoice === 'b'
                            ? 'border-[#414b3b] bg-[#8ca87b]/30 text-[#414b3b]'
                            : 'border-[#414b3b]/14 bg-[#fffdf8] text-[#414b3b] hover:border-[#ab8742]'
                        }`}
                      >
                        <strong>B:</strong> 100% 2-Ply Combed Merino Wool
                      </button>
                    </div>
                    {quizChoice && (
                      <p className="mt-[9px] mb-0 text-[11px] leading-[1.55] text-[#626759]">
                        {quizChoice === 'b'
                          ? 'Correct — 2-ply long merino staples lock cleanly, while short acrylic migrates and fuzzes within weeks.'
                          : 'Watch out — blending 52% cheap acrylic with a touch of alpaca is a common margin trap that pills fast.'}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}

              {/* TAB 4: COMMUNITY SOCIAL FEED */}
              {activeTab === 'social' && (
                <motion.div
                  key="social"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22 }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="eyebrow !text-[9.5px]">
                      <span className="dot" />
                      <span>Community wear feed</span>
                    </div>

                    <div className="flex flex-wrap gap-[5px]">
                      {[
                        { id: 'all', label: 'Suited for you' },
                        { id: 'natural', label: 'Natural' },
                        { id: 'hiking', label: 'Hiking' },
                        { id: 'gym', label: 'Gym' },
                      ].map((f) => (
                        <button
                          key={f.id}
                          type="button"
                          onClick={() =>
                            setFeedFilter(f.id as 'all' | 'natural' | 'hiking' | 'gym')
                          }
                          className={`cursor-pointer rounded-full px-[10px] py-[4px] text-[10px] font-bold transition-colors ${
                            feedFilter === f.id
                              ? 'bg-[#414b3b] text-[#fffdf8]'
                              : 'bg-[#8ca87b]/25 text-[#414b3b] hover:bg-[#8ca87b]/38'
                          }`}
                        >
                          {f.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-[14px] space-y-[11px]">
                    {visiblePosts.slice(0, 2).map((post) => {
                      const isLiked = !!liked[post.id];
                      const isOpen = !!showComments[post.id];
                      return (
                        <div
                          key={post.id}
                          className="rounded-[15px] border border-[#ab8742]/20 bg-[#faf6ee] p-[14px]"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-[9px]">
                              <span
                                className="grid h-[28px] w-[28px] place-items-center rounded-full text-[11px] font-bold text-[#fffdf8]"
                                style={{ background: post.tone }}
                              >
                                {post.user[0]}
                              </span>
                              <div>
                                <strong className="block text-[12px] text-[#414b3b]">
                                  {post.user}
                                </strong>
                                <span className="text-[10px] text-[#626759]">
                                  {post.tag}
                                </span>
                              </div>
                            </div>
                            <span className="inline-flex items-center gap-1 rounded-full bg-[#ab8742]/20 px-[8px] py-[3px] text-[10px] font-bold text-[#85662c]">
                              <Star className="h-3 w-3 fill-[#ab8742] text-[#ab8742]" />
                              {post.stars}
                            </span>
                          </div>

                          <div className="mt-[9px] rounded-[10px] border border-[#414b3b]/10 bg-[#fffdf8] px-[11px] py-[8px]">
                            <strong className="block text-[11.5px] text-[#414b3b]">
                              {post.piece}
                            </strong>
                            <span className="text-[10px] font-medium text-[#626759]">
                              {post.blend}
                            </span>
                          </div>

                          <p className="mt-[8px] mb-[9px] text-[11.5px] leading-[1.55] text-[#626759]">
                            {post.note}
                          </p>

                          <div className="flex items-center justify-between border-t border-[#414b3b]/10 pt-[8px] text-[11px]">
                            <div className="flex items-center gap-[14px]">
                              <button
                                type="button"
                                onClick={() =>
                                  setLiked((prev) => ({ ...prev, [post.id]: !prev[post.id] }))
                                }
                                className="inline-flex cursor-pointer items-center gap-1 font-semibold text-[#414b3b]"
                              >
                                <Heart
                                  className={`h-3.5 w-3.5 ${
                                    isLiked
                                      ? 'fill-[#ab8742] text-[#ab8742]'
                                      : 'text-[#626759]'
                                  }`}
                                />
                                {post.likes + (isLiked ? 1 : 0)}
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  setShowComments((prev) => ({
                                    ...prev,
                                    [post.id]: !prev[post.id],
                                  }))
                                }
                                className="inline-flex cursor-pointer items-center gap-1 font-semibold text-[#626759] hover:text-[#414b3b]"
                              >
                                <MessageCircle className="h-3.5 w-3.5" />
                                Comment
                              </button>
                            </div>
                            <span className="text-[10px] font-semibold text-[#414b3b]">
                              Improves AI match
                            </span>
                          </div>

                          {isOpen && (
                            <p className="mt-[7px] mb-0 rounded-[8px] bg-[#8ca87b]/22 px-[10px] py-[6px] text-[10.5px] text-[#414b3b]">
                              {post.comment}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
