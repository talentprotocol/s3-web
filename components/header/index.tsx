import dynamic from "next/dynamic";
import { useMediaQuery } from "hooks/use-media-query";
import { Logo } from "shared-ui";
import {
  Container,
  LogoArea,
} from "./styled";
import { Props } from "./types";

const DesktopNav = dynamic(
  // @ts-ignore
  () => import("./desktop-nav"),
  { ssr: false }
);

const MobileNav = dynamic(
  // @ts-ignore
  () => import("./mobile-nav"),
  { ssr: false }
);

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
      <DesktopNav />
      <MobileNav isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar}/>
    </Container>
  );
};
