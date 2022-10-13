import Image from "next/image";
import cameliaImage from "./assets/camelia.png";
import giuliaImage from "./assets/giulia.png";
import matthewImage from "./assets/matthew.svg";
import tolgaImage from "./assets/tolga.svg";
import {
  Column,
  Container,
  HorizontalOvalShape,
  ImageOvalShape,
  OvalShape,
} from "./styled";

export const Mosaic = () => (
  <Container>
  <Column>
    <ImageOvalShape image={cameliaImage} />
    <HorizontalOvalShape
      backrgound="DARK_BLUE"
      color="YELLOW"
    >
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
      color="LIGHT_PURPLE"
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
    <Image src={matthewImage} />
    <HorizontalOvalShape
      backrgound="DARK_BLUE"
      color="LIGHT_PURPLE"
      isBig
    >
      matthew.tal
    </HorizontalOvalShape>
  </Column>
  <Column>
    <OvalShape backrgound="LIGHTER_PURPLE" />
    <OvalShape backrgound="YELLOW" />
  </Column>
  <Column>
    <HorizontalOvalShape
      backrgound="DARK_BLUE"
      color="LIGHT_PURPLE"
      isMedium
    >
      tolga.tal
    </HorizontalOvalShape>
    <Image src={tolgaImage} />
  </Column>
  <Column>
    <OvalShape backrgound="LIGHT_PURPLE" />
    <OvalShape backrgound="LIGHT_YELLOW" />
  </Column>
  <Column>
    <ImageOvalShape image={cameliaImage} />
    <HorizontalOvalShape
      backrgound="DARK_BLUE"
      color="YELLOW"
    >
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
      color="LIGHT_PURPLE"
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
    <Image src={matthewImage} />
    <HorizontalOvalShape
      backrgound="DARK_BLUE"
      color="LIGHT_PURPLE"
      isBig
    >
      matthew.tal
    </HorizontalOvalShape>
  </Column>
  <Column>
    <OvalShape backrgound="LIGHTER_PURPLE" />
    <OvalShape backrgound="YELLOW" />
  </Column>
  <Column>
    <HorizontalOvalShape
      backrgound="DARK_BLUE"
      color="LIGHT_PURPLE"
      isMedium
    >
      tolga.tal
    </HorizontalOvalShape>
    <Image src={tolgaImage} />
  </Column>
  <Column>
    <OvalShape backrgound="LIGHT_PURPLE" />
    <OvalShape backrgound="LIGHT_YELLOW" />
  </Column>
  <Column>
    <ImageOvalShape image={cameliaImage} />
    <HorizontalOvalShape
      backrgound="DARK_BLUE"
      color="YELLOW"
    >
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
      color="LIGHT_PURPLE"
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
    <Image src={matthewImage} />
    <HorizontalOvalShape
      backrgound="DARK_BLUE"
      color="LIGHT_PURPLE"
      isBig
    >
      matthew.tal
    </HorizontalOvalShape>
  </Column>
  <Column>
    <OvalShape backrgound="LIGHTER_PURPLE" />
    <OvalShape backrgound="YELLOW" />
  </Column>
  <Column>
    <HorizontalOvalShape
      backrgound="DARK_BLUE"
      color="LIGHT_PURPLE"
      isMedium
    >
      tolga.tal
    </HorizontalOvalShape>
    <Image src={tolgaImage} />
  </Column>
  <Column>
    <OvalShape backrgound="LIGHT_PURPLE" />
    <OvalShape backrgound="LIGHT_YELLOW" />
  </Column>
  </Container>
);

