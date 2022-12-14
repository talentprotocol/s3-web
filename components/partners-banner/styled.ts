import styled, { css, keyframes } from "styled-components";
import { COLORS } from "shared-ui";

export const Container = styled.section`
  background: ${COLORS.WHITE};
  padding: 160px 0 246px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  text-align: center;

  @media (min-width: 768px) {
    gap: 80px;
  }
`;

export const TitleContainer = styled.div`
  margin-bottom: 32px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const sliderRotation = keyframes`
    from {
        left: -150%;
    }
    to {
        left: -10%;
    }
`;

const sliderRotationMobile = keyframes`
    from {
        left: -590%;
    }
    to {
        left: -10%;
    }
`;

const sliderRotationLeft = keyframes`
    from {
        left: -10%;
    }
    to {
        left: -550%;
    }
`;

export const SliderEntryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 174px;
  height: 174px;
  border: 2px solid ${COLORS.DARK_BLUE};
  gap: 12px;
  border-radius: 24px;
`;

export const SliderEntryInnerContainer = styled.div<{
  width?: string;
}>`
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
`;

export const SliderContainer = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 174px;
`;

export const Slider = styled.div<{
  isReversed?: boolean;
  isMobile: boolean;
}>`
  position: absolute;
  display: flex;
  gap: 24px;
  overflow-x: scroll;
  overflow: auto;
  white-space: nowrap;
  animation: ${({ isReversed, isMobile }) =>
      isReversed
        ? sliderRotationLeft
        : (isMobile && sliderRotationMobile) || sliderRotation}
    60s linear infinite;
`;
