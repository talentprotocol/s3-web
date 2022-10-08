import { COPY } from "copy";
import { Button, LabelTag, Typography } from "shared-ui";
import {
  ActionArea,
  ButtonIcon,
  Container,
  ContentArea,
  ImageHolder,
  InnerContainer,
} from "./styled";

export const OpportunitySection = () => (
  <Container>
    <InnerContainer>
      <ContentArea>
        <LabelTag text={COPY.OPPORTUNITY_SECTION.TAG} type="default" />
        <Typography
          type="h2"
          text={COPY.OPPORTUNITY_SECTION.TITLE}
          color="BLACK"
        />
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
          >
            <ButtonIcon>--E</ButtonIcon>
          </Button>
        </ActionArea>
      </ContentArea>
      <ImageHolder></ImageHolder>
    </InnerContainer>
  </Container>
);
