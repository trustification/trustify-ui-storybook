import React from 'react';

import {
  Button,
  Content,
  MenuToggle,
  MenuToggleElement,
  PageSection,
  Pagination,
  PaginationVariant,
  SearchInput,
  Select,
  SelectList,
  SelectOption,
  TextInputGroup,
  TextInputGroupMain,
  TextInputGroupUtilities,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  ToolbarToggleGroup,
} from '@patternfly/react-core';
import { FilterIcon, TimesIcon, SortAmountUpIcon } from '@patternfly/react-icons';

import { SBOMDataList } from './components/SBOMDataList';

export interface ISBOMsPageProps {
  sampleProp?: string;
}

const SBOMsPage = ({}: ISBOMsPageProps) => {
  const [isLicenseOpen, setIsLicenseOpen] = React.useState(false);
  const [selectedLicense, setSelectedLicense] = React.useState('');
  const [licenseInputValue, setLicenseInputValue] = React.useState<string>('');

  const [isPackageOpen, setIsPackageOpen] = React.useState(false);
  const [selectedPackage, setSelectedPackage] = React.useState('');
  const [packageInputValue, setPackageInputValue] = React.useState<string>('');

  const [isSeverityOpen, setIsSeverityOpen] = React.useState(false);
  const [selectedSeverity, setSelectedSeverity] = React.useState([]);
  const [severityInputValue, setSeverityInputValue] = React.useState<string>('');

  const [isVendorOpen, setIsVendorOpen] = React.useState(false);
  const [selectedVendor, setSelectedVendor] = React.useState([]);
  const [vendorInputValue, setVendorInputValue] = React.useState<string>('');

  const [sortByIsExpanded, setSortByIsExpanded] = React.useState(false);
  const [sortBySelected, setSortBySelected] = React.useState('');

  return (
    <>
      <PageSection>
        <Content>
          <h1>SBOMs</h1>
          <p>All your Software Bill of Matterials.</p>
        </Content>
        <Toolbar id="attribute-search-filter-toolbar">
          <ToolbarContent></ToolbarContent>
        </Toolbar>
      </PageSection>
      <PageSection variant="default">
        <Toolbar id="toolbar-group-types">
          <ToolbarContent>
            <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">
              <ToolbarItem>
                <SearchInput />
              </ToolbarItem>
              <ToolbarGroup variant="filter-group">
                <ToolbarItem style={{ width: 140 }}>
                  <Select
                    isOpen={isLicenseOpen}
                    selected={selectedLicense}
                    onSelect={(_e, value) => {
                      if (value) {
                        setSelectedLicense(value as string);
                        setLicenseInputValue(value as string);
                        setIsLicenseOpen(false);
                      }
                    }}
                    onOpenChange={(isOpen) => {
                      if (!isOpen) {
                        setIsLicenseOpen(false);
                      }
                    }}
                    toggle={(toggleRef) => {
                      return (
                        <MenuToggle
                          ref={toggleRef}
                          variant="typeahead"
                          onClick={() => {
                            setIsLicenseOpen(!isLicenseOpen);
                          }}
                          isExpanded={isLicenseOpen}
                          isFullWidth
                        >
                          <TextInputGroup isPlain>
                            <TextInputGroupMain
                              value={licenseInputValue}
                              onClick={() => {
                                if (!isLicenseOpen) {
                                  setIsLicenseOpen(true);
                                } else {
                                  setIsLicenseOpen(false);
                                }
                              }}
                              onChange={(_e, value) => {
                                setLicenseInputValue(value);
                              }}
                              placeholder="License"
                              isExpanded={isLicenseOpen}
                            />
                            <TextInputGroupUtilities {...(!licenseInputValue ? { style: { display: 'none' } } : {})}>
                              <Button
                                variant="plain"
                                onClick={() => {
                                  setSelectedLicense('');
                                  setLicenseInputValue('');
                                }}
                                aria-label="Clear input value"
                                icon={<TimesIcon />}
                              />
                            </TextInputGroupUtilities>
                          </TextInputGroup>
                        </MenuToggle>
                      );
                    }}
                    variant="typeahead"
                  >
                    <SelectList>
                      {['Apache-2.0', 'EPL-2.0', 'MIT'].map((option) => (
                        <SelectOption key={option} value={option}>
                          {option}
                        </SelectOption>
                      ))}
                    </SelectList>
                  </Select>
                </ToolbarItem>
                <ToolbarItem style={{ width: 140 }}>
                  <Select
                    isOpen={isPackageOpen}
                    selected={selectedPackage}
                    onSelect={(_e, value) => {
                      if (value) {
                        setSelectedPackage(value as string);
                        setPackageInputValue(value as string);
                        setIsPackageOpen(false);
                      }
                    }}
                    onOpenChange={(isOpen) => {
                      if (!isOpen) {
                        setIsPackageOpen(false);
                      }
                    }}
                    toggle={(toggleRef) => {
                      return (
                        <MenuToggle
                          ref={toggleRef}
                          variant="typeahead"
                          onClick={() => {
                            setIsPackageOpen(!isPackageOpen);
                          }}
                          isExpanded={isPackageOpen}
                          isFullWidth
                        >
                          <TextInputGroup isPlain>
                            <TextInputGroupMain
                              value={packageInputValue}
                              onClick={() => {
                                if (!isPackageOpen) {
                                  setIsPackageOpen(true);
                                } else {
                                  setIsPackageOpen(false);
                                }
                              }}
                              onChange={(_e, value) => {
                                setPackageInputValue(value);
                              }}
                              placeholder="Package"
                              isExpanded={isPackageOpen}
                            />
                            <TextInputGroupUtilities {...(!packageInputValue ? { style: { display: 'none' } } : {})}>
                              <Button
                                variant="plain"
                                onClick={() => {
                                  setSelectedPackage('');
                                  setPackageInputValue('');
                                }}
                                aria-label="Clear input value"
                                icon={<TimesIcon />}
                              />
                            </TextInputGroupUtilities>
                          </TextInputGroup>
                        </MenuToggle>
                      );
                    }}
                    variant="typeahead"
                  >
                    <SelectList>
                      {['Package1', 'Package2', 'Package3'].map((option) => (
                        <SelectOption key={option} value={option}>
                          {option}
                        </SelectOption>
                      ))}
                    </SelectList>
                  </Select>
                </ToolbarItem>
              </ToolbarGroup>
              <ToolbarGroup variant="filter-group">
                <ToolbarItem style={{ width: 140 }}>
                  <Select
                    isOpen={isSeverityOpen}
                    selected={selectedSeverity}
                    onSelect={(_e, value) => {
                      console.log(value);
                    }}
                    onOpenChange={(isOpen) => {
                      if (!isOpen) {
                        setIsSeverityOpen(false);
                      }
                    }}
                    toggle={(toggleRef) => {
                      return (
                        <MenuToggle
                          ref={toggleRef}
                          variant="typeahead"
                          onClick={() => {
                            setIsSeverityOpen(!isSeverityOpen);
                          }}
                          isExpanded={isSeverityOpen}
                          isFullWidth
                        >
                          <TextInputGroup isPlain>
                            <TextInputGroupMain
                              value={severityInputValue}
                              onClick={() => {
                                if (!isSeverityOpen) {
                                  setIsSeverityOpen(true);
                                } else {
                                  setIsSeverityOpen(false);
                                }
                              }}
                              onChange={(_e, value) => {
                                setSeverityInputValue(value);
                              }}
                              placeholder="Severity"
                              isExpanded={isSeverityOpen}
                            />
                            <TextInputGroupUtilities {...(!severityInputValue ? { style: { display: 'none' } } : {})}>
                              <Button
                                variant="plain"
                                onClick={() => {
                                  setSelectedSeverity([]);
                                  setSeverityInputValue('');
                                }}
                                aria-label="Clear input value"
                                icon={<TimesIcon />}
                              />
                            </TextInputGroupUtilities>
                          </TextInputGroup>
                        </MenuToggle>
                      );
                    }}
                    variant="typeahead"
                  >
                    <SelectList>
                      {['Critical', 'High', 'Medium', 'Low', 'None', 'Unknown'].map((option) => (
                        <SelectOption key={option} value={option} isSelected={true} hasCheckbox>
                          {option}
                        </SelectOption>
                      ))}
                    </SelectList>
                  </Select>
                </ToolbarItem>
                <ToolbarItem style={{ width: 140 }}>
                  <Select
                    isOpen={isVendorOpen}
                    selected={selectedVendor}
                    onSelect={(_e, value) => {
                      console.log(value);
                    }}
                    onOpenChange={(isOpen) => {
                      if (!isOpen) {
                        setIsVendorOpen(false);
                      }
                    }}
                    toggle={(toggleRef) => {
                      return (
                        <MenuToggle
                          ref={toggleRef}
                          variant="typeahead"
                          onClick={() => {
                            setIsVendorOpen(!isVendorOpen);
                          }}
                          isExpanded={isVendorOpen}
                          isFullWidth
                        >
                          <TextInputGroup isPlain>
                            <TextInputGroupMain
                              value={vendorInputValue}
                              onClick={() => {
                                if (!isVendorOpen) {
                                  setIsVendorOpen(true);
                                } else {
                                  setIsVendorOpen(false);
                                }
                              }}
                              onChange={(_e, value) => {
                                setVendorInputValue(value);
                              }}
                              placeholder="Vendor"
                              isExpanded={isVendorOpen}
                            />
                            <TextInputGroupUtilities {...(!vendorInputValue ? { style: { display: 'none' } } : {})}>
                              <Button
                                variant="plain"
                                onClick={() => {
                                  setSelectedVendor([]);
                                  setVendorInputValue('');
                                }}
                                aria-label="Clear input value"
                                icon={<TimesIcon />}
                              />
                            </TextInputGroupUtilities>
                          </TextInputGroup>
                        </MenuToggle>
                      );
                    }}
                    variant="typeahead"
                  >
                    <SelectList>
                      {['Vendor1', 'Vendor2'].map((option) => (
                        <SelectOption key={option} value={option} isSelected={true} hasCheckbox>
                          {option}
                        </SelectOption>
                      ))}
                    </SelectList>
                  </Select>
                </ToolbarItem>
              </ToolbarGroup>
              <ToolbarGroup variant="action-group">
                <SortAmountUpIcon />
                <Select
                  toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                    <MenuToggle
                      ref={toggleRef}
                      onClick={() => setSortByIsExpanded(!sortByIsExpanded)}
                      isExpanded={sortByIsExpanded}
                    >
                      {sortBySelected || 'SortBy'}
                    </MenuToggle>
                  )}
                  onSelect={(_e, selection) => {
                    setSortBySelected(selection as string);
                    setSortByIsExpanded(false);
                  }}
                  onOpenChange={(isOpen) => setSortByIsExpanded(isOpen)}
                  selected={sortBySelected}
                  isOpen={sortByIsExpanded}
                >
                  <SelectList>
                    <SelectOption value="Name">Name</SelectOption>
                    <SelectOption value="Creation date">Creation date</SelectOption>
                    <SelectOption value="License count">License count</SelectOption>
                    <SelectOption value="Package count">Package count</SelectOption>
                    <SelectOption value="Vulnerability count - Vendor1">Vulnerability count - Vendor1</SelectOption>
                    <SelectOption value="Vulnerability count - Vendor2">Vulnerability count - Vendor2</SelectOption>
                  </SelectList>
                </Select>
              </ToolbarGroup>
            </ToolbarToggleGroup>
            <ToolbarGroup align={{ default: 'alignEnd' }}>
              <ToolbarItem variant="pagination">
                <Pagination
                  itemCount={333}
                  widgetId="bottom-example"
                  perPage={10}
                  page={1}
                  variant={PaginationVariant.top}
                  onSetPage={() => {}}
                  onPerPageSelect={() => {}}
                />
              </ToolbarItem>
            </ToolbarGroup>
          </ToolbarContent>
        </Toolbar>
        <SBOMDataList />
        <Pagination
          itemCount={333}
          widgetId="bottom-example"
          perPage={10}
          page={1}
          variant={PaginationVariant.bottom}
          onSetPage={() => {}}
          onPerPageSelect={() => {}}
        />
      </PageSection>
    </>
  );
};

export { SBOMsPage };
