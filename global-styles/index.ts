import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Acid Grotesk TP';
    src: url('/fonts/AcidGroteskTP-Medium.otf');
  }
  
  * {
    box-sizing: border-box;
  }
  
  html, body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }
`;