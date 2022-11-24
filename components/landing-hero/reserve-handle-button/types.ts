import { MouseEventHandler } from "react";

export interface Props {
  callback: MouseEventHandler<HTMLButtonElement>;
  isMobile: boolean;
}

export interface StyledReserveHandleButtonProps {
  isMobile: boolean;
}