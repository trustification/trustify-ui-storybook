import * as React from 'react';
import {
  CheckCircleIcon,
  CodeBranchIcon,
  CodeIcon,
  CubeIcon,
  CubesIcon,
  EllipsisVIcon,
  ExclamationTriangleIcon,
  FilterIcon,
  SearchIcon,
  TimesCircleIcon,
} from '@patternfly/react-icons';
import {
  Badge,
  Button,
  ButtonVariant,
  Content,
  ContentVariants,
  DataList,
  DataListAction,
  DataListCell,
  DataListItem,
  DataListItemCells,
  DataListItemRow,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownList,
  Flex,
  FlexItem,
  InputGroup,
  InputGroupItem,
  MenuToggle,
  MenuToggleCheckbox,
  PageSection,
  Pagination,
  Select,
  SelectList,
  SelectOption,
  SelectOptionProps,
  Stack,
  StackItem,
  TextInput,
  Toolbar,
  ToolbarContent,
  ToolbarFilter,
  ToolbarGroup,
  ToolbarItem,
  ToolbarToggleGroup,
} from '@patternfly/react-core';
import { Fragment, useState } from 'react';

export interface ISBOMsPageProps {
  sampleProp?: string;
}

interface SelectOptionType extends Omit<SelectOptionProps, 'children'> {
  label: string;
}

const statusOptions: SelectOptionType[] = [
  { value: 'New', label: 'New' },
  { value: 'Pending', label: 'Pending' },
  { value: 'Running', label: 'Running' },
  { value: 'Cancelled', label: 'Cancelled' },
];

const riskOptions: SelectOptionType[] = [
  { value: 'Low', label: 'Low' },
  { value: 'Medium', label: 'Medium' },
  { value: 'High', label: 'High' },
];

const SBOMsPage = ({}: ISBOMsPageProps) => {
  const [filters, setFilters] = useState<Record<string, string[]>>({ products: [] });
  const [inputValue, setInputValue] = useState('');
  const [isLowerToolbarDropdownOpen, setIsLowerToolbarDropdownOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [riskIsOpen, setRiskIsOpen] = useState(false);
  const [riskSelected, setRiskSelected] = useState<string | number | undefined>('Risk');
  const [selectedDataListItemId, setSelectedDataListItemId] = useState('');
  const [state, setState] = useState({});
  const [statusIsOpen, setStatusIsOpen] = useState(false);
  const [statusSelected, setStatusSelected] = useState<string | number | undefined>('Status');
  const [totalItemCount, setTotalItemCount] = useState(10);

  const buildFilterDropdown = () => {
    const filterDropdownItems = (
      <SelectList>
        <SelectOption
          hasCheckbox
          key="patternfly"
          value="PatternFly"
          isSelected={filters.products.includes('PatternFly')}
        >
          PatternFly
        </SelectOption>
        <SelectOption hasCheckbox key="activemq" value="ActiveMQ" isSelected={filters.products.includes('ActiveMQ')}>
          ActiveMQ
        </SelectOption>
        <SelectOption
          hasCheckbox
          key="apachespark"
          value="Apache Spark"
          isSelected={filters.products.includes('Apache Spark')}
        >
          Apache Spark
        </SelectOption>
        <SelectOption hasCheckbox key="avro" value="Avro" isSelected={filters.products.includes('Avro')}>
          Avro
        </SelectOption>
        <SelectOption
          hasCheckbox
          key="azureservices"
          value="Azure Services"
          isSelected={filters.products.includes('Azure Services')}
        >
          Azure Services
        </SelectOption>
        <SelectOption hasCheckbox key="crypto" value="Crypto" isSelected={filters.products.includes('Crypto')}>
          Crypto
        </SelectOption>
        <SelectOption hasCheckbox key="dropbox" value="DropBox" isSelected={filters.products.includes('DropBox')}>
          DropBox
        </SelectOption>
        <SelectOption
          hasCheckbox
          key="jbossdatagrid"
          value="JBoss Data Grid"
          isSelected={filters.products.includes('JBoss Data Grid')}
        >
          JBoss Data Grid
        </SelectOption>
        <SelectOption hasCheckbox key="rest" value="REST" isSelected={filters.products.includes('REST')}>
          REST
        </SelectOption>
        <SelectOption hasCheckbox key="swagger" value="SWAGGER" isSelected={filters.products.includes('SWAGGER')}>
          SWAGGER
        </SelectOption>
      </SelectList>
    );

    return (
      <ToolbarFilter categoryName="Products" labels={filters.products}>
        <Select
          aria-label="Products"
          role="menu"
          toggle={(toggleRef) => (
            <MenuToggle ref={toggleRef} onClick={onToolbarDropdownToggle} isExpanded={isLowerToolbarDropdownOpen}>
              Filter by creator name
              {filters.products.length > 0 && <Badge isRead>{filters.products.length}</Badge>}
            </MenuToggle>
          )}
          onSelect={(event, selection) => onNameSelect(event, selection?.toString())}
          onOpenChange={(isOpen) => {
            setIsLowerToolbarDropdownOpen(isOpen);
          }}
          selected={filters.products}
          isOpen={isLowerToolbarDropdownOpen}
        >
          {filterDropdownItems}
        </Select>
      </ToolbarFilter>
    );
  };

  const onStatusSelect = (_event: React.MouseEvent<Element> | undefined, value: string | number | undefined) => {
    setStatusSelected(value);
    setStatusIsOpen(false);
  };

  const onRiskSelect = (_event: React.MouseEvent<Element> | undefined, value: string | number | undefined) => {
    setRiskSelected(value);
    setRiskIsOpen(false);
  };

  const onPerPageSelect = (_event: any, perPage: number) => {
    setPerPage(perPage);
    setPage(1);
  };

  const onSetPage = (_event: any, pageNumber: number) => {
    setPage(pageNumber);
  };

  const onToolbarDropdownToggle = () => {
    setIsLowerToolbarDropdownOpen(!isLowerToolbarDropdownOpen);
  };

  const renderPagination = () => {
    const defaultPerPageOptions = [
      {
        title: '1',
        value: 1,
      },
      {
        title: '5',
        value: 5,
      },
      {
        title: '10',
        value: 10,
      },
    ];

    return (
      <Pagination
        itemCount={totalItemCount}
        page={page}
        perPage={perPage}
        perPageOptions={defaultPerPageOptions}
        onSetPage={onSetPage}
        onPerPageSelect={onPerPageSelect}
        variant="top"
        isCompact
      />
    );
  };

  const toolbarItems = (
    <Fragment>
      <ToolbarItem>{buildFilterDropdown()}</ToolbarItem>
      <ToolbarItem>
        <InputGroup>
          <InputGroupItem isFill>
            <TextInput
              name="content-padding-data-toolbar-input1"
              id="content-padding-data-toolbar-input1"
              type="search"
              aria-label="search input example"
              onChange={(_event: React.FormEvent<HTMLInputElement>, value: string) => setInputValue(value)}
              value={inputValue}
            />
          </InputGroupItem>
          <InputGroupItem>
            <Button variant={ButtonVariant.control} aria-label="search button for search input" icon={<SearchIcon />} />
          </InputGroupItem>
        </InputGroup>
      </ToolbarItem>
      <ToolbarItem variant="pagination" align={{ default: 'alignEnd' }}>
        {renderPagination()}
      </ToolbarItem>
    </Fragment>
  );

  return (
    <>
      <PageSection isFilled padding={{ default: 'noPadding' }}>
        <Toolbar id="card-view-data-toolbar-group-types">
          <ToolbarContent>{toolbarItems}</ToolbarContent>
        </Toolbar>
        <Divider component="div" />
      </PageSection>
      <PageSection hasBodyWrapper={false}>
        <DataList aria-label="data list">
          <DataListItem id="content-padding-item1">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary-content">
                    <Flex spaceItems={{ default: 'spaceItemsMd' }} direction={{ default: 'column' }}>
                      <FlexItem>
                        <p>amq-streams/kafka-36-rhel9</p>
                      </FlexItem>
                      <Flex spaceItems={{ default: 'spaceItemsMd' }}>
                        <FlexItem>
                          <CodeBranchIcon /> 10
                        </FlexItem>
                        <FlexItem>
                          <CodeIcon /> 4
                        </FlexItem>
                        <FlexItem>
                          <CubeIcon /> 5
                        </FlexItem>
                        <FlexItem>Updated 2 days ago</FlexItem>
                      </Flex>
                    </Flex>
                  </DataListCell>,
                  <DataListAction
                    key="actions"
                    aria-labelledby="content-padding-item1 content-padding-action1"
                    id="content-padding-action1"
                    aria-label="Actions"
                  >
                    <Stack>
                      <StackItem>
                        <Button variant={ButtonVariant.secondary}>Secondary</Button>
                      </StackItem>
                      <StackItem>
                        <Button variant={ButtonVariant.link}>Link Button</Button>
                      </StackItem>
                    </Stack>
                  </DataListAction>,
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem id="content-padding-item2">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary-content">
                    <Flex spaceItems={{ default: 'spaceItemsMd' }} direction={{ default: 'column' }}>
                      <FlexItem>
                        <p>amq-streams/kafka-37-rhel9</p>
                      </FlexItem>
                      <Flex spaceItems={{ default: 'spaceItemsMd' }}>
                        <FlexItem>
                          <CodeBranchIcon /> 10
                        </FlexItem>
                        <FlexItem>
                          <CodeIcon /> 4
                        </FlexItem>
                        <FlexItem>
                          <CubeIcon /> 5
                        </FlexItem>
                        <FlexItem>
                          <CheckCircleIcon /> 7
                        </FlexItem>
                        <FlexItem>
                          <ExclamationTriangleIcon /> 5
                        </FlexItem>
                        <FlexItem>
                          <TimesCircleIcon /> 5
                        </FlexItem>
                        <FlexItem>Updated 2 days ago</FlexItem>
                      </Flex>
                    </Flex>
                  </DataListCell>,
                  <DataListAction
                    key="actions"
                    aria-labelledby="content-padding-item2 content-padding-action2"
                    id="content-padding-action2"
                    aria-label="Actions"
                  >
                    <Stack>
                      <StackItem>
                        <Button variant={ButtonVariant.secondary}>Secondary</Button>
                      </StackItem>
                      <StackItem>
                        <Button variant={ButtonVariant.link}>Link Button</Button>
                      </StackItem>
                    </Stack>
                  </DataListAction>,
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem id="content-padding-item3">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary-content">
                    <Flex spaceItems={{ default: 'spaceItemsMd' }} direction={{ default: 'column' }}>
                      <FlexItem>
                        <p>artemis-project</p>
                      </FlexItem>
                      <Flex spaceItems={{ default: 'spaceItemsMd' }}>
                        <FlexItem>
                          <CodeBranchIcon /> 10
                        </FlexItem>
                        <FlexItem>
                          <CodeIcon /> 4
                        </FlexItem>
                        <FlexItem>
                          <CubeIcon /> 5
                        </FlexItem>
                        <FlexItem>Updated 2 days ago</FlexItem>
                      </Flex>
                    </Flex>
                  </DataListCell>,
                  <DataListAction
                    key="actions"
                    aria-labelledby="content-padding-item3 content-padding-action3"
                    id="content-padding-action3"
                    aria-label="Actions"
                  >
                    <Stack>
                      <StackItem>
                        <Button variant={ButtonVariant.secondary}>Secondary</Button>
                      </StackItem>
                      <StackItem>
                        <Button variant={ButtonVariant.link}>Link Button</Button>
                      </StackItem>
                    </Stack>
                  </DataListAction>,
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem id="content-padding-item4">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary-content">
                    <Flex spaceItems={{ default: 'spaceItemsMd' }} direction={{ default: 'column' }}>
                      <FlexItem>
                        <p>azure-sdk-all</p>
                      </FlexItem>
                      <Flex spaceItems={{ default: 'spaceItemsMd' }}>
                        <FlexItem>
                          <CodeBranchIcon /> 10
                        </FlexItem>
                        <FlexItem>
                          <CodeIcon /> 4
                        </FlexItem>
                        <FlexItem>
                          <CubeIcon /> 5
                        </FlexItem>
                        <FlexItem>
                          <CheckCircleIcon /> 7
                        </FlexItem>
                        <FlexItem>
                          <ExclamationTriangleIcon /> 5
                        </FlexItem>
                        <FlexItem>
                          <TimesCircleIcon /> 5
                        </FlexItem>
                        <FlexItem>Updated 2 days ago</FlexItem>
                      </Flex>
                    </Flex>
                  </DataListCell>,
                  <DataListAction
                    key="actions"
                    aria-labelledby="content-padding-item4 content-padding-action4"
                    id="content-padding-action4"
                    aria-label="Actions"
                  >
                    <Stack>
                      <StackItem>
                        <Button variant={ButtonVariant.secondary}>Secondary</Button>
                      </StackItem>
                      <StackItem>
                        <Button variant={ButtonVariant.link}>Link Button</Button>
                      </StackItem>
                    </Stack>
                  </DataListAction>,
                ]}
              />
            </DataListItemRow>
          </DataListItem>
        </DataList>
      </PageSection>
    </>
  );
};

export { SBOMsPage };
