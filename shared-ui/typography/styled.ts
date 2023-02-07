import styled, { css } from "styled-components";
import { COLORS } from "shared-ui";
import { fontNormal } from "./fonts";
import { StyledTypographyProps } from "./types";

export const H1 = styled.h1<StyledTypographyProps>`
  ${fontNormal}
  font-weight: 700;
  font-size: 56px;
  line-height: 100%;

  ${({ color }) =>
    css`
      color: ${COLORS[color || "DARK_BLUE"]};
    `}

  @media (min-width: 768px) {
    font-weight: 700;
    font-size: 80px;
    line-height: 120%;
  }
`;

export const H2 = styled.h2<StyledTypographyProps>`
  ${fontNormal}
  font-weight: 500;
  font-size: 48px;
  line-height: 120%;
  ${({ color }) =>
    css`
      color: ${COLORS[color || "BLACK"]};
    `}
`;

export const H3 = styled.h3<StyledTypographyProps>`
  ${fontNormal}
  font-weight: 500;
  font-size: 25px;
  line-height: 130%;
  ${({ color }) =>
    css`
      color: ${COLORS[color || "BLACK"]};
    `}

  @media (min-width: 768px) {
    font-weight: 500;
    font-size: 32px;
    line-height: 130%;
  }
`;

export const H5 = styled.h5<StyledTypographyProps>`
  ${fontNormal}
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  ${({ color }) =>
    css`
      color: ${COLORS[color || "BLACK"]};
    `}
`;

export const BODY1 = styled.p<StyledTypographyProps>`
  ${fontNormal}
  font-weight: 500;
  font-size: 16px;
  line-height: 165%;
  ${({ color }) =>
    css`
      color: ${COLORS[color || "BLACK"]};
    `}

  @media (min-width: 768px) {
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
  }
`;

export const BODY2 = styled.p<StyledTypographyProps>`
  ${fontNormal}
  font-weight: 500;
  font-size: 16px;
  line-height: 165%;
  ${({ color }) =>
    css`
      color: ${COLORS[color || "BLACK"]};
    `}
`;

export const P1 = styled.p<StyledTypographyProps>`
  ${fontNormal}
  font-weight: 400;
  font-size: 16px;
  line-height: 26.4px;

  ${({ color }) =>
    css`
      color: ${COLORS[color || "BLACK"]};
    `}
`;

export const P2 = styled.p<StyledTypographyProps>`
  ${fontNormal}
  font-weight: 400;
  font-size: 14px;
  line-height: 23.1px;
  letter: 0.02;

  ${({ color }) =>
    css`
      color: ${COLORS[color || "BLACK"]};
    `}
`;

export const P3 = styled.p<StyledTypographyProps>`
  ${fontNormal}
  font-weight: 500;
  font-size: 12px;
  line-height: 19.8px;
  letter-spacing: 0.24px;

  ${({ color }) =>
    css`
      color: ${COLORS[color || "BLACK"]};
    `}
`;

export const GENERAL = styled.span<StyledTypographyProps>`
  ${fontNormal}
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  ${({ color }) =>
    css`
      color: ${COLORS[color || "BLACK"]};
    `}
`;
