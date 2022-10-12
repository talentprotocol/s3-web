import styled from "styled-components";
import { COLORS, fontNormal } from "shared-ui";

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 962px;
  margin: auto;
  gap: 32px;
  padding: 0 24px;
`;

export const PurpleText = styled.span`
  color: ${COLORS.LIGHT_PURPLE};
`;

export const ReserveHandleContainer = styled.div`
  width: 328px;
  margin-top: 8px;
  border: 1px solid ${COLORS.DARK_BLUE};
  display: flex;
  padding: 12px 24px;
  gap: 4px;
  border-radius: 56px;
  transform: translate(-6px, 0);

  @media (min-width: 768px) {
    width: 370px;
  }
`;

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

  :empty:before {
    content: "${({ placeholder }) => placeholder}";
    color: ${COLORS.LIGHT_GREY};
  }

  :not:empty:focus::before {
    content: "";
  }
`;

export const TokenSuffix = styled.span`
  ${fontNormal}
  min-width: 154px;
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
  background: none;
  outline: none;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 165%;
`;

export const ButtonContainer = styled.div`
  position: relative;
`;

export const ReserveHandleButton = styled.button`
  position: absolute;
  padding: 13px 32px;
  top: -13px;
  left: -24px;
  transform: translate(-50%, 0);
  border-radius: 32px;
  background: ${COLORS.BLACK};
  color: ${COLORS.WHITE};
  border: 1px solid ${COLORS.DARK_BLUE};
  cursor: pointer;
  ${fontNormal}
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  white-space: nowrap;
`;
