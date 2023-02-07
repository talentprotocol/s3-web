import { AvailableColors } from "../colors";

export type TypographyType =
  | "h1"
  | "h2"
  | "h3"
  | "body1"
  | "body2"
  | "p1"
  | "p3"
  | "general";

export enum TypographyTypeEnum {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  BODY1 = "body1",
  BODY2 = "body2",
  GENERAL = "general",
  P1 = "p1",
  P3 = "p3",
}

export interface Props {
  type: TypographyType;
  text?: string;
  color?: AvailableColors;
  children?: JSX.Element;
}

export interface StyledTypographyProps {
  color?: AvailableColors;
}
