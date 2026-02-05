import React from "react";
import { styled } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box, Card } from "@mui/material";


function Payment() {
  const [type, setType] = React.useState("salary");
  const handleType = (
    event: React.MouseEvent<HTMLElement>,
    newType: string,
  ) => {
    if (newType !== null) {
      setType(newType);
    }
  };

  return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }} >
      <ToggleButtonGroup
        value={type}
        exclusive
        onChange={handleType}
        aria-label="text alignment"
      >
        <ToggleButton value="salary" aria-label="Salary">   
          {/* add icons here */}
          Salary
        </ToggleButton>
        <ToggleButton value="advance" aria-label="Advance">
          Advance
        </ToggleButton>
        <ToggleButton value="loan" aria-label="Loan">
          Loan
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
    <Card>

    </Card>
    </>
  );
}

export default Payment;
