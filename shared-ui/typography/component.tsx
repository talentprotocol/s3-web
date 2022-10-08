import { H1, H2, H3, BODY1, BODY2, GENERAL } from "./styled";
import { Props, TypographyTypeEnum } from "./types";

export const Typography = ({
  text,
  type,
  color,
  children,
}: Props) => {
  switch (type) {
    case TypographyTypeEnum.H1:
      return <H1>{text || children}</H1>;
    case TypographyTypeEnum.H2:
      return <H2>{text || children}</H2>;
    case TypographyTypeEnum.H3:
      return <H3>{text || children}</H3>;
    case TypographyTypeEnum.BODY1:
      return <BODY1>{text || children}</BODY1>;
    case TypographyTypeEnum.BODY2:
      return <BODY2>{text || children}</BODY2>;
    case TypographyTypeEnum.GENERAL:
    default:
      return <GENERAL>{text || children}</GENERAL>;
  }
};
