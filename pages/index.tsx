import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "components/header";
import { HeroSection } from "components/hero-section";
import { LandingHero } from "components/landing-hero";
import { Mosaic } from "components/mosaic";
import { TabSection } from "components/tab-section";
import { DoorsSection } from "components/doors-hero";
import { ProfileSection } from "components/profile-section";

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
      </main>
    </>
  );
};

export default Home;
