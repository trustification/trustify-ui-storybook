import React from 'react';
import {
  Button,
  Card,
  CardTitle,
  CardBody,
  Content,
  Grid,
  GridItem,
  Icon,
  PageSection,
  CardFooter,
  Title,
  ContentVariants,
} from '@patternfly/react-core';
import {
  Chart,
  ChartAxis,
  ChartBar,
  ChartDonutThreshold,
  ChartDonutUtilization,
  ChartGroup,
  ChartThemeColor,
} from '@patternfly/react-charts/victory';
import { MultiContentCard } from '@patternfly/react-component-groups';
import { ArrowRightIcon } from '@patternfly/react-icons';
import { VictoryZoomContainer } from 'victory';

export const Dashboard: React.FunctionComponent = () => {
  const cards = [
    <Card isFullHeight isPlain key="card-1">
      <CardBody>
        <Content className="pf-v6-u-font-size-sm">
          <div>
            Below is a summary of Vulnerability status for your last 10 ingested SBOMs. You can click on the SBOM name
            to be taken to their respective details page.
          </div>
          <Chart
            ariaDesc="Average number of pets"
            ariaTitle="Bar chart example"
            containerComponent={<VictoryZoomContainer />}
            domainPadding={{ x: [30, 25] }}
            legendData={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }, { name: 'Mice' }]}
            legendPosition="bottom-left"
            height={400}
            name="chart3"
            padding={{
              bottom: 75, // Adjusted to accommodate legend
              left: 50,
              right: 100, // Adjusted to accommodate tooltip
              top: 50,
            }}
            themeColor={ChartThemeColor.multiOrdered}
            width={450}
          >
            <ChartAxis />
            <ChartAxis dependentAxis showGrid />
            <ChartGroup offset={11} horizontal>
              <ChartBar
                data={[
                  { name: 'Cats', x: '2015', y: 1 },
                  { name: 'Cats', x: '2016', y: 2 },
                  { name: 'Cats', x: '2017', y: 5 },
                  { name: 'Cats', x: '2018', y: 3 },
                ]}
              />
              <ChartBar
                data={[
                  { name: 'Dogs', x: '2015', y: 2 },
                  { name: 'Dogs', x: '2016', y: 1 },
                  { name: 'Dogs', x: '2017', y: 7 },
                  { name: 'Dogs', x: '2018', y: 4 },
                ]}
              />
              <ChartBar
                data={[
                  { name: 'Birds', x: '2015', y: 4 },
                  { name: 'Birds', x: '2016', y: 4 },
                  { name: 'Birds', x: '2017', y: 9 },
                  { name: 'Birds', x: '2018', y: 7 },
                ]}
              />
              <ChartBar
                data={[
                  { name: 'Mice', x: '2015', y: 3 },
                  { name: 'Mice', x: '2016', y: 3 },
                  { name: 'Mice', x: '2017', y: 8 },
                  { name: 'Mice', x: '2018', y: 5 },
                ]}
              />
            </ChartGroup>
          </Chart>
        </Content>
      </CardBody>
    </Card>,
    <Card isFullHeight isPlain key="card-2">
      <CardBody>
        <Content component={ContentVariants.p}>
          <Content component={ContentVariants.h6}>Last SBOM Ingested</Content>
          <Content>Apr 07, 2025 | 13:37:57</Content>
        </Content>

        <Content component={ContentVariants.p}>
          <Content component={ContentVariants.h6}>Last Advisory Ingested</Content>
          <Content>
            Apr 08, 2025 | 12:07:00
            <br />
            https://www.redhat.com/#CVE-2024-13776
          </Content>
        </Content>
      </CardBody>
      <CardFooter>
        <Content>
          <Button
            icon={
              <Icon className="pf-v6-u-ml-sm" isInline>
                <ArrowRightIcon />
              </Icon>
            }
            variant="link"
            isInline
          >
            Examples
          </Button>
        </Content>
      </CardFooter>
    </Card>,
    <Card isFullHeight isPlain key="card-3">
      <CardBody>
        <Content component={ContentVariants.p}>
          <Content component={ContentVariants.h6}>Total SBOMs</Content>
          <Content>161</Content>
        </Content>

        <Content component={ContentVariants.p}>
          <Content component={ContentVariants.h6}>Total Advisories</Content>
          <Content>843509</Content>
        </Content>
      </CardBody>
      <CardFooter>
        <Content>
          <Button
            icon={
              <Icon className="pf-v6-u-ml-sm" isInline>
                <ArrowRightIcon />
              </Icon>
            }
            variant="link"
            isInline
          >
            Learn more
          </Button>
        </Content>
      </CardFooter>
    </Card>,
  ];

  return (
    <React.Fragment>
      <PageSection>
        <Content>
          <h1>Your dashboard</h1>
        </Content>
      </PageSection>
      <PageSection isFilled>
        <Grid hasGutter={true}>
          <GridItem>
            <MultiContentCard cards={cards} />
          </GridItem>
          <GridItem span={3}>
            <Card id="utilization-card-4-card" component="div">
              <CardTitle>
                <Title headingLevel="h4" size="md">
                  home-banking
                </Title>
              </CardTitle>
              <CardBody>
                <ChartDonutThreshold
                  ariaDesc="Mock storage capacity"
                  ariaTitle="Mock donut utilization chart"
                  constrainToVisibleArea={true}
                  data={[
                    { x: 'Warning at 60%', y: 60 },
                    { x: 'Danger at 90%', y: 90 },
                  ]}
                  height={200}
                  labels={({ datum }) => (datum.x ? datum.x : null)}
                  padding={{
                    bottom: 0,
                    left: 10,
                    right: 150,
                    top: 0,
                  }}
                  width={350}
                >
                  <ChartDonutUtilization
                    data={{ x: 'Storage capacity', y: 80 }}
                    labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
                    legendData={[{ name: `Capacity: 80%` }, { name: 'Warning at 60%' }, { name: 'Danger at 90%' }]}
                    legendOrientation="vertical"
                    title="80%"
                    subTitle="of 100 GBps"
                    thresholds={[{ value: 60 }, { value: 90 }]}
                  />
                </ChartDonutThreshold>{' '}
              </CardBody>
              <CardFooter>
                <a href="#">See details</a>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem span={3}>
            <Card>
              <CardTitle>
                <Title headingLevel="h4" size="md">
                  amq-streams/kafka-36-rhel9
                </Title>
              </CardTitle>
              <CardBody>
                <ChartDonutThreshold
                  ariaDesc="Mock storage capacity"
                  ariaTitle="Mock donut utilization chart"
                  constrainToVisibleArea={true}
                  data={[
                    { x: 'Warning at 60%', y: 60 },
                    { x: 'Danger at 90%', y: 90 },
                  ]}
                  height={200}
                  labels={({ datum }) => (datum.x ? datum.x : null)}
                  padding={{
                    bottom: 0,
                    left: 10,
                    right: 150,
                    top: 0,
                  }}
                  width={350}
                >
                  <ChartDonutUtilization
                    data={{ x: 'Storage capacity', y: 80 }}
                    labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
                    legendData={[{ name: `Capacity: 80%` }, { name: 'Warning at 60%' }, { name: 'Danger at 90%' }]}
                    legendOrientation="vertical"
                    title="80%"
                    subTitle="of 100 GBps"
                    thresholds={[{ value: 60 }, { value: 90 }]}
                  />
                </ChartDonutThreshold>{' '}
              </CardBody>
              <CardFooter>
                <a href="#">See details</a>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem span={3}>
            <Card>
              <CardTitle>
                <Title headingLevel="h4" size="md">
                  artemis-project
                </Title>
              </CardTitle>
              <CardBody>
                <ChartDonutThreshold
                  ariaDesc="Mock storage capacity"
                  ariaTitle="Mock donut utilization chart"
                  constrainToVisibleArea={true}
                  data={[
                    { x: 'Warning at 60%', y: 60 },
                    { x: 'Danger at 90%', y: 90 },
                  ]}
                  height={200}
                  labels={({ datum }) => (datum.x ? datum.x : null)}
                  padding={{
                    bottom: 0,
                    left: 10,
                    right: 150,
                    top: 0,
                  }}
                  width={350}
                >
                  <ChartDonutUtilization
                    data={{ x: 'Storage capacity', y: 80 }}
                    labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
                    legendData={[{ name: `Capacity: 80%` }, { name: 'Warning at 60%' }, { name: 'Danger at 90%' }]}
                    legendOrientation="vertical"
                    title="80%"
                    subTitle="of 100 GBps"
                    thresholds={[{ value: 60 }, { value: 90 }]}
                  />
                </ChartDonutThreshold>{' '}
              </CardBody>
              <CardFooter>
                <a href="#">See details</a>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem span={3}>
            <Card>
              <CardTitle>
                <Title headingLevel="h4" size="md">
                  sap-quickstarts-parent
                </Title>
              </CardTitle>
              <CardBody>
                <ChartDonutThreshold
                  ariaDesc="Mock storage capacity"
                  ariaTitle="Mock donut utilization chart"
                  constrainToVisibleArea={true}
                  data={[
                    { x: 'Warning at 60%', y: 60 },
                    { x: 'Danger at 90%', y: 90 },
                  ]}
                  height={200}
                  labels={({ datum }) => (datum.x ? datum.x : null)}
                  padding={{
                    bottom: 0,
                    left: 10,
                    right: 150,
                    top: 0,
                  }}
                  width={350}
                >
                  <ChartDonutUtilization
                    data={{ x: 'Storage capacity', y: 80 }}
                    labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
                    legendData={[{ name: `Capacity: 80%` }, { name: 'Warning at 60%' }, { name: 'Danger at 90%' }]}
                    legendOrientation="vertical"
                    title="80%"
                    subTitle="of 100 GBps"
                    thresholds={[{ value: 60 }, { value: 90 }]}
                  />
                </ChartDonutThreshold>{' '}
              </CardBody>
              <CardFooter>
                <a href="#">See details</a>
              </CardFooter>
            </Card>
          </GridItem>
        </Grid>
      </PageSection>
    </React.Fragment>
  );
};
