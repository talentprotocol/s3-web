import styled, { keyframes } from "styled-components";
import { COLORS, fontNormal } from "shared-ui";

export const Container = styled.section`
  background: ${COLORS.LIGHT_YELLOW};
  padding: 160px 24px;
`;

export const InnerContainer = styled.div`
  max-width: 766px;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const PurpleText = styled.span`
  color: ${COLORS.LIGHT_PURPLE};
`;

export const InputWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
`;

export const StyledWrapper = styled.div`
  width: 370px;
  padding: 0 0 0 24px;
  height: 52px;
  border: 1px solid ${COLORS.DARK_BLUE};
  border-radius: 56px;
  display: flex;
`;

export const StyledInput = styled.input`
  ${fontNormal}
  font-weight: 400;
  font-size: 16px;
  line-height: 165%;
  background: none;
  outline: none;
  height: 100%;
  width: 80%;
  border: none;
`;

export const ButtonWrapper = styled.div`
  position: relative;
`;

export const StyledButtonWrapper = styled.div`
  position: absolute;
  left: 17px;
  top: -1px;
`;

export const StyledButton = styled.button`
  ${fontNormal}
  width: 52px;
  height: 52px;
  overflow: hidden;
  font-weight: 400;
  font-size: 30px;
  line-height: 24px;
  padding: 12px;
  background: ${COLORS.DARK_BLUE};
  color: ${COLORS.LIGHT_YELLOW};
  border-radius: 60%;
  border: none;
  cursor: pointer;
`;

const sliderRotation = keyframes`
    from {
        left: -290%;
    }
    to {
        left: -10%;
    }
`;

export const SliderEntryContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const SliderContainer = styled.section`
  position: relative;
  background: ${COLORS.YELLOW};
  overflow: hidden;
  border: 2px solid ${COLORS.DARK_BLUE};
  height: 78px;

  @media (min-width: 768px) {
    height: 96px;
  }
`;

export const Slider = styled.div`
  position: absolute;
  display: flex;
  gap: 12px;
  padding: 24px 0;
  overflow-x: scroll;
  overflow: auto;
  white-space: nowrap;
  animation: ${sliderRotation} 60s linear infinite;
  cursor: pointer;
`;
