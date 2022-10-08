import styled, { css } from "styled-components";
import { COLORS, fontNormal } from "shared-ui";
import { StyledDoorProps } from "./types";

export const Container = styled.div<StyledDoorProps>`
  flex-basis: 372px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 40px;
  gap: 40px;
  border-radius: 24px;
  border: 2px solid ${COLORS.GREY};

  ${({ isHighlighted }) =>
    isHighlighted &&
    css`
      background: ${COLORS.DARK_BLUE};
      border: none;
    `}
`;

export const DoorFooter = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  width: 100%;
`;

export const DoorButton = styled.button<StyledDoorProps>`
  ${fontNormal}
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  padding: 14px 32px;
  gap: 10px;
  border-radius: 32px;
  background: ${COLORS.BLACK};
  color: ${COLORS.WHITE};
  border:none;
  cursor: pointer;

  ${({ isHighlighted }) =>
    isHighlighted &&
    css`
      background: ${COLORS.YELLOW};
      color: ${COLORS.BLACK};
    `}
`;
