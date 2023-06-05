import { COPY } from "copy";
import { Door } from "./door";
import {
  ArrowLabel,
  Container,
  DoorsRow,
  FooterRow,
  SeeAllBenefitsLabel,
  Title,
  TitleContainer,
} from "./styled";

export const DoorsSection = () => (
  <Container>
    <TitleContainer>
      <Title>{COPY.DOOS_HERO.TITLE}</Title>
    </TitleContainer>
    <DoorsRow>
      <Door
        isHighlighted
        labelType="highlighted"
        labelText={COPY.DOOS_HERO.DOORS[0].LABEL_TEXT}
        title={COPY.DOOS_HERO.DOORS[0].TITLE}
        subTitle={COPY.DOOS_HERO.DOORS[0].SUB_TITLE}
        buttonText={COPY.DOOS_HERO.DOORS[0].BUTTON}
        url={COPY.DOOS_HERO.DOORS[0].URL}
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
      <ArrowLabel>
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
          <path
            d="M0.898438 8.31947V10.5491C5.79028 10.9484 10.0831 14.0433 10.1164 20H11.8801C11.9134 14.0433 16.2063 10.9484 21.0981 10.5491V8.31947C16.9384 8.68552 13.4109 10.8486 12.0465 14.8419H11.98L12.0798 0H9.91674L10.0166 14.8419H9.95002C8.58563 10.8486 5.05817 8.68552 0.898438 8.31947Z"
            fill="#1E2330"
          />
        </svg>
      </ArrowLabel>
    </FooterRow>
  </Container>
);
