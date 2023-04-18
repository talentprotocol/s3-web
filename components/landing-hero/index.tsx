import { COPY } from "copy";
import { useCallback, useRef } from "react";
import { Button, Typography } from "shared-ui";
import {
  ButtonIcon,
  Container,
  PurpleText,
  SubTitleWrapper,
} from "./styled";
import { Props } from "./types";

export const LandingHero = ({}: Props) => {
  const talRef = useRef<HTMLSpanElement>(null);
  const handleReverveButtonClick = useCallback(() => {
    window.location.href = `/username?name=${talRef.current?.innerText}`;
  }, []);
  return (
    <Container>
      <Typography type="h1">
        <>
          {COPY.LANDING_HERO.TITLE_BLACK_1}
          {COPY.LANDING_HERO.TITLE_PURPLE}
          {COPY.LANDING_HERO.TITLE_BLACK_2}
        </>
      </Typography>
      <SubTitleWrapper>
        <Typography text={COPY.LANDING_HERO.SUBTITLE} type="body1" />
      </SubTitleWrapper>

      <Button
        text="Get started"
        type="link"
        variant="primary"
        href="https://beta.talentprotocol.com/join"
      />
    </Container>
  );
};
