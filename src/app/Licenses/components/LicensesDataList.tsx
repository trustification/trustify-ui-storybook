import { Fragment, useState } from 'react';

import {
  DataList,
  DataListItem,
  DataListItemRow,
  DataListCell,
  DataListToggle,
  DataListContent,
  DataListItemCells,
} from '@patternfly/react-core';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import { licenses } from '../Licenses.data';

type Filters = {
  licenses: string[];
  status: string[];
  cvss: string[];
  products: string[];
  suppliers: string[];
  packages: string[];
};

const LicensesDataList = ({ search, filters }: { search: string; filters: Filters }) => {
  const [expanded, setExpanded] = useState(['toggle-0']);

  const toggle = (id) => {
    const index = expanded.indexOf(id);
    const newExpanded =
      index >= 0 ? [...expanded.slice(0, index), ...expanded.slice(index + 1, expanded.length)] : [...expanded, id];
    setExpanded(newExpanded);
  };

  return (
    <Fragment>
      <DataList aria-label="Licenses Data">
        {licenses
          .filter((license) => {
            const matchesSearch = license.license.toLowerCase().includes(search.toLowerCase());

            const matchesFilters = Object.entries(filters).every(([key, selected]) => {
              const selections = selected as string[];
              if (!selections.length) return true;

              switch (key) {
                case 'licenses':
                  return selections.includes(license.license);
                case 'cvss':
                  return license.productVersions.some((v) => {
                    const vuln = v.vulnerabilities?.find((vuln) => vuln?.severity);
                    if (!vuln?.severity) return false;
                    const formatted = vuln.severity[0].toUpperCase() + vuln.severity.slice(1);
                    return selections.includes(formatted);
                  });
                case 'products':
                  return selections.some((sel) => license.productName.includes(sel));
                case 'suppliers':
                  return selections.includes(license.productName.split('(')[1]?.replace(')', '').trim());
                case 'packages':
                  return license.productVersions.some((v) => {
                    const count = v.packages;
                    return selections.some((sel) => {
                      if (sel === '>50') return count > 50;
                      if (sel === '10-50') return count >= 10 && count <= 50;
                      if (sel === '<10') return count < 10;
                      return false;
                    });
                  });
                default:
                  return true;
              }
            });

            return matchesSearch && matchesFilters;
          })
          .map((license, idx) => {
            return (
              <DataListItem aria-labelledby={license.license} isExpanded={expanded.includes(`toggle-${idx}`)}>
                <DataListItemRow>
                  <DataListToggle
                    onClick={() => toggle(`toggle-${idx}`)}
                    isExpanded={expanded.includes(`toddle-${idx}`)}
                    id={`toggle-${idx}`}
                    aria-controls={`expand-${idx}`}
                  />
                  <DataListItemCells
                    dataListCells={[
                      <DataListCell isIcon key="icon">
                        <CodeBranchIcon />
                      </DataListCell>,
                      <DataListCell key="license">
                        <a href="#">{license.license}</a>
                      </DataListCell>,
                      <DataListCell key="product name">
                        <span>{license.productName}</span>
                      </DataListCell>,
                      <DataListCell key="secondary content 2">
                        {license.productVersions.map((version) => {
                          return (
                            <>
                              <span>Version: {version.version}</span>
                              <br />
                            </>
                          );
                        })}
                      </DataListCell>,
                    ]}
                  />
                </DataListItemRow>
                <DataListContent
                  aria-label={'Expanded content'}
                  id={`expand-${idx}`}
                  isHidden={!expanded.includes(`toggle-${idx}`)}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </DataListContent>
              </DataListItem>
            );
          })}
      </DataList>
    </Fragment>
  );
};

export { LicensesDataList };
