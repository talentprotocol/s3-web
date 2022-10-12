import { COLORS } from "shared-ui";
import styled from "styled-components";
import { MobileMenuProps } from "./types";

export const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid ${COLORS.GREY};
`;

export const LogoArea = styled.div`
  flex-grow: 1;
`;

export const NavArea = styled.nav`
  display: flex;
  gap: 10px;
`;

export const MobileMenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MobileMenu = styled.button<MobileMenuProps>`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  outline: none;

  &:before {
    display: block;
    width: 18px;
    border-radius: 4px;
    height: 2px;
    background: ${COLORS.BLACK};
    content: "";
    transition-duration: 0.2s;
    ${({ isSidebarVisible }) =>
      isSidebarVisible &&
      `
        transform: translate(0, 5px) rotate(45deg);
    `}
  }

  &:after {
    display: block;
    width: 18px;
    border-radius: 4px;
    height: 2px;
    margin-top: 8px;
    background: ${COLORS.BLACK};
    content: "";
    transition-duration: 0.2s;
    ${({ isSidebarVisible }) =>
      isSidebarVisible &&
      `
        transform: translate(0, -5px) rotate(-45deg);
    `}
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
