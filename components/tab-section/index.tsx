import { useMemo, useState } from "react";
import Image from "next/image";
import { Typography } from "shared-ui";
import { COPY } from "copy";
import webpageImage from "./assets/about/web-page.svg";
import {
  Container,
  ContentArea,
  ContentPane,
  ImageHolder,
  TabElement,
  Tabs,
} from "./styled";

export const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const MemoedTabs = useMemo(
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
      <Tabs>{MemoedTabs}</Tabs>
      <ContentPane>
        <ContentArea>
          <Typography
            type="h3"
            text={COPY.TAB_HERO.TABS[activeTab].CONTENT_HEADER}
            color="WHITE"
          />
          <Typography
            type="body1"
            text={COPY.TAB_HERO.TABS[activeTab].CONTENT_DESCRIPTION}
            color="WHITE"
          />
        </ContentArea>
        <ImageHolder>
          <Image src={webpageImage} alt="webpage" />
        </ImageHolder>
      </ContentPane>
    </Container>
  );
};
