import { useRef } from "react";
import Image from "next/image";
import { COPY } from "copy/handle";
import { Typography } from "shared-ui";
import {
  Container,
  ItalicText,
  EarlyBird,
  EarlyBirdPromo,
  EarlyBirdPromoTag,
  PriceTag,
  SearchContainer,
  HandleInput,
  StyledReserveHandleButton,
  BenefitsArea
} from "./styled";
import { Props } from "./types";
import arrowDown from "./assets/arrow-down.svg";
import arrow from "./assets/arrow.svg";

export const LandingHero = ({ isMobile, isSafari, isAndroid }: Props) => {
  const talRef = useRef<HTMLSpanElement>(null);

  return (
    <Container>
      <Typography type="h3" color={"WHITE"}>
        <>
          <Image src={arrow} alt="icon image" />
          <><br/>{COPY.LANDING_HERO.TITLE_REGULAR_1}<br/></>
          <ItalicText>{COPY.LANDING_HERO.TITLE_ITALIC_1}<br/></ItalicText>
          <>{COPY.LANDING_HERO.TITLE_REGULAR_2}<br/></>
          <ItalicText>{COPY.LANDING_HERO.TITLE_ITALIC_2}</ItalicText>
        </>
      </Typography>
      <EarlyBird>
          <EarlyBirdPromo>
            <EarlyBirdPromoTag>
              <Typography type="p3" color={"DARK_BLUE"}>
                <>{COPY.LANDING_HERO.EARLY_BIRD.PROMO}</>
              </Typography>
            </EarlyBirdPromoTag>
          </EarlyBirdPromo>
          <PriceTag>
            <Typography type="h3" color={"WHITE"}>
              <>{COPY.LANDING_HERO.EARLY_BIRD.PRICE}</>
            </Typography>
            <Typography type="p1" color={"PINK"}>
              <>{COPY.LANDING_HERO.EARLY_BIRD.PERIOD}</>
            </Typography>
          </PriceTag>
          <SearchContainer>
            <HandleInput
              ref={talRef}
              contentEditable
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }}
              spellCheck={false}
              placeholder={COPY.LANDING_HERO.EARLY_BIRD.INPUT_PLACEHOLDER}
            />
            <StyledReserveHandleButton
              onClick={() => console.log("button")}
            >
              {COPY.LANDING_HERO.EARLY_BIRD.BUTTON}
            </StyledReserveHandleButton>
          </SearchContainer>
          <BenefitsArea>
            <Image src={arrowDown} alt="icon image" />
            <Typography type="body1" color="PINK"><>{COPY.LANDING_HERO.BENEFITS}</></Typography>
          </BenefitsArea>
      </EarlyBird>
    </Container>
  );
};
