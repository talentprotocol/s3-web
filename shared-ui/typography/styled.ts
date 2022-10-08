import styled from "styled-components";
import { fontNormal } from "./fonts";
import { StyledTypographyProps } from "./types";

export const H1 = styled.h1<StyledTypographyProps>`
  ${fontNormal}
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 120%;
`;

export const H2 = styled.h2<StyledTypographyProps>``;

export const H3 = styled.h3<StyledTypographyProps>``;

export const BODY1 = styled.p<StyledTypographyProps>`
  ${fontNormal}
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
`;

export const BODY2 = styled.p<StyledTypographyProps>``;

export const GENERAL = styled.span<StyledTypographyProps>`
  ${fontNormal}
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
`;
