export type CompanyEnumType =
  | "facebook"
  | "spotify"
  | "revolut"
  | "amazon"
  | "metamask";

export enum CompanyEnum {
  FACEBOOK = "facebook",
  REVOLUT = "revolut",
  SPOTIFY = "spotify",
  AMAZON = "amazon",
  METAMASK = "metamask",
}

export interface Props {
  type: CompanyEnumType;
}
