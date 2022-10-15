import styled from "styled-components";
import { COLORS } from "shared-ui";
import { MobileMenuProps } from "./types";

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
