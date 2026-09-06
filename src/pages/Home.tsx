import { Layout } from '../components/layout/Layout';
import { HeroSection } from '../components/home/HeroSection';
import { QuickInfoBar } from '../components/home/QuickInfoBar';
import { AboutSection } from '../components/home/AboutSection';
import { FocusAreasSection } from '../components/home/FocusAreasSection';
import { FeaturedProgramsSection } from '../components/home/FeaturedProgramsSection';
import { TransparencySection } from '../components/home/TransparencySection';
import { NewsSection } from '../components/home/NewsSection';
import { ImpactJourneySection } from '../components/home/ImpactJourneySection';
import { MediaSection } from '../components/home/MediaSection';
import { CTASection } from '../components/home/CTASection';
import { PartnersSection } from '../components/home/PartnersSection';
import { TargetAudienceSection } from '../components/home/TargetAudienceSection';

export function Home() {
  return (
    <Layout>
      <HeroSection />
      <QuickInfoBar />
      <AboutSection />
      <FocusAreasSection />
      <FeaturedProgramsSection />
      <TargetAudienceSection />
      <TransparencySection />
      <NewsSection />
      <ImpactJourneySection />
      <MediaSection />
      <CTASection />
      <PartnersSection />
    </Layout>
  );
}
