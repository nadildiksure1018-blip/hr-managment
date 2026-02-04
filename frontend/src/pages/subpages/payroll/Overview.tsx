import React from "react";
import Kpi from "../../../components/reusable/Kpi";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUp from "@mui/icons-material/TrendingUp";
import { Grid, Typography, Card, CardContent, Box, Stack } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import Legend from "../../../components/reusable/Legend"; 
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


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
      <Box mt={3}>
        <DataGrid
          rows={rows}
          columns={columns}
          disableColumnMenu
          disableColumnSorting
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />

      </Box>
    </>
  );
}

export default Overview;
