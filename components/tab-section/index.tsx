import { useMemo, useState } from "react";
import Image from "next/image";
import { Typography } from "shared-ui";
import { COPY } from "copy";
import profileImage from "./assets/about/profile.png";
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
            <Image priority src={profileImage} alt="webpage" />
        </ImageHolder>
        </InnerContainer>
    </Container>
  );
};
