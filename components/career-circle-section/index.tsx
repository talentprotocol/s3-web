import Image from "next/image";
import { COPY } from "copy";
import celoImage from "./assets/celo.svg";
import polygonImage from "./assets/polygon.svg";
import {
  LogosArea,
  MoreComingLabel,
} from "components/talent-house-section/styled";
import { Button, LabelTag, Typography } from "shared-ui";
import communityImage from "./assets/community.png";
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
      <ImageHolder>
        <Image priority src={communityImage} alt="community" />
      </ImageHolder>
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
        <LogosArea>
          <Image priority src={celoImage} alt="celo" />
          <Image priority src={polygonImage} alt="polygon" />
          <MoreComingLabel>
            {COPY.CAREER_CIRCLE_SECTION.MORE_COMING}
          </MoreComingLabel>
        </LogosArea>
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
