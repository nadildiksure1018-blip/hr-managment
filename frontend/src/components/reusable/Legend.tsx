import React from "react";
import { Stack, Box, Typography } from "@mui/material";

interface LegendProps {
  label: string;
  color: string;
}

function Legend({ label, color }: LegendProps) {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      {/* Vertical indicator */}
      <Box
        sx={{
          width: 4,
          height: 36,
          borderRadius: 2,
          backgroundColor: color,
        }}
      />

      {/* Text */}
      <Box>
        <Typography fontWeight={600} color="text.disabled">
          {label}
        </Typography>
      </Box>
    </Stack>
  );
}

export default Legend;
