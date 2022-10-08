import { COPY } from "copy";
import { useMemo, useState } from "react";
import { Typography } from "shared-ui";
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
            type="h2"
            text={COPY.TAB_HERO.TABS[activeTab].CONTENT_HEADER}
          />
          <Typography
            type="body2"
            text={COPY.TAB_HERO.TABS[activeTab].CONTENT_DESCRIPTION}
          />
        </ContentArea>
        <ImageHolder>123123</ImageHolder>
      </ContentPane>
    </Container>
  );
};
