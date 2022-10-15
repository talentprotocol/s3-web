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
    padding: 120px 0 140px;
  }
`;

export const TitleContainer = styled.div`
  max-width: 568px;
  text-align: center;
`;

export const DoorsRow = styled.div`
  flex-grow: 1;
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
