import { COPY } from "copy";
import { useMediaQuery } from "hooks/use-media-query";
import { Button, Logo } from "shared-ui";
import { Container, LogoArea, NavArea } from "./styled";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Container>
      <LogoArea>
        <Logo />
      </LogoArea>
      {!isMobile && (
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
      )}
    </Container>
  );
};
