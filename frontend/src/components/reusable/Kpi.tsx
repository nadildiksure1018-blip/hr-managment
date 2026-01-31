import React from "react";
import { Card, CardContent, Typography, Box,} from "@mui/material";

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
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
      }}
    >
      <CardContent sx={{ pb: 0,'&:last-child': { pb: 1 }}}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box p={0}>
            <Typography variant="h5" fontWeight={600} color="text.primary" ml={1} mb={0.5}>
              {value}
            </Typography>

            <Typography variant="body1" color="text.disabled" >
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
                fontWeight={500}
                mb={0}
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
                mb: 3,
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
