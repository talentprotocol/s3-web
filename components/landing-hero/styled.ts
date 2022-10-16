import styled from "styled-components";
import { COLORS, fontNormal } from "shared-ui";

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 1000px;
  margin: auto;
  gap: 32px;
  padding: 0 24px;
  margin: 104px auto;
`;

export const SubTitleWrapper = styled.div`
  max-width: 766px;
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
  transform: translate(-21px, 0);

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
  text-align: left;

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
