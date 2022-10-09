import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 0 140px;
`;

export const TitleContainer = styled.div`
  max-width: 568px;
  text-align: center;
`;

export const DoorsRow = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding: 104px 0 122px;
`;

export const FooterRow = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-align: center;
`;
