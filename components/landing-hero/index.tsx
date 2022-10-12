import { COPY } from "copy";
import { useMediaQuery } from "hooks/use-media-query";
import { Typography } from "shared-ui";
import {
  ButtonContainer,
  Container,
  HandleInput,
  PurpleText,
  ReserveHandleButton,
  ReserveHandleContainer,
  TokenSuffix,
} from "./styled";

export const LandingHero = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Container>
      <Typography type="h1">
        <>
          {COPY.LANDING_HERO.TITLE_BLACK_1}
          <PurpleText>{COPY.LANDING_HERO.TITLE_PURPLE}</PurpleText>
          {COPY.LANDING_HERO.TITLE_BLACK_2}
        </>
      </Typography>
      <Typography text={COPY.LANDING_HERO.SUBTITLE} type="body1" />
      <ReserveHandleContainer>
        <HandleInput
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
          <ReserveHandleButton>
            {isMobile
              ? COPY.LANDING_HERO.RESERVE_TAL.BUTTON_MOBILE
              : COPY.LANDING_HERO.RESERVE_TAL.BUTTON}
          </ReserveHandleButton>
        </ButtonContainer>
      </ReserveHandleContainer>
    </Container>
  );
};
