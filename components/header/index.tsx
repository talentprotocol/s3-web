import { COPY } from "copy";
import { Button, Logo } from "shared-ui";
import { Container, LogoArea, NavArea } from "./styled";

export const Header = () => (
  <Container>
    <LogoArea>
      <Logo />
    </LogoArea>
    <NavArea>
      <Button
        text={COPY.LANDING_HERO.HEADER_LOGIN}
        type="link"
        variant="secondary"
        href="/"
      />
      <Button
        text={COPY.LANDING_HERO.HEADER_SIGN_UP}
        type="link"
        variant="primary"
        href="/"
      />
    </NavArea>
  </Container>
);
