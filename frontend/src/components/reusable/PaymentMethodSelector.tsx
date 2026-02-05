import * as React from "react";
import { Box, Radio, Typography, Stack } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const methods = [
  { id: "cash", title: "Cash", subtitle: "Direct handover" },
  { id: "cheque", title: "Cheque", subtitle: "Physical document" },
  { id: "bank", title: "Bank Transfer", subtitle: "Instant ACH/EFT" },
];

export default function PaymentMethodSelector({
    value,
    onChange
}: {
    value: string;
    onChange: (value: string) => void;
}) {
  return (
    <>
    <Typography variant="body1" color="text.secondary" sx={{ mb:0 }}>
        <CurrencyExchangeIcon sx={{ verticalAlign: 'middle', mr: 0.5, color: 'text.secondary' }} />
        Payment Method
    </Typography>
    <Stack direction="row" spacing={3}>
      {methods.map((method) => {
        const selected = value === method.id;

        return (
          <Box
            key={method.id}
            onClick={() => onChange(method.id)}
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
              <Typography fontWeight={600} color="text.secondary">{method.title}</Typography>
              <Typography variant="body2" color="text.disabled">
                {method.subtitle}
              </Typography>
            </Box>
          </Box>
        )
      })}
    </Stack>
    </>
  );
}
