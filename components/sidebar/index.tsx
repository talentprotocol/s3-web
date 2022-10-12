import { useEffect, useMemo } from "react";
import { Button } from "shared-ui";
import {
  ActionArea,
  ButtonContentWrapper,
  Container,
  LinkList,
  LinkListItem,
  StyledLink,
} from "./styled";

interface Props {
  isSidebarVisible: boolean;
  isClosing: boolean;
  toggleSidebar: () => void;
}

export const Sidebar = ({
  isSidebarVisible,
  isClosing,
  toggleSidebar,
}: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarVisible]);
  const memoizedAnchors = useMemo(
    () =>
      [].map((link) => (
        <LinkListItem key={1}>
          <StyledLink href={link} target="blank">
            {link}
          </StyledLink>
        </LinkListItem>
      )),
    []
  );
  return (
    <Container
      className={`animate__animated ${
        !isClosing ? "animate__fadeInLeft" : "animate__fadeOutLeft"
      }`}
      onClick={toggleSidebar}
    >
      <LinkList>{memoizedAnchors}</LinkList>
      <ActionArea>
        <Button type="link"variant="octonary" >
          <ButtonContentWrapper>Log in</ButtonContentWrapper>
        </Button>
        <Button type="link" variant="primary">
          <ButtonContentWrapper>Sign up</ButtonContentWrapper>
        </Button>
      </ActionArea>
    </Container>
  );
};