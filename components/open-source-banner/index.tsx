import { COPY } from "copy";
import { Button, Typography } from "shared-ui";
import {
  ButtonWrapper,
  Container,
  InnerContainer,
  Title,
  YellowText,
} from "./styled";

export const OpenSourceBanner = () => (
  <Container>
    <InnerContainer>
      <Title>
        <>
          {COPY.OPEN_SOURCE_BANNER.TITLE_LIGHT_YELLOW}
          <br />
          <YellowText>
            {COPY.OPEN_SOURCE_BANNER.TITLE_YELLOW}
          </YellowText>
        </>
      </Title>
      <Typography
        type="body1"
        text={COPY.OPEN_SOURCE_BANNER.TEXT}
        color="LIGHT_YELLOW"
      />
      <ButtonWrapper>
        <Button
          type="link"
          variant="septenary"
          text={COPY.OPEN_SOURCE_BANNER.BUTTON}
          href="https://talentprotocol.notion.site/Talent-Protocol-101-26a6c4b9f8284e5e8f55603a38629e76"
        />
      </ButtonWrapper>
    </InnerContainer>
  </Container>
);
