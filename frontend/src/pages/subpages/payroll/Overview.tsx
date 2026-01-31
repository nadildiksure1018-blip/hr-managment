import React from "react";
import Kpi from "../../../components/reusable/Kpi";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUp from "@mui/icons-material/TrendingUp";
import { Grid, Typography, Card, CardContent, Box, Stack } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import Legend from "../../../components/reusable/Legend"; 

function Overview() {
  
  return (
    <>
      <Grid container spacing={3}>
        <Grid size={7}>
          <Grid container spacing={3}>
            <Grid size={6}>
              <Kpi
                title="Last Month Total Salary"
                value={"560,000"}
                icon={<AttachMoneyIcon />}
                description="Total number of employee"
                subIcon={<TrendingUp />}
              />
            </Grid>
            <Grid size={6}>
              <Kpi
                title="Total Advances"
                value={"32,000"}
                icon={<AttachMoneyIcon />}
                // description="Total number of employee"
                // subIcon={<DashboardIcon />}
              />
            </Grid>

            <Grid size={6}>
              <Kpi
                title="Total Pending Payments"
                value={"128,000"}
                icon={<AttachMoneyIcon />}
              />
            </Grid>
            <Grid size={6}>
              <Kpi
                title="Total Paid Payments"
                value={"432,000"}
                icon={<AttachMoneyIcon />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={5}>
          <Card sx={{ height: "100%" }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="body1" color="text.secondary" >
                From 1-31 March, 2026
              </Typography>
              <Stack direction="row"  alignItems="center" justifyContent="space-between" mt={2}>
                {/* Chart component goes here */}
                <Stack direction="column" spacing={2} ml={5} mt={3}>
                  <Legend label="Paid" color="#406BCF" />
                  <Legend label="Pending" color="#94ADF0" />
                </Stack>
                <PieChart
                  height={150}
                  series={[
                    {
                      data: [
                        {
                          id: 0,
                          value: 650000,
                          label: "Paid",
                          color: "#406BCF",
                        },
                        {
                          id: 1,
                          value: 200000,
                          label: "Pending",
                          color: "#94ADF0",
                        },
                      ],
                      innerRadius: 70,
                      outerRadius: 100,
                      startAngle: -90,
                      endAngle: 90,
                      paddingAngle: 0,
                      cx: "50%",
                      cy: "100%",
                    },
                  ]}
                  slots={{
                    legend: () => null,
                  }}
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box></Box>
    </>
  );
}

export default Overview;
