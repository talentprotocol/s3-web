import styled from "styled-components";
import { COLORS, fontNormal } from "shared-ui";

export const Container = styled.section`
  position: fixed;
  z-index: 25;
  height: calc(100% - 73px);
  width: 100%;
  bottom: 0;
  background: ${COLORS.WHITE};
  padding: 24px;
  display: flex;
  flex-direction: column;
  --animate-duration: 0.3s;
`;

export const LinkList = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 8px;
  list-style-type: none;
  padding: 0;
`;

export const LinkListItem = styled.li`
  margin-top: 32px;
`;

export const LinkTitle = styled.span`
  ${fontNormal}
  display: block;
  font-weight: 500;
  font-size: 14px;
  line-height: 165%;
  color: ${COLORS.LIGHT_PURPLE};
`;

export const StyledLink = styled.a`
  ${fontNormal}
  color: ${COLORS.DARK_BLUE};
  font-weight: 400;
  font-size: 25px;
  line-height: 120%;
  text-decoration: none;
  cursor: pointer;
`;

export const ActionArea = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;

  * {
    flex-grow: 1;
  }
`;

export const ButtonContentWrapper = styled.span`
  display: flex;
  justify-content: centeR;
`;
