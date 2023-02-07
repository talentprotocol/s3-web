import { useState } from "react";
import type { NextPage, NextPageContext } from "next";
import Head from "next/head";
import { isDevice } from "utils/is-mobile";

import { useSidebar } from "components/sidebar/useSidebar";
import { Header } from "components/header";
import { HeroSection } from "components/hero-section";
import { Sidebar } from "components/sidebar";
import { Footer } from "components/footer";

import { LandingHero } from "components/handle/landing-hero";
import { Benefits } from "components/handle/benefits";

interface Props {
  isMobile: boolean;
  isSafari: boolean;
  isAndroid: boolean;
}

const Handle: NextPage<Props> = (props) => {
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
          content="Talent Protocol is the web3 professional community where high-potential individuals can build an on-chain resume and launch a talent token, allowing anyone to easily invest in their careers."
        />
        <link rel="stylesheet" href="add-fonts.css" />
        <meta property="og:image" content="/metaimage.jpg" />
      </Head>
      <main>
        {isSidebarVisible && (
          <Sidebar
            isSidebarVisible={isSidebarVisible}
            isClosing={isClosing}
            toggleSidebar={toggleSidebar}
          />
        )}
        <HeroSection darkMode={true}>
          <Header
            isMobile={props.isMobile}
            isSidebarVisible={isSidebarVisible}
            toggleSidebar={toggleSidebar}
            darkMode={true}
          />
          <LandingHero isMobile={props.isMobile} isSafari={props.isSafari} isAndroid={props.isAndroid} />
        </HeroSection>
        <Benefits isMobile={props.isMobile} isSafari={props.isSafari} isAndroid={props.isAndroid} />
        <Footer isMobile={props.isMobile} darkMode={true}/>
      </main>
		</>
	);
};

Handle.getInitialProps = (ctx: NextPageContext) => {
  return isDevice(ctx.req?.headers["user-agent"] || "");
}

export default Handle;
