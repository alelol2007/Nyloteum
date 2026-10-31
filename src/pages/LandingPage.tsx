import React from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { WalkthroughSection } from '../components/WalkthroughSection';
import { EcosystemTabsPreview } from '../components/EcosystemTabsPreview';
import { PricingSection } from '../components/PricingSection';
import { Footer } from '../components/Footer';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#faf6ee] text-[#414b3b]">
      <Navbar />
      <main>
        <HeroSection />
        <WalkthroughSection />
        <EcosystemTabsPreview />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};
