import { COPY } from "copy";
import { Typography } from "shared-ui/typography";
import { Container, PurpleText } from "./styled";

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
  </Container>
);
