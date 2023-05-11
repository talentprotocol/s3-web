import styled from "styled-components";
import { COLORS, fontNormal } from "shared-ui";

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 814px;
  margin: auto;
  gap: 24px;
  padding: 0 24px;
  margin: 104px auto;
`;

export const SubTitleWrapper = styled.div`
  max-width: 766px;
  margin-bottom: 16px;
`;

export const PurpleText = styled.span`
  color: ${COLORS.LIGHT_PURPLE};
`;

export const ButtonIcon = styled.span`
  ${fontNormal}
  margin-left: 8px;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
`;
