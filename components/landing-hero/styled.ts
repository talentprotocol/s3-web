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
`;

export const PurpleText = styled.span`
  color: ${COLORS.LIGHT_PURPLE};
`;

export const ReserveHandleContainer = styled.div`
  width: 370px;
  margin-top: 8px;
  padding: 12px 24px;
  border-radius: 56px;
  border: 1px solid ${COLORS.DARK_BLUE};
  display: flex;
  gap: 4px;
  transform: translate(-38px, 0);
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
  left: -20px;
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
