import { Logo } from "shared-ui";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { Container, LogoArea } from "./styled";
import { Props } from "./types";

export const Header = ({
  toggleSidebar,
  isSidebarVisible,
  isMobile,
  darkMode,
}: Props) => {
  return (
    <Container isMobile={isMobile} darkMode={darkMode}>
      <LogoArea>
        <Logo color={darkMode ? "PINK" : "LIGHTER_PURPLE"}/>
      </LogoArea>
      {!isMobile && <DesktopNav darkMode={darkMode}/>}
      {isMobile && (
        <MobileNav
          isSidebarVisible={isSidebarVisible}
          toggleSidebar={toggleSidebar}
          darkMode={darkMode}
        />
      )}
    </Container>
  );
};
