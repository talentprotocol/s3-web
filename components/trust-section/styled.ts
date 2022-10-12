import { fontNormal } from "shared-ui";
import styled from "styled-components";

export const Container = styled.div`
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
    min-height: 1200px;
    max-height: 1200px;
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
    transform: translate(0, 0);
  }
`;

export const ContentRow = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  width: 100%;  
  gap: 74px;
  flex-direction: column-reverse;
  padding: 124px 24px;
  gap: 48px;

  @media (min-width: 768px) {
    margin-top: 146px;
    padding: 0;
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
  position: relative;

  @media (min-width: 768px) {
    padding-left: 80px;
  }
`;

export const ImageHolder = styled.div`
  width: 328px;
  flex-grow: 1;
  position: relative;
  display: flex;
  align-self: flex-start;
  z-index: 1;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  transition-duration: 1s;
  :first-child {
    z-index: 4;
  }

  :nth-child(2) {
    z-index: 3;
    transform: translate(40px, 0);
  }

  :nth-child(3) {
    z-index: 2;
    transform: translate(80px, 0);
  }

  :nth-child(4) {
    z-index: 1;
    transform: translate(120px, 0);
  }
`;