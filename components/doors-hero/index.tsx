import { COPY } from "copy";
import { Typography } from "shared-ui";
import { Door } from "./door";
import {
  ArrowLabel,
  Container,
  DoorsRow,
  FooterRow,
  SeeAllBenefitsLabel,
  TitleContainer,
} from "./styled";

export const DoorsSection = () => (
  <Container>
    <TitleContainer>
      <Typography type="h2" text={COPY.DOOS_HERO.TITLE} />
    </TitleContainer>
    <DoorsRow>
      <Door
        isHighlighted
        labelType="highlighted"
        labelText={COPY.DOOS_HERO.DOORS[0].LABEL_TEXT}
        title={COPY.DOOS_HERO.DOORS[0].TITLE}
        subTitle={COPY.DOOS_HERO.DOORS[0].SUB_TITLE}
        buttonText={COPY.DOOS_HERO.DOORS[0].BUTTON}
      />
      <Door
        labelType="default"
        labelText={COPY.DOOS_HERO.DOORS[1].LABEL_TEXT}
        title={COPY.DOOS_HERO.DOORS[1].TITLE}
        subTitle={COPY.DOOS_HERO.DOORS[1].SUB_TITLE}
        buttonText={COPY.DOOS_HERO.DOORS[1].BUTTON}
      />
      <Door
        labelType="default"
        labelText={COPY.DOOS_HERO.DOORS[2].LABEL_TEXT}
        title={COPY.DOOS_HERO.DOORS[2].TITLE}
        subTitle={COPY.DOOS_HERO.DOORS[2].SUB_TITLE}
        buttonText={COPY.DOOS_HERO.DOORS[2].BUTTON}
      />
    </DoorsRow>
    <FooterRow>
      <SeeAllBenefitsLabel>
        {COPY.DOOS_HERO.FOOTER}
      </SeeAllBenefitsLabel>
      <ArrowLabel>--S</ArrowLabel>
    </FooterRow>
  </Container>
);
