import { COLORS, fontNormal } from "shared-ui";
import styled from "styled-components";

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  padding: 166px 0 0;

  @media (min-width: 768px) {
    padding: 246px 0 76px;
    min-height: 1200px;
    max-height: 1200px;
  }
`;

export const TitleWrapper = styled.div`
  max-width: 568px;
`;

export const Title = styled.h2`
  ${fontNormal}
  font-weight: 500;
  font-size: 25px;
  line-height: 120%;
  color: ${COLORS.BLACK};
  white-space: pre-line;

  @media (min-width: 768px) {
    font-weight: 500;
    font-size: 48px;
    line-height: 120%;
  }
`;

export const TagContainer = styled.div`
  position: relative;

  div:nth-child(1) {
    position: absolute;
    left: -180px;
    top: -60px;

    @media (min-width: 768px) {
      left: -340px;
      top: 60px;
    }
  }

  div:nth-child(2) {
    position: absolute;
    left: -60px;
    top: -80px;

    @media (min-width: 768px) {
      left: -200px;
      top: -60px;
    }
  }

  div:nth-child(3) {
    position: absolute;
    left: -140px;
    top: 60px;

    @media (min-width: 768px) {
      left: -120px;
      top: 150px;
    }
  }

  div:nth-child(4) {
    position: absolute;
    left: 120px;
    top: -50px;

    @media (min-width: 768px) {
      left: 180px;
      top: -50px;
    }
  }

  div:nth-child(5) {
    position: absolute;
    left: 60px;
    top: 50px;

    @media (min-width: 768px) {
      left: 220px;
      top: 80px;
    }
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
  padding: 124px 24px 0;
  gap: 50px;

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
  max-width: 568px;
  text-align: left;
  gap: 40px;
  position: relative;

  @media (min-width: 768px) {
    padding-left: 80px;
  }
`;

export const DisclaimerText = styled.p`
  ${fontNormal}
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  color: ${COLORS.DARK_BLUE};

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 120%;
  }
`;

export const ImageHolder = styled.div`
  width: 202px;
  height: 272px;
  z-index: 1;

  @media (min-width: 768px) {
    width: 320px;
    height: 446px;
    flex-grow: 1;
    position: relative;
    display: flex;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  transition-duration: 1s;
  left: 50%;

  :first-child {
    z-index: 4;
    transform: translate(-50%, 0);

    @media (min-width: 768px) {
      width: 320px;
      height: 446px;
    }
  }

  :nth-child(2) {
    z-index: 3;
    transform: translate(calc(-50% + 16px), -0);

    @media (min-width: 768px) {
      width: 320px;
      height: 446px;
      transform: translate(calc(-50% + 24px), -0);
    }
  }

  :nth-child(3) {
    z-index: 2;
    transform: translate(calc(-50% + 32px), -0);

    @media (min-width: 768px) {
      width: 320px;
      height: 446px;
      transform: translate(calc(-50% + 48px), -0);
    }
  }

  :nth-child(4) {
    z-index: 1;
    transform: translate(calc(-50% + 48px), -0);

    @media (min-width: 768px) {
      width: 320px;
      height: 446px;
      transform: translate(calc(-50% + 72px), -0);
    }
  }
`;
