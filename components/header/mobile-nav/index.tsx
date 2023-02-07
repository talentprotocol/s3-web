import { MobileMenu, MobileMenuWrapper } from "./styled";
import { Props } from "./types";

export const MobileNav = ({
  isSidebarVisible,
  toggleSidebar,
  darkMode = false,
}: Props) => (
  <MobileMenuWrapper>
    <MobileMenu
      darkMode={darkMode}
      onClick={toggleSidebar}
      isSidebarVisible={isSidebarVisible}
    />
  </MobileMenuWrapper>
);
