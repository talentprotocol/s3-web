import { H1, H2, H3, BODY1, BODY2, GENERAL, P1, P3 } from "./styled";
import { Props, TypographyTypeEnum } from "./types";

export const Typography = ({
  text,
  type,
  color,
  children,
}: Props) => {
  switch (type) {
    case TypographyTypeEnum.H1:
      return <H1 color={color}>{text || children}</H1>;
    case TypographyTypeEnum.H2:
      return <H2 color={color}>{text || children}</H2>;
    case TypographyTypeEnum.H3:
      return <H3 color={color}>{text || children}</H3>;
    case TypographyTypeEnum.BODY1:
      return <BODY1 color={color}>{text || children}</BODY1>;
    case TypographyTypeEnum.BODY2:
      return <BODY2 color={color}>{text || children}</BODY2>;
    case TypographyTypeEnum.P1:
      return <P1 color={color}>{text || children}</P1>;
    case TypographyTypeEnum.P3:
      return <P3 color={color}>{text || children}</P3>;
    case TypographyTypeEnum.GENERAL:
    default:
      return <GENERAL color={color}>{text || children}</GENERAL>;
  }
};
