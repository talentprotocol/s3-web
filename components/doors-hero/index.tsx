import { COPY } from "copy";
import { Typography } from "shared-ui";
import { Door } from "./door";
import { Container, DoorsRow, TitleContainer } from "./styled";

export const DoorsSection = () => (
  <Container>
    <TitleContainer>
      <Typography type="h2" text={COPY.DOOS_HERO.TITLE} />
    </TitleContainer>
    <DoorsRow>
      <Door isHighlighted />
      <Door />
      <Door />
    </DoorsRow>
  </Container>
);
