import { useMemo } from "react";
import Image from "next/image";
import metamaskIcon from "./assets/metamask.svg";
import amazonIcon from "./assets/amazon.svg";
import revolutIcon from "./assets/revolut.svg";
import spotifyIcon from "./assets/spotify.svg";
import facebookIcon from "./assets/facebook.svg";
import { Container, ImageWrapper, LabelWrapper } from "./styled";
import { CompanyEnum, Props } from "./types";

export const CompanyTag = ({ type }: Props) => {
  const tag = useMemo(() => {
    switch (type) {
      case CompanyEnum.AMAZON:
        return (
          <>
            <ImageWrapper>
              <Image src={amazonIcon} />
            </ImageWrapper>
            <LabelWrapper>Amazon</LabelWrapper>
          </>
        );
      case CompanyEnum.FACEBOOK:
        return (
          <>
            <ImageWrapper>
              <Image src={facebookIcon} />
            </ImageWrapper>
            <LabelWrapper>Facebook</LabelWrapper>
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
      case CompanyEnum.SPOTIFY:
        return (
          <>
            <ImageWrapper>
              <Image src={spotifyIcon} />
            </ImageWrapper>
            <LabelWrapper>Spotify</LabelWrapper>
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
