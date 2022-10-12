import Image from "next/image";
import octagonImage from "./assets/octagon.svg";
import fancyShape from "./assets/fancy-shape.svg";
import {
  Column,
  Container,
  HorizontalOvalShape,
  ImageOvalShape,
  OvalShape,
} from "./styled";

export const Mosaic = () => (
  <Container>
    <Column movedUp>
      <OvalShape backrgound="LIGHT_PURPLE" />
      <OvalShape backrgound="LIGHT_YELLOW" />
    </Column>
    <Column>
      <ImageOvalShape image="https://picsum.photos/id/237/536/354" />
      <HorizontalOvalShape
        backrgound="DARK_BLUE"
        color="LIGHT_YELLOW"
      >
        cam.tal
      </HorizontalOvalShape>
    </Column>
    <Column>
      <HorizontalOvalShape
        backrgound="DARK_BLUE"
        color="LIGHT_PURPLE"
      >
        joe.tal
      </HorizontalOvalShape>
      <ImageOvalShape image="https://picsum.photos/id/237/536/354" />
    </Column>
    <Column>
      <OvalShape backrgound="YELLOW" />
      <OvalShape backrgound="ORANGE" />
    </Column>
    <Column>
      <Image src={octagonImage} />
      <HorizontalOvalShape
        backrgound="DARK_BLUE"
        color="LIGHT_PURPLE"
        isBig
      >
        noora.tal
      </HorizontalOvalShape>
    </Column>
    <Column movedUp>
      <OvalShape backrgound="LIGHT_PURPLE" />
      <OvalShape backrgound="YELLOW" />
    </Column>
    <Column>
      <HorizontalOvalShape
        backrgound="DARK_BLUE"
        color="LIGHT_PURPLE"
        isMedium
      >
        arij.tal
      </HorizontalOvalShape>
      <Image src={fancyShape} />
    </Column>
    <Column>
      <OvalShape backrgound="ORANGE" />
      <OvalShape backrgound="LIGHT_GREY" />
    </Column>
    <Column>
      <ImageOvalShape image="https://picsum.photos/id/237/536/354" />
      <HorizontalOvalShape
        backrgound="DARK_BLUE"
        color="LIGHT_YELLOW"
      >
        cam.tal
      </HorizontalOvalShape>
    </Column>
    <Column>
      <HorizontalOvalShape
        backrgound="DARK_BLUE"
        color="LIGHT_PURPLE"
      >
        cam.tal
      </HorizontalOvalShape>
      <ImageOvalShape image="https://picsum.photos/id/237/536/354" />
    </Column>
    <Column movedUp>
      <OvalShape backrgound="YELLOW" />
      <OvalShape backrgound="ORANGE" />
    </Column>
    <Column>
      <Image src={octagonImage} />
      <HorizontalOvalShape
        backrgound="DARK_BLUE"
        color="LIGHT_PURPLE"
        isBig
      >
        noora.tal
      </HorizontalOvalShape>
    </Column>
    <Column>
      <OvalShape backrgound="LIGHT_PURPLE" />
      <OvalShape backrgound="YELLOW" />
    </Column>
    <Column>
      <HorizontalOvalShape
        backrgound="DARK_BLUE"
        color="LIGHT_PURPLE"
        isMedium
      >
        arij.tal
      </HorizontalOvalShape>
      <Image src={fancyShape} />
    </Column>
    <Column>
      <OvalShape backrgound="ORANGE" />
      <OvalShape backrgound="LIGHT_GREY" />
    </Column>{" "}
    <Column>
      <ImageOvalShape image="https://picsum.photos/id/237/536/354" />
      <HorizontalOvalShape
        backrgound="DARK_BLUE"
        color="LIGHT_YELLOW"
      >
        cam.tal
      </HorizontalOvalShape>
    </Column>
    <Column>
      <HorizontalOvalShape
        backrgound="DARK_BLUE"
        color="LIGHT_PURPLE"
      >
        joe.tal
      </HorizontalOvalShape>
      <ImageOvalShape image="https://picsum.photos/id/237/536/354" />
    </Column>
    <Column>
      <OvalShape backrgound="YELLOW" />
      <OvalShape backrgound="ORANGE" />
    </Column>
    <Column>
      <Image src={octagonImage} />
      <HorizontalOvalShape
        backrgound="DARK_BLUE"
        color="LIGHT_PURPLE"
        isBig
      >
        noora.tal
      </HorizontalOvalShape>
    </Column>
    <Column>
      <OvalShape backrgound="LIGHT_PURPLE" />
      <OvalShape backrgound="YELLOW" />
    </Column>
    <Column>
      <HorizontalOvalShape
        backrgound="DARK_BLUE"
        color="LIGHT_PURPLE"
        isMedium
      >
        arij.tal
      </HorizontalOvalShape>
      <Image src={fancyShape} />
    </Column>
    <Column>
      <OvalShape backrgound="ORANGE" />
      <OvalShape backrgound="LIGHT_GREY" />
    </Column>
    <Column>
      <Image src={octagonImage} />
      <HorizontalOvalShape
        backrgound="DARK_BLUE"
        color="LIGHT_PURPLE"
        isBig
      >
        noora.tal
      </HorizontalOvalShape>
    </Column>
    <Column>
      <OvalShape backrgound="LIGHT_PURPLE" />
      <OvalShape backrgound="YELLOW" />
    </Column>
    <Column>
      <HorizontalOvalShape
        backrgound="DARK_BLUE"
        color="LIGHT_PURPLE"
        isMedium
      >
        arij.tal
      </HorizontalOvalShape>
      <Image src={fancyShape} />
    </Column>
    <Column>
      <OvalShape backrgound="ORANGE" />
      <OvalShape backrgound="LIGHT_GREY" />
    </Column>
    <Column>
      <ImageOvalShape image="https://picsum.photos/id/237/536/354" />
      <HorizontalOvalShape
        backrgound="DARK_BLUE"
        color="LIGHT_YELLOW"
      >
        cam.tal
      </HorizontalOvalShape>
    </Column>
    <Column>
      <HorizontalOvalShape
        backrgound="DARK_BLUE"
        color="LIGHT_PURPLE"
      >
        cam.tal
      </HorizontalOvalShape>
      <ImageOvalShape image="https://picsum.photos/id/237/536/354" />
    </Column>
    <Column>
      <OvalShape backrgound="YELLOW" />
      <OvalShape backrgound="ORANGE" />
    </Column>
    <Column>
      <Image src={octagonImage} />
      <HorizontalOvalShape
        backrgound="DARK_BLUE"
        color="LIGHT_PURPLE"
        isBig
      >
        noora.tal
      </HorizontalOvalShape>
    </Column>
    <Column>
      <OvalShape backrgound="LIGHT_PURPLE" />
      <OvalShape backrgound="YELLOW" />
    </Column>
    <Column>
      <HorizontalOvalShape
        backrgound="DARK_BLUE"
        color="LIGHT_PURPLE"
        isMedium
      >
        arij.tal
      </HorizontalOvalShape>
      <Image src={fancyShape} />
    </Column>
  </Container>
);
