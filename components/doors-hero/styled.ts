import { HeroSection } from "components/hero-section";
import { fontNormal } from "shared-ui";
import styled from "styled-components";

export const Container = styled(HeroSection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 24px;
  overflow-x: hidden;

  @media (min-width: 768px) {
    font-weight: 500;
    font-size: 48px;
    line-height: 120%;
    padding: 0 24px;
  }
`;

export const TitleContainer = styled.div`
  max-width: 568px;
  text-align: center;
`;

export const Title = styled.h2`
  ${fontNormal}
  font-weight: 500;
  font-size: 25px;
  line-height: 120%;

  @media (min-width: 768px) {
    font-weight: 500;
    font-size: 48px;
    line-height: 120%;
  }
`;

export const DoorsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  padding: 48px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 104px 0 122px;
  }
`;

export const FooterRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-align: center;
`;

export const SeeAllBenefitsLabel = styled.span`
  ${fontNormal}
  display: block;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
`;

export const ArrowLabel = styled.span`
  ${fontNormal}
  display: block;
  font-weight: 300;
  font-size: 32px;
  line-height: 24px;
`;
