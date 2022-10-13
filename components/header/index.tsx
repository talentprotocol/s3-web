import { COPY } from "copy";
import { useMediaQuery } from "hooks/use-media-query";
import { Button, Logo } from "shared-ui";
import {
  Container,
  LogoArea,
  MobileMenu,
  MobileMenuWrapper,
  NavArea,
} from "./styled";
import { Props } from "./types";

export const Header = ({
  toggleSidebar,
  isSidebarVisible,
}: Props) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Container isMobile={isMobile}>
      <LogoArea>
        <Logo />
      </LogoArea>
      {!isMobile && (
        <NavArea>
          <Button
            text={COPY.LANDING_HERO.HEADER_LOGIN}
            type="link"
            variant="secondary"
            href="https://beta.talentprotocol.com/"
          />
          <Button
            text={COPY.LANDING_HERO.HEADER_SIGN_UP}
            type="link"
            variant="primary"
            href="https://beta.talentprotocol.com/join"
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
