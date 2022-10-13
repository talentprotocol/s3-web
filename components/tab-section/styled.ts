import styled, { css } from "styled-components";
import { COLORS, fontNormal } from "shared-ui";
import { TabElementProps } from "./types";

export const Container = styled.section`
  background-color: ${COLORS.LIGHT_PURPLE};
  overflow-x: hidden;
  padding: 86px 24px 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 40px;
  padding: 88px 0 16px;
  overflow: scroll;
  margin-bottom: 32px;

  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    justify-content: center;
  }
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
  border: 1px solid ${COLORS.WHITE};
  border-radius: 32px;
  white-space: nowrap;

  ${({ active }) =>
    active &&
    css`
      background: ${COLORS.WHITE};
      color: ${COLORS.BLACK};
    `}
`;

export const ContentArea = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 372px;
  text-align: center;
  gap: 24px;

  @media (min-width: 768px) {
    justify-content: center;
    text-align: center;
  }
`;

export const TitleWrapper = styled.div`
  max-width: 570px;
  margin: auto;
`;

export const SubTitleWrapper = styled.div`
  max-width: 765px;
  margin: auto;
`;

export const ImageHolder = styled.div`
  display: flex;
  align-items: flex-end;
  max-width: 765px;
  margin: 0 auto;

  * {
    transform: translate(0, 8%);
  }
`;
