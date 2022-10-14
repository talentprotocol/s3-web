import { MobileMenu, MobileMenuWrapper } from "./styled";
import { Props } from "./types";

export const MobileNav = ({ isSidebarVisible, toggleSidebar }: Props) => (
        <MobileMenuWrapper>
          <MobileMenu
            onClick={toggleSidebar}
            isSidebarVisible={isSidebarVisible}
          />
        </MobileMenuWrapper>
    );