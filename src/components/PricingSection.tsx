import React from 'react';
import { motion } from 'framer-motion';
import { useEarlyAccessNavigation } from '../utils/navigation';

const PLANS = [
  {
    id: 'single',
    stateLabel: 'Single Scan (€1 / credit)',
    name: 'Single Scan',
    desc: 'Standing in a fitting room undecided on an expensive piece? Scan one label on the spot.',
    price: '€1',
    unit: '/ credit',
    tokenNote: '1 credit = 1 tag scan',
    popular: false,
    outline: true,
    cta: 'Buy 1 credit',
    features: [
      '1 instant in-store clothing tag scan',
      'Full material durability & comfort breakdown',
      'Plain-English explanation of why it works or fails',
      'Vetted higher-quality garment alternatives',
    ],
  },
  {
    id: 'pack10',
    stateLabel: 'Smart Shopper Pack (€9 for 10 credits)',
    name: 'Smart Shopper Pack',
    desc: 'Save 10% for weekend shopping trips and seasonal wardrobe updates.',
    price: '€9',
    unit: '/ pack',
    tokenNote: '10 credits (€0.90 per scan)',
    popular: true,
    outline: false,
    cta: 'Buy 10 credits',
    features: [
      '10 tag scans — credits never expire',
      'Custom allergy, fit & natural-fiber rules',
      'Brand trustability & peer wear comparisons',
      'Free access to Care Icon Decoder & Social Feed',
    ],
  },
  {
    id: 'unlimited',
    stateLabel: 'Nyloteum Unlimited (€20 / month)',
    name: 'Unlimited Monthly',
    desc: 'Scan every rack without counting credits and unlock the full textile curriculum.',
    price: '€20',
    unit: '/ month',
    tokenNote: 'Unlimited tag scans',
    popular: false,
    outline: true,
    cta: 'Go unlimited',
    features: [
      'Unlimited in-store & closet tag scans',
      'Full Duolingo-style Textile Learning Path',
      'Advanced dye & skin-allergen protection',
      'Priority community filters & wear insights',
    ],
  },
];

export const PricingSection: React.FC = () => {
  const { goToEarlyAccess } = useEarlyAccessNavigation();

  return (
    <>
      {/* .pricing section */}
      <section
        id="pricing"
        className="bg-[#edf1e4] pt-[100px] pb-[40px] max-[620px]:pt-[76px]"
      >
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
            className="mx-auto mb-[44px] max-w-[680px] text-center"
          >
            <div className="eyebrow mb-[14px]">
              <span className="dot" />
              <span>Transparent pricing</span>
            </div>
            <h2 className="section-h2">Pay only for what you scan.</h2>
            <p className="mx-auto max-w-[560px] text-[15px] leading-[1.75] text-[#647773]">
              Start exploring the care icon decoder and community feed for free. Add scan credits when you head to the shops, or go unlimited.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 items-stretch gap-[18px] lg:grid-cols-3">
            {PLANS.map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.1,
                  ease: [0.2, 0.7, 0.2, 1],
                }}
                className={`relative flex flex-col rounded-[20px] bg-[#fffefa] p-[30px] max-[620px]:p-[27px] ${
                  plan.popular
                    ? 'border-2 border-[#0d6457] shadow-[0_18px_50px_rgba(8,75,68,0.12)] max-[620px]:mt-[7px]'
                    : 'border border-[#173a36]/13'
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-[-13px] left-1/2 -translate-x-1/2 rounded-full bg-[#b6e6fa] px-[13px] py-[7px] text-[9px] font-extrabold tracking-[0.8px] whitespace-nowrap text-[#022e4d] uppercase">
                    Most popular · Save 10%
                  </span>
                )}

                <div className="mb-[7px] font-['Manrope'] text-[17px] font-bold text-[#173a36]">
                  {plan.name}
                </div>
                <p className="mb-[22px] min-h-[36px] text-[12.5px] leading-[1.6] text-[#647773]">
                  {plan.desc}
                </p>

                <div className="mb-[4px] font-['Manrope'] text-[42px] font-extrabold tracking-[-2px] text-[#173a36]">
                  {plan.price}{' '}
                  <small className="font-['DM_Sans'] text-[13px] font-medium tracking-normal text-[#647773]">
                    {plan.unit}
                  </small>
                </div>

                <div className="mb-[23px] text-[12px] font-bold text-[#0d6457]">
                  {plan.tokenNote}
                </div>

                <div className="mb-[20px] h-[1px] bg-[#173a36]/12" />

                <ul className="m-0 mb-[28px] grid list-none gap-[13px] p-0 text-[12px] text-[#536b65]">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-[9px]">
                      <span className="grid h-[17px] w-[17px] shrink-0 place-items-center rounded-full bg-[#e6edcf] text-[10px] font-bold text-[#0d6457]">
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => goToEarlyAccess(plan.stateLabel)}
                  className={`nylo-btn mt-auto w-full !py-[12px] ${
                    plan.outline ? 'nylo-btn-outline' : ''
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>

          <p className="mt-[25px] mb-0 text-center text-[11.5px] text-[#647773]">
            Freemium app includes profile setup, tag symbol guide & community feed. Credits never expire.
          </p>
        </div>
      </section>

      {/* .launch section (Warm Clay #855b49 Banner from reference CSS) */}
      <section id="launch" className="bg-[#edf1e4] pt-[24px] pb-[84px] max-[620px]:pb-[65px]">
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
            className="grid grid-cols-1 items-center gap-[30px] rounded-[22px] bg-[#855b49] px-[43px] py-[37px] text-white max-[800px]:text-center max-[620px]:px-[22px] max-[620px]:py-[32px] lg:grid-cols-[1fr_auto]"
          >
            <div>
              <div className="eyebrow mb-[12px] !text-[#f1d7b8]">
                <span className="dot" />
                <span>Buy once, stay forever</span>
              </div>
              <h2 className="mb-[9px] font-['Manrope'] text-[31px] leading-[1.15] font-bold tracking-[-1.2px] max-[620px]:text-[26px]">
                Make your next piece one worth keeping.
              </h2>
              <p className="m-0 max-w-[660px] text-[13.5px] leading-[1.7] text-white/82 max-[800px]:mx-auto">
                Join shoppers, hikers, and athletes replacing fast-fashion guesswork with calm, science-backed wardrobe choices.
              </p>
            </div>

            <button
              type="button"
              onClick={() => goToEarlyAccess('Early Access App Download')}
              className="nylo-btn justify-self-center !bg-[#b6e6fa] !text-[#022e4d] whitespace-nowrap hover:!bg-[#d3f0fc]"
            >
              <span>Download Nyloteum</span>
              <span aria-hidden="true">↗</span>
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};
