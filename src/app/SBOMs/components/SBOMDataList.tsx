import React, { Fragment } from 'react';

import {
  Content,
  DataList,
  DataListAction,
  DataListCell,
  DataListItem,
  DataListItemCells,
  DataListItemRow,
  Dropdown,
  DropdownItem,
  DropdownList,
  Flex,
  FlexItem,
  Label,
  LabelGroup,
  MenuToggle,
  MenuToggleElement,
  Tooltip,
} from '@patternfly/react-core';
import {
  BuildingIcon,
  EllipsisVIcon,
  EnvelopeIcon,
  PackageIcon,
  SeverityCriticalIcon,
  SeverityImportantIcon,
  SeverityMinorIcon,
  SeverityModerateIcon,
  SeverityNoneIcon,
  SeverityUndefinedIcon,
} from '@patternfly/react-icons';

export const SBOMDataList = () => {
  const getVulnerabilityCell = (vendorName: string) => {
    return (
      <Flex direction={{ default: 'column' }}>
        <FlexItem>
          <Flex spaceItems={{ default: 'spaceItemsSm' }}>
            <FlexItem>
              <BuildingIcon /> {vendorName} (16)
            </FlexItem>
          </Flex>
        </FlexItem>
        <FlexItem>
          <Flex direction={{ default: 'row' }} gap={{ default: 'gapSm' }}>
            <FlexItem>
              <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                <Tooltip content={<div>Critical</div>}>
                  <FlexItem>
                    <SeverityCriticalIcon color="var(--pf-t--global--icon--color--severity--critical--default)" /> 7
                  </FlexItem>
                </Tooltip>
              </Flex>
            </FlexItem>
            <FlexItem>
              <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                <Tooltip content={<div>High</div>}>
                  <FlexItem>
                    <SeverityImportantIcon color="var(--pf-t--global--icon--color--severity--important--default)" /> 5
                  </FlexItem>
                </Tooltip>
              </Flex>
            </FlexItem>
            <FlexItem>
              <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                <Tooltip content={<div>Medium</div>}>
                  <FlexItem>
                    <SeverityModerateIcon color="var(--pf-t--global--icon--color--severity--moderate--default)" /> 1
                  </FlexItem>
                </Tooltip>
              </Flex>
            </FlexItem>
          </Flex>
        </FlexItem>
        <FlexItem>
          <Flex direction={{ default: 'row' }} gap={{ default: 'gapSm' }}>
            <FlexItem>
              <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                <Tooltip content={<div>Low</div>}>
                  <FlexItem>
                    <SeverityMinorIcon color="var(--pf-t--global--icon--color--severity--minor--default)" /> 1
                  </FlexItem>
                </Tooltip>
              </Flex>
            </FlexItem>
            <FlexItem>
              <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                <Tooltip content={<div>None</div>}>
                  <FlexItem>
                    <SeverityNoneIcon color="var(--pf-t--global--icon--color--severity--none--default)" /> 1
                  </FlexItem>
                </Tooltip>
              </Flex>
            </FlexItem>
            <FlexItem>
              <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                <Tooltip content={<div>Unknown</div>}>
                  <FlexItem>
                    <SeverityUndefinedIcon color="var(--pf-t--global--icon--color--severity--undefined--default)" /> 1
                  </FlexItem>
                </Tooltip>
              </Flex>
            </FlexItem>
          </Flex>
        </FlexItem>
      </Flex>
    );
  };

  const getRow = (id: string) => {
    return (
      <DataListItem id={id} aria-labelledby="Demo-item1">
        <DataListItemRow>
          <DataListItemCells
            dataListCells={[
              <DataListCell key="info" isFilled={true} width={3}>
                <Flex direction={{ default: 'column' }}>
                  <FlexItem>
                    <Content component="a">quarkus-bom</Content>
                  </FlexItem>
                  <FlexItem>
                    <Content component="p">2.13.8.Final-redhat-00004</Content>
                  </FlexItem>
                  <FlexItem>
                    <Content component="p">Nov 22, 2023</Content>
                  </FlexItem>
                </Flex>
              </DataListCell>,
              <DataListCell key="licenses">
                <LabelGroup categoryName="">
                  {['Label1', 'Label2', 'Label3', 'Label4', 'Label5'].map((e) => (
                    <Label key={e} isCompact color="blue" variant="filled">
                      {e}
                    </Label>
                  ))}
                </LabelGroup>
              </DataListCell>,
              <DataListCell key="licenses">
                <Flex direction={{ default: 'column' }}>
                  <FlexItem>
                    <Content component="p">
                      <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                        <Tooltip content={<div>Licenses</div>}>
                          <FlexItem>
                            <EnvelopeIcon /> 321
                          </FlexItem>
                        </Tooltip>
                      </Flex>
                    </Content>
                  </FlexItem>
                  <FlexItem>
                    {['Apache-2.0', 'EPL-2.0', 'MIT', 'others'].map((e) => (
                      <Label key={e} isCompact color="blue" variant="outline">
                        {e}
                      </Label>
                    ))}
                  </FlexItem>
                </Flex>
              </DataListCell>,
              <DataListCell key="packages">
                <Flex direction={{ default: 'column' }}>
                  <FlexItem>
                    <Content component="p">
                      <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                        <Tooltip content={<div>Packages</div>}>
                          <FlexItem>
                            <PackageIcon /> 123
                          </FlexItem>
                        </Tooltip>
                      </Flex>
                    </Content>
                  </FlexItem>
                  <FlexItem>
                    {['npm', 'maven', 'others'].map((e) => (
                      <Label key={e} isCompact color="purple" variant="outline">
                        {e}
                      </Label>
                    ))}
                  </FlexItem>
                </Flex>
              </DataListCell>,
              <DataListCell key="vendor1-vulnerabilities" isFilled={false} alignRight>
                {getVulnerabilityCell('Vendor1')}
              </DataListCell>,
              <DataListCell key="vendor2-vulnerabilities" isFilled={false} alignRight>
                {getVulnerabilityCell('Vendor2')}
              </DataListCell>,
              <DataListCell key="all-vulnerabilities" isFilled={false} alignRight>
                {getVulnerabilityCell('All')}
              </DataListCell>,
            ]}
          />
          {action}
        </DataListItemRow>
      </DataListItem>
    );
  };

  const action = (
    <DataListAction id="actions" aria-label="Actions" aria-labelledby="actions">
      <Dropdown
        popperProps={{ position: 'right' }}
        onSelect={() => {}}
        toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
          <MenuToggle
            ref={toggleRef}
            isExpanded={false}
            onClick={() => {}}
            variant="plain"
            aria-label="Data list with checkboxes, actions and additional cells example kebab toggle 2"
            icon={<EllipsisVIcon />}
          />
        )}
        isOpen={false}
        onOpenChange={() => {}}
      >
        <DropdownList>
          <DropdownItem>Action1</DropdownItem>
          <DropdownItem>Action2</DropdownItem>
        </DropdownList>
      </Dropdown>
    </DataListAction>
  );

  return (
    <Fragment>
      <DataList aria-label="Demo data list">
        {getRow('row-1')}
        {getRow('row-2')}
        {getRow('row-3')}
        {getRow('row-4')}
        {getRow('row-5')}
      </DataList>
    </Fragment>
  );
};
