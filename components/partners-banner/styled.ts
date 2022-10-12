import styled, { keyframes } from "styled-components";
import { Button, COLORS, fontNormal } from "shared-ui";

export const Container = styled.section`
  background: ${COLORS.WHITE};
  padding: 160px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 126px;
`;

const sliderRotation = keyframes`
    from {
        left: -150%;
    }
    to {
        left: -10%;
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

export const SliderContainer = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 174px;
`;

export const Slider = styled.div`
  position: absolute;
  display: flex;
  gap: 12px;
  overflow-x: scroll;
  overflow: auto;
  white-space: nowrap;
  animation: ${sliderRotation} 60s linear infinite;
`;
