import { Container } from "./styled";

interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export const HeroSection = ({ children, className }: Props) => (
  <Container className={className}>{children}</Container>
);
