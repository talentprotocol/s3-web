import type { NextPage, NextPageContext } from "next";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import { PartnersBanner } from "components/partners-banner";
import { Sidebar } from "components/sidebar";
import { useSidebar } from "components/sidebar/useSidebar";
import { isMobile } from "utils/is-mobile";

interface Props {
  isMobile: boolean
}

const Home: NextPage<Props> = (props) => {
  const { isClosing, toggleSidebar, isSidebarVisible } = useSidebar();
  return (
    <>
      <Head>
        <title>Talent Protocol</title>
        <meta name="description" content="TALENT APP" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {isSidebarVisible && (
          <Sidebar
            isSidebarVisible={isSidebarVisible}
            isClosing={isClosing}
            toggleSidebar={toggleSidebar}
          />
        )}
        <HeroSection>
          <Header
            isMobile={props.isMobile}
            isSidebarVisible={isSidebarVisible}
            toggleSidebar={toggleSidebar}
          />
          <LandingHero isMobile={props.isMobile} />
          <Mosaic isMobile={props.isMobile} />
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
          <TrustSection isMobile={props.isMobile}/>
        </HeroSection>
        <PartnersBanner isMobile={props.isMobile}/>
        <TakeTheLeapBanner />
        <OpenSourceBanner />
      </main>
      <Footer isMobile={props.isMobile} />
      <ToastContainer />
    </>
  );
};

Home.getInitialProps = (ctx: NextPageContext) => ({isMobile: isMobile(ctx.req?.headers["user-agent"] || "")});

export default Home;
