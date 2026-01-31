import React, { useState } from "react";
import { Tabs, Tab, Typography } from "@mui/material";
import { NavLink, Outlet, useLocation, Link } from "react-router-dom";


function Payroll() {

  const tabs = [
    { label: "Overview", path: "/payroll/overview" },
    { label: "Add Payment", path: "/payroll/payment" },
    { label: "Payslips", path: "/payroll/payslips" },
    // Add more tabs here as needed
  ];
  const location = useLocation();

  return (
    <>
      <div>
        <Typography variant="subtitle1" sx={{ ml: 2, pt: 0 }}>Payroll</Typography>
        <Tabs value={location.pathname} >        //textColor="secondary" indicatorColor="secondary"
          {tabs.map((tab) => (
            <Tab
              key={tab.path}
              label={tab.label}
              value={tab.path}
              component={Link}
              to={tab.path}
            />
          ))}
        </Tabs>
      </div>
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
      
    </>
  );
}

export default Payroll;
