import Image from "next/image";
import { COPY } from "copy";
import { Button, LabelTag, Typography } from "shared-ui";
import opportunitiesImage from "./assets/opportunities.svg";
import {
  ActionArea,
  ButtonIcon,
  Container,
  ContentArea,
  ImageHolder,
  InnerContainer,
  Title,
} from "./styled";

export const OpportunitySection = () => (
  <Container>
    <InnerContainer>
      <ContentArea>
        <LabelTag
          text={COPY.OPPORTUNITY_SECTION.TAG}
          type="default"
        />
        <Title>{COPY.OPPORTUNITY_SECTION.TITLE}</Title>
        <Typography
          type="body2"
          text={COPY.OPPORTUNITY_SECTION.TEXT}
          color="BLACK"
        />
        <ActionArea>
          <Button
            text={COPY.OPPORTUNITY_SECTION.BUTTON}
            type="link"
            variant="quaternary"
            href="https://t.me/talentprotocol"
          >
            <ButtonIcon>--E</ButtonIcon>
          </Button>
        </ActionArea>
      </ContentArea>
      <ImageHolder>
        <Image
          priority
          src={opportunitiesImage}
          alt="opportunities"
        />
      </ImageHolder>
    </InnerContainer>
  </Container>
);
