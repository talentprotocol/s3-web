import Image from "next/image";
import { useMemo } from "react";
import { useMediaQuery } from "hooks/use-media-query";
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
} from "./styled";

const SLIDER_ENTRIES = [
  allianceImage,
  blu3Dao,
  celo,
  floriImage,
  herLatamImage,
  kernelImage,
  launchHouse,
  polygonImage,
  protocolLabsImage,
];
const AMOUNT_OF_SLIDER_ENTRIES = new Array(100).fill([
  ...SLIDER_ENTRIES,
]);

export const PartnersBanner = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const sliderContent = useMemo(
    () =>
      AMOUNT_OF_SLIDER_ENTRIES.flat().map((img, index) => (
        <SliderEntryContainer key={`silder-entry-${index}`}>
          <Image src={img} />
        </SliderEntryContainer>
      )),
    []
  );
  const sliderLeftContent = useMemo(
    () =>
      AMOUNT_OF_SLIDER_ENTRIES.flat()
        .reverse()
        .map((img, index) => (
          <SliderEntryContainer key={`silder-entry-${index}`}>
            <Image src={img} />
          </SliderEntryContainer>
        )),
    []
  );
  return (
    <Container>
      <Typography type="h3" text={COPY.PARTNERS_BANNER.TITLE} />
      <SliderContainer>
        <Slider>{sliderContent}</Slider>
      </SliderContainer>
      {isMobile && (
        <SliderContainer>
          <Slider isReversed>{sliderLeftContent}</Slider>
        </SliderContainer>
      )}
    </Container>
  );
};
