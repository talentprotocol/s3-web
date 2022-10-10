import { COPY } from "copy";
import { Typography } from "shared-ui";
import { CompanyTag } from "shared-ui/company-tag";
import { Container, TagContainer, TitleWrapper } from "./styled";

export const TrustSection = () => (
  <Container>
    <TagContainer>
      <CompanyTag type="facebook" />
      <CompanyTag type="spotify" />
      <CompanyTag type="amazon" />
      <CompanyTag type="revolut" />
      <CompanyTag type="metamask" />
    </TagContainer>
    <TitleWrapper>
      <Typography type="h2" text={COPY.TRUST_SECTION.TITLE} />
    </TitleWrapper>
  </Container>
);
