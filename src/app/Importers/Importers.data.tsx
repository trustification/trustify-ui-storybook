import dayjs from 'dayjs';

export const formatDate = (value?: string | null) => {
  return value ? dayjs(value).format('MMM DD, YYYY') : null;
};

export interface ImportersDataRow {
  name: string;
  type: string;
  description: string;
  source: string;
  period: string;
  state: string;
}

export const columns = ['Name', 'Type', 'Description', 'Source', 'Period', 'State'];

export const rows: ImportersDataRow[] = [
  {
    name: 'cve',
    type: 'cve',
    description: 'CVE list v5',
    source: 'https://github.com/CVEProject/cvelistV5',
    period: '1day',
    state: 'Disabled',
  },
  {
    name: 'osv-github',
    type: 'osv',
    description: 'GitHub Advisory Database',
    source: 'https://github.com/github/advisory-database',
    period: '1day',
    state: 'Disabled',
  },
  {
    name: 'redhat-csaf',
    type: 'csaf',
    description: 'All Red Hat CSAF data',
    source: 'redhat.com',
    period: '1day',
    state: 'Disabled',
  },
  {
    name: 'redhat-sboms',
    type: 'sbom',
    description: 'All Red Hat SBOMs',
    source: 'https://access.redhat.com/security/data/sbom/beta/',
    period: '1day',
    state: 'Disabled',
  },
];
