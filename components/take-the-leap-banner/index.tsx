import { COPY } from "copy";
import { useRef } from "react";
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
  StyledButtonWrapper
} from "./styled";

export const TakeTheLeapBanner = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  return (
    <Container>
      <InnerContainer>
        <Typography type="h2">
          <>
            {COPY.TAKE_THE_LEAP_BANNER.TITLE_BLACK1}
            <br />
            <PurpleText>
              {COPY.TAKE_THE_LEAP_BANNER.TITLE_PURPLE1}
            </PurpleText>
          </>
        </Typography>
        <Typography
          type="body1"
          text={COPY.TAKE_THE_LEAP_BANNER.SUBTITLE}
        />
        <InputWrapper>
          <StyledWrapper>
            <StyledInput ref={emailRef} placeholder={COPY.TAKE_THE_LEAP_BANNER.INPUT_PLACEHOLDER} />
            <ButtonWrapper>
                <StyledButtonWrapper>
                    <StyledButton>--E</StyledButton>
                </StyledButtonWrapper>
            </ButtonWrapper>
          </StyledWrapper>
        </InputWrapper>
      </InnerContainer>
    </Container>
  );
};
