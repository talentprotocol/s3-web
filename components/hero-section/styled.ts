import { COLORS } from "shared-ui";
import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.WHITE};
  overflow: hidden;

  @media (min-height: 950px) {
    max-height: 950px;
    min-height: 950px;
  }
`;
