import { Tabs, Tab, Typography } from "@mui/material";
import { Outlet, useLocation, Link } from "react-router-dom";


function Leave() {

  const tabs = [
    { label: "Add Request", path: "/leave/request" },
    { label: "Review Request", path: "/leave/review" }
    // Add more tabs here as needed
  ];
  const location = useLocation();

  return (
    <>
      <div>
        <Typography variant="subtitle1" sx={{ ml: 2, pt: 0 }}>Leave</Typography>
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

export default Leave;
