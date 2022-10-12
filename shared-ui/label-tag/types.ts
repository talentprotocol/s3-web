import { AvailableColors } from "shared-ui";

export enum TagTypeEnum {
  DEFAULT = "default",
  HIGHLIGHTED = "highlighted",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  QUATERNARY = "quaternary",
}

export type TagType =
  | "default"
  | "highlighted"
  | "secondary"
  | "tertiary"
  | "quaternary";

export interface Props {
  type: TagType;
  text: string;
  color?: AvailableColors;
}

export interface StyledLabelProps {
  color?: AvailableColors;
}
