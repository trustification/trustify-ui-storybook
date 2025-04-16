import {
  Card,
  CardBody,
  Content,
  PageSection,
  Split,
  SplitItem,
  Tab,
  TabTitleText,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
} from '@patternfly/react-core';
import { useState } from 'react';

const SearchPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeTabKey, setActiveTabKey] = useState<string | number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isBox, setIsBox] = useState<boolean>(false);

  // Toggle currently active tab
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleTabClick = (
    _event: React.MouseEvent<unknown> | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number,
  ) => {
    setActiveTabKey(tabIndex);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
