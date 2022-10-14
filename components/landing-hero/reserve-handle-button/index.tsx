import { useMediaQuery } from "hooks/use-media-query";
import { COPY } from "copy";
import { ButtonContainer, StyledReserveHandleButton } from "./styled";
import { Props } from "./types";

export const ReserveHandleButton = ({ callback }: Props) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <ButtonContainer>
      <StyledReserveHandleButton onClick={callback}>
        {isMobile
          ? COPY.LANDING_HERO.RESERVE_TAL.BUTTON_MOBILE
          : COPY.LANDING_HERO.RESERVE_TAL.BUTTON}
      </StyledReserveHandleButton>
    </ButtonContainer>
  );
};

export default ReserveHandleButton;
