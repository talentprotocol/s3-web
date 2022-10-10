import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "components/header";
import { HeroSection } from "components/hero-section";
import { LandingHero } from "components/landing-hero";
import { Mosaic } from "components/mosaic";
import { TabSection } from "components/tab-section";
import { DoorsSection } from "components/doors-hero";
import { ProfileSection } from "components/profile-section";
import { CareerCircleSection } from "components/career-circle-section";
import { OpportunitySection } from "components/opportunity-section";
import { TalentHouseSection } from "components/talent-house-section";
import { LevelUpSection } from "components/level-up-section";
import { TrustSection } from "components/trust-section";
import { TakeTheLeapBanner } from "components/take-the-leap-banner";
import { OpenSourceBanner } from "components/open-source-banner";
import { Footer } from "components/footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Talent Protocol</title>
        <meta name="description" content="TALENT APP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSection>
          <Header />
          <LandingHero />
          <Mosaic />
        </HeroSection>
        <TabSection />
        <HeroSection>
          <DoorsSection />
        </HeroSection>
        <ProfileSection />
        <CareerCircleSection />
        <OpportunitySection />
        <TalentHouseSection />
        <LevelUpSection />
        <HeroSection>
          <TrustSection />
        </HeroSection>
        <TakeTheLeapBanner />
        <OpenSourceBanner />
      </main>
      <Footer />
    </>
  );
};

export default Home;
