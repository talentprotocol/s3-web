import Image from "next/image";
import { Container } from "./styled";
import { Props } from "./types";
import purpleLogo from "./assets/purple-logo.svg";
import pinkLogo from "./assets/pink-logo.svg";

export const Logo = ({ color = "LIGHTER_PURPLE" }: Props) => {
  const logo = () => {
    switch (color) {
      case "LIGHTER_PURPLE":
        return purpleLogo;
      case "PINK":
        return pinkLogo;
      default:
        return purpleLogo;
    }
  };

  return (
    <Container color={color}>
      <Image src={logo()} alt="logo" />
    </Container>
  );
};
