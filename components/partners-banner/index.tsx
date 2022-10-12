import { useMemo } from "react";
import { useMediaQuery } from "hooks/use-media-query";
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
  const isMobile = useMediaQuery("(max-width: 768px)");
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
      <Typography type="h3" text={COPY.PARTNERS_BANNER.TITLE} />
      <SliderContainer>
        <Slider>{sliderContent}</Slider>
      </SliderContainer>
      {isMobile && (
        <SliderContainer>
          <Slider isReversed>{sliderContent}</Slider>
        </SliderContainer>
      )}
    </Container>
  );
};
