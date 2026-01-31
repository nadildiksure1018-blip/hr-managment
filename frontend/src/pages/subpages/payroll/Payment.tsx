import React from 'react'
import { PieChart } from "@mui/x-charts/PieChart";

function Payment() {
  return (
    <div>
      <PieChart
                  height={200}
                  series={[
                    {
                      data: [
                        { id: 0, value: 65, label: "v5", color: "#3f51ff" },
                        { id: 1, value: 20, label: "v6", color: "#ffb300" },
                        { id: 2, value: 15, label: "v7", color: "#ff5252" },
                      ],
                      innerRadius: 70,
                      outerRadius: 100,
                      startAngle: -90,
                      endAngle: 90,
                      paddingAngle: 2,
                    },
                  ]}
                  
                />
    </div>
  )
}

export default Payment