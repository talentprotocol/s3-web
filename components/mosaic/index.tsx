import Image from "next/image";
import cameliaImage from "./assets/camelia.png";
import giuliaImage from "./assets/giulia.png";
import matthewImage from "./assets/matthew.svg";
import tolgaImage from "./assets/tolga.svg";
// import mosaicImage from "./assets/mosaic.png";
import {
  Column,
  Container,
  HorizontalOvalShape,
  ImageOvalShape,
  OvalShape,
} from "./styled";
import { Props } from "./types";

export const Mosaic = ({ isMobile }: Props) => {
  return !isMobile ? (
    <Container>
      <Column>
        <ImageOvalShape image={cameliaImage} />
        <HorizontalOvalShape backrgound="DARK_BLUE" color="YELLOW">
          camelia.tal
        </HorizontalOvalShape>
      </Column>
      <Column movedUp>
        <OvalShape backrgound="LIGHT_PURPLE" />
        <OvalShape backrgound="LIGHT_YELLOW" />
      </Column>
      <Column>
        <HorizontalOvalShape
          backrgound="DARK_BLUE"
          color="LIGHTER_PURPLE"
        >
          giulia.tal
        </HorizontalOvalShape>
        <ImageOvalShape image={giuliaImage} />
      </Column>
      <Column>
        <OvalShape backrgound="YELLOW" />
        <OvalShape backrgound="ORANGE" />
      </Column>
      <Column>
        <Image src={matthewImage} alt="mosaic-piece" />
        <HorizontalOvalShape
          backrgound="DARK_BLUE"
          color="LIGHT_PURPLE"
          isBig
        >
          matt.tal
        </HorizontalOvalShape>
      </Column>
      <Column>
        <OvalShape backrgound="LIGHTER_PURPLE" />
        <OvalShape backrgound="YELLOW" />
      </Column>
      <Column>
        <HorizontalOvalShape
          backrgound="DARK_BLUE"
          color="WHITE"
          isMedium
        >
          tolga.tal
        </HorizontalOvalShape>
        <Image src={tolgaImage} alt="mosaic-piece" />
      </Column>
      <Column>
        <OvalShape backrgound="LIGHT_PURPLE" />
        <OvalShape backrgound="LIGHT_YELLOW" />
      </Column>
      <Column>
        <ImageOvalShape image={cameliaImage} />
        <HorizontalOvalShape backrgound="DARK_BLUE" color="YELLOW">
          camelia.tal
        </HorizontalOvalShape>
      </Column>
      <Column movedUp>
        <OvalShape backrgound="LIGHT_PURPLE" />
        <OvalShape backrgound="LIGHT_YELLOW" />
      </Column>
      <Column>
        <HorizontalOvalShape
          backrgound="DARK_BLUE"
          color="LIGHTER_PURPLE"
        >
          giulia.tal
        </HorizontalOvalShape>
        <ImageOvalShape image={giuliaImage} />
      </Column>
      <Column>
        <OvalShape backrgound="YELLOW" />
        <OvalShape backrgound="ORANGE" />
      </Column>
      <Column>
        <Image src={matthewImage} alt="mosaic-piece" />
        <HorizontalOvalShape
          backrgound="DARK_BLUE"
          color="LIGHT_PURPLE"
          isBig
        >
          matt.tal
        </HorizontalOvalShape>
      </Column>
      <Column>
        <OvalShape backrgound="LIGHTER_PURPLE" />
        <OvalShape backrgound="YELLOW" />
      </Column>
      <Column>
        <HorizontalOvalShape
          backrgound="DARK_BLUE"
          color="WHITE"
          isMedium
        >
          tolga.tal
        </HorizontalOvalShape>
        <Image src={tolgaImage} alt="mosaic-piece" />
      </Column>
      <Column>
        <OvalShape backrgound="LIGHT_PURPLE" />
        <OvalShape backrgound="LIGHT_YELLOW" />
      </Column>
      <Column>
        <ImageOvalShape image={cameliaImage} />
        <HorizontalOvalShape backrgound="DARK_BLUE" color="YELLOW">
          camelia.tal
        </HorizontalOvalShape>
      </Column>
      <Column movedUp>
        <OvalShape backrgound="LIGHT_PURPLE" />
        <OvalShape backrgound="LIGHT_YELLOW" />
      </Column>
      <Column>
        <HorizontalOvalShape
          backrgound="DARK_BLUE"
          color="LIGHTER_PURPLE"
        >
          giulia.tal
        </HorizontalOvalShape>
        <ImageOvalShape image={giuliaImage} />
      </Column>
      <Column>
        <OvalShape backrgound="YELLOW" />
        <OvalShape backrgound="ORANGE" />
      </Column>
      <Column>
        <Image src={matthewImage} alt="mosaic-piece" />
        <HorizontalOvalShape
          backrgound="DARK_BLUE"
          color="LIGHT_PURPLE"
          isBig
        >
          matt.tal
        </HorizontalOvalShape>
      </Column>
      <Column>
        <OvalShape backrgound="LIGHTER_PURPLE" />
        <OvalShape backrgound="YELLOW" />
      </Column>
      <Column>
        <HorizontalOvalShape
          backrgound="DARK_BLUE"
          color="WHITE"
          isMedium
        >
          tolga.tal
        </HorizontalOvalShape>
        <Image src={tolgaImage} alt="mosaic-piece" />
      </Column>
      <Column>
        <OvalShape backrgound="LIGHT_PURPLE" />
        <OvalShape backrgound="LIGHT_YELLOW" />
      </Column>
    </Container>
  ) : (
    <></>
  );
};
