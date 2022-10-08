import styled, { css } from "styled-components";
import { COLORS } from "shared-ui";
import { StyledDoorProps } from "./types";

export const Container = styled.div<StyledDoorProps>`
  min-width: 372px;
  display: flex;
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
