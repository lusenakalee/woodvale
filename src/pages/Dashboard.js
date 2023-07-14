import React, { useState } from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import {
  Card,
  Text,
  Metric,
  Button,
  ListItem,
  Grid,
  CategoryBar,
  Flex,
  ProgressBar,
  BadgeDelta,
  List,
  Bold,
  DonutChart,
  Divider,
  Tab,
  TabGroup,
  Title,
  TabList,
} from "@tremor/react";
import Updates from "../components/DashboardComps/Updates";
import {
  PlusCircleIcon,
  ArrowRightIcon,
  ChartPieIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";

export default function Dashboard() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const routeLoaderData = useRouteLoaderData("root");
  const {
    user,
    totalResidents,
    totalIncidents,
    leaves,
    activities,
    dailyRecords,
  } = routeLoaderData;

  interface leavesChartData {
    name: string;
    value: number;
  }

  const leavesChart: leavesChartData[] = [
    {
      name: "Pending Approval",
      value: leaves.pending_approval_leaves,
    },
    {
      name: "Approved leaves",
      value: leaves.approved_leaves,
    },
    {
      name: "Pending Return ",
      value: leaves.pending_return,
    },
  ];

  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Welcome {user ? user.first_name: ""} {user ? user.last_name: ""}
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="flex space-x-6">
              <Link to="/login/residents/new">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <PlusCircleIcon
                    className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Add Resident
                </button>
              </Link>
              <Link to="/NewLog">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <PlusCircleIcon
                    className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  New Log
                </button>
              </Link>
            </div>

            <div class="grid grid-cols-2 gap-2 py-4">
              <div>
                <Card className="max-w-lg mx-auto">
                  <Card>
                    <Flex>
                      <Text className="truncate">
                        Records taken so far today
                      </Text>
                    </Flex>
                    <Flex
                      justifyContent="start"
                      alignItems="baseline"
                      className="space-x-1"
                    >
                      <Metric>{dailyRecords.residents_with_records}</Metric>
                      <Text>/{totalResidents.count} residents</Text>
                    </Flex>
                    <CategoryBar
                      values={[10, 25, 45, 20]}
                      colors={["emerald", "yellow", "orange", "red"]}
                      markerValue={
                        (dailyRecords.residents_with_records * 100) /
                        totalResidents.count
                      }
                      tooltip={`${
                        (dailyRecords.residents_with_records /
                          totalResidents.count) *
                        100
                      }%`}
                      className="mt-2"
                    />
                  </Card>

                  <Grid numItemsSm={2} className="mt-4 gap-4">
                    <Card>
                      <Metric className="mt-2 truncate">
                        {totalResidents.count}
                      </Metric>
                      <Text>Total residents</Text>
                    </Card>
                    <Card>
                      <Metric className="mt-2 truncate">
                        {totalIncidents.incidents}
                      </Metric>
                      <Text>Total incidents</Text>
                    </Card>
                    <Card>
                      <Metric className="mt-2 truncate">
                        {leaves.pending_return}
                      </Metric>
                      <Text>Residents on leave</Text>
                    </Card>
                    <Card>
                      <Metric className="mt-2 truncate">
                        {activities.not_approved_count}
                      </Metric>
                      <Text>Activities Pending Approval</Text>
                    </Card>
                  </Grid>
                </Card>
              </div>
              <div>
                <Card className="max-w-md mx-auto">
                  <Flex
                    className="space-x-8"
                    justifyContent="between"
                    alignItems="center"
                  >
                    <Title>Leaves Overview</Title>
                    <TabGroup
                      index={selectedIndex}
                      onIndexChange={setSelectedIndex}
                    >
                      <TabList variant="solid">
                        <Tab icon={ChartPieIcon}>Chart</Tab>
                        <Tab icon={QueueListIcon}>List</Tab>
                      </TabList>
                    </TabGroup>
                  </Flex>
                  <Text className="mt-8">Total Leaves applied</Text>
                  <Metric>
                    {leaves.pending_approval_leaves + leaves.approved_leaves}
                  </Metric>
                  <Divider />
                  <Text className="mt-4">
                    <Bold>Leaves partition</Bold>
                  </Text>

                  {selectedIndex === 0 ? (
                    <DonutChart
                      data={leavesChart}
                      showAnimation={false}
                      category="value"
                      index="name"
                      className="mt-6"
                    />
                  ) : (
                    <>
                      <Flex className="mt-8" justifyContent="between">
                        <Text className="truncate">
                          <Bold>leaves</Bold>
                        </Text>
                        <Text>Number</Text>
                      </Flex>
                      <List className="mt-4">
                        {leavesChart.map((item) => (
                          <ListItem key={item.name}>
                            <Text>{item.name}</Text>
                            <Flex justifyContent="end" className="space-x-2">
                              <Text> {item.value}</Text>
                            </Flex>
                          </ListItem>
                        ))}
                      </List>
                    </>
                  )}
                </Card>
              </div>
            </div>
            <div className="flex pt-5">
              <div></div>
              <div className="px-5 grid-cols-4 grid gap-4"></div>
            </div>
            <Updates />
          </div>
        </main>
      </div>
    </>
  );
}
