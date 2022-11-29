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
  transform: translate(-50%, 0);
  border-radius: 32px;
  background: ${COLORS.BLACK};
  color: ${COLORS.WHITE};
  border: none;
  cursor: pointer;
  ${fontNormal}
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  white-space: nowrap;
  transition-duration: 0.25s;

  ${( {isSafari}) => isSafari && css`
    transform: translate(-50%, -2px);
  `}

  ${( {isMobile, isAndroid }) => isMobile && css`
    transform: translate(-50%, 2px);

    ${!isAndroid && "transform: translate(-50%, 0);"}

    @media (min-width: 560px) {
      transform: translate(-50%, 0px);
    }
  `}

  :hover {
    background: ${COLORS.LIGHT_BLACK};
  }
`;
