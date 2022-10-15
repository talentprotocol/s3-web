import { Logo } from "shared-ui";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { Container, LogoArea } from "./styled";
import { Props } from "./types";

export const Header = ({
  toggleSidebar,
  isSidebarVisible,
  isMobile,
}: Props) => {
  return (
    <Container isMobile={isMobile}>
      <LogoArea>
        <Logo />
      </LogoArea>
      {!isMobile && <DesktopNav />}
      {isMobile && (
        <MobileNav
          isSidebarVisible={isSidebarVisible}
          toggleSidebar={toggleSidebar}
        />
      )}
    </Container>
  );
};
