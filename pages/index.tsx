import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from "components/header";
import { HeroSection } from 'components/hero-section';
import { LandingHero } from 'components/landing-hero';
import { Mosaic } from 'components/mosaic';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Talent Protocol</title>
        <meta name="description" content="TALENT APP" />
        <link rel="icon" href="/favicon.ico" />
        { /* TODO: ADD STYLED COMPONENTS GLOBALS */ }
        <style>
          {`* { box-sizing: border-box; }
          html, body { margin: 0; padding: 0; }`}
        </style>
      </Head> 
      <main>
        <HeroSection>
          <Header />
          <LandingHero />
          <Mosaic />
        </HeroSection>
      </main>
    </>
  )
}

export default Home
