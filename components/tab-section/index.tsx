import { useMemo, useState } from "react";
import Image from "next/image";
import { Typography } from "shared-ui";
import { COPY } from "copy";
import profileImage from "./assets/about/profile.png";
import {
  Container,
  ContentArea,
  ContentPane,
  ImageHolder,
  ImagePositioner,
  TabElement,
  Tabs,
} from "./styled";
import { useWindowSize } from "hooks/on-window-resize";

export const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const windowSize = useWindowSize();
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
  const memoedContent = useMemo(() => (
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
  ), [activeTab])
  return (
    <Container>
      <Tabs>{memoedTabs}</Tabs>
      <ContentPane>
      {memoedContent}
        <ImageHolder>
          <ImagePositioner width={windowSize.width}>
            <Image src={profileImage} alt="webpage"/>
          </ImagePositioner>
        </ImageHolder>
      </ContentPane>
    </Container>
  );
};
