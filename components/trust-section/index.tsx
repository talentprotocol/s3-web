import { COPY } from "copy";
import { LabelTag, Typography } from "shared-ui";
import { CompanyTag } from "shared-ui/company-tag";
import { Container, ContentRow, DisclaimerColumn, Quotes, TagContainer, TitleWrapper } from "./styled";

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
    <ContentRow>
      <Quotes>“</Quotes>
      <DisclaimerColumn>
        <Typography type="body1" text={COPY.TRUST_SECTION.TESTIMONIALS[0].TEXT} />
        <LabelTag text={COPY.TRUST_SECTION.TESTIMONIALS[0].AUTHOR} type="quaternary" />
      </DisclaimerColumn>
    </ContentRow>
  </Container>
);
