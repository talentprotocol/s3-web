export enum TagTypeEnum {
  DEFAULT = "default",
  HIGHLIGHTED = "highlighted",
}

export type TagType = "default" | "highlighted";

export interface Props {
  type: TagType;
  text: string;
}
