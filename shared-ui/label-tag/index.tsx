import { DefaultContainer, HighlightedContainer } from "./styled";
import { Props, TagTypeEnum } from "./types";

export const LabelTag = ({ text, type }: Props) => {
  switch (type) {
    case TagTypeEnum.HIGHLIGHTED:
      return <HighlightedContainer>{text}</HighlightedContainer>;
    case TagTypeEnum.DEFAULT:
    default:
      return <DefaultContainer>{text}</DefaultContainer>;
  }
};
