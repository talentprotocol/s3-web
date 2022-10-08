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
  margin: auto;
  display: flex;
  justify-content: center;
`;

export const ContentArea = styled.article`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
`;

export const ImageHolder = styled.div`
  position: relative;
  flex-basis: 50%;
`;
