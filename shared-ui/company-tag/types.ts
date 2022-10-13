export type CompanyEnumType =
  | "apple"
  | "uniswap"
  | "revolut"
  | "binance"
  | "metamask";

export enum CompanyEnum {
  APPLE = "apple",
  REVOLUT = "revolut",
  UNISWAP = "uniswap",
  BINANCE = "binance",
  METAMASK = "metamask",
}

export interface Props {
  type: CompanyEnumType;
}
