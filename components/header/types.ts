export interface ContainerProps {
  isMobile: boolean;
}

export interface MobileMenuProps {
  isSidebarVisible: boolean;
}

export interface Props {
  isSidebarVisible: boolean;
  toggleSidebar: () => void;
}
