import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { LabelTag, Typography, CompanyTag } from "shared-ui";
import { COPY } from "copy";
import camelliaImage from "./assets/camellia-avatar.png";
import giulia from "./assets/giulia-avatar.png";
import matthewImage from "./assets/matthew-avatar.png";
import {
  Container,
  ContentRow,
  DisclaimerColumn,
  ImageHolder,
  ImageWrapper,
  Quotes,
  TagContainer,
  TitleWrapper,
} from "./styled";

let images = [{ src: matthewImage, name: "matthew" }, { src: giulia, name: "giulia" }, { src: camelliaImage, name: "camellia"}];
let currentIndex = 0;

// animate__animated animate__fadeOutLeft

export const TrustSection = () => {
  const [_, setForceUpdate] = useState(Date.now());
  const refArray = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  useEffect(() => {
    const intervalId = setInterval(() => {
      const tempImage = images.shift();
      // @ts-ignore
      images.push(tempImage);
      setTimeout(() => {
        if (currentIndex === 2) {
          currentIndex = 0;
        } else {
          currentIndex += 1;
        }
        setForceUpdate(Date.now());
      }, 1000);
    }, 6000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <Container>
      <TagContainer>
        <CompanyTag type="facebook" />
        <CompanyTag type="spotify" />
        <CompanyTag type="amazon" />
        <CompanyTag type="revolut" />
        <CompanyTag type="metamask" />
      </TagContainer>
      <TitleWrapper>
        <Typography type="h2" text={COPY.TRUST_SECTION.TITLE} />
      </TitleWrapper>
      <ContentRow>
        <DisclaimerColumn>
          <Typography
            type="body1"
            text={COPY.TRUST_SECTION.TESTIMONIALS[0].TEXT}
          />
          <LabelTag
            text={COPY.TRUST_SECTION.TESTIMONIALS[0].AUTHOR}
            type="quaternary"
          />
          <Quotes>“</Quotes>
        </DisclaimerColumn>
        <ImageHolder>
          {images.map((img, index) => (
            // @ts-ignore
            <ImageWrapper key={img.name} id={`image-to-animate-${index}`} ref={refArray[index]} className={index === 0 ? "animate__animated animate__fadeOutLeft animate__delay-6s" : "animate__animated animate__fadeIn"}>
              <Image src={img.src} alt="avatar" />
            </ImageWrapper>
          ))}
        </ImageHolder>
      </ContentRow>
    </Container>
  );
}
