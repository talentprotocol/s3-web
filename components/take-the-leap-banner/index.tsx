import { useCallback, useMemo, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import arrowImage from "./assets/arrow.svg";
import { COPY } from "copy";
import { Typography } from "shared-ui";
import {
  Container,
  InnerContainer,
  InputWrapper,
  PurpleText,
  StyledWrapper,
  StyledInput,
  StyledButton,
  ButtonWrapper,
  StyledButtonWrapper,
  Slider,
  SliderContainer,
  SliderEntryContainer,
  Title,
} from "./styled";
import Image from "next/image";

const AMOUNT_OF_SLIDER_ENTRIES = new Array(100).fill(undefined);

export const TakeTheLeapBanner = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const subscribeToNewsLetter = useCallback(() => {
    if (emailRef.current) {
      axios
        .post("/api/newsletter", {
          email: emailRef.current.value,
        })
        .then(() => {
          toast("You've successfully subscribed to our newsletter", {
            type: "success",
          });
        })
        .catch(() => {
          toast("Please enter a valid email address", {
            type: "error",
          });
        });
    }
  }, []);
  const sliderContent = useMemo(
    () =>
      AMOUNT_OF_SLIDER_ENTRIES.map((_, index) => (
        <SliderEntryContainer key={`silder-entry-${index}`}>
          <Typography
            type="h3"
            key={`slider-piece-${index}`}
            text={COPY.TAKE_THE_LEAP_BANNER.SLIDER}
          />
          <Typography
            type="h3"
            key={`slider-piece-suffix-${index}`}
            text={COPY.TAKE_THE_LEAP_BANNER.SLIDER_SUFFIX}
            color="LIGHT_PURPLE"
          />
        </SliderEntryContainer>
      )),
    []
  );
  return (
    <>
      <Container>
        <InnerContainer>
          <Title>
            <>
              {COPY.TAKE_THE_LEAP_BANNER.TITLE_BLACK1}
              <br />
              <PurpleText>
                {COPY.TAKE_THE_LEAP_BANNER.TITLE_PURPLE1}
              </PurpleText>
            </>
          </Title>
          <Typography
            type="body1"
            text={COPY.TAKE_THE_LEAP_BANNER.SUBTITLE}
          />
          <InputWrapper>
            <StyledWrapper>
              <StyledInput
                ref={emailRef}
                placeholder={
                  COPY.TAKE_THE_LEAP_BANNER.INPUT_PLACEHOLDER
                }
              />
              <ButtonWrapper>
                <StyledButtonWrapper>
                  <StyledButton onClick={subscribeToNewsLetter}>
                    <Image src={arrowImage} alt="Arrow pointing down" />
                  </StyledButton>
                </StyledButtonWrapper>
              </ButtonWrapper>
            </StyledWrapper>
          </InputWrapper>
        </InnerContainer>
      </Container>
      <SliderContainer>
        <Slider
          onClick={() =>
            window.location.href = "/username"
          }
        >
          {sliderContent}
        </Slider>
      </SliderContainer>
    </>
  );
};
