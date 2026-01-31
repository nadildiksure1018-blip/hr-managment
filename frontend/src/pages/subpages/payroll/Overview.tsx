import React from 'react'
import Kpi from '../../../components/reusable/Kpi'
import DashboardIcon from '@mui/icons-material/Dashboard';


function Overview() {
  return (
    <Kpi title="Total Employees"
          value={128}
          icon={<DashboardIcon />}
          color="primary.main"
          subIcon={<DashboardIcon />}
        />
  )
}

export default Overview