import { COPY } from "copy";
import { ButtonContainer, StyledReserveHandleButton } from "./styled";
import { Props } from "./types";

export const ReserveHandleButton = ({
  callback,
  isMobile,
}: Props) => (
  <ButtonContainer>
    <StyledReserveHandleButton onClick={callback} style={{top: isMobile ? "-15px" : "-13px"}}>
      {isMobile
        ? COPY.LANDING_HERO.RESERVE_TAL.BUTTON_MOBILE
        : COPY.LANDING_HERO.RESERVE_TAL.BUTTON}
    </StyledReserveHandleButton>
  </ButtonContainer>
);

export default ReserveHandleButton;
