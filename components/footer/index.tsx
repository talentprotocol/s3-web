import Image from "next/image";
import { COPY } from "copy";
import logoImage from "./assets/logo.svg";
import awardImage from "./assets/award.svg";
import {
  AwardContainer,
  Copyright,
  CopyrightTypography,
  FooterRow,
  InnerContainer,
  NavigationArea,
  NavList,
  PresentationColumn,
  StyledFooter,
} from "./styled";

export const Footer = () => (
  <StyledFooter>
    <InnerContainer>
      <FooterRow>
        <PresentationColumn>
          <Image src={logoImage} alt="logo" />
          <CopyrightTypography>
            {COPY.FOOTER.DESCRIPTION}
          </CopyrightTypography>
          <AwardContainer>
            <Image src={awardImage} alt="smoothie award" />
          </AwardContainer>
        </PresentationColumn>
        <NavigationArea>
          <NavList>
            <li>{COPY.FOOTER.PROJECT.TITLE}</li>
            {COPY.FOOTER.PROJECT.LINKS.map((el) => (
              <li>{el.NAME}</li>
            ))}
          </NavList>
          <NavList>
            <li>{COPY.FOOTER.HELP.TITLE}</li>
            {COPY.FOOTER.HELP.LINKS.map((el) => (
              <li>{el.NAME}</li>
            ))}
          </NavList>
          <NavList>
            <li>{COPY.FOOTER.SOCIALS.TITLE}</li>
            {COPY.FOOTER.SOCIALS.LINKS.map((el) => (
              <li>{el.NAME}</li>
            ))}
          </NavList>
        </NavigationArea>
      </FooterRow>
      <Copyright>
        <CopyrightTypography>
          {COPY.FOOTER.COPYRIGHT[0]}
        </CopyrightTypography>
        <CopyrightTypography>|</CopyrightTypography>
        <CopyrightTypography>
          {COPY.FOOTER.COPYRIGHT[1]}
        </CopyrightTypography>
      </Copyright>
    </InnerContainer>
  </StyledFooter>
);
