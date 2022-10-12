import { useMemo, useRef } from "react";
import { COPY } from "copy";
import { Typography } from "shared-ui";
import {
  Container,
  Slider,
  SliderContainer,
  SliderEntryContainer,
} from "./styled";

const AMOUNT_OF_SLIDER_ENTRIES = new Array(100).fill(undefined);

export const PartnersBanner = () => {
  const sliderContent = useMemo(
    () =>
      AMOUNT_OF_SLIDER_ENTRIES.map((_, index) => (
        <SliderEntryContainer key={`silder-entry-${index}`}>
          asdasd
        </SliderEntryContainer>
      )),
    []
  );
  return (
    <Container>
      <Typography type="h2" text={COPY.PARTNERS_BANNER.TITLE} />
      <SliderContainer>
        <Slider>{sliderContent}</Slider>
      </SliderContainer>
    </Container>
  );
};
