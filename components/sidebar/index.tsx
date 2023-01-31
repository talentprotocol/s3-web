import { useEffect, useMemo } from "react";
import { COPY } from "copy";
import { Button } from "shared-ui";
import {
  ActionArea,
  ButtonContentWrapper,
  Container,
  LinkList,
  LinkListItem,
  LinkTitle,
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
      COPY.MOBILE_MENU.LINKS.map((link) => (
        <LinkListItem key={1}>
          <StyledLink href={link.HREF} target="_blank">
            {link.LABEL}
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
      <LinkList>
        <LinkTitle>{COPY.MOBILE_MENU.TITLE}</LinkTitle>
        {memoizedAnchors}
      </LinkList>
      <ActionArea>
        <Button type="link" variant="octonary">
          <ButtonContentWrapper
            onClick={() =>
              window.open("https://beta.talentprotocol.com")
            }
          >
            Log in
          </ButtonContentWrapper>
        </Button>
        <Button type="link" variant="primary">
          <ButtonContentWrapper
            onClick={() => {
              try {
                // @ts-ignore
                gtag("event", "sign_up", {
                  device: "mobile",
                  event_name: "signup_click",
                });
                window.open("https://beta.talentprotocol.com/join");
              } catch {
                window.open("https://beta.talentprotocol.com/join");
              }
            }}
          >
            Sign up
          </ButtonContentWrapper>
        </Button>
      </ActionArea>
    </Container>
  );
};
