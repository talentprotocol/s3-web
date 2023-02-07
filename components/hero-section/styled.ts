import { COLORS } from "shared-ui";
import styled, { css } from "styled-components";
import { ContainerProps } from "./types";

export const Container = styled.section<ContainerProps>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  ${({ darkMode }) =>
    `background-color: ${darkMode ? COLORS.DARK_BLUE : COLORS.WHITE};`
  }

  ${({darkMode}) => !darkMode && css`
    @media (min-height: 950px) {
      max-height: 1220px;
      min-height: 1220px;    
    }
  `}
`;
