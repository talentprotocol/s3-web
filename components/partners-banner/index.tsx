import Image from "next/image";
import { useMemo } from "react";
import { COPY } from "copy";
import allianceImage from "./assets/alliance.png";
import blu3Dao from "./assets/blu3-dao.png";
import celo from "./assets/celo.svg";
import floriImage from "./assets/flori.png";
import herLatamImage from "./assets/her-latam.png";
import kernelImage from "./assets/kernel.svg";
import launchHouse from "./assets/launch-house.svg";
import polygonImage from "./assets/polygon-studios.png";
import protocolLabsImage from "./assets/protocol-labs.svg";
import { Typography } from "shared-ui";
import {
  Container,
  Slider,
  SliderContainer,
  SliderEntryContainer,
  SliderEntryInnerContainer,
  TitleContainer,
} from "./styled";
import { Props } from "./types";

const SLIDER_ENTRIES = [
  {
    image: allianceImage,
    width: "139px",
  },
  {
    image: blu3Dao,
    width: "77px",
  },
  {
    image: celo,
    width: "136px",
  },
  {
    image: floriImage,
    width: "130px",
  },
  {
    image: herLatamImage,
    width: "94px",
  },
  {
    image: kernelImage,
    width: "110px",
  },
  {
    image: launchHouse,
    width: "103px",
  },
  {
    image: polygonImage,
    width: "117px",
  },
  {
    image: protocolLabsImage,
    width: "155px",
  },
];

export const PartnersBanner = ({ isMobile }: Props) => {
  const sliderEntries = useMemo(
    () => new Array(isMobile ? 9 : 18).fill([...SLIDER_ENTRIES]),
    [isMobile]
  );
  const sliderContent = useMemo(
    () =>
      sliderEntries.flat().map((el, index) => (
        <SliderEntryContainer key={`silder-entry-${index}`}>
          <SliderEntryInnerContainer width={el.width}>
            <Image src={el.image} alt="partner-logo" />
          </SliderEntryInnerContainer>
        </SliderEntryContainer>
      )),
    [sliderEntries]
  );
  const sliderLeftContent = useMemo(
    () =>
      sliderEntries
        .flat()
        .reverse()
        .map((el, index) => (
          <SliderEntryContainer key={`silder-entry-${index}`}>
            <SliderEntryInnerContainer width={el.width}>
              <Image src={el.image} alt="partner-logo" />
            </SliderEntryInnerContainer>
          </SliderEntryContainer>
        )),
    [sliderEntries]
  );
  return (
    <Container>
      <TitleContainer>
        <Typography type="h3" text={COPY.PARTNERS_BANNER.TITLE} />
      </TitleContainer>
      <SliderContainer>
        <Slider isMobile={isMobile}>{sliderContent}</Slider>
      </SliderContainer>
      {isMobile && (
        <SliderContainer>
          <Slider isReversed isMobile={isMobile}>
            {sliderLeftContent}
          </Slider>
        </SliderContainer>
      )}
    </Container>
  );
};
