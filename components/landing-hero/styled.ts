import { COLORS } from "shared-ui";
import styled from "styled-components";

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const PurpleText = styled.span`
  color: ${COLORS.LIGHT_PURPLE};
`;
