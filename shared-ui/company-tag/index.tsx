import { useMemo } from "react";
import Image from "next/image";
import metamaskIcon from "./assets/metamask.svg";
import binanceIcon from "./assets/binance.svg";
import revolutIcon from "./assets/revolut.svg";
import uniswapIcon from "./assets/uniswap.svg";
import appleIcon from "./assets/apple.svg";
import { Container, ImageWrapper, LabelWrapper } from "./styled";
import { CompanyEnum, Props } from "./types";

export const CompanyTag = ({ type }: Props) => {
  const tag = useMemo(() => {
    switch (type) {
      case CompanyEnum.BINANCE:
        return (
          <>
            <ImageWrapper>
              <Image src={binanceIcon} />
            </ImageWrapper>
            <LabelWrapper>Binance</LabelWrapper>
          </>
        );
      case CompanyEnum.APPLE:
        return (
          <>
            <ImageWrapper>
              <Image src={appleIcon} />
            </ImageWrapper>
            <LabelWrapper>Apple</LabelWrapper>
          </>
        );
      case CompanyEnum.REVOLUT:
        return (
          <>
            <ImageWrapper>
              <Image src={revolutIcon} />
            </ImageWrapper>
            <LabelWrapper>Revolut</LabelWrapper>
          </>
        );
      case CompanyEnum.UNISWAP:
        return (
          <>
            <ImageWrapper>
              <Image src={uniswapIcon} />
            </ImageWrapper>
            <LabelWrapper>Uniswap</LabelWrapper>
          </>
        );
      case CompanyEnum.METAMASK:
      default:
        return (
          <>
            <ImageWrapper>
              <Image src={metamaskIcon} />
            </ImageWrapper>
            <LabelWrapper>Metamask</LabelWrapper>
          </>
        );
    }
  }, [type]);
  return <Container>{tag}</Container>;
};
