import { HeroSection } from "components/hero-section";
import { fontNormal } from "shared-ui";
import styled from "styled-components";

export const Container = styled(HeroSection)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  padding: 166px 0;

  @media (min-width: 768px) {
    padding: 246px 0;
  }
`;

export const TitleWrapper = styled.div`
  max-width: 568px;
`;

export const TagContainer = styled.div`
  position: relative;

  div:nth-child(1) {
    position: absolute;
    left: -340px;
    top: 60px;
  }

  div:nth-child(2) {
    position: absolute;
    left: -200px;
    top: -60px;
  }

  div:nth-child(3) {
    position: absolute;
    left: -120px;
    top: 150px;
  }

  div:nth-child(4) {
    position: absolute;
    left: 180px;
    top: -50px;
  }

  div:nth-child(5) {
    position: absolute;
    left: 220px;
    top: 80px;
  }
`;

export const Quotes = styled.div`
  ${fontNormal}
  font-weight: 500;
  font-size: 88px;
  line-height: 100%;
  margin-right: 16px;
  position: absolute;
  left: 20px;
  transform: translate(0, -124px);

  @media (min-width: 768px) {
    left: 0;
    transform: translate(0, -40px);
  }
`;

export const ContentRow = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  gap: 74px;
  position: relative;
  padding-left: 56px;
  flex-direction: column-reverse;
  padding: 124px 24px;
  gap: 48px;

  @media (min-width: 768px) {
    margin-top: 146px;
    padding: 80px 24px;
    gap: 74px;
    flex-direction: row;
  }
`;

export const DisclaimerColumn = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 564px;
  text-align: left;
  gap: 40px;
  padding-left: 40px;

  @media (min-width: 768px) {
    padding-left: 0;
  }
`;

export const ImageHolder = styled.div`
  flex-grow: 1;
  width: 328px;
  position: relative;
`;
