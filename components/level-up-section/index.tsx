import Image from "next/image";
import { COPY } from "copy";
import { Button, LabelTag, Typography } from "shared-ui";
import mentorshipImage from "./assets/mentorship.png";
import {
  ActionArea,
  ButtonIcon,
  Container,
  ContentArea,
  ImageHolder,
  InnerContainer,
  Title,
} from "./styled";

export const LevelUpSection = () => (
  <Container>
    <InnerContainer>
      <ContentArea>
        <LabelTag text={COPY.LEVEL_UP_SECTION.TAG} type="secondary" />
        <Title>{COPY.LEVEL_UP_SECTION.TITLE}</Title>
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
            href="https://talentprotocol.notion.site/Level-Up-3a09b0c433a34cd88f3a69c6041ec5fa"
          >
            <ButtonIcon>--E</ButtonIcon>
          </Button>
        </ActionArea>
      </ContentArea>
      <ImageHolder>
        <Image priority src={mentorshipImage} alt="mentorship" />
      </ImageHolder>
    </InnerContainer>
  </Container>
);
