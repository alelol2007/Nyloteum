import React from 'react';
import { motion } from 'framer-motion';
import { useEarlyAccessNavigation } from '../utils/navigation';

const PLANS = [
  {
    id: 'free-weekly',
    stateLabel: 'Free Weekly (5 free scans/wk + 1-wk Premium trial)',
    name: 'Free Weekly',
    desc: 'Scan labels every week at zero cost—plus get a full week of Premium free to try everything out.',
    price: '€0',
    unit: '/ week',
    tokenNote: '5 free scans / week + 1-wk Premium trial',
    popular: false,
    outline: true,
    cta: 'Start with 5 free scans',
    features: [
      '5 free in-store clothing tag scans every week',
      '1 week of Premium free to try it out',
      'Full access to Care Icon Decoder & Wear Feed',
      'Quick profile presets & custom allergy filters',
    ],
  },
  {
    id: 'tokens-5',
    stateLabel: 'Token Top-Up (5 tokens for €1)',
    name: 'Token Top-Up',
    desc: 'Out on a bigger weekend shopping trip? Top up extra scan tokens anytime without a subscription.',
    price: '€1',
    unit: '/ 5 tokens',
    tokenNote: '5 tokens for €1 (1 token = 1 tag scan)',
    popular: true,
    outline: false,
    cta: 'Get 5 tokens for €1',
    features: [
      '5 tag scan tokens — purchased tokens never expire',
      'Full material durability & comfort breakdown',
      'Plain-English explanation of why it works or fails',
      'Vetted higher-quality garment alternatives',
    ],
  },
  {
    id: 'premium',
    stateLabel: 'Nyloteum Premium (€20/mo · 1 week free trial)',
    name: 'Premium Monthly',
    desc: 'Try Premium free for your first week, then scan every rack without counting tokens.',
    price: '€20',
    unit: '/ month',
    tokenNote: '1st week free · Unlimited tag scans',
    popular: false,
    outline: true,
    cta: 'Try 1 week free',
    features: [
      '1 full week of Premium free to try it out',
      'Unlimited in-store & closet tag scans',
      'Full Duolingo-style Textile Learning Path',
      'Advanced dye & skin-allergen protection',
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
        className="bg-[#fbf7ee] pt-[100px] pb-[40px] max-[620px]:pt-[76px]"
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
            <h2 className="section-h2 text-[#414b3b]">
              Start free every week. Top up 5 tokens for €1.
            </h2>
            <p className="mx-auto max-w-[560px] text-[15px] leading-[1.75] text-[#6c6858]">
              Every account gets 5 free scans per week plus 1 week of Premium to try it out. Need extra scans in the fitting room? Grab 5 tokens for €1, or go unlimited.
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
                className={`relative flex flex-col rounded-[20px] p-[30px] max-[620px]:p-[27px] ${
                  plan.popular
                    ? 'border-2 border-[#ab8742] bg-[#fffdfa] shadow-[0_20px_55px_rgba(171,135,66,0.2)] max-[620px]:mt-[7px]'
                    : 'border border-[#ab8742]/24 bg-[#fffdfa]'
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-[-13px] left-1/2 -translate-x-1/2 rounded-full bg-[#ab8742] px-[14px] py-[7px] text-[9px] font-extrabold tracking-[0.8px] whitespace-nowrap text-[#fffdfa] uppercase">
                    Most popular · 5 tokens = €1
                  </span>
                )}

                <div className="mb-[7px] font-['Manrope'] text-[17px] font-bold text-[#414b3b]">
                  {plan.name}
                </div>
                <p className="mb-[22px] min-h-[36px] text-[12.5px] leading-[1.6] text-[#6c6858]">
                  {plan.desc}
                </p>

                <div className="mb-[4px] font-['Manrope'] text-[42px] font-extrabold tracking-[-2px] text-[#414b3b]">
                  {plan.price}{' '}
                  <small className="font-['DM_Sans'] text-[13px] font-medium tracking-normal text-[#6c6858]">
                    {plan.unit}
                  </small>
                </div>

                <div className="mb-[23px] text-[12px] font-bold text-[#927134]">
                  {plan.tokenNote}
                </div>

                <div className="mb-[20px] h-[1px] bg-[#ab8742]/20" />

                <ul className="m-0 mb-[28px] grid list-none gap-[13px] p-0 text-[12px] text-[#414b3b]/90">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-[9px]">
                      <span className="grid h-[17px] w-[17px] shrink-0 place-items-center rounded-full bg-[#ab8742]/22 text-[10px] font-bold text-[#7d5f28]">
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

          <p className="mt-[25px] mb-0 text-center text-[11.5px] text-[#6c6858]">
            Includes 5 free scans every week, a 1-week Premium trial, care icon guide & community feed. Purchased tokens never expire.
          </p>
        </div>
      </section>

      {/* .launch section (Warm Gold/Ochre #ab8742 Banner) */}
      <section id="launch" className="bg-[#fbf7ee] pt-[24px] pb-[84px] max-[620px]:pb-[65px]">
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
            className="grid grid-cols-1 items-center gap-[30px] rounded-[22px] bg-[#ab8742] px-[43px] py-[37px] text-[#fffdfa] shadow-[0_24px_60px_rgba(171,135,66,0.25)] max-[800px]:text-center max-[620px]:px-[22px] max-[620px]:py-[32px] lg:grid-cols-[1fr_auto]"
          >
            <div>
              <div className="eyebrow mb-[12px] !text-[#fffdfa]">
                <span className="h-[7px] w-[7px] rounded-full bg-[#414b3b] shadow-[0_0_0_4px_rgba(65,75,59,0.22)]" />
                <span>Buy once, stay forever</span>
              </div>
              <h2 className="mb-[9px] font-['Manrope'] text-[31px] leading-[1.15] font-bold tracking-[-1.2px] max-[620px]:text-[26px]">
                Make your next piece one worth keeping.
              </h2>
              <p className="m-0 max-w-[660px] text-[13.5px] leading-[1.7] font-medium text-[#fffdfa]/92 max-[800px]:mx-auto">
                Join shoppers, hikers, and athletes replacing fast-fashion guesswork with calm, science-backed wardrobe choices.
              </p>
            </div>

            <button
              type="button"
              onClick={() => goToEarlyAccess('Early Access App Download')}
              className="nylo-btn justify-self-center !bg-[#414b3b] !text-[#fffdfa] whitespace-nowrap hover:!bg-[#2f372b]"
            >
              <span>Download Nyloteum</span>
              <span aria-hidden="true" className="text-[#f3ead7]">↗</span>
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};
