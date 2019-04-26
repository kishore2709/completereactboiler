import React from "react";
import { cyan, pink, purple, orange } from "@material-ui/core/colors";
import Assessment from "@material-ui/icons/Assessment";
import Timeline from "@material-ui/icons/Timeline";
import CreditCard from "@material-ui/icons/CreditCard";
import Description from "@material-ui/icons/Description";
import Face from "@material-ui/icons/Face";
import ThumbUp from "@material-ui/icons/ThumbUp";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import InfoBox from "../DashboardPages/InfoBox";
import NewOrders from "../DashboardPages/NewOrders";
import MonthlySales from "../DashboardPages/MonthlySales";
import BrowserUsage from "../DashboardPages/BrowserUsage";
import RecentlyProducts from "../DashboardPages/RecentlyProducts";
import globalStyles from "../../styles";
import Grid from "@material-ui/core/Grid";
import Data from "../../data";

const DashboardPage = () => {
  return (
    <div>
      <h3 style={globalStyles.navigation}>Application / Dashboard</h3>

      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} md={3}>
          <InfoBox
            Icon={Timeline}
            color={pink[600]}
            title="Total Applications Received"
            value="1500"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <InfoBox
            Icon={Description}
            color={cyan[600]}
            title="Processed Applications"
            value="800"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <InfoBox
            Icon={Assessment}
            color={purple[600]}
            title="Fee Received"
            value="46K"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <InfoBox
            Icon={CreditCard}
            color={orange[600]}
            title="Placards Issued"
            value="248"
          />
        </Grid>
      </Grid>

      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <NewOrders data={Data.dashBoardPage.newOrders} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MonthlySales data={Data.dashBoardPage.monthlySales} />
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <RecentlyProducts data={Data.dashBoardPage.recentProducts} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BrowserUsage data={Data.dashBoardPage.appTypes} />
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardPage;
