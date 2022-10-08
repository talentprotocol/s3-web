export type TypographyType =
  | "h1"
  | "h2"
  | "h3"
  | "body1"
  | "body2"
  | "general";

export enum TypographyTypeEnum {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  BODY1 = "body1",
  BODY2 = "body2",
  GENERAL = "general",
}

export interface Props {
  type: TypographyType;
  text?: string;
  children?: JSX.Element;
}
