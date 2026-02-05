import React, { useRef } from "react";
import {
  Box,
  TextField,
  Stack,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Autocomplete,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export default function PayrollForm() {
  const [employee, setEmployee] = React.useState(null); // store as object
  const [netAmount, setNetAmount] = React.useState("4170.40");
  const [notes, setNotes] = React.useState("");
  const [month, setMonth] = React.useState("April");

  const monthRef = useRef(null);
  const netAmountRef = useRef(null);
  const notesRef = useRef(null);

  const handleKeyDown = (e, nextRef) => {
    if (e.key === "Enter") {
      e.preventDefault();
      nextRef.current?.focus();
    }
  };

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Sample employee list
  const employees = [
    { name: "Alex Rivera", id: "EMP-1042" },
    { name: "Maria Lopez", id: "EMP-1043" },
    { name: "John Doe", id: "EMP-1044" },
    { name: "Jane Smith", id: "EMP-1045" },
  ];

  return (
    <Box
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 5,
        p: 3,
        border: "1px solid #e0e0e0",
        borderRadius: 2,
        boxShadow: 1,
        backgroundColor: "#fff",
      }}
    >
      <Stack spacing={3}>
  {/* Employee Autocomplete */}
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
        onKeyDown={(e) => handleKeyDown(e, monthRef)}
      />
    )}
    fullWidth
    filterOptions={(options, state) =>
      options.filter(
        (opt) =>
          opt.name.toLowerCase().includes(state.inputValue.toLowerCase()) ||
          opt.id.toLowerCase().includes(state.inputValue.toLowerCase())
      )
    }
  />

  {/* Row: Month + Net Amount */}
  <Stack direction="row" spacing={2}>
    {/* Month Selector */}
    <FormControl fullWidth>
      <InputLabel id="month-label">Month</InputLabel>
      <Select
        labelId="month-label"
        label="Month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        inputRef={monthRef}
        onKeyDown={(e) => handleKeyDown(e, netAmountRef)}
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
      onChange={(e) => setNetAmount(e.target.value)}
      InputProps={{
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      }}
      fullWidth
      inputRef={netAmountRef}
      onKeyDown={(e) => handleKeyDown(e, notesRef)}
    />
  </Stack>

      
  {/* Payment Notes */}
  <TextField
    label="Payment Notes (Optional)"
    value={notes}
    onChange={(e) => setNotes(e.target.value)}
    placeholder="Add any specific details regarding this payroll cycle..."
    multiline
    rows={4}
    fullWidth
    inputRef={notesRef}
  />
</Stack>

    </Box>
  );
}
