import React, { Fragment, useState } from 'react';

import {
  Content,
  MenuToggle,
  MenuToggleElement,
  PageSection,
  SearchInput,
  Select,
  SelectList,
  SelectOption,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  ToolbarToggleGroup,
} from '@patternfly/react-core';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import { LicensesDataList } from './components/LicensesDataList';

const LicensesPage = () => {
  const [typeIsExpanded, setTypeIsExpanded] = useState(false);
  const [typeSelected, setTypeSelected] = useState('');

  const [statusIsExpanded, setStatusIsExpanded] = useState(false);
  const [statusSelected, setStatusSelected] = useState('');

  return (
    <Fragment>
      <PageSection variant="default">
        <Content>
          <h1>Licenses</h1>
        </Content>
      </PageSection>
      <PageSection variant="default">
        <Toolbar id="toolbar-group-types">
          <ToolbarContent>
            <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">
              <ToolbarItem>
                <SearchInput />
              </ToolbarItem>
              <ToolbarGroup variant="filter-group">
                <ToolbarItem>
                  <Select
                    toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                      <MenuToggle
                        ref={toggleRef}
                        onClick={() => setTypeIsExpanded(!typeIsExpanded)}
                        isExpanded={typeIsExpanded}
                      >
                        {typeSelected || 'Type'}
                      </MenuToggle>
                    )}
                    onSelect={(_e, selection) => {
                      setTypeSelected(selection as string);
                      setTypeIsExpanded(false);
                    }}
                    onOpenChange={(isOpen) => setTypeIsExpanded(isOpen)}
                    selected={typeSelected}
                    isOpen={typeIsExpanded}
                  >
                    <SelectList>
                      <SelectOption value="SBOM">SBOM</SelectOption>
                      <SelectOption value="Advisory">Advisory</SelectOption>
                      <SelectOption value="License">License</SelectOption>
                    </SelectList>
                  </Select>
                </ToolbarItem>
                <ToolbarItem>
                  <Select
                    toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                      <MenuToggle
                        ref={toggleRef}
                        onClick={() => setStatusIsExpanded(!statusIsExpanded)}
                        isExpanded={statusIsExpanded}
                      >
                        {statusSelected || 'Status'}
                      </MenuToggle>
                    )}
                    onSelect={(_e, selection) => {
                      setStatusSelected(selection as string);
                      setStatusIsExpanded(false);
                    }}
                    onOpenChange={(isOpen) => setStatusIsExpanded(isOpen)}
                    selected={statusSelected}
                    isOpen={statusIsExpanded}
                  >
                    <SelectList>
                      <SelectOption value="Scheduled">Scheduled</SelectOption>
                      <SelectOption value="Running">Running</SelectOption>
                      <SelectOption value="Disabled">Disabled</SelectOption>
                    </SelectList>
                  </Select>
                </ToolbarItem>
              </ToolbarGroup>
            </ToolbarToggleGroup>
          </ToolbarContent>
        </Toolbar>
        <LicensesDataList />
      </PageSection>
    </Fragment>
  );
};

export { LicensesPage };
