import {
  DefaultContainer,
  HighlightedContainer,
  QuaternaryContainer,
  SecondaryContainer,
  TertiaryContainer,
} from "./styled";
import { Props, TagTypeEnum } from "./types";

export const LabelTag = ({ text, type, color }: Props) => {
  switch (type) {
    case TagTypeEnum.HIGHLIGHTED:
      return <HighlightedContainer>{text}</HighlightedContainer>;
    case TagTypeEnum.SECONDARY:
      return <SecondaryContainer>{text}</SecondaryContainer>;
    case TagTypeEnum.TERTIARY:
      return <TertiaryContainer>{text}</TertiaryContainer>;
    case TagTypeEnum.QUATERNARY:
      return <QuaternaryContainer>{text}</QuaternaryContainer>;
    case TagTypeEnum.DEFAULT:
    default:
      return (
        <DefaultContainer color={color}>{text}</DefaultContainer>
      );
  }
};

export default LabelTag;
