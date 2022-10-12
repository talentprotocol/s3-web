import Image from "next/image";
import { LabelTag, Typography, CompanyTag } from "shared-ui";
import { COPY } from "copy";
import tolgaImage from "./assets/Tolga.png";
import {
  Container,
  ContentRow,
  DisclaimerColumn,
  ImageHolder,
  Quotes,
  TagContainer,
  TitleWrapper,
} from "./styled";

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
        <Typography
          type="body1"
          text={COPY.TRUST_SECTION.TESTIMONIALS[0].TEXT}
        />
        <LabelTag
          text={COPY.TRUST_SECTION.TESTIMONIALS[0].AUTHOR}
          type="quaternary"
        />
      </DisclaimerColumn>
      <ImageHolder>
        <Image src={tolgaImage} alt="avatar" />
      </ImageHolder>
    </ContentRow>
  </Container>
);
