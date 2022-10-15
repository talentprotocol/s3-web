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
const AMOUNT_OF_SLIDER_ENTRIES = new Array(18).fill([
  ...SLIDER_ENTRIES,
]);

export const PartnersBanner = ({ isMobile }: Props) => {
  const sliderContent = useMemo(
    () =>
      AMOUNT_OF_SLIDER_ENTRIES.flat().map((el, index) => (
        <SliderEntryContainer key={`silder-entry-${index}`}>
          <SliderEntryInnerContainer width={el.width}>
            <Image src={el.image} />
          </SliderEntryInnerContainer>
        </SliderEntryContainer>
      )),
    []
  );
  const sliderLeftContent = useMemo(
    () =>
      AMOUNT_OF_SLIDER_ENTRIES.flat()
        .reverse()
        .map((el, index) => (
          <SliderEntryContainer key={`silder-entry-${index}`}>
            <SliderEntryInnerContainer width={el.width}>
              <Image src={el.image} />
            </SliderEntryInnerContainer>
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
