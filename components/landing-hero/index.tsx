import { COPY } from "copy";
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

export const LandingHero = () => (
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
      <HandleInput contentEditable spellCheck={false}>
        {COPY.LANDING_HERO.RESERVE_TAL.PLACEHOLDER}
      </HandleInput>
      <TokenSuffix>{COPY.LANDING_HERO.RESERVE_TAL.TOKEN}</TokenSuffix>
      <ButtonContainer>
        <ReserveHandleButton>
          {COPY.LANDING_HERO.RESERVE_TAL.BUTTON}
        </ReserveHandleButton>
      </ButtonContainer>
    </ReserveHandleContainer>
  </Container>
);
