import { useMemo, useState } from "react";
import Image from "next/image";
import { Typography } from "shared-ui";
import { COPY } from "copy";
import aboutImage from "./assets/about.png";
import careerCircleImage from "./assets/career-circle.png";
import credentialsImage from "./assets/credentials.png";
import journyImage from "./assets/journey.png";
// import perksImage from "./assets/perks.png";
import {
  Container,
  ContentArea,
  ImageHolder,
  InnerContainer,
  SubTitleWrapper,
  TabElement,
  Tabs,
  TitleWrapper,
} from "./styled";

const images = [
  aboutImage,
  journyImage,
  credentialsImage,
  // perksImage,
  careerCircleImage,
];

export const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const memoedTabs = useMemo(
    () =>
      COPY.TAB_HERO.TABS.map((tab, index) => {
        return (
          <TabElement
            active={activeTab === index}
            key={tab.TITLE}
            onClick={() => setActiveTab(index)}
          >
            {tab.TITLE}
          </TabElement>
        );
      }),
    [activeTab]
  );
  return (
    <Container>
      <InnerContainer>
        <ContentArea>
          <TitleWrapper>
            <Typography
              type="h3"
              text={COPY.TAB_HERO.TABS[activeTab].CONTENT_HEADER}
              color="WHITE"
            />
          </TitleWrapper>
          <SubTitleWrapper>
            <Typography
              type="body1"
              text={COPY.TAB_HERO.TABS[activeTab].CONTENT_DESCRIPTION}
              color="WHITE"
            />
          </SubTitleWrapper>
        </ContentArea>
        <Tabs>{memoedTabs}</Tabs>
        <ImageHolder>
          <Image priority src={images[activeTab]} alt="webpage" />
        </ImageHolder>
      </InnerContainer>
    </Container>
  );
};
