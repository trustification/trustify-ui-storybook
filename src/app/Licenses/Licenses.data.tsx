import dayjs from 'dayjs';

const getRandomDate = (start: Date, end: Date): string => {
  const randomTimestamp = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return formatDate(randomTimestamp.toISOString())!;
};

const getRandomInteger = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const formatDate = (value?: string | null) => {
  return value ? dayjs(value).format('MMM DD, YYYY') : null;
};

export interface LicenseData {
  license: string;
  productName: string;
  productVersions: {
    createdOn: string | null;
    labels: string[];
    packages: number;
    sbom: string;
    version: string;
    vulnerabilities?: {
      label?: string;
      name?: string;
      color?: string;
      count: number;
      score: number | null;
      severity: 'none' | 'low' | 'medium' | 'high' | 'critical';
    }[];
  }[];
}

export const licenses: LicenseData[] = [
  {
    license: 'Apache License 2.0',
    productName: 'Red Hat OpenShift Container Platform',
    productVersions: [
      {
        createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
        labels: ['Deploy: Production'],
        packages: 53,
        sbom: 'OCP 14.10.2',
        version: '14.10',
        vulnerabilities: [
          {
            color: 'red',
            count: getRandomInteger(1, 100),
            label: 'OSV',
            score: getRandomInteger(1, 20),
            severity: 'high',
          },
          {
            color: 'orange',
            count: getRandomInteger(1, 100),
            label: 'Medium',
            score: getRandomInteger(1, 20),
            severity: 'medium',
          },
          {
            color: 'blue',
            count: getRandomInteger(1, 100),
            label: 'Low',
            score: getRandomInteger(1, 20),
            severity: 'low',
          },
        ],
      },
      {
        createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
        labels: [],
        packages: 40,
        sbom: 'OCP 14.9.5',
        version: '14.9',
        vulnerabilities: [
          {
            color: 'red',
            count: getRandomInteger(1, 100),
            label: 'OSV',
            score: getRandomInteger(1, 20),
            severity: 'high',
          },
          {
            color: 'orange',
            count: getRandomInteger(1, 100),
            label: 'Red Hat',
            score: getRandomInteger(1, 20),
            severity: 'medium',
          },
          {
            color: 'blue',
            count: getRandomInteger(1, 100),
            label: 'OSV',
            score: getRandomInteger(1, 20),
            severity: 'low',
          },
        ],
      },
      {
        createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
        labels: ['Deploy: Production'],
        packages: 1,
        sbom: 'OCP 14.8.22',
        version: '14.8',
        vulnerabilities: [
          {
            color: 'red',
            count: getRandomInteger(1, 100),
            label: 'OSV',
            score: getRandomInteger(1, 20),
            severity: 'high',
          },
          {
            color: 'orange',
            count: getRandomInteger(1, 100),
            label: 'Medium',
            score: getRandomInteger(1, 20),
            severity: 'medium',
          },
          {
            color: 'blue',
            count: getRandomInteger(1, 100),
            label: 'Low',
            score: getRandomInteger(1, 20),
            severity: 'low',
          },
        ],
      },
    ],
  },
  {
    license: 'Apache License 2.0',
    productName: 'Clair Scanner (Red Hat)',
    productVersions: [
      {
        createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
        labels: ['Deploy: Production'],
        packages: 14,
        sbom: 'ACS 7.6',
        version: '10.3',
        vulnerabilities: [
          {
            color: 'red',
            count: getRandomInteger(1, 100),
            label: 'Red Hat',
            score: getRandomInteger(1, 20),
            severity: 'high',
          },
          {
            color: 'orange',
            count: getRandomInteger(1, 100),
            label: 'Red Hat',
            score: getRandomInteger(1, 20),
            severity: 'medium',
          },
        ],
      },
    ],
  },
  {
    license: 'Apache License 2.0',
    productName: 'MongoDB (MongoDB)',
    productVersions: [
      {
        createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
        labels: ['21/11/2021'],
        packages: 12,
        sbom: 'MongoDB 5.6',
        version: '10.2',
        vulnerabilities: [
          {
            color: 'red',
            count: getRandomInteger(1, 100),
            label: 'OSV',
            score: getRandomInteger(1, 20),
            severity: 'high',
          },
        ],
      },
    ],
  },
  {
    license: 'MIT License',
    productName: 'Example',
    productVersions: [
      {
        createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
        labels: [],
        packages: 0,
        sbom: 'Example',
        version: 'X.X',
        vulnerabilities: [],
      },
    ],
  },
  {
    license: 'GNU General Public License (GPL) v3.0',
    productName: 'Example',
    productVersions: [
      {
        createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
        labels: [],
        packages: 0,
        sbom: 'Example',
        version: 'X.X',
        vulnerabilities: [],
      },
    ],
  },
  {
    license: 'BSD 3-Clause "New" or "Revised" License',
    productName: 'Example',
    productVersions: [
      {
        createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
        labels: [],
        packages: 43,
        sbom: 'Example',
        version: 'X.X',
        vulnerabilities: [],
      },
    ],
  },
  {
    license: 'BSD 2-Clause "Simplified" License',
    productName: 'Example',
    productVersions: [
      {
        createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
        labels: [],
        packages: 2,
        sbom: 'Example',
        version: 'X.X',
        vulnerabilities: [],
      },
    ],
  },
];
