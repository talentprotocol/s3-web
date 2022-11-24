import styled, { css } from "styled-components";
import { COLORS, fontNormal } from "shared-ui";
import { StyledReserveHandleButtonProps } from "./types";

export const ButtonContainer = styled.div`
  position: relative;
`;

export const StyledReserveHandleButton = styled.button<StyledReserveHandleButtonProps>`
  position: absolute;
  padding: 13px 32px;
  left: -24px;
  transform: translate(-50%, -1px);
  border-radius: 32px;
  background: ${COLORS.BLACK};
  color: ${COLORS.WHITE};
  border: 1px solid ${COLORS.BLACK};
  cursor: pointer;
  ${fontNormal}
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  white-space: nowrap;
  transition-duration: 0.25s;

  ${( {isMobile}) => isMobile && css`
    transform: translate(-50%, 1px);
    @media (min-width: 560px) {
      transform: translate(-50%, 0px);
    }
  `}


  :hover {
    background: ${COLORS.LIGHT_BLACK};
  }
`;
