import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
// import Chart from "./Chart";
import TotalEarn from "./fleeker/TotalEarn";
import TotalReferral from "./fleeker/TotalReferral";
import Orders from "./Orders";
import ReferralLink from "./fleeker/ReferralLink";
import WithdarwalMoney from "./fleeker/WithdarwalMoney";
import TabPanel from "./fleeker/TabPanel";

function DashboardForFleeker() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Chart */}
        {/* <Grid item xs={12} md={4} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Chart />
          </Paper>
        </Grid> */}
        {/* Recent TotalEarn */}
        <Grid item xs={12} md={4} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 120,
            }}
          >
            <TotalEarn />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 120,
            }}
          >
            <WithdarwalMoney />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 120,
            }}
          >
            <TotalReferral />
          </Paper>
        </Grid>
      </Grid>
        
        <br />
      <TabPanel />
    </Container>
  );
}


export default function Dashboard() {
  return <DashboardForFleeker />;
}
