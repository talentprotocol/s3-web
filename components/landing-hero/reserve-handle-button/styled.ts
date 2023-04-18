import styled, { css } from "styled-components";
import { COLORS, fontNormal } from "shared-ui";
import { StyledReserveHandleButtonProps } from "./types";

export const ButtonContainer = styled.div`
  margin-top: 8px;
  position: relative;
`;

export const StyledReserveHandleButton = styled.a<StyledReserveHandleButtonProps>`
  display: flex;
  gap: 8px;
  padding: 13px 32px;
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
  text-decoration: none;

  :hover {
    background: ${COLORS.LIGHT_BLACK};
  }
`;

export const ButtonIcon = styled.span`
  font-size: 24px;
  font-weight: 400;
  display: flex;
  align-items: center;
`;
