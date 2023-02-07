import styled from "styled-components";
import { COLORS, fontNormal } from "shared-ui";
import { ContainerProps } from "./types";

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 24px;
  padding-right: 24px;
  gap: 80px;
  background-color: ${({ dark }) => dark ? COLORS.DARK_BLUE : COLORS.WHITE};
`;

export const HandleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ItalicText = styled.span`
  font-weight: 300;
  font-size: 25px;
  font-style: italic;
  line-height: 30px;
`;

export const DarkButton = styled.button`
  ${fontNormal}
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  padding: 14px 32px;
  gap: 10px;
  border-radius: 32px;
  background: ${COLORS.BLACK};
  color: ${COLORS.WHITE};
  border: none;
  cursor: pointer;
  transition-duration: 0.25s;
  outline: none;

  :hover {
    background-color: ${COLORS.LIGHT_BLACK};
  }
`;

export const LightButton = styled.button`
  ${fontNormal}
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  padding: 14px 32px;
  gap: 10px;
  border-radius: 32px;
  background: ${COLORS.WHITE};
  color: ${COLORS.DARK_BLUE};
  border: none;
  cursor: pointer;
  transition-duration: 0.25s;
  outline: none;

  :hover {
    background-color: ${COLORS.LIGHT_BLACK};
    background: ${COLORS.LIGHTER_GREY};
  }
`;