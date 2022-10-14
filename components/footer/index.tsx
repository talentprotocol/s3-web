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
  NavLink,
  NavList,
  PresentationColumn,
  StyledFooter,
} from "./styled";
import { Props } from "./types";

export const Footer = ({ isMobile }: Props) => {
  return (
    <StyledFooter>
      <InnerContainer>
        <FooterRow>
          <PresentationColumn>
            <Image priority src={logoImage} alt="logo" />
            <CopyrightTypography>
              {COPY.FOOTER.DESCRIPTION}
            </CopyrightTypography>
            <AwardContainer>
              <Image priority src={awardImage} alt="smoothie award" />
            </AwardContainer>
          </PresentationColumn>
          <NavigationArea>
            <NavList>
              <li>{COPY.FOOTER.PROJECT.TITLE}</li>
              {COPY.FOOTER.PROJECT.LINKS.map((el) => (
                <li key={el.NAME}>
                  <NavLink href={el.TARGET} target="_blank">
                    {el.NAME}
                  </NavLink>
                </li>
              ))}
            </NavList>
            <NavList>
              <li>{COPY.FOOTER.HELP.TITLE}</li>
              {COPY.FOOTER.HELP.LINKS.map((el) => (
                <li key={el.NAME}>
                  <NavLink href={el.TARGET} target="_blank">
                    {el.NAME}
                  </NavLink>
                </li>
              ))}
            </NavList>
            <NavList>
              <li>{COPY.FOOTER.SOCIALS.TITLE}</li>
              {COPY.FOOTER.SOCIALS.LINKS.map((el) => (
                <li key={el.NAME}>
                  <NavLink href={el.TARGET} target="_blank">
                    {el.NAME}
                  </NavLink>
                </li>
              ))}
            </NavList>
          </NavigationArea>
        </FooterRow>
        <Copyright>
          <CopyrightTypography>
            {COPY.FOOTER.COPYRIGHT[0]}
          </CopyrightTypography>
          {!isMobile && <CopyrightTypography>|</CopyrightTypography>}
          <CopyrightTypography>
            {COPY.FOOTER.COPYRIGHT[1]}
          </CopyrightTypography>
        </Copyright>
      </InnerContainer>
    </StyledFooter>
  );
};
