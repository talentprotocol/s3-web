import styled, { css } from "styled-components";
import { COLORS, fontNormal } from "shared-ui";

export const Container = styled.div<{isMobile: boolean}>`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 50%;

  ${( {isMobile}) => isMobile && css`
    margin-top: 24px;
    margin-left: 24px;
    margin-right: 24px;
    width: 100%;
  `}
`;

export const ImageContainer = styled.div<{isMobile: boolean}>`
  width: 50%;
  ${( {isMobile}) => isMobile && css`
    width: 0px;
    display: none;
  `}
`

export const MainContainer = styled.div<{isMobile: boolean, centerContent: boolean}>`
  display: flex;
  flex-direction: row;

  ${( {isMobile}) => !isMobile && css`
    gap: 124px;
    margin-top: 140px;
    margin-left: 140px;
    margin-right: 140px;
  `}

  ${( {centerContent}) => centerContent && css`
    justify-content: center;
  `}
`;

export const ItalicText = styled.span`
  font-weight: 300;
  font-size: 25px;
  font-style: italic;
  line-height: 32.5px;
`;

export const EarlyBird = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EarlyBirdPromo = styled.div`
  display: flex;
  flex-direction: row;
`

export const PriceTag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const EarlyBirdPromoTag = styled.div`
  padding: 2px 8px;
  background-color: ${COLORS.PINK};
  margin-bottom: 8px;
  border-radius: 48px;
`;

export const SearchContainer = styled.div`
  border-radius: 56px;
  padding: 13px 24px;
  margin-top: 24px;
  margin-bottom: 80px;
  border: 1px solid ${COLORS.GREY};
  position: relative;
`

export const HandleInput = styled.span<{ placeholder: string }>`
  max-width: 170px;
  white-space: nowrap;
  ${fontNormal}
  background: none;
  outline: none;
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 165%;
  overflow: hidden;
  text-align: left;
  color: ${COLORS.WHITE};

  :empty:before {
    content: "${({ placeholder }) => placeholder}";
    color: ${COLORS.LIGHT_GREY};
  }

  :not:empty:focus::before {
    content: "";
  }

  br {
    display: none;
  }
`;

export const StyledReserveHandleButton = styled.button`
  position: absolute;
  padding: 13px 32px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  border-radius: 32px;
  background: ${COLORS.WHITE};
  color: ${COLORS.DARK_BLUE};
  border: none;
  cursor: pointer;
  ${fontNormal}
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  white-space: nowrap;
  transition-duration: 0.25s;

  :hover {
    background: ${COLORS.LIGHTER_GREY};
  }
`;

export const BenefitsArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  position: absolute;
  bottom: 80px;
  left: 24px;

  @media (min-width: 768px) {
    bottom: 200px;
    left: 140px;
  }
`

export const SearchingSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PinkButton = styled.button<{alignButtonLeft: boolean}>`
  ${fontNormal}
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  padding: 14px 32px;
  gap: 10px;
  border-radius: 32px;
  background: ${COLORS.PINK};
  color: ${COLORS.DARK_BLUE};
  border: none;
  cursor: pointer;
  transition-duration: 0.25s;
  outline: none;
  white-space: nowrap;

  :hover {
    background-color: ${COLORS.LIGHT_PINK};
  }

  @media (min-width: 768px) {
    align-self: ${({ alignButtonLeft }) => alignButtonLeft ? "start" : "end"};
  }
`;

export const StepBox = styled.div`
  border: 1px solid ${COLORS.SURFACE_DARK};
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    width: 568px;
  }
`;

export const StepNumberContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-bottom: 24px;
`;

export const StepDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
`

export const WhiteText = styled.span`
  color: ${COLORS.WHITE};
`

export const PaymentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-top: 1px solid ${COLORS.SURFACE_DARK};
  padding-top: 16px;
  padding-bottom: 16px;
`

export const PaymentsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const HelpText = styled.div`
  border-top: 1px solid ${COLORS.SURFACE_DARK};
  padding-top: 16px;
  margin-bottom: 40px;
`

export const NeutralButton = styled.button`
  ${fontNormal}
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  padding: 14px 32px;
  gap: 10px;
  border-radius: 32px;
  background: ${COLORS.DARK_BLUE};
  color: ${COLORS.WHITE};
  border: 1px solid ${COLORS.SURFACE_DARK};
  cursor: pointer;
  transition-duration: 0.25s;
  outline: none;

  :hover {
    background-color: ${COLORS.LIGHT_PURPLE};
  }

  @media (min-width: 768px) {
    align-self: end;
  }
`;

export const ButtonConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`

export const LeftAlignSVG = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

export const TextWithButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`