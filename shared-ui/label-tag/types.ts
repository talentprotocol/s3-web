export enum TagTypeEnum {
  DEFAULT = "default",
  HIGHLIGHTED = "highlighted",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}

export type TagType =
  | "default"
  | "highlighted"
  | "secondary"
  | "tertiary";

export interface Props {
  type: TagType;
  text: string;
}
