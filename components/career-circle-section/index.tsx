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

export const CareerCircleSection = () => (
  <Container>
    <InnerContainer>
      <ImageHolder></ImageHolder>
      <ContentArea>
        <LabelTag
          text={COPY.CAREER_CIRCLE_SECTION.TAG}
          type="default"
        />
        <Typography
          type="h2"
          text={COPY.CAREER_CIRCLE_SECTION.TITLE}
          color="BLACK"
        />
        <Typography
          type="body2"
          text={COPY.CAREER_CIRCLE_SECTION.TEXT}
          color="BLACK"
        />
        <ActionArea>
          <Button
            text={COPY.CAREER_CIRCLE_SECTION.BUTTON}
            type="link"
            variant="quaternary"
          >
            <ButtonIcon>--E</ButtonIcon>
          </Button>
        </ActionArea>
      </ContentArea>
    </InnerContainer>
  </Container>
);
