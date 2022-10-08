export enum TagTypeEnum {
  DEFAULT = "default",
  HIGHLIGHTED = "highlighted",
  SECONDARY = "secondary",
}

export type TagType = "default" | "highlighted" | "secondary";

export interface Props {
  type: TagType;
  text: string;
}
