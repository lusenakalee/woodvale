import {
  Card,
  Title,
  Text,
  LineChart,
  TabList,
  Tab,
  TabGroup,
  TabPanel,
  TabPanels,
} from "@tremor/react";

import { useState } from "react";
import { startOfYear, subDays } from "date-fns";

const data = [
  {
    Date: "04.05.2021",
    Price: 113.05,
    Volume: 21400410,
  },
  {
    Date: "05.05.2021",
    Price: 113,
    Volume: 29707270,
  },
  // ...
  {
    Date: "17.11.2022",
    Price: 95.32,
    Volume: 45187420,
  },
];

const dataFormatter = (number: number) => `Kg ${Intl.NumberFormat("us").format(number).toString()}`;

export default function ResidentWeightChart() {
  const [selectedPeriod, setSelectedPeriod] = useState("Max");
  const [selectedIndex, setSelectedIndex] = useState("Max");


  const getDate = (dateString: string) => {
    const [day, month, year] = dateString.split(".").map(Number);
    return new Date(year, month - 1, day);
  };

  const filterData = (startDate: Date, endDate: Date) =>
    data.filter((item) => {
      const currentDate = getDate(item.Date);
      return currentDate >= startDate && currentDate <= endDate;
    });

  const getFilteredData = (period: string) => {
    const lastAvailableDate = getDate(data[data.length - 1].Date);
    switch (period) {
      case "1M": {
        const periodStartDate = subDays(lastAvailableDate, 30);
        return filterData(periodStartDate, lastAvailableDate);
      }
      case "2M": {
        const periodStartDate = subDays(lastAvailableDate, 60);
        return filterData(periodStartDate, lastAvailableDate);
      }
      case "6M": {
        const periodStartDate = subDays(lastAvailableDate, 180);
        return filterData(periodStartDate, lastAvailableDate);
      }
      case "YTD": {
        const periodStartDate = startOfYear(lastAvailableDate);
        return filterData(periodStartDate, lastAvailableDate);
      }
      default:
        return data;
    }
  };

  return (
    <Card>
      <Title>Weight Logs</Title>
      <Text>Daily recorded weight chart</Text>
      <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex} className="mt-10">
        <TabList variant="line">
          <Tab>1M</Tab>
          <Tab>2M</Tab>
          <Tab>6M</Tab>
          <Tab>YTD</Tab>
          <Tab>Max</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <LineChart
              className="h-80 mt-8"
              data={getFilteredData(selectedIndex)}
              index="Date"
              categories={["Price"]}
              colors={["blue"]}
              valueFormatter={dataFormatter}
              showLegend={false}
              yAxisWidth={48}
            />
          </TabPanel>
          <TabPanel>
            <LineChart
              className="h-80 mt-8"
              data={getFilteredData(selectedIndex)}
              index="Date"
              categories={["Price"]}
              colors={["blue"]}
              valueFormatter={dataFormatter}
              showLegend={false}
              yAxisWidth={48}
            />
          </TabPanel>
          <TabPanel>
            <LineChart
              className="h-80 mt-8"
              data={getFilteredData(selectedIndex)}
              index="Date"
              categories={["Price"]}
              colors={["blue"]}
              valueFormatter={dataFormatter}
              showLegend={false}
              yAxisWidth={48}
            />
          </TabPanel>
          <TabPanel>
            <LineChart
              className="h-80 mt-8"
              data={getFilteredData(selectedIndex)}
              index="Date"
              categories={["Price"]}
              colors={["blue"]}
              valueFormatter={dataFormatter}
              showLegend={false}
              yAxisWidth={48}
            />
          </TabPanel>
          <TabPanel>
            <LineChart
              className="h-80 mt-8"
              data={getFilteredData(selectedIndex)}
              index="Date"
              categories={["Price"]}
              colors={["blue"]}
              valueFormatter={dataFormatter}
              showLegend={false}
              yAxisWidth={48}
            />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  );
}