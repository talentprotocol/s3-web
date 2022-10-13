import { useCallback, useState } from "react";

export const useSidebar = () => {
  const [isSidebarVisible, setSidebarStatus] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const toggleSidebar = useCallback(() => {
    if (isClosing) return;
    if (isSidebarVisible) {
      setIsClosing(true);
      setTimeout(() => {
        setSidebarStatus(false);
        setIsClosing(false);
      }, 250);
    } else {
      window.scrollTo(0, 0);
      setSidebarStatus(true);
      setIsClosing(false);
    }
  }, [isClosing, isSidebarVisible, setIsClosing, setSidebarStatus]);

  return {
    isSidebarVisible,
    isClosing,
    toggleSidebar,
  };
};
