import { COPY } from "copy";
import { useMediaQuery } from "hooks/use-media-query";
import { useCallback, useState } from "react";
import { Button, Logo } from "shared-ui";
import {
  Container,
  LogoArea,
  MobileMenu,
  MobileMenuWrapper,
  NavArea,
} from "./styled";
import { Props } from "./types";

export const Header = ({toggleSidebar, isSidebarVisible}: Props) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Container>
      <LogoArea>
        <Logo />
      </LogoArea>
      {!isMobile && (
        <NavArea>
          <Button
            text={COPY.LANDING_HERO.HEADER_LOGIN}
            type="link"
            variant="secondary"
            href="/"
          />
          <Button
            text={COPY.LANDING_HERO.HEADER_SIGN_UP}
            type="link"
            variant="primary"
            href="/"
          />
        </NavArea>
      )}
      {isMobile && (
        <MobileMenuWrapper>
          <MobileMenu
            onClick={toggleSidebar}
            isSidebarVisible={isSidebarVisible}
          />
        </MobileMenuWrapper>
      )}
    </Container>
  );
};
