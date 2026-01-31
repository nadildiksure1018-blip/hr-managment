import React from "react";
import { Card, CardContent, Typography, Box, useTheme } from "@mui/material";

interface KpiCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactElement;
  subIcon?: React.ReactElement;
  description?: string;
}

export default function KpiCard({
  title,
  value,
  icon,
  subIcon,
  description
}: KpiCardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography variant="h4" fontWeight={600} color="text.primary">
              {value}
            </Typography>

            <Typography variant="body1" color="text.secondary">
              {title}
            </Typography>

            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap={0.5}
            >
              {subIcon && (
                <Box>
                  {React.cloneElement(subIcon, {
                    sx: { fontSize: "0.875rem" },
                  } as any)}
                </Box>
              )}
              <Typography
                variant="body2"
                color="text.disabled"
                mt={0.5}
                fontWeight={600}
              >
                {description}
              </Typography>
            </Box>
          </Box>

          {icon && (
            <Box
              sx={{
                bgcolor: "info.main",
                color: "#5476C7",
                borderRadius: "50%",
                width: 52,
                height: 52,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              {React.cloneElement(icon, {
                sx: { fontSize: "31px" },
              } as any)}
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
