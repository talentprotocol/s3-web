export interface MobileMenuProps {
  isSidebarVisible: boolean;
  darkMode: boolean;
}

export interface Props {
  isSidebarVisible: boolean;
  toggleSidebar: () => void;
  darkMode?: boolean;
}
