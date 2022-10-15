import styled from "styled-components";
import { COLORS, fontNormal } from "shared-ui";

export const ButtonContainer = styled.div`
  position: relative;
`;

export const StyledReserveHandleButton = styled.button`
  position: absolute;
  padding: 13px 32px;
  top: -13px;
  left: -24px;
  transform: translate(-50%, 0);
  border-radius: 32px;
  background: ${COLORS.BLACK};
  color: ${COLORS.WHITE};
  border: 1px solid ${COLORS.DARK_BLUE};
  cursor: pointer;
  ${fontNormal}
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  white-space: nowrap;
  transition-duration: 0.25s;

  :hover {
    background: ${COLORS.LIGHT_BLACK};
  }
`;
