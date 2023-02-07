import Image from "next/image";
import {
  Container,
  HandleSection,
  ItalicText,
  DarkButton,
  LightButton
} from "./styled";
import { Props } from "./types";
import { COPY } from "copy/handle";
import { Typography } from "shared-ui";

import Profile from "./assets/profile.png";
import Onchain from "./assets/onchain.png";
import Payments from "./assets/payments.png";
import TalentMates from "./assets/talentmates.png";
import CallToAction from "./assets/calltoaction.png";

export const Benefits = ({ isMobile, isSafari, isAndroid }: Props) => {
  return (
    <>
      <Container dark={false}>
        <HandleSection>
          <Image src={Profile} alt="icon image" />
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
        </HandleSection>
        <HandleSection>
          <Image src={Onchain} alt="icon image" />
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
        </HandleSection>
      </Container>
      <Container dark={true}>
        <HandleSection>
          <Image src={TalentMates} alt="icon image" />
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
        </HandleSection>
        <HandleSection>
          <Image src={Payments} alt="icon image" />
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
        </HandleSection>
        <Image src={CallToAction} alt="icon image" />
      </Container>
    </>
  );
};
