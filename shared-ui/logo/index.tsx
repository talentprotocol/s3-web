import Image from "next/image";
import { Container } from "./styled";
import purpleLogo from "./assets/purple-logo.svg";

export const Logo = () => (
  <Container color="LIGHT_PURPLE">
    <Image src={purpleLogo} alt="logo" />
  </Container>
);
