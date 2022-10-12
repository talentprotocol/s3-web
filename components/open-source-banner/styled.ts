import styled from "styled-components";
import { COLORS } from "shared-ui";

export const Container = styled.section`
  background: ${COLORS.DARK_BLUE};
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

export const YellowText = styled.span`
  color: ${COLORS.YELLOW};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
