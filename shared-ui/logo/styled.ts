import styled from "styled-components";
import { fontNormal } from "shared-ui/typography";
import { LogoStyledProps } from "./types";
import { COLORS } from "shared-ui/colors";

export const Container = styled.span<LogoStyledProps>`
    font-family: ${fontNormal};
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 20px;
    color: ${({ color }) => COLORS[color]};
`;