import { COPY } from "copy";
import { useMediaQuery } from "hooks/use-media-query";
import { useCallback, useEffect, useRef, useState } from "react";
import { Typography } from "shared-ui";
import {
  ButtonContainer,
  Container,
  HandleInput,
  PurpleText,
  ReserveHandleButton,
  ReserveHandleContainer,
  SubTitleWrapper,
  TokenSuffix,
} from "./styled";

export const LandingHero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true)
  }, []);
  const talRef = useRef<HTMLSpanElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const handleReverveButtonClick = useCallback(() => {
    window.open(
      `https://beta.talentprotocol.com/join?handle=${talRef.current?.innerText}`
    );
  }, [talRef.current]);
  return (
    <Container>
      <Typography type="h1">
        <>
          {COPY.LANDING_HERO.TITLE_BLACK_1}
          <PurpleText>{COPY.LANDING_HERO.TITLE_PURPLE}</PurpleText>
          {COPY.LANDING_HERO.TITLE_BLACK_2}
        </>
      </Typography>
      <SubTitleWrapper>
        <Typography text={COPY.LANDING_HERO.SUBTITLE} type="body1" />
      </SubTitleWrapper>
      <ReserveHandleContainer>
        <HandleInput
          ref={talRef}
          contentEditable
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
          spellCheck={false}
          placeholder={COPY.LANDING_HERO.RESERVE_TAL.PLACEHOLDER}
        />
        <TokenSuffix>
          {COPY.LANDING_HERO.RESERVE_TAL.TOKEN}
        </TokenSuffix>
        <ButtonContainer>
          <ReserveHandleButton onClick={handleReverveButtonClick}>
            {mounted && isMobile
              ? COPY.LANDING_HERO.RESERVE_TAL.BUTTON_MOBILE
              : COPY.LANDING_HERO.RESERVE_TAL.BUTTON}
          </ReserveHandleButton>
        </ButtonContainer>
      </ReserveHandleContainer>
    </Container>
  );
};
