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
  padding: 246px 0;
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
`;

export const ContentRow = styled.div`
  display: flex;
  flex-grow: 1;
  margin-top: 146px;
  width: 100%;
`;

export const DisclaimerColumn = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 564px;
  text-align: left;
  gap: 40px;
`;
