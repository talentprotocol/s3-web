import styled from "styled-components";
import { COLORS } from "../colors";
import { fontNormal } from "../typography";

console.log(COLORS);

export const DefaultContainer = styled.span`
  ${fontNormal}
  display: flex;
  justify-content: center;
  padding: 6px 10px;
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
    padding: 6px 10px;
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
  padding: 6px 10px;
  font-weight: 700;
  font-size: 14px;
  line-height: 165%;
  border: 1px solid ${COLORS.WHITE};
  color: ${COLORS.WHITE};
  border-radius: 48px;
`;
