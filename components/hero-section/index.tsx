import { Container } from "./styled";

interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
  darkMode?: boolean;
}

export const HeroSection = ({ children, className, darkMode = false }: Props) => (
  <Container darkMode={darkMode} className={className}>{children}</Container>
);
