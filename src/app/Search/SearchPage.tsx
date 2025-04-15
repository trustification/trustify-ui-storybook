import { useState } from 'react';
import {
  Badge,
  Card,
  CardBody,
  Content,
  Icon,
  PageSection,
  Split,
  SplitItem,
  Tab,
  TabAction,
  Tabs,
  TabTitleText,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
} from '@patternfly/react-core';

const SearchPage = () => {
  const [activeTabKey, setActiveTabKey] = useState<string | number>(0);
  const [isBox, setIsBox] = useState<boolean>(false);

  // Toggle currently active tab
  const handleTabClick = (
    event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number,
  ) => {
    setActiveTabKey(tabIndex);
  };

  const onChangeSearchValue = (input) => {
    console.log(input);
  };

  const searchTabs = (
    <Split hasGutter>
      <SplitItem>
        <Card isFullHeight>
          <CardBody style={{ width: 241 }}>Filter panel goes here..</CardBody>
        </Card>
      </SplitItem>
      <SplitItem isFilled>
        <Tab eventKey={0} title={<TabTitleText>SBOMs</TabTitleText>} aria-label="SBOMs">
          SBOMs
        </Tab>
        <Tab eventKey={1} title={<TabTitleText>Packages</TabTitleText>}>
          Packages
        </Tab>
        <Tab eventKey={2} title={<TabTitleText>Vulnerabilities</TabTitleText>}>
          Vulnerabilities
        </Tab>
        <Tab eventKey={3} title={<TabTitleText>Advisories</TabTitleText>}>
          Advisories
        </Tab>
      </SplitItem>
    </Split>
  );

  return (
    <>
      <PageSection hasBodyWrapper={false}>
        <Content>
          <h1>Search Results</h1>
        </Content>
      </PageSection>
      <PageSection hasBodyWrapper={false}>
        <Toolbar isStatic>
          <ToolbarContent>
            <ToolbarGroup align={{ default: 'alignEnd' }}>
              <ToolbarGroup visibility={{ default: 'hidden', lg: 'visible' }}>
                <ToolbarItem>Search Menu</ToolbarItem>
              </ToolbarGroup>
            </ToolbarGroup>
          </ToolbarContent>
        </Toolbar>
      </PageSection>
      <PageSection>{searchTabs}</PageSection>{' '}
    </>
  );
};

export { SearchPage };
