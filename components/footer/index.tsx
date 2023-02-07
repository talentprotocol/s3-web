import Image from "next/image";
import { COPY } from "copy";
import logoImage from "./assets/logo.svg";
import logoPinkImage from "./assets/logo-pink.svg";
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

export const Footer = ({ isMobile, darkMode = false }: Props) => {
  return (
    <>
      <StyledFooter darkMode={darkMode}>
        <InnerContainer>
          <FooterRow>
            <PresentationColumn>
              <Image priority src={darkMode ? logoPinkImage : logoImage} alt="logo" />
              <CopyrightTypography darkMode={darkMode}>
                {COPY.FOOTER.DESCRIPTION}
              </CopyrightTypography>
            </PresentationColumn>
            <NavigationArea>
              <NavList darkMode={darkMode}>
                <li>{COPY.FOOTER.PROJECT.TITLE}</li>
                {COPY.FOOTER.PROJECT.LINKS.map((el) => (
                  <li key={el.NAME}>
                    <NavLink href={el.TARGET} target="_blank">
                      {el.NAME}
                    </NavLink>
                  </li>
                ))}
              </NavList>
              <NavList darkMode={darkMode}>
                <li>{COPY.FOOTER.HELP.TITLE}</li>
                {COPY.FOOTER.HELP.LINKS.map((el) => (
                  <li key={el.NAME}>
                    <NavLink href={el.TARGET} target="_blank">
                      {el.NAME}
                    </NavLink>
                  </li>
                ))}
              </NavList>
              <NavList darkMode={darkMode}>
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
          {!isMobile && (
            <Copyright>
              <CopyrightTypography darkMode={darkMode}>
                {COPY.FOOTER.COPYRIGHT[0]}
              </CopyrightTypography>
              {!isMobile && (
                <CopyrightTypography darkMode={darkMode}>|</CopyrightTypography>
              )}
              <CopyrightTypography darkMode={darkMode}>
                {COPY.FOOTER.COPYRIGHT[1]}
              </CopyrightTypography>
            </Copyright>
          )}
        </InnerContainer>
      </StyledFooter>
      {isMobile && (
        <Copyright>
          <CopyrightTypography darkMode={darkMode}>
            {COPY.FOOTER.COPYRIGHT[0]}
          </CopyrightTypography>
          {!isMobile && <CopyrightTypography darkMode={darkMode}>|</CopyrightTypography>}
          <CopyrightTypography darkMode={darkMode}>
            {COPY.FOOTER.COPYRIGHT[1]}
          </CopyrightTypography>
        </Copyright>
      )}
    </>
  );
};
