import { Container } from "./styled";

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const HeroSection = ({ children }: Props) => (
    <Container>
        {children}
    </Container>
)