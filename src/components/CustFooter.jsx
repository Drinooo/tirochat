import React from "react";
import {
  Typography,
  Box,
  ThemeProvider,
  Stack,
  Grid,
  Container,
} from "@mui/material";
import { theme } from "./ThemeProvider";
import { CustLink } from "./CustLink";

export const Version1Footer = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          component="footer"
          sx={{
            py: 2,
            px: 3,
            mt: "auto",
            backgroundColor: "transparent",
            textAlign: "center",
            borderTop: "2px solid #EDBE2E",
          }}
        >
          <Typography variant="body1" color="#FFF" mt={3}>
            <Container maxWidth="xl">
              <Grid
                container
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: "48px",
                  "@media (max-width:600px)": {
                    flexDirection: "column",
                    gap: "0px",
                  },
                }}
              >
                <Grid item xs={12} sm={6} md={2}>
                  <CustLink color={"#FFF"}>Terms of Use</CustLink>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                  <CustLink color={"#FFF"}>Privacy Policy</CustLink>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                  <CustLink color={"#FFF"}>Safe Dating</CustLink>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                  <CustLink color={"#FFF"}>Affiliate</CustLink>
                </Grid>
              </Grid>
            </Container>
          </Typography>

          <Typography variant="body2" color="#FFF" mt={3} mb={3}>
            Copyright &copy; {new Date().getFullYear()} 2019 AImaximizer.com.
            Record-Keeping Requirements Compliance Statement
          </Typography>
        </Box>
      </ThemeProvider>
    </>
  );
};

export const Version2Footer = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          component="footer"
          sx={{
            py: 2,
            px: 3,
            mt: "auto",
            backgroundColor: "tertiary",
            textAlign: "center",
            borderTop: "2px solid #E31818",
          }}
        >
          <Typography variant="body1" color="#FFF" mt={3}>
            <Container maxWidth="lg">
              <Grid
                container
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: "48px",
                  "@media (max-width:600px)": {
                    flexDirection: "column",
                    gap: "0px",
                  },
                }}
              >
                <Grid item xs={12} sm={6} md={2}>
                  <CustLink color={"#FFF"}>Terms of Use</CustLink>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                  <CustLink color={"#FFF"}>Privacy Policy</CustLink>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                  <CustLink color={"#FFF"}>Safe Dating</CustLink>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                  <CustLink color={"#FFF"}>Affiliate</CustLink>
                </Grid>
              </Grid>
            </Container>
          </Typography>

          <Typography variant="body2" color="#FFF" mt={3} mb={3}>
            Copyright &copy; {new Date().getFullYear()} 2019 AImaximizer.com.
            Record-Keeping Requirements Compliance Statement
          </Typography>
        </Box>
      </ThemeProvider>
    </>
  );
};

export const Version3Footer = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          component="footer"
          sx={{
            py: 2,
            px: 3,
            mt: "auto",
            backgroundColor: "tertiary",
            textAlign: "center",
            borderTop: "2px solid #DCABA7",
          }}
        >
          <Typography variant="body1" mt={3}>
            <Container maxWidth="lg">
              <Grid
                container
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: "48px",
                  "@media (max-width:600px)": {
                    flexDirection: "column",
                    gap: "0px",
                  },
                }}
              >
                <Grid item xs={12} sm={6} md={2}>
                  <CustLink color={"#000"}>Terms of Use</CustLink>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                  <CustLink color={"#000"}>Privacy Policy</CustLink>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                  <CustLink color={"#000"}>Safe Dating</CustLink>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                  <CustLink color={"#000"}>Affiliate</CustLink>
                </Grid>
              </Grid>
            </Container>
          </Typography>

          <Typography variant="body2" color="#000" mt={3} mb={3}>
            Copyright &copy; {new Date().getFullYear()} 2019 AImaximizer.com.
            Record-Keeping Requirements Compliance Statement
          </Typography>
        </Box>
      </ThemeProvider>
    </>
  );
};

export const Version4Footer = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          component="footer"
          sx={{
            py: 2,
            px: 3,
            mt: "auto",
            backgroundColor: "black",
            textAlign: "center",
            borderTop: "2px solid #800080",
          }}
        >
          <Typography variant="body1" mt={3}>
            <Container maxWidth="lg">
              <Grid
                container
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: "48px",
                  "@media (max-width:600px)": {
                    flexDirection: "column",
                    gap: "0px",
                  },
                }}
              >
                <Grid item xs={12} sm={6} md={2}>
                  <CustLink color={"#FFF"}>Terms of Use</CustLink>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                  <CustLink color={"#FFF"}>Privacy Policy</CustLink>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                  <CustLink color={"#FFF"}>Safe Dating</CustLink>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                  <CustLink color={"#FFF"}>Affiliate</CustLink>
                </Grid>
              </Grid>
            </Container>
          </Typography>

          <Typography variant="body2" color="#FFF" mt={3} mb={3}>
            Copyright &copy; {new Date().getFullYear()} 2019 AImaximizer.com.
            Record-Keeping Requirements Compliance Statement
          </Typography>
        </Box>
      </ThemeProvider>
    </>
  );
};
