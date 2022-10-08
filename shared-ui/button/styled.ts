import styled, { css } from "styled-components";
import { fontNormal } from "../typography";
import { COLORS } from "../colors";
import { StyledButtonProps, VariantTypeEnum } from "./types";

const primaryStyles = css`
  background-color: ${COLORS.LIGHT_PURPLE};
  color: ${COLORS.WHITE};
  padding: 14px 32px;
  border-radius: 32px;
`;

const secondaryStyles = css`
  padding: 14px 32px;
  display: flex;
  align-items: center;
`;

const tertiaryStyles = css`
  background-color: ${COLORS.WHITE};
  color: ${COLORS.BLACK};
  padding: 14px 32px;
  border-radius: 32px;
`;

const quaternaryStyles = css`
  background-color: ${COLORS.BLACK};
  color: ${COLORS.WHITE};
  padding: 14px 32px;
  border-radius: 32px;
`;

export const ButtonLinkContainer = styled.a<StyledButtonProps>`
  ${fontNormal}
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  ${({ variant }) => {
    switch (variant) {
      case VariantTypeEnum.SECONDARY:
        return secondaryStyles;
      case VariantTypeEnum.TERTIARY:
        return tertiaryStyles;
      case VariantTypeEnum.QUATERNARY:
        return quaternaryStyles;
      case VariantTypeEnum.PRIMARY:
      default:
        return primaryStyles;
    }
  }}
`;
