import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Acid Grotesk TP';
    src: url('/fonts/AcidGroteskTP-Light.otf');
  }

  @font-face {
    font-family: 'Acid Grotesk TP';
    src: url('/fonts/AcidGroteskTP-Medium.otf');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Acid Grotesk TP';
    src: url('/fonts/AcidGroteskTP-Bold.otf');
    font-weight: 700;
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
