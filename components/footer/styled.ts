import styled from "styled-components";
import { COLORS, fontNormal } from "shared-ui";

export const StyledFooter = styled.footer`
  background: ${COLORS.DARK_BLUE};
  border-top: 1px solid ${COLORS.LIGHT_YELLOW}33;
  overflow: hidden;
  padding: 0 24px;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const InnerContainer = styled.div`
  max-width: 1240px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const FooterRow = styled.div`
  padding: 56px 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const PresentationColumn = styled.div`
  max-width: 272px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const AwardContainer = styled.div`
  margin-top: 32px;
`;

export const NavigationArea = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 0px;
    gap: 102px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${fontNormal}
  * {
    color: ${COLORS.WHITE};
    font-weight: 400;
    font-size: 14px;
    line-height: 165%;
    letter-spacing: 0.02em;
    :first-child {
      color: ${COLORS.LIGHT_YELLOW};
      font-weight: 500;
      font-size: 14px;
      line-height: 165%;
      letter-spacing: 0.02em;
    }
  }
`;

export const Copyright = styled.section`
  border-top: 1px solid ${COLORS.LIGHT_YELLOW}33;
  padding: 22px 0;
  display: flex;
  gap: 24px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CopyrightTypography = styled.span`
  ${fontNormal}
  font-weight: 400;
  font-size: 14px;
  line-height: 165%;
  color: ${COLORS.LIGHT_YELLOW};
`;
