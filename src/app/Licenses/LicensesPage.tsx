import { Fragment, useReducer, useState } from 'react';

import {
  Content,
  MenuToggle,
  PageSection,
  SearchInput,
  Select,
  SelectList,
  SelectOption,
  Toolbar,
  ToolbarContent,
  ToolbarFilter,
  ToolbarGroup,
  ToolbarItem,
  ToolbarToggleGroup,
} from '@patternfly/react-core';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import { LicensesDataList } from './components/LicensesDataList';

const initialState = {
  type: { isExpanded: false, selected: '' },
  cvss: { isExpanded: false },
  products: { isExpanded: false },
  packages: { isExpanded: false },
  suppliers: { isExpanded: false },
  licenses: { isExpanded: false },
  filters: {
    cvss: [],
    products: [],
    packages: [],
    suppliers: [],
    licenses: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_EXPANDED':
      return {
        ...state,
        [action.key]: { ...state[action.key], isExpanded: !state[action.key].isExpanded },
      };
    case 'SET_EXPANDED':
      return {
        ...state,
        [action.key]: { ...state[action.key], isExpanded: action.value },
      };
    case 'TOGGLE_FILTER': {
      const current = state.filters[action.key] || [];
      const updated = current.includes(action.value)
        ? current.filter((v) => v !== action.value)
        : [...current, action.value];
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.key]: updated,
        },
      };
    }
    case 'DELETE_FILTER': {
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.key]: state.filters[action.key].filter((v) => v !== action.value),
        },
      };
    }
    case 'CLEAR_FILTER_GROUP': {
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.key]: [],
        },
      };
    }
    case 'CLEAR_ALL_FILTERS': {
      const cleared = Object.fromEntries(Object.keys(state.filters).map((k) => [k, []]));
      return {
        ...state,
        filters: cleared,
      };
    }
    default:
      return state;
  }
}

const LicensesPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Fragment>
      <PageSection variant="default">
        <Content>
          <h1>Licenses</h1>
        </Content>
      </PageSection>
      <PageSection variant="default">
        <Toolbar id="toolbar-group-types" clearAllFilters={() => dispatch({ type: 'CLEAR_ALL_FILTERS' })}>
          <ToolbarContent>
            <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">
              <ToolbarItem>
                <SearchInput
                  placeholder="Search by license name"
                  value={searchTerm}
                  onChange={(_, value) => setSearchTerm(value)}
                  onClear={() => setSearchTerm('')}
                />
              </ToolbarItem>
              <ToolbarGroup variant="filter-group">
                <ToolbarFilter
                  categoryName="CVSS"
                  labels={state.filters.cvss}
                  deleteLabel={(category, chip) =>
                    dispatch({ type: 'DELETE_FILTER', key: 'cvss', value: chip as string })
                  }
                  deleteLabelGroup={() => dispatch({ type: 'CLEAR_FILTER_GROUP', key: 'cvss' })}
                >
                  <Select
                    toggle={(toggleRef) => (
                      <MenuToggle
                        ref={toggleRef}
                        onClick={() => dispatch({ type: 'TOGGLE_EXPANDED', key: 'cvss' })}
                        isExpanded={state.cvss.isExpanded}
                      >
                        CVSS {state.filters.cvss.length > 0 && <span>(+{state.filters.cvss.length})</span>}
                      </MenuToggle>
                    )}
                    onSelect={(_e, selection) =>
                      dispatch({ type: 'TOGGLE_FILTER', key: 'cvss', value: selection as string })
                    }
                    isOpen={state.cvss.isExpanded}
                    onOpenChange={(isOpen) => dispatch({ type: 'SET_EXPANDED', key: 'cvss', value: isOpen })}
                    selected={state.filters.cvss}
                    role="menu"
                  >
                    <SelectList>
                      <SelectOption hasCheckbox value="Low" isSelected={state.filters.cvss.includes('Low')}>
                        Low
                      </SelectOption>
                      <SelectOption hasCheckbox value="Medium" isSelected={state.filters.cvss.includes('Medium')}>
                        Medium
                      </SelectOption>
                      <SelectOption hasCheckbox value="High" isSelected={state.filters.cvss.includes('High')}>
                        High
                      </SelectOption>
                    </SelectList>
                  </Select>
                </ToolbarFilter>

                <ToolbarFilter
                  categoryName="Products"
                  labels={state.filters.products}
                  deleteLabel={(category, chip) =>
                    dispatch({ type: 'DELETE_FILTER', key: 'products', value: chip as string })
                  }
                  deleteLabelGroup={() => dispatch({ type: 'CLEAR_FILTER_GROUP', key: 'products' })}
                >
                  <Select
                    toggle={(toggleRef) => (
                      <MenuToggle
                        ref={toggleRef}
                        onClick={() => dispatch({ type: 'TOGGLE_EXPANDED', key: 'products' })}
                        isExpanded={state.products.isExpanded}
                      >
                        Products {state.filters.products.length > 0 && <span>(+{state.filters.products.length})</span>}
                      </MenuToggle>
                    )}
                    onSelect={(_e, selection) =>
                      dispatch({ type: 'TOGGLE_FILTER', key: 'products', value: selection as string })
                    }
                    isOpen={state.products.isExpanded}
                    onOpenChange={(isOpen) => dispatch({ type: 'SET_EXPANDED', key: 'products', value: isOpen })}
                    selected={state.filters.products}
                    role="menu"
                  >
                    <SelectList>
                      <SelectOption
                        hasCheckbox
                        value="Red Hat OpenShift"
                        isSelected={state.filters.products.includes('Red Hat OpenShift')}
                      >
                        Red Hat OpenShift
                      </SelectOption>
                      <SelectOption
                        hasCheckbox
                        value="Clair Scanner"
                        isSelected={state.filters.products.includes('Clair Scanner')}
                      >
                        Clair Scanner
                      </SelectOption>
                    </SelectList>
                  </Select>
                </ToolbarFilter>

                <ToolbarFilter
                  categoryName="Packages"
                  labels={state.filters.packages}
                  deleteLabel={(category, chip) =>
                    dispatch({ type: 'DELETE_FILTER', key: 'packages', value: chip as string })
                  }
                  deleteLabelGroup={() => dispatch({ type: 'CLEAR_FILTER_GROUP', key: 'packages' })}
                >
                  <Select
                    toggle={(toggleRef) => (
                      <MenuToggle
                        ref={toggleRef}
                        onClick={() => dispatch({ type: 'TOGGLE_EXPANDED', key: 'packages' })}
                        isExpanded={state.packages.isExpanded}
                      >
                        Packages {state.filters.packages.length > 0 && <span>(+{state.filters.packages.length})</span>}
                      </MenuToggle>
                    )}
                    onSelect={(_e, selection) =>
                      dispatch({ type: 'TOGGLE_FILTER', key: 'packages', value: selection as string })
                    }
                    isOpen={state.packages.isExpanded}
                    onOpenChange={(isOpen) => dispatch({ type: 'SET_EXPANDED', key: 'packages', value: isOpen })}
                    selected={state.filters.packages}
                    role="menu"
                  >
                    <SelectList>
                      <SelectOption hasCheckbox value=">50" isSelected={state.filters.packages.includes('>50')}>
                        &gt;50
                      </SelectOption>
                      <SelectOption hasCheckbox value="10-50" isSelected={state.filters.packages.includes('10-50')}>
                        10-50
                      </SelectOption>
                      <SelectOption hasCheckbox value="<10" isSelected={state.filters.packages.includes('<10')}>
                        &lt;10
                      </SelectOption>
                    </SelectList>
                  </Select>
                </ToolbarFilter>

                <ToolbarFilter
                  categoryName="Suppliers"
                  labels={state.filters.suppliers}
                  deleteLabel={(category, chip) =>
                    dispatch({ type: 'DELETE_FILTER', key: 'suppliers', value: chip as string })
                  }
                  deleteLabelGroup={() => dispatch({ type: 'CLEAR_FILTER_GROUP', key: 'suppliers' })}
                >
                  <Select
                    toggle={(toggleRef) => (
                      <MenuToggle
                        ref={toggleRef}
                        onClick={() => dispatch({ type: 'TOGGLE_EXPANDED', key: 'suppliers' })}
                        isExpanded={state.suppliers.isExpanded}
                      >
                        Suppliers{' '}
                        {state.filters.suppliers.length > 0 && <span>(+{state.filters.suppliers.length})</span>}
                      </MenuToggle>
                    )}
                    onSelect={(_e, selection) =>
                      dispatch({ type: 'TOGGLE_FILTER', key: 'suppliers', value: selection as string })
                    }
                    isOpen={state.suppliers.isExpanded}
                    onOpenChange={(isOpen) => dispatch({ type: 'SET_EXPANDED', key: 'suppliers', value: isOpen })}
                    selected={state.filters.suppliers}
                    role="menu"
                  >
                    <SelectList>
                      <SelectOption
                        hasCheckbox
                        value="Red Hat"
                        isSelected={state.filters.suppliers.includes('Red Hat')}
                      >
                        Red Hat
                      </SelectOption>
                      <SelectOption
                        hasCheckbox
                        value="MongoDB"
                        isSelected={state.filters.suppliers.includes('MongoDB')}
                      >
                        MongoDB
                      </SelectOption>
                    </SelectList>
                  </Select>
                </ToolbarFilter>

                <ToolbarFilter
                  categoryName="Licenses"
                  labels={state.filters.licenses}
                  deleteLabel={(category, chip) =>
                    dispatch({ type: 'DELETE_FILTER', key: 'licenses', value: chip as string })
                  }
                  deleteLabelGroup={() => dispatch({ type: 'CLEAR_FILTER_GROUP', key: 'licenses' })}
                >
                  <Select
                    toggle={(toggleRef) => (
                      <MenuToggle
                        ref={toggleRef}
                        onClick={() => dispatch({ type: 'TOGGLE_EXPANDED', key: 'licenses' })}
                        isExpanded={state.licenses.isExpanded}
                      >
                        Licenses {state.filters.licenses.length > 0 && <span>(+{state.filters.licenses.length})</span>}
                      </MenuToggle>
                    )}
                    onSelect={(_e, selection) =>
                      dispatch({ type: 'TOGGLE_FILTER', key: 'licenses', value: selection as string })
                    }
                    isOpen={state.licenses.isExpanded}
                    onOpenChange={(isOpen) => dispatch({ type: 'SET_EXPANDED', key: 'licenses', value: isOpen })}
                    selected={state.filters.licenses}
                    role="menu"
                  >
                    <SelectList>
                      <SelectOption
                        hasCheckbox
                        value="Apache License 2.0"
                        isSelected={state.filters.licenses.includes('Apache License 2.0')}
                      >
                        Apache License 2.0
                      </SelectOption>
                      <SelectOption
                        hasCheckbox
                        value="MIT License"
                        isSelected={state.filters.licenses.includes('MIT License')}
                      >
                        MIT License
                      </SelectOption>
                      <SelectOption
                        hasCheckbox
                        value="GNU General Public License (GPL) v3.0"
                        isSelected={state.filters.licenses.includes('GNU General Public License (GPL) v3.0')}
                      >
                        GNU General Public License (GPL) v3.0
                      </SelectOption>
                      <SelectOption
                        hasCheckbox
                        value='BSD 3-Clause "New" or "Revised" License'
                        isSelected={state.filters.licenses.includes('BSD 3-Clause "New" or "Revised" License')}
                      >
                        BSD 3-Clause "New" or "Revised" License
                      </SelectOption>
                      <SelectOption
                        hasCheckbox
                        value='BSD 2-Clause "Simplified" License'
                        isSelected={state.filters.licenses.includes('BSD 2-Clause "Simplified" License')}
                      >
                        BSD 2-Clause "Simplified" License
                      </SelectOption>
                    </SelectList>
                  </Select>
                </ToolbarFilter>
              </ToolbarGroup>
            </ToolbarToggleGroup>
          </ToolbarContent>
        </Toolbar>
        <LicensesDataList search={searchTerm} filters={state.filters} />
      </PageSection>
    </Fragment>
  );
};

export { LicensesPage };
