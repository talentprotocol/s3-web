import styled from "styled-components";
import { HeroSection } from "components/hero-section";
import { COLORS, fontNormal } from "shared-ui";

export const Container = styled(HeroSection)`
  background-color: ${COLORS.DARK_BLUE};
`;

export const InnerContainer = styled.div`
  max-width: 1240px;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;

  @media (min-width: 768px) {
    flex-basis: 468px;
  }
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

export const ActionArea = styled.div`
  margin-top: 30px;
  align-items: flex-start;
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const LogosArea = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const MoreComingLabel = styled.span`
  ${fontNormal}
  font-weight: 500;
  font-size: 14px;
  line-height: 165%;
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

  @media (min-width: 768px) {
    margin-left: 100px;
  }
`;
