import styled from "styled-components";

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 962px;
  margin: auto;
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
