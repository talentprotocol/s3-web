import { COPY } from "copy";
import { Typography } from "shared-ui/typography";
import { Container } from "./styled";

export const LandingHero = () => (
    <Container>
        <Typography text={COPY.LANDING_HERO.TITLE} type="h1" />
        <Typography text={COPY.LANDING_HERO.SUBTITLE} type="body1" />
    </Container>
);