import { COLORS } from "shared-ui/colors";
import { fontNormal } from "shared-ui/typography";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 10px;
  gap: 8px;
  background: ${COLORS.WHITE};
  border: 1px solid ${COLORS.GREY};
  border-radius: 48px;
`;

export const ImageWrapper = styled.span`
  align-self: center;
  width: 16px;
`;

export const LabelWrapper = styled.span`
  ${fontNormal}
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 165%;
`;
