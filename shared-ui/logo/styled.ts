import styled from "styled-components";
import { COLORS } from "../colors";
import { fontNormal } from "../typography";
import { LogoStyledProps } from "./types";

export const Container = styled.span<LogoStyledProps>`
  ${fontNormal};
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 20px;
  color: ${({ color }) => COLORS[color]};
`;
