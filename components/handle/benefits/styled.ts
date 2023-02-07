import styled, { css } from "styled-components";
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

  @media (min-width: 768px) {
    padding-top: 112px;
    padding-bottom: 112px;
    padding-left: 140px;
    padding-right: 140px;
  }
`;

export const HandleSection = styled.div<{isMobile: boolean, reverseOrder?: boolean}>`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${( {isMobile, reverseOrder }) => !isMobile && css`
    flex-direction: ${reverseOrder ? "row-reverse" : "row"};
    justify-content: center;
    align-items: center;
    gap: 120px;
  `}
`;

export const ImageContainer = styled.div`
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const ItalicText = styled.span`
  font-weight: 300;
  font-size: 25px;
  font-style: italic;
  line-height: 30px;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 120%;
  }
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

export const CallToAction = styled.div`
  background-color: ${COLORS.PINK};
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 32px;

  @media (min-width: 768px) {
    align-items: start;
    padding: 64px;
    text-align: left;
  }
`

export const CallToActionDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: start;
  }
`;

export const CallToActionContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
    width: 100%;
  }
`;

export const StyledText = styled.span`
  ${fontNormal}
  font-feature-settings: 'ss04' on, 'ss05' on, 'ss07' on, 'ss11' on, 'ss12' on, 'liga' off;
  font-weight: 500;
  font-size: 25px;
  line-height: 120%;

  @media (min-width: 768px) {
    font-size: 40px;    
  }
`

export const CallToActionPromo = styled.div`
  margin-top: 40px;
  border-radius: 48px;
  background-color: ${COLORS.DARK_BLUE};
  color: ${COLORS.PINK};
  ${fontNormal}
  font-weight: 500;
  font-size: 12px;
  line-height: 165%;
  letter-spacing: 0.02em;
  padding: 2px 8px;
`;

export const CallToActionPriceDescription = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
`

export const CallToActionPrice = styled.span`
  ${fontNormal}
  color: ${COLORS.DARK_BLUE};
  font-weight: 500;
  font-size: 25px;
  line-height: 120%;
`;

export const CallToActionPeriod = styled.span`
  ${fontNormal}
  color: ${COLORS.DARK_BLUE};
  font-weight: 400;
  font-size: 16px;
  line-height: 165%;
`;

export const PinkButton = styled.button`
  ${fontNormal}
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  padding: 14px 32px;
  gap: 10px;
  border-radius: 32px;
  background: ${COLORS.BLACK};
  color: ${COLORS.PINK};
  border: none;
  cursor: pointer;
  transition-duration: 0.25s;
  outline: none;

  :hover {
    background-color: ${COLORS.LIGHT_BLACK};
  }
`;