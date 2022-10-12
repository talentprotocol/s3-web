import styled from "styled-components";
import { HeroSection } from "components/hero-section";
import { COLORS, fontNormal } from "shared-ui";

export const Container = styled(HeroSection)`
  background-color: ${COLORS.DARK_BLUE};
`;

export const InnerContainer = styled.div`
  max-width: 1024px;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 80px 24px;
  gap: 48px;

  @media (min-width: 768px) {
    gap: 128px;
    flex-direction: row;
  }
`;

export const ContentArea = styled.div`
  flex-basis: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
`;

export const ActionArea = styled.div`
  margin-top: 30px;
  align-items: flex-start;
  display: flex;
  gap: 16px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ButtonIcon = styled.span`
  ${fontNormal}
  margin-left: 8px;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
`;

export const ImageHolder = styled.div`
  flex-basis: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
