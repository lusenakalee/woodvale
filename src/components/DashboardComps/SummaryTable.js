import {
    Card,
    Title,
    Bold,
    Text,
    List,
    ListItem,
    Tab,
    TabList,
    TabGroup,
    Grid,
  } from "@tremor/react";
  
  import React, { useState } from "react";
  
  const Categories = {
    Team: "Team",
    Resident: "Resident",
  };
  
  const Onduty = [
    {
      name: "Doctors",
      data: {
        [Categories.Team]: {
          amount: "5",
          share: "37.2%",
        },
        [Categories.Resident]: {
          amount: "6",
          share: "17.6%",
        },
        [Categories.Reply]: {
          amount: "1,555",
          share: "9.1%",
        },
      },
    },
    {
      name: "Physicians",
      data: {
        [Categories.Team]: {
          amount: "10",
          share: "19.8%",
        },
        [Categories.Resident]: {
          amount: "9",
          share: "14.7%",
        },
        [Categories.Reply]: {
          amount: "5",
          share: "9.8%",
        },
      },
    },
    {
      name: "Care Givers",
      data: {
        [Categories.Team]: {
          amount: "7",
          share: "15.8%",
        },
        [Categories.Resident]: {
          amount: "1,523",
          share: "14.2%",
        },
        [Categories.Reply]: {
          amount: "14",
          share: "9.8%",
        },
      },
    },
    {
      name: "Cleaners",
      data: {
        [Categories.Team]: {
          amount: "9",
          share: "12%",
        },
        [Categories.Resident]: {
          amount: "589",
          share: "10.2%",
        },
        [Categories.Reply]: {
          amount: "345",
          share: "8.9%",
        },
      },
    },
  ];
  
  const industries = [
    {
      name: "Group A",
      data: {
        [Categories.Team]: {
          amount: "13",
          share: "39%",
        },
        [Categories.Resident]: {
          amount: "5",
          share: "31.2%",
        },
        [Categories.Reply]: {
          amount: "5",
          share: "29%",
        },
      },
    },
    {
      name: "Group B",
      data: {
        [Categories.Team]: {
          amount: "984",
          share: "20.1%",
        },
        [Categories.Resident]: {
          amount: "765",
          share: "19.2%",
        },
        [Categories.Reply]: {
          amount: "654",
          share: "18.3%",
        },
      },
    },
    {
      name: "Group C",
      data: {
        [Categories.Team]: {
          amount: "789",
          share: "11.4%",
        },
        [Categories.Resident]: {
          amount: "637",
          share: "10.5%",
        },
        [Categories.Reply]: {
          amount: "537",
          share: "10.4%",
        },
      },
    },
    {
      name: "Group B",
      data: {
        [Categories.Team]: {
          amount: "789",
          share: "10.1%",
        },
        [Categories.Resident]: {
          amount: "534",
          share: "9.5%",
        },
        [Categories.Reply]: {
          amount: "432",
          share: "3.4%",
        },
      },
    },
  ];
  
  const numEmployees = [
    {
      name: "11 - 50",
      data: {
        [Categories.Team]: {
          amount: "1,650",
          share: "37.1%",
        },
        [Categories.Resident]: {
          amount: "1,465",
          share: "33.2%",
        },
        [Categories.Reply]: {
          amount: "750",
          share: "12.4%",
        },
      },
    },
    {
      name: "50 - 100",
      data: {
        [Categories.Team]: {
          amount: "320",
          share: "21.2%",
        },
        [Categories.Resident]: {
          amount: "290",
          share: "19.2%",
        },
        [Categories.Reply]: {
          amount: "270",
          share: "10.2%",
        },
      },
    },
    {
      name: "100 - 200",
      data: {
        [Categories.Team]: {
          amount: "107",
          share: "18.1%",
        },
        [Categories.Resident]: {
          amount: "90",
          share: "10.1%",
        },
        [Categories.Reply]: {
          amount: "83",
          share: "9.7%",
        },
      },
    },
    {
      name: "250 - 500",
      data: {
        [Categories.Team]: {
          amount: "93",
          share: "12.1%",
        },
        [Categories.Resident]: {
          amount: "87",
          share: "9.8%",
        },
        [Categories.Reply]: {
          amount: "79",
          share: "7.2%",
        },
      },
    },
  ];
  
  const keywords = [
    {
      name: "Dashboard",
      data: {
        [Categories.Team]: {
          amount: "37",
          share: "12.1%",
        },
        [Categories.Resident]: {
          amount: "23",
          share: "9.6%",
        },
        [Categories.Reply]: {
          amount: "21",
          share: "8.1%",
        },
      },
    },
    {
      name: "React Library",
      data: {
        [Categories.Team]: {
          amount: "28",
          share: "15.1%",
        },
        [Categories.Resident]: {
          amount: "12",
          share: "7.1%",
        },
        [Categories.Reply]: {
          amount: "10",
          share: "7.0%",
        },
      },
    },
    {
      name: "Custom Web Dev",
      data: {
        [Categories.Team]: {
          amount: "20",
          share: "9.8%",
        },
        [Categories.Resident]: {
          amount: "18",
          share: "9.4%",
        },
        [Categories.Reply]: {
          amount: "16",
          share: "8.9%",
        },
      },
    },
    {
      name: "Web Applications",
      data: {
        [Categories.Team]: {
          amount: "15",
          share: "6.2%",
        },
        [Categories.Resident]: {
          amount: "9",
          share: "4.3%",
        },
        [Categories.Reply]: {
          amount: "7",
          share: "3.9%",
        },
      },
    },
  ];
  
  const categoriesList = Object.values(Categories);
  
  export default function SummaryTable() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedCategory = categoriesList[selectedIndex];
  
    return (
      <Card>
        <Title>Most Engaged Audience</Title>
        <TabGroup className="mt-10" index={selectedIndex} onIndexChange={setSelectedIndex}>
          <TabList variant="line">
            <Tab>Team </Tab>
            <Tab>Resident </Tab>
          </TabList>
        </TabGroup>
        <Grid numItemsMd={2} className="gap-x-8 gap-y-2">
          <div>
            <Title className="mt-8">Onduty</Title>
            <List className="mt-2">
              {Onduty.map((item) => (
                <ListItem key={item.name}>
                  <Text>{item.name}</Text>
                  <Text>
                    <Bold>{item.data[selectedCategory].amount}</Bold>{" "}
                    {`(${item.data[selectedCategory].share})`}
                  </Text>
                </ListItem>
              ))}
            </List>
          </div>
          <div>
            <Title className="mt-8">Residents attended to</Title>
            <List className="mt-2">
              {industries.map((item) => (
                <ListItem key={item.name}>
                  <Text>{item.name}</Text>
                  <Text>
                    <Bold>{item.data[selectedCategory].amount}</Bold>{" "}
                    {`(${item.data[selectedCategory].share})`}
                  </Text>
                </ListItem>
              ))}
            </List>
          </div>
          
        </Grid>
      </Card>
    );
  }