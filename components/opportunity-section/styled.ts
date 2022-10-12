import styled from "styled-components";
import { HeroSection } from "components/hero-section";
import { COLORS, fontNormal } from "shared-ui";

export const Container = styled(HeroSection)`
  background-color: ${COLORS.ORANGE};
`;

export const InnerContainer = styled.div`
  max-width: 1240px;
  margin: auto;
  display: flex;
  flex-direction: column-reverse;
  padding: 80px 24px;
  gap: 48px;

  @media (min-width: 768px) {
    gap: 128px;
    flex-direction: row;
  }
`;

export const ContentArea = styled.div`
  flex-basis: 468px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
`;

export const ActionArea = styled.div`
  margin-top: 30px;
  align-items: flex-start;
`;

export const ButtonIcon = styled.span`
  ${fontNormal}
  margin-left: 8px;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
`;

export const ImageHolder = styled.div`
  flex-basis: 60%;
  display: flex;
  align-items: center;
`;
