import styled from "styled-components";
import { COLORS, fontNormal } from "shared-ui";

export const Container = styled.section`
  background: ${COLORS.DARK_BLUE};
  padding: 80px 24px;

  @media (min-width: 768px) {
    padding: 160px 24px;
  }
`;

export const InnerContainer = styled.div`
  max-width: 766px;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.h2`
  ${fontNormal}
  font-weight: 500;
  font-size: 25px;
  line-height: 120%;
  color: ${COLORS.LIGHT_YELLOW};
  white-space: pre-line;

  @media (min-width: 768px) {
    font-weight: 500;
    font-size: 48px;
    line-height: 120%;
  }
`;

export const YellowText = styled.span`
  color: ${COLORS.YELLOW};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
