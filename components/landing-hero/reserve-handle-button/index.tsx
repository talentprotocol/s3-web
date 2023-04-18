import { COPY } from "copy";
import {
  ButtonContainer,
  ButtonIcon,
  StyledReserveHandleButton,
} from "./styled";
import { Props } from "./types";

export const ReserveHandleButton = ({
  callback,
  isMobile,
  isSafari,
  isAndroid,
}: Props) => (
  <ButtonContainer>
    <StyledReserveHandleButton
      isMobile={isMobile}
      isSafari={isSafari}
      isAndroid={isAndroid}
      href="https://beta.talentprotocol.com/join?ref=landing"
      style={{ top: isMobile ? "-15px" : "-13px" }}
    >
      Sign up now <ButtonIcon>--E</ButtonIcon>
    </StyledReserveHandleButton>
  </ButtonContainer>
);

export default ReserveHandleButton;
