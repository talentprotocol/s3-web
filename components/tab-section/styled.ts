import styled, { css } from "styled-components";
import { HeroSection } from "components/hero-section";
import { COLORS, fontNormal } from "shared-ui";
import { TabElementProps } from "./types";

export const Container = styled(HeroSection)`
  background-color: ${COLORS.LIGHT_PURPLE};
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding: 80px 24px;

  @media (min-width: 768px) {
    padding: 88px 140px 122px;
  }
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
  max-width: 1240px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column-reverse;
  gap: 48px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding-top: 122px;
  }
`;

export const ContentArea = styled.article`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  flex-basis: 372px;
  min-width: 372px;
  gap: 24px;

  @media (min-width: 768px) {
    justify-content: center;
  }
`;

export const ImageHolder = styled.div`
  position: relative;
  flex-basis: 100%;

  @media (min-width: 768px) {
    height: 100%;
    width: 100%;
    flex-direction: row;
    padding-top: 122px;
  }
`;

export const ImagePositioner = styled.div`
  position: absolute;
  top: 50%;
  height: 100%;
  transform: translate(0, -50%);

  @media (min-width: 768px) {
    width: 760px;
  }

  @media (min-width: 1024px) {
    width: 850px;
  }

  @media (min-width: 1240px) {
    width: 900px;
  }
`;
