import { MouseEventHandler } from "react";

export interface Props {
  callback: MouseEventHandler<HTMLButtonElement>;
  isMobile: boolean;
  isSafari: boolean;
  isAndroid: boolean;
}

export interface StyledReserveHandleButtonProps {
  isMobile: boolean;
  isSafari: boolean;
  isAndroid: boolean;
}
