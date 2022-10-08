import styled, { css } from "styled-components";
import { HeroSection } from "components/hero-section";
import { COLORS, fontNormal } from "shared-ui";
import { TabElementProps } from "./types";

export const Container = styled(HeroSection)`
  background-color: ${COLORS.LIGHT_PURPLE};
  display: flex;
  flex-direction: column;
  padding: 88px 0 122px;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export const TabElement = styled.span<TabElementProps>`
  display: block;
  ${fontNormal}
  color: ${COLORS.WHITE};
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 32px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      background: ${COLORS.WHITE};
      color: ${COLORS.BLACK};
      border-radius: 32px;
    `}
`;

export const ContentPane = styled.div`
  max-width: 1024px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  padding-top: 122px;
  gap: 122px;
`;

export const ContentArea = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-basis: 372px;
  min-width: 372px;
`;

export const ImageHolder = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
