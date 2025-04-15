// import { ActionsColumn } from '@patternfly/react-table';
import dayjs from 'dayjs';

const getRandomDate = (start: Date, end: Date): string => {
  const randomTimestamp = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return formatDate(randomTimestamp.toISOString())!;
};

const getRandomInteger = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const formatDate = (value?: string | null) => {
  return value ? dayjs(value).format('MMM DD, YYYY') : null;
};

export interface SBOMsDataRow {
  name: string;
  version: string;
  supplier: string;
  dependencies: number;
  createdOn: string | null;
  vulnerabilities?: {
    label?: string;
    name?: string;
    color?: string;
    count: number;
    score: number | null;
    severity: 'none' | 'low' | 'medium' | 'high' | 'critical';
  }[];
}

export const columns = ['Name', 'Version', 'Supplier', 'Created On', 'Dependencies', 'Vulnerabilities'];
export const columnNames = {
  name: 'Name',
  version: 'Version',
  supplier: 'Supplier',
  createdOn: 'Created on',
  dependencies: 'Dependencies',
  vulnerabilities: 'Vulnerabilities',
};

export const rows: SBOMsDataRow[] = [
  {
    name: 'quarkus-bom',
    version: '2.13.8.Final-redhat-00004',
    supplier: '',
    createdOn: formatDate('2023-11-22T14:00:00Z'),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
    name: 'ubi8-container',
    version: '8.8-1067',
    supplier: '',
    createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
    name: 'ubi8-micro-container',
    version: '8.8-7.1696517612',
    supplier: '',
    createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
    name: 'ubi9-container',
    version: '9.3-782',
    supplier: '',
    createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
    name: 'ubi9-minimal-container',
    version: '9.3-1361',
    supplier: '',
    createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
    name: 'camel-k-runtime-project',
    version: '1.15.6.redhat-00048',
    supplier: '',
    createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
    name: 'amq-streams/kafka-36-rhel9',
    version: '',
    supplier: '',
    createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
    name: 'artemis-project',
    version: '2.33.0.redhat-00016',
    supplier: '',
    createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
    name: 'azure-sdk-all',
    version: '1.0.0',
    supplier: '',
    createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
    name: 'che-server',
    version: '7.92.1.redhat-00006',
    supplier: '',
    createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
    name: 'devspaces/pluginregistry-rhel8',
    version: '',
    supplier: '',
    createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
    name: 'devspaces/server-rhel8',
    version: '',
    supplier: '',
    createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
    name: 'drools',
    version: '7.67.2.Final-redhat-00025',
    supplier: '',
    createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
    name: 'drools-wb',
    version: '7.67.2.Final-redhat-00025',
    supplier: '',
    createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
    name: 'jbpm',
    version: '7.67.2.Final-redhat-00001',
    supplier: '',
    createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
    name: 'home-banking',
    version: '1.0-SNAPSHOT',
    supplier: '',
    createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
    name: 'kie-wb-common',
    version: '7.67.2.Final-redhat-00025',
    supplier: '',
    createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
    name: 'log4j-bom',
    version: '2.23.1.redhat-00002',
    supplier: '',
    createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
    name: 'model-mesh',
    version: '0.4.2.managedsvc-redhat-01201',
    supplier: '',
    createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
    name: 'narayana-spring-boot-parent',
    version: '3.2.0.redhat-00002',
    supplier: '',
    createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
    name: 'openshift-serverless-1/eventing-kafka-broker-dispatcher-rhel8',
    version: '',
    supplier: '',
    createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
    name: 'org.hl7.fhir.core',
    version: '4.2.0.redhat-00003',
    supplier: '',
    createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
    name: 'patching-tools-parent',
    version: '8.0.6.redhat-00004',
    supplier: '',
    createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
    name: 'sap-quickstarts-parent',
    version: '4.8.0.redhat-00001',
    supplier: '',
    createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
    name: 'spring-boot',
    version: '4.8.0.redhat-00022',
    supplier: '',
    createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
    name: 'workitems',
    version: '7.67.2.Final-redhat-00022',
    supplier: '',
    createdOn: getRandomDate(new Date(2020, 0, 1), new Date()),
    dependencies: getRandomInteger(1, 1000),
    vulnerabilities: [
      {
        color: 'red',
        count: getRandomInteger(1, 100),
        label: 'High',
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
];
