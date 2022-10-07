import { Logo } from "shared-ui/logo";
import { Container, LogoArea, NavArea } from "./styled";

export const Header = () => (
  <Container>
    <LogoArea>
      <Logo />
    </LogoArea>
    <NavArea>
      <a href="https://google.com">Login</a>
      <a href="https://google.com">Signup</a>
    </NavArea>
  </Container>
);
