export enum ButtonTypeEnum {
  DEFAULT = "default",
  LINK = "link",
}

export type ButtonType = "default" | "link";

export enum VariantTypeEnum {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export type VariantType = "primary" | "secondary";

export interface Props {
  text: string;
  type: ButtonType;
  variant: VariantType;
  href: string;
}

export interface StyledButtonProps {
  variant: VariantType;
}
