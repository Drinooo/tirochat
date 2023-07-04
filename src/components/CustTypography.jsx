import { ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { theme } from "./ThemeProvider";

export const CustTypography = ({ variant, children, color }) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant={variant} color={color}>
        {children}
      </Typography>
    </ThemeProvider>
  );
};
