import * as React from "react";
import {
  Box,
  Radio,
  Typography,
  Stack,
  TextField,
  InputAdornment,
  Autocomplete,
} from "@mui/material";
import type { AutocompleteRenderInputParams } from "@mui/material/Autocomplete";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import type { PaymentOption } from "../../types/PaymentOption";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const methods = [
  { id: "cash", title: "Cash", subtitle: "Direct handover" },
  { id: "cheque", title: "Cheque", subtitle: "Physical document" },
  { id: "bank", title: "Bank Transfer", subtitle: "Instant ACH/EFT" },
];

const account = [
  { No: "1180908500", Bank: "Commercial Bank" },
  { No: "2000251018", Bank: "Bank of Ceylon" },
];

const DEFAULT_PAYMENT: PaymentOption = {
  method: "cash",
  cash: {
    cashDrawer: true,
  },
};

type Method = (typeof methods)[number]["id"];

export default function PaymentMethodSelector({
  payees,
  value,
  onChange,
}: {
  payees: string[];
  value?: PaymentOption;
  onChange: (value: PaymentOption) => void;
}) {
  const selectMethod = (method: Method) => {
    switch (method) {
      case "cash":
        onChange({ method: "cash", cash: { cashDrawer: true } });
        break;
      case "cheque":
        onChange({
          method: "cheque",
          cheque: { payee: "", realizeDate: "", chequeNo: "" , bankAccountNo: ""},
        });
        break;
      case "bank":
        onChange({ method: "bank", bank: { proofFile: null, bankAccountNo: "" } });
        break;
    }
  };

  // const handleChequeNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  // // Remove everything except digits
  //   let digitsOnly = event.target.value.replace(/[^0-9]/g, "");

  //   // Limit to 6 characters
  //   if (digitsOnly.length > 6) {
  //     digitsOnly = digitsOnly.slice(0, 6);
  //   }

  //   setNetAmount(digitsOnly); // or setChequeNumber if you rename the state
  // };

  const updateCheque = (
    field: "payee" | "realizeDate" | "chequeNo" | "bankAccountNo",
    value: string,
  ) => {
    if (safeValue.method !== "cheque") return;

    if (field === "chequeNo") {
      let digitsOnly = value.replace(/[^0-9]/g, "");

      if (digitsOnly.length > 6) {
        digitsOnly = digitsOnly.slice(0, 6);
      }

      value = digitsOnly;
    }
    onChange({
      ...safeValue,
      cheque: { ...safeValue.cheque, [field]: value },
    });
  };

  const safeValue = value ?? DEFAULT_PAYMENT;

  return (
    <>
      <Box>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
          <CurrencyExchangeIcon
            sx={{ verticalAlign: "middle", mr: 0.5, color: "text.secondary" }}
          />
          Payment Method
        </Typography>

        <Stack direction="row" spacing={3}>
          {methods.map((method) => {
            const selected = safeValue.method === method.id;

            return (
              <Box
                key={method.id}
                onClick={() => selectMethod(method.id)}
                sx={{
                  cursor: "pointer",
                  p: 2,
                  borderRadius: 2,
                  border: "2px solid",
                  borderColor: selected ? "secondary.main" : "#e5e7eb",
                  display: "flex",
                  gap: 1.5,
                  transition: "all 0.2s ease",
                  "&:hover": { borderColor: "secondary.main" },
                }}
              >
                <Radio
                  checked={selected}
                  sx={{
                    color: "secondary.main",
                    "&.Mui-checked": { color: "secondary.main" },
                  }}
                />

                <Box>
                  <Typography fontWeight={600} color="text.secondary">
                    {method.title}
                  </Typography>
                  <Typography variant="body2" color="text.disabled">
                    {method.subtitle}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Stack>
        {safeValue.method === "cheque" && (    
          <>
            <Stack direction="column" spacing={3} sx={{ mt: 3, p:4, backgroundColor:"#FBFBFB", borderRadius:"12px" }}>
              <Stack direction="row" spacing={3}>
                <Box sx={{ flex: 1 }}>
                  <Autocomplete
                    options={account}
                    getOptionLabel={(option) => `${option.No} (${option.Bank})`}
                    value={
                      account.find(
                        (acc) => acc.No === safeValue.cheque.bankAccountNo,
                      ) ?? null
                    }
                    onChange={(_, newValue) => {
                      updateCheque("bankAccountNo", newValue?.No ?? "");
                      console.log(newValue?.No ?? "");
                    }}
                    renderInput={(params) => (
                      <TextField {...params} 
                        label="Account No" 
                        InputLabelProps={{ shrink: true }} 
                      />
                    )}
                  />
                </Box>
                <Box sx={{ flexBasis: "20%", flexShrink: 0 }}>
                  <TextField
                    label="Cheque No"
                    placeholder="xxxxxx"
                    value={safeValue.cheque.chequeNo}
                    onChange={(event) =>
                      updateCheque("chequeNo", event.target.value)
                    }
                    InputLabelProps={{ shrink: true }}
                    // need to add refs and keydown handlers here as well
                  />
                </Box>
                <Box sx={{ flexBasis: "20%", flexShrink: 0 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Realize Date"
                      value={
                        safeValue.cheque.realizeDate
                          ? dayjs(safeValue.cheque.realizeDate)
                          : null
                      }
                      onChange={(newValue) =>
                        updateCheque(
                          "realizeDate",
                          newValue ? newValue.format("YYYY-MM-DD") : "",
                        )
                      }
                      minDate={dayjs()} // This disables all past dates
                      slotProps={{ 
                        textField: { 
                          fullWidth: false,
                          variant: "outlined",
                          sx: {
                            '& fieldset': {
                              borderRadius: '8px !important',
                            },
                            '&:hover fieldset': {
                              borderColor: '#9CA3AF',
                            },
                            // focused state
                            '&.Mui-focused fieldset': {
                              borderColor: '#9CA3AF',
                            },
                              
                          },
                          InputLabelProps: { shrink: true },
                        } 
                      }}
                    />
                  </LocalizationProvider>
                </Box>
              </Stack>

              <Autocomplete
                options={payees}
                value={safeValue.cheque.payee}
                onChange={(_, newValue) =>
                  updateCheque("payee", newValue ?? "")
                }
                // onInputChange={(_, inputValue, reason) => {
                //   if (reason === "input") {
                //     // If typed value not in options, clear it
                //     if (!payees.includes(inputValue)) {
                //       updateCheque("payee", "");
                //     }
                //   }
                // }}
                renderInput={(params: AutocompleteRenderInputParams) => (
                  <TextField {...params} label="Payee" />
                )}
                fullWidth
                // need to add refs and keydown handlers here as well
              />
            </Stack>
          </>
        )}
      </Box>
    </>
  );
}
