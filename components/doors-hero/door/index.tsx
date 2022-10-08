import { AvailableColors, LabelTag, Typography } from "shared-ui";
import { Container, DoorButton, DoorFooter } from "./styled";
import { Props } from "./types";

export const Door = ({
  isHighlighted,
  labelType,
  labelText,
  title,
  subTitle,
  buttonText
}: Props) => {
  const textColor: AvailableColors = isHighlighted
    ? "WHITE"
    : "BLACK";
  return (
    <Container isHighlighted={isHighlighted}>
      <LabelTag type={labelType} text={labelText} />
      <Typography type="body1" text={title} color={textColor} />
      <Typography type="body2" text={subTitle} color={textColor} />
      <DoorFooter>
        <DoorButton isHighlighted={isHighlighted}>{buttonText}</DoorButton>
      </DoorFooter>
    </Container>
  );
};
