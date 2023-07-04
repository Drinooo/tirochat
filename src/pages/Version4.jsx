import { Box, Container } from "@mui/material";
import React from "react";
import { Version4Card } from "../components/CustCard";
import { Version4AppBar } from "../components/CustAppBar";
import { Version4Footer } from "../components/CustFooter";

export const Version4 = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          background: "black"
        }}
      >
        <Version4AppBar />
        <Box
          component="main"
          sx={{ flex: "1 0 auto", display: "flex", alignItems: "center" }}
        >
          <Container>
            <Version4Card />
          </Container>
        </Box>

        <Box component="footer" sx={{ flexShrink: 0 }}>
          <Version4Footer />
        </Box>
      </Box>
    </>
  );
};
