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

export const LevelUpSection = () => (
  <Container>
    <InnerContainer>
      <ContentArea>
        <LabelTag text={COPY.LEVEL_UP_SECTION.TAG} type="secondary" />
        <Typography
          type="h2"
          text={COPY.LEVEL_UP_SECTION.TITLE}
          color="WHITE"
        />
        <Typography
          type="body2"
          text={COPY.LEVEL_UP_SECTION.TEXT}
          color="WHITE"
        />
        <ActionArea>
          <Button
            text={COPY.LEVEL_UP_SECTION.BUTTON}
            type="link"
            variant="tertiary"
          >
            <ButtonIcon>--E</ButtonIcon>
          </Button>
        </ActionArea>
      </ContentArea>
      <ImageHolder></ImageHolder>
    </InnerContainer>
  </Container>
);
