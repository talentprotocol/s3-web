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
  CallToActionDescription,
  BigItalicText,
  TitleAndSubTitle
} from "./styled";
import { Props } from "./types";
import { COPY } from "copy/handle";
import { Typography } from "shared-ui";

import Profile from "./assets/profile.png";
import Onchain from "./assets/onchain.png";
import Payments from "./assets/payments.png";
import TalentMates from "./assets/talentmates.png";

// @ts-ignore
let scrollAnimation;

export const Benefits = ({ isMobile, isSafari, isAndroid }: Props) => {

  const scrollToTop = () => {
    const position = document.body.scrollTop || document.documentElement.scrollTop;

    if (position) {
      window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
      scrollAnimation = setTimeout(scrollToTop, 30);
      // @ts-ignore
    } else clearTimeout(scrollAnimation);
  };

  const goToLearnMore = () => {
    window.open("https://blog.talentprotocol.com/taldomain/");
  }

  const goToTalentMates = () => {
    window.open("https://mates.talentprotocol.com/");
  }

  return (
    <>
      <Container dark={false}>
        <HandleSection isMobile={isMobile}>
          <ImageContainer>
            <Image src={Profile} alt="Talent Protocol profile image" />
          </ImageContainer>
          <DescriptionContainer>
            <TitleAndSubTitle>
              <Typography type="h3">
                <>
                  <ItalicText>{COPY.BENEFITS.PROFILE.TITLE_ITALIC}</ItalicText>
                  {COPY.BENEFITS.PROFILE.TITLE_REGULAR}
                </>
              </Typography>
              <Typography type="body2">
                <>{COPY.BENEFITS.PROFILE.DESCRIPTION}</>
              </Typography>
            </TitleAndSubTitle>
            <DarkButton
              onClick={() => goToLearnMore()}
            >
              {COPY.BENEFITS.PROFILE.BUTTON}
            </DarkButton>
          </DescriptionContainer>
        </HandleSection>
        <HandleSection isMobile={isMobile} reverseOrder={true}>
          <ImageContainer>
            <Image src={Onchain} alt="Interconnection of blockchain data with the handle" />
          </ImageContainer>
          <DescriptionContainer>
            <TitleAndSubTitle>
              <Typography type="h3">
                <>
                  <ItalicText>{COPY.BENEFITS.ONCHAIN.TITLE_ITALIC}</ItalicText>
                  {COPY.BENEFITS.ONCHAIN.TITLE_REGULAR}
                </>
              </Typography>
              <Typography type="body2">
                <>{COPY.BENEFITS.ONCHAIN.DESCRIPTION}</>
              </Typography>
            </TitleAndSubTitle>
            <DarkButton
              onClick={() => goToLearnMore()}
            >
              {COPY.BENEFITS.ONCHAIN.BUTTON}
            </DarkButton>
          </DescriptionContainer>
        </HandleSection>
      </Container>
      <Container dark={true}>
        <HandleSection isMobile={isMobile}>
          <ImageContainer>
            <Image src={TalentMates} alt="Talent Mate skin" />
          </ImageContainer>
          <DescriptionContainer>
            <TitleAndSubTitle>
              <Typography type="h3" color="WHITE">
                <>
                  <ItalicText>{COPY.BENEFITS.TALENT_MATES.TITLE_ITALIC}</ItalicText>
                  {COPY.BENEFITS.TALENT_MATES.TITLE_REGULAR}
                </>
              </Typography>
              <Typography type="body2" color="WHITE">
                <>{COPY.BENEFITS.TALENT_MATES.DESCRIPTION}</>
              </Typography>
            </TitleAndSubTitle>
            <LightButton
              onClick={() => goToTalentMates()}
            >
              {COPY.BENEFITS.TALENT_MATES.BUTTON}
            </LightButton>
          </DescriptionContainer>
        </HandleSection>
        <HandleSection isMobile={isMobile} reverseOrder={true}>
          <ImageContainer>
            <Image src={Payments} alt="Using the Talent Protocol handle as a payment address" />
          </ImageContainer>
          <DescriptionContainer>
            <TitleAndSubTitle>
              <Typography type="h3" color="WHITE">
                <>
                  <ItalicText>{COPY.BENEFITS.PAYMENTS.TITLE_ITALIC}</ItalicText>
                  {COPY.BENEFITS.PAYMENTS.TITLE_REGULAR}
                </>
              </Typography>
              <Typography type="body2" color="WHITE">
                <>{COPY.BENEFITS.PAYMENTS.DESCRIPTION}</>
              </Typography>
            </TitleAndSubTitle>
            <LightButton
              onClick={() => goToLearnMore()}
            >
              {COPY.BENEFITS.PAYMENTS.BUTTON}
            </LightButton>
          </DescriptionContainer>
        </HandleSection>
        <CallToAction>
          <Typography type="h3">
            <>
              <StyledText>{COPY.BENEFITS.CALL_TO_ACTION.TITLE_REGULAR_1}</StyledText>{isMobile ? <br/> : " "}
              <BigItalicText>{COPY.BENEFITS.CALL_TO_ACTION.TITLE_ITALIC_1}{!isMobile && <br/>}{COPY.BENEFITS.CALL_TO_ACTION.TITLE_ITALIC_2}</BigItalicText>{isMobile && <br/>}
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
            <PinkButton onClick={() => scrollToTop()}>
              {COPY.BENEFITS.CALL_TO_ACTION.BUTTON}
            </PinkButton>
          </CallToActionContainer>
        </CallToAction>
      </Container>
    </>
  );
};
