import { useMediaQuery } from "hooks/use-media-query";
import { MobileMenu, MobileMenuWrapper } from "./styled";
import { Props } from "./types";

export const MobileNav = ({ isSidebarVisible, toggleSidebar }: Props) => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    return isMobile ? (
        <MobileMenuWrapper>
          <MobileMenu
            onClick={toggleSidebar}
            isSidebarVisible={isSidebarVisible}
          />
        </MobileMenuWrapper>
    ) : (<></>)
}

export default MobileNav;