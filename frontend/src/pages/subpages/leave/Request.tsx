import { Card, CardContent, Typography, Stack, TextField, Autocomplete, InputAdornment } from '@mui/material'
import PersonIcon from "@mui/icons-material/Person";
import React from 'react'
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Dayjs } from "dayjs";

const employees = [
    { name: "Alex Rivera", id: "EMP-1042" },
    { name: "Maria Lopez", id: "EMP-1043" },
    { name: "John Doe", id: "EMP-1044" },
    { name: "Jane Smith", id: "EMP-1045" },
    ];

type Employee = {
  name: string;
  id: string;
};

function Request() {
    const [employee, setEmployee] = React.useState<Employee | null>(null); 
    const [startDate, setStartDate] = React.useState<Dayjs | null>(null);
    const [reason, setReason] = React.useState<String>('');

  return (
    <Card>
        <CardContent>
            <Typography variant="subtitle1"  sx={{ mb: 4, color: 'text.primary' }}>
                Leave Request Details
            </Typography>

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
                <Stack direction="row" spacing={3}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Start Date"
                            value={startDate}
                            onChange={(newValue: Dayjs | null) => setStartDate(newValue)}
                            minDate={dayjs()} // This disables all past dates
                            slotProps={{ 
                                textField: { 
                                fullWidth: true,
                                variant: "outlined",
                                sx: {
                                    '& fieldset': {
                                    borderRadius: '8px !important',
                                    },
                                    '&:hover fieldset': {
                                    borderColor: '#406BCF !important',
                                    },
                                    // focused state
                                    '&.Mui-focused fieldset': {
                                    borderColor: '#406BCF !important',
                                    },
                                    
                                },
                                InputLabelProps: { shrink: true },
                                } 
                            }}
                        />
                    </LocalizationProvider>


                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="End Date"
                            value={startDate}
                            onChange={(newValue: Dayjs | null) => setStartDate(newValue)}
                            minDate={dayjs()} // This disables all past dates
                            slotProps={{ 
                                textField: { 
                                fullWidth: true,
                                variant: "outlined",
                                sx: {
                                    '& fieldset': {
                                    borderRadius: '8px !important',
                                    },
                                    '&:hover fieldset': {
                                    borderColor: '#406BCF !important',
                                    },
                                    // focused state
                                    '&.Mui-focused fieldset': {
                                    borderColor: '#406BCF !important',
                                    },
                                    
                                },
                                InputLabelProps: { shrink: true },
                                } 
                            }}
                        />
                    </LocalizationProvider>
                </Stack>
                <TextField
                    label="Reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                />
            </Stack>
        </CardContent>
    </Card>
  )
}

export default Request