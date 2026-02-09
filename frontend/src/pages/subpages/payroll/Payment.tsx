import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box, Card, CardContent, Typography, Stack, TextField, Autocomplete, InputAdornment, MenuItem, Select, FormControl, InputLabel, Divider} from "@mui/material";
import PaymentMethodSelector from "../../../components/reusable/PaymentMethodSelector";
import PersonIcon from "@mui/icons-material/Person";
import type { PaymentOption } from "../../../types/PaymentOption";

type Employee = {
  name: string;
  id: string;
};

function Payment() {
  const [type, setType] = React.useState("salary");
  const [paymentMethod, setPaymentMethod] = React.useState<PaymentOption>();
  const [employee, setEmployee] = React.useState<Employee | null>(null); // store as object
  const [netAmount, setNetAmount] = React.useState("4170.40");
  const [notes, setNotes] = React.useState("");
  const [month, setMonth] = React.useState("April");

  const employees = [
    { name: "Alex Rivera", id: "EMP-1042" },
    { name: "Maria Lopez", id: "EMP-1043" },
    { name: "John Doe", id: "EMP-1044" },
    { name: "Jane Smith", id: "EMP-1045" },
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const payeeOptions = [
    employee?.name || "",  // fallback to empty string if undefined
    "cash"
  ].filter(Boolean);      // removes empty string if employee?.name is undefin
  
  const handleType = (
    event: React.MouseEvent<HTMLElement>,
    newType: string,
  ) => {
    if (newType !== null) {
      setType(newType);
    }
  };

 


  const salary = () => {
    return (
      <Stack spacing={3}>
        <Autocomplete
          options={employees}
          getOptionLabel={(option) => `${option.name} (${option.id})`}
          value={employee}
          onChange={(event, newValue) => setEmployee(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Employee Name/ID"
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                  <PersonIcon color="action" />
                  </InputAdornment>
               ),
              }}
            />
          )}
          // need to add refs and keydown handlers here as well
        />  
         <Stack direction="row" spacing={2}>
            {/* Month Selector */}
            <FormControl fullWidth>
              <InputLabel id="month-label">Month</InputLabel>
              <Select
                labelId="month-label"
                label="Month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                // inputRef={monthRef}
                // onKeyDown={(e) => handleKeyDown(e, netAmountRef)}
              >
                {months.map((m) => (
                  <MenuItem key={m} value={m}>
                    {m}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Net Amount */}
            <TextField
              label="Net Amount ($)"
              value={netAmount}
              // onChange={handleNetAmountChange}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,  
              }}
              fullWidth
              // inputRef={netAmountRef}
              // onKeyDown={(e) => handleKeyDown(e, notesRef)}
            />
          </Stack>
          <PaymentMethodSelector payees={payeeOptions} value={paymentMethod} onChange={setPaymentMethod} />
          <TextField
            label="Payment Notes (Optional)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add any specific details regarding this payroll cycle..."
            multiline
            rows={4}
            fullWidth
            // inputRef={notesRef}
          />
        
      </Stack>
    )}
  const advance = () => {
    return (
      <Stack spacing={3}>
        <Stack direction="row" spacing={2}>
          <Autocomplete
            options={employees}
            getOptionLabel={(option) => `${option.name} (${option.id})`}
            value={employee}
            onChange={(event, newValue) => setEmployee(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Employee Name/ID"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                    <PersonIcon color="action" />
                    </InputAdornment>
                ),
                }}
              />
            )}
            fullWidth
            // need to add refs and keydown handlers here as well
          />  
              

            {/* Net Amount */}
            <TextField
              label="Net Amount ($)"
              value={netAmount}
              onChange={(e) => setNetAmount(e.target.value)}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,  // need to add validation here
              }}
              
              // inputRef={netAmountRef}
              // onKeyDown={(e) => handleKeyDown(e, notesRef)}
            />
          </Stack>
          <PaymentMethodSelector payees={payeeOptions} value={paymentMethod} onChange={setPaymentMethod} />
          <TextField
            label="Payment Notes (Optional)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add any specific details regarding this payroll cycle..."
            multiline
            rows={4}
            fullWidth
            // inputRef={notesRef}
          />
        
      </Stack>
    )}
  
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
    <Stack direction="row" spacing={3} >
    <Card sx={{ flex: 2 }}>
      {/* Payment content goes here */}
      <CardContent >
        <Typography variant="subtitle1"  sx={{ mb: 4, color: 'text.primary' }}>
          {type.charAt(0).toUpperCase() + type.slice(1)} Payment Details
        </Typography>
        {type === "salary" && salary()}
        {type === "advance" && advance()}
        
      </CardContent>
    </Card>
    <Card>
      {/* Payment summary goes here */}
      <CardContent>
        <Typography variant="subtitle1" sx={{ mb: 1 , color: 'text.primary' }}>
          Payment Summary
        </Typography>
      </CardContent>
    </Card>
    </Stack>
    </>
  );
}

export default Payment;
