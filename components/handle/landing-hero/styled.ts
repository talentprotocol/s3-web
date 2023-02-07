import styled from "styled-components";
import { COLORS, fontNormal } from "shared-ui";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 24px;
  gap: 40px;
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
`