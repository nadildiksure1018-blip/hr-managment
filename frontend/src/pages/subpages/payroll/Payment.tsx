import React from "react";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box, Card, CardContent, Typography, Stack } from "@mui/material";
import PaymentMethodSelector from "../../../components/reusable/PaymentMethodSelector";

const [type, setType] = React.useState("salary");
const [paymentMethod, setPaymentMethod] = React.useState("cash");

const handleType = (
  event: React.MouseEvent<HTMLElement>,
  newType: string,
) => {
  if (newType !== null) {
    setType(newType);
  }
};

function Payment() {

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
      {/* Payment content goes here */}
      <CardContent>
        <Typography variant="body1" sx={{ mb: 2 , color: '#475569'}}>
          {type.charAt(0).toUpperCase() + type.slice(1)} Payment Details
        </Typography>
        <PaymentMethodSelector value={paymentMethod} onChange={setPaymentMethod} />
      </CardContent>
    </Card>
    </>
  );
}

export default Payment;
