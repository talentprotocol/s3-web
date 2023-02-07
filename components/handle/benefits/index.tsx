import Image from "next/image";
import {
  Container,
  HandleSection,
  ItalicText,
  DarkButton,
  LightButton,
  DescriptionContainer,
  ImageContainer,
  CallToAction,
  StyledText,
  CallToActionPromo,
  CallToActionPriceDescription,
  CallToActionPeriod,
  CallToActionPrice,
  PinkButton,
  CallToActionContainer,
  CallToActionDescription
} from "./styled";
import { Props } from "./types";
import { COPY } from "copy/handle";
import { Typography } from "shared-ui";

import Profile from "./assets/profile.png";
import Onchain from "./assets/onchain.png";
import Payments from "./assets/payments.png";
import TalentMates from "./assets/talentmates.png";

export const Benefits = ({ isMobile, isSafari, isAndroid }: Props) => {
  return (
    <>
      <Container dark={false}>
        <HandleSection isMobile={isMobile}>
          <ImageContainer>
            <Image src={Profile} alt="icon image" />
          </ImageContainer>
          <DescriptionContainer>
            <Typography type="h3">
              <>
                <ItalicText>{COPY.BENEFITS.PROFILE.TITLE_ITALIC}</ItalicText>
                {COPY.BENEFITS.PROFILE.TITLE_REGULAR}
              </>
            </Typography>
            <Typography type="body2">
              <>{COPY.BENEFITS.PROFILE.DESCRIPTION}</>
            </Typography>
            <DarkButton
              onClick={() => console.log("LEARN MORE")}
            >
              {COPY.BENEFITS.PROFILE.BUTTON}
            </DarkButton>
          </DescriptionContainer>
        </HandleSection>
        <HandleSection isMobile={isMobile} reverseOrder={true}>
          <ImageContainer>
            <Image src={Onchain} alt="icon image" />
          </ImageContainer>
          <DescriptionContainer>
            <Typography type="h3">
              <>
                <ItalicText>{COPY.BENEFITS.ONCHAIN.TITLE_ITALIC}</ItalicText>
                {COPY.BENEFITS.ONCHAIN.TITLE_REGULAR}
              </>
            </Typography>
            <Typography type="body2">
              <>{COPY.BENEFITS.ONCHAIN.DESCRIPTION}</>
            </Typography>
            <DarkButton
              onClick={() => console.log("LEARN MORE")}
            >
              {COPY.BENEFITS.ONCHAIN.BUTTON}
            </DarkButton>
          </DescriptionContainer>
        </HandleSection>
      </Container>
      <Container dark={true}>
        <HandleSection isMobile={isMobile}>
          <ImageContainer>
            <Image src={TalentMates} alt="icon image" />
          </ImageContainer>
          <DescriptionContainer>
            <Typography type="h3" color="WHITE">
              <>
                <ItalicText>{COPY.BENEFITS.TALENT_MATES.TITLE_ITALIC}</ItalicText>
                {COPY.BENEFITS.TALENT_MATES.TITLE_REGULAR}
              </>
            </Typography>
            <Typography type="body2" color="WHITE">
              <>{COPY.BENEFITS.TALENT_MATES.DESCRIPTION}</>
            </Typography>
            <LightButton
              onClick={() => console.log("LEARN MORE")}
            >
              {COPY.BENEFITS.TALENT_MATES.BUTTON}
            </LightButton>
          </DescriptionContainer>
        </HandleSection>
        <HandleSection isMobile={isMobile} reverseOrder={true}>
          <ImageContainer>
            <Image src={Payments} alt="icon image" />
          </ImageContainer>
          <DescriptionContainer>
            <Typography type="h3" color="WHITE">
              <>
                <ItalicText>{COPY.BENEFITS.PAYMENTS.TITLE_ITALIC}</ItalicText>
                {COPY.BENEFITS.PAYMENTS.TITLE_REGULAR}
              </>
            </Typography>
            <Typography type="body2" color="WHITE">
              <>{COPY.BENEFITS.PAYMENTS.DESCRIPTION}</>
            </Typography>
            <LightButton
              onClick={() => console.log("LEARN MORE")}
            >
              {COPY.BENEFITS.PAYMENTS.BUTTON}
            </LightButton>
          </DescriptionContainer>
        </HandleSection>
        <CallToAction>
          <Typography type="h3">
            <>
              <StyledText>{COPY.BENEFITS.CALL_TO_ACTION.TITLE_REGULAR_1}</StyledText>{isMobile ? <br/> : " "}
              <ItalicText>{COPY.BENEFITS.CALL_TO_ACTION.TITLE_ITALIC}</ItalicText><br/>
              <StyledText>{COPY.BENEFITS.CALL_TO_ACTION.TITLE_REGULAR_2}</StyledText>
            </>
          </Typography>
          <CallToActionContainer>
            <CallToActionDescription>
              <CallToActionPromo>
                {COPY.BENEFITS.CALL_TO_ACTION.PROMO}
              </CallToActionPromo>
              <CallToActionPriceDescription>
                <CallToActionPrice>{COPY.BENEFITS.CALL_TO_ACTION.PRICE}</CallToActionPrice>
                <CallToActionPeriod>{COPY.BENEFITS.CALL_TO_ACTION.PERIOD}</CallToActionPeriod>
              </CallToActionPriceDescription>
            </CallToActionDescription>
            <PinkButton onClick={() => console.log("pink button")}>
              {COPY.BENEFITS.CALL_TO_ACTION.BUTTON}
            </PinkButton>
          </CallToActionContainer>
        </CallToAction>
      </Container>
    </>
  );
};
