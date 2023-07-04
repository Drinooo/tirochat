import { Box, Link, Stack, ThemeProvider } from "@mui/material";
import React from "react";
import { theme } from "./ThemeProvider";
import { CustTypography } from "./CustTypography";

export const CustLink = ({ children, color }) => {
  return (
    <ThemeProvider theme={theme}>
        <Link color={color} href="#terms" underline="none">
          {children}
        </Link>
    </ThemeProvider>
  );
};
