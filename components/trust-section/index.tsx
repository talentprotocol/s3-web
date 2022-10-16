import { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { CompanyTag, AvailableColors } from "shared-ui";
import { COPY } from "copy";
import camelliaImage from "./assets/camellia-avatar.png";
import giulia from "./assets/giulia-avatar.png";
import matthewImage from "./assets/matthew-avatar.png";
import {
  Container,
  ContentRow,
  DisclaimerColumn,
  DisclaimerText,
  ImageHolder,
  ImageWrapper,
  Quotes,
  TagContainer,
  Title,
  TitleWrapper,
} from "./styled";
import { Props } from "./types";
const testimonials = [
  {
    src: matthewImage,
    name: "matthew",
    text: COPY.TRUST_SECTION.TESTIMONIALS[0].TEXT,
    label: COPY.TRUST_SECTION.TESTIMONIALS[0].AUTHOR,
    color: "YELLOW" as AvailableColors,
  },
  {
    src: giulia,
    name: "giulia",
    text: COPY.TRUST_SECTION.TESTIMONIALS[1].TEXT,
    label: COPY.TRUST_SECTION.TESTIMONIALS[1].AUTHOR,
    color: "LIGHTER_PURPLE" as AvailableColors,
  },
  {
    src: camelliaImage,
    name: "camellia",
    text: COPY.TRUST_SECTION.TESTIMONIALS[2].TEXT,
    label: COPY.TRUST_SECTION.TESTIMONIALS[2].AUTHOR,
    color: "ORANGE" as AvailableColors,
  },
];

let currentIndex = 0;

const LabelTag = dynamic(
  // @ts-ignore
  () => import("shared-ui/label-tag"),
  { ssr: false }
);

export const TrustSection = ({ isMobile }: Props) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(
    testimonials[0]
  );
  useEffect(() => {
    const intervalId = setInterval(() => {
      const tempTestimonial = testimonials.shift();
      // @ts-ignore
      testimonials.push(tempTestimonial);
      setTimeout(() => {
        if (currentIndex === 2) {
          currentIndex = 0;
        } else {
          currentIndex += 1;
        }
        // @ts-ignore
      }, 1500);
      setCurrentTestimonial(testimonials[0]);
    }, 6000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <Container>
      <TagContainer>
        <CompanyTag type="apple" />
        <CompanyTag type="binance" />
        <CompanyTag type="uniswap" />
        <CompanyTag type="revolut" />
        <CompanyTag type="metamask" />
      </TagContainer>
      <TitleWrapper key="title">
        <Title>{COPY.TRUST_SECTION.TITLE}</Title>
      </TitleWrapper>
      <ContentRow>
        {
          <DisclaimerColumn
            key={currentTestimonial.name}
            id={currentTestimonial.name}
            className=""
          >
            <DisclaimerText>{currentTestimonial.text}</DisclaimerText>
            <LabelTag
              text={currentTestimonial.label}
              type="default"
              color={currentTestimonial.color}
            />
            {!isMobile && <Quotes>“</Quotes>}
          </DisclaimerColumn>
        }
        <ImageHolder>
          {testimonials.map((img, index) => (
            // @ts-ignore
            <ImageWrapper
              key={img.name}
              id={`image-to-animate-${img.name}`}
              className={index === 0 ? "" : ""}
            >
              <Image src={img.src} alt="avatar" />
            </ImageWrapper>
          ))}
        </ImageHolder>
      </ContentRow>
    </Container>
  );
};
