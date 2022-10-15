import { COLORS } from "shared-ui";
import styled, { css } from "styled-components";
import { ContainerProps } from "./types";

export const Container = styled.header<ContainerProps>`
  display: flex;
  align-items: center;
  padding: 24px;
  ${({ isMobile }) =>
    isMobile &&
    css`
      border-bottom: 1px solid ${COLORS.GREY};
    `}
`;

export const LogoArea = styled.div`
  flex-grow: 1;
`;
