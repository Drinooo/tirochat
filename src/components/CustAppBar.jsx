import React from "react";
import { AppBar, Toolbar, Typography, Box, ThemeProvider } from "@mui/material";
import { theme } from "./ThemeProvider";

export const Version1AppBar = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "transparent", borderBottom: "2px solid #EDBE2E" }}
        >
          <Toolbar>
            <Box display="flex" justifyContent="center" width="100%">
              <Typography variant="h6">
                <img src="AI Maximiser.png" alt="Logo" />
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export const Version2AppBar = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "transparent", borderBottom: "2px solid #E31818" }}
        >
          <Toolbar>
            <Box display="flex" justifyContent="left" width="100%">
              <Typography variant="h6">
                <img src="AI Maximiser 2.png" alt="Logo" />
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export const Version3AppBar = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar
          position="static"
          
          sx={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            <Box display="flex" justifyContent="center" width="100%">
              <Typography variant="h6">
                <img src="Version3.png" alt="Logo" />
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export const Version4AppBar = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar
          position="static"
          sx={{ borderBottom: "2px solid #800080", backgroundColor: "transparent" }}
        >
          <Toolbar>
            <Box display="flex" justifyContent="left" width="100%">
              <Typography variant="h6">
                <img src="Version4.png" alt="Logo" />
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
};
