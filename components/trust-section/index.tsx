import { useEffect, useState } from "react";
import Image from "next/image";
import {
  LabelTag,
  Typography,
  CompanyTag,
  AvailableColors,
} from "shared-ui";
import { useMediaQuery } from "hooks/use-media-query";
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
    color: "LIGHT_PURPLE" as AvailableColors,
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

export const TrustSection = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
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
        {
          <DisclaimerColumn
            key={currentTestimonial.name}
            id={currentTestimonial.name}
            className="animate__animated animate__fadeIn"
          >
            <Typography type="body1" text={currentTestimonial.text} />
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
              className={
                index === 0
                  ? "animate__animated animate__fadeOut animate__delay-6s"
                  : "animate__animated animate__fadeIn"
              }
            >
              <Image src={img.src} alt="avatar" />
            </ImageWrapper>
          ))}
        </ImageHolder>
      </ContentRow>
    </Container>
  );
};
