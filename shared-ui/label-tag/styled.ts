import styled from "styled-components";
import { COLORS } from "../colors";
import { fontNormal } from "../typography";

export const DefaultContainer = styled.span`
  ${fontNormal}
  display: flex;
  justify-content: center;
  padding: 6px 16px;
  font-weight: 700;
  font-size: 14px;
  line-height: 165%;
  border: 1px solid ${COLORS.BLACK};
  color: ${COLORS.BLACK};
  border-radius: 48px;
`;

export const HighlightedContainer = styled.span`{
    ${fontNormal}
    display: flex;
    justify-content: center;
    padding: 6px 16px;
    font-weight: 700;
    font-size: 14px;
    line-height: 165%;
    border: 1px solid ${COLORS.YELLOW};
    color: ${COLORS.YELLOW};
    border-radius: 48px;
`;

export const SecondaryContainer = styled.span`{
  ${fontNormal}
  display: flex;
  justify-content: center;
  padding: 6px 16px;
  font-weight: 700;
  font-size: 14px;
  line-height: 165%;
  border: 1px solid ${COLORS.WHITE};
  color: ${COLORS.WHITE};
  border-radius: 48px;
`;

export const TertiaryContainer = styled.span`{
  ${fontNormal}
  display: flex;
  justify-content: center;
  padding: 6px 16px;
  font-weight: 700;
  font-size: 14px;
  line-height: 165%;
  border: 1px solid ${COLORS.LIGHT_YELLOW};
  color: ${COLORS.LIGHT_YELLOW};
  border-radius: 48px;
`;

export const QuaternaryContainer = styled.span`{
  ${fontNormal}
  display: flex;
  justify-content: center;
  padding: 6px 16px;
  font-weight: 700;
  font-size: 14px;
  line-height: 165%;
  background: ${COLORS.YELLOW};
  border: 1px solid ${COLORS.DARK_BLUE};
  color: ${COLORS.DARK_BLUE};
  border-radius: 48px;
`;
