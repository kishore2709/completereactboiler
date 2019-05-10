import React from "react";
import Faker from "faker";
import Assessment from "@material-ui/icons/Assessment";
import GridOn from "@material-ui/icons/GridOn";
import PermIdentity from "@material-ui/icons/PermIdentity";
import Web from "@material-ui/icons/Web";
import BorderClear from "@material-ui/icons/BorderClear";
import BorderOuter from "@material-ui/icons/BorderOuter";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Dashboard from "@material-ui/icons/Dashboard";

import Description from "@material-ui/icons/Description";
import Group from "@material-ui/icons/Group";
import Build from "@material-ui/icons/Build";
import AccountBox from "@material-ui/icons/AccountBox";
import SwapHoriz from "@material-ui/icons/SwapHoriz";
import AttachMoney from "@material-ui/icons/AttachMoney";
import avtar from "./assets/images/avtar.jpeg";

export const reportDet = [
  {
    id: 1,
    companyName: "United Parcel Service	",
    Fee: "315",
    request: "Initial Registration"
  },
  {
    id: 2,
    companyName: "Hogg Drilling Specialty Construction, Inc.		",
    Fee: "315",
    request: "Registration Renewals"
  },
  {
    id: 3,
    companyName: "Robertson's		",
    Fee: "315",
    request: "Change of Ownership"
  },
  {
    id: 4,
    companyName: "Foundation Pile, Inc.		",
    Fee: "315",
    request: "Change of Ownership"
  },
  {
    id: 5,
    companyName: "Dave Soiland Company	",
    Fee: "315",
    request: "Initial Registration"
  },
  {
    id: 6,
    companyName: "Dave Soiland Company	",
    Fee: "315",
    request: "Initial Registration"
  },
  {
    id: 7,
    companyName: "Dave Soiland Company	",
    Fee: "315",
    request: "Initial Registration"
  },
  {
    id: 8,
    companyName: "Dave Soiland Company	",
    Fee: "315",
    request: "Initial Registration"
  },
  {
    id: 9,
    companyName: "Dave Soiland Company	",
    Fee: "315",
    request: "Initial Registration"
  }
];
const data = {
  menus: [
    { text: "DashBoard", icon: <Dashboard />, link: "/dashboard" },
    {
      text: "Admin Tools",
      icon: <Build />,
      // link: "/table",
      subMenus: [
        {
          text: "Equipment SwitchTool",
          icon: <SwapHoriz />,
          link: "/equipmentswitch"
        },
        {
          text: "Manage Transactions",
          icon: <AccountBalance />,
          link: "/comingsoon"
        },
        {
          text: "Manage Applications",
          icon: <Description />,
          link: "/comingsoon"
        },
        {
          text: "Manage Ledger Fee",
          icon: <AttachMoney />,
          link: "/comingsoon"
        },
        {
          text: "Swap Serial No",
          icon: <SwapHoriz />,
          link: "/comingsoon"
        }
      ]
    },
    {
      text: "User Management",
      icon: <Group />,
      // link: "/table",
      subMenus: [
        {
          text: "PERP Users",
          icon: <AccountBox />,
          link: "/comingsoon"
        },
        {
          text: "District Users",
          icon: <AccountBox />,
          link: "/comingsoon"
        },
        {
          text: "Company Users",
          icon: <AccountBox />,
          link: "/comingsoon"
        }
      ]
    },
    {
      text: "Fee Management",
      icon: <AttachMoney />,
      // link: "/table",
      subMenus: [
        {
          text: "Add New Fees",
          icon: <AttachMoney />,
          link: "/comingsoon"
        },
        {
          text: "Change Existing Fee",
          icon: <AttachMoney />,
          link: "/comingsoon"
        }
      ]
    },
    {
      text: "Fleet Management",
      icon: <GridOn />,
      // link: "/table",
      subMenus: [
        {
          text: "Create New Fleet",
          icon: <BorderClear />,
          link: "/comingsoon"
        },
        {
          text: "Modify Existing Fleet",
          icon: <BorderClear />,
          link: "/comingsoon"
        }
      ]
    },
    { text: "Update Checker", icon: <Description />, link: "/comingsoon" },

    { text: "Form Page", icon: <Web />, link: "/form" },
    {
      text: "Reports",
      icon: <GridOn />,
      // link: "/table",
      subMenus: [
        {
          text: "Data Report",
          icon: <BorderOuter />,
          link: "/table/data"
        },
        {
          text: "Basic Report",
          icon: <BorderClear />,
          link: "/table/basic"
        },
        {
          text: "Create New Report from Template",
          icon: <BorderOuter />,
          link: "/comingsoon"
        },
        {
          text: "Create Customized Report from Template",
          icon: <BorderOuter />,
          link: "/comingsoon"
        },
        {
          text: "All Units Reports",
          icon: <BorderClear />,
          link: "/comingsoon"
        },
        {
          text: "Company Reports",
          icon: <BorderClear />,
          link: "/comingsoon"
        },
        {
          text: "District Reports",
          icon: <BorderClear />,
          link: "/comingsoon"
        },
        {
          text: "Annual Reports",
          icon: <BorderClear />,
          link: "/comingsoon"
        }
      ]
    },
    { text: "Login Page", icon: <PermIdentity />, link: "/login" }
  ],
  user: {
    userName: "Full Name",
    avatar: avtar
  },

  dashBoardPage: {
    recentProducts: [
      {
        id: 1,
        title: "Initial Registration Request",
        text: "	United Rentals (North America), Inc."
      },
      { id: 2, title: "Change of Ownership", text: "Sunbelt Rentals" },
      {
        id: 3,
        title: "Registration Renewal",
        text: "	City of San Diego"
      },
      {
        id: 4,
        title: "Intial Registration",
        text: "BlueLine Rental, LLC	"
      }
    ],
    monthlySales: [
      { name: "Jan", uv: 3700 },
      { name: "Feb", uv: 3000 },
      { name: "Mar", uv: 2000 },
      { name: "Apr", uv: 2780 },
      { name: "May", uv: 2000 },
      { name: "Jun", uv: 1800 },
      { name: "Jul", uv: 2600 },
      { name: "Aug", uv: 2900 },
      { name: "Sep", uv: 3500 },
      { name: "Oct", uv: 3000 },
      { name: "Nov", uv: 2400 },
      { name: "Dec", uv: 2780 }
    ],
    newOrders: [
      { pv: 2400 },
      { pv: 1398 },
      { pv: 9800 },
      { pv: 3908 },
      { pv: 4800 },
      { pv: 3490 },
      { pv: 4300 }
    ],
    appTypes: [
      { name: "New Registrations", value: 500 },
      { name: "Registration Renewals", value: 200 },
      { name: "Change of Ownership", value: 80 },
      { name: "Placard Replacement", value: 150 }
    ]
  },
  // tablePage: {
  //   items: Array.from({ length: 105 }, (item, index) => ({
  //     id: index,
  //     name: Faker.commerce.productName(),
  //     price: Faker.commerce.price(),
  //     category: Faker.commerce.productMaterial()
  //   }))
  // },

  tablePage: {
    items: reportDet
  }
};

export default data;
