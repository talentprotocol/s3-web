import { AvailableColors, LabelTag, Typography } from "shared-ui";
import {
  Container,
  DescriptionContainer,
  DoorButton,
  DoorFooter,
  LabelContainer,
} from "./styled";
import { Props } from "./types";

export const Door = ({
  isHighlighted,
  labelType,
  labelText,
  title,
  subTitle,
  buttonText,
}: Props) => {
  const textColor: AvailableColors = isHighlighted
    ? "WHITE"
    : "BLACK";
  return (
    <Container isHighlighted={isHighlighted}>
      <LabelContainer>
        <LabelTag type={labelType} text={labelText} />
      </LabelContainer>
      <Typography type="body1" text={title} color={textColor} />
      <DescriptionContainer>
        <Typography type="body2" text={subTitle} color={textColor} />
      </DescriptionContainer>
      <DoorFooter>
        <DoorButton isHighlighted={isHighlighted}>
          {buttonText}
        </DoorButton>
      </DoorFooter>
    </Container>
  );
};
