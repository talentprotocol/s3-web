import { COLORS } from "shared-ui";
import styled, { css } from "styled-components";
import { ContainerProps } from "./types";

export const Container = styled.header<ContainerProps>`
  display: flex;
  align-items: center;
  padding: 24px;
  ${({ isMobile, darkMode }) =>
    isMobile &&
    css`
      border-bottom: 1px solid ${darkMode ? COLORS.PINK : COLORS.GREY};
    `}
  ${({ darkMode }) =>
    darkMode &&
    css`
      background-color: ${COLORS.DARK_BLUE};
    `}
`;

export const LogoArea = styled.div`
  flex-grow: 1;
`;
