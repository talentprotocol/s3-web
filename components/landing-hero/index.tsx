import { COPY } from "copy";
import { useCallback, useRef } from "react";
import { Typography } from "shared-ui";
import ReserveHandleButton from "./reserve-handle-button";
import {
  Container,
  HandleInput,
  PurpleText,
  ReserveHandleContainer,
  SubTitleWrapper,
  TokenSuffix,
} from "./styled";
import { Props } from "./types";

export const LandingHero = ({
  isMobile,
  isSafari,
  isAndroid,
}: Props) => {
  const talRef = useRef<HTMLSpanElement>(null);
  const handleReverveButtonClick = useCallback(() => {
    window.open(
      `https://beta.talentprotocol.com/join?handle=${talRef.current?.innerText}`
    );
  }, []);
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
          placeholder={
            isMobile
              ? COPY.LANDING_HERO.RESERVE_TAL.PLACEHOLDER_MOBILE
              : COPY.LANDING_HERO.RESERVE_TAL.PLACEHOLDER
          }
        />
        <TokenSuffix>
          {COPY.LANDING_HERO.RESERVE_TAL.TOKEN}
        </TokenSuffix>
        <ReserveHandleButton
          callback={handleReverveButtonClick}
          isMobile={isMobile}
          isSafari={isSafari}
          isAndroid={isAndroid}
        />
      </ReserveHandleContainer>
    </Container>
  );
};
