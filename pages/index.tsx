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
import { TrustSection } from "components/trust-section";
import { TakeTheLeapBanner } from "components/take-the-leap-banner";
import { OpenSourceBanner } from "components/open-source-banner";
import { Footer } from "components/footer";
import { PartnersBanner } from "components/partners-banner";
import { Sidebar } from "components/sidebar";
import { useSidebar } from "components/sidebar/useSidebar";
import { isDevice } from "utils/is-mobile";

interface Props {
  isMobile: boolean;
  isSafari: boolean;
  isAndroid: boolean;
}

const Home: NextPage<Props> = (props) => {
  const { isClosing, toggleSidebar, isSidebarVisible } = useSidebar();

  return (
    <>
      <Head>
        <title>Talent Protocol - Web3 Professional Community</title>
        <meta name="description" content="TALENT APP" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:url"
          content="https://www.talentprotocol.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Talent Protocol - Web3 Professional Community"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:description"
          content="Talent Protocol is a web3 professional network where the next generation of builders can share their goals and find the support they need to succeed. 🙌"
        />
        <link rel="stylesheet" href="add-fonts.css" />
        <meta property="og:image" content="/metaimage.jpg?1" />
        <meta property="twitter:image" content="/metaimage.jpg?1" />
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
            darkMode={false}
          />
          <LandingHero />
          <Mosaic isMobile={props.isMobile} />
        </HeroSection>
        <TabSection />
        <DoorsSection />
        <ProfileSection />
        <CareerCircleSection />
        <OpportunitySection />
        <TalentHouseSection />
        <HeroSection>
          <TrustSection isMobile={props.isMobile} />
        </HeroSection>
        <PartnersBanner isMobile={props.isMobile} />
        <TakeTheLeapBanner />
        <OpenSourceBanner />
      </main>
      <Footer isMobile={props.isMobile} />
      <ToastContainer />
    </>
  );
};

Home.getInitialProps = (ctx: NextPageContext) => {
  return isDevice(ctx.req?.headers["user-agent"] || "");
};

export default Home;
