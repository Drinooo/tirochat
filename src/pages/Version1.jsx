import React from "react";
import { Version1Card } from "../components/CustCard";
import { Box, Container } from "@mui/material";
import { Version1AppBar } from "../components/CustAppBar";
import { Version1Footer } from "../components/CustFooter";

export const Version1 = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          background: "#110F0F"
        }}
      >
        <Version1AppBar />
        <Box
          component="main"
          sx={{ flex: "1 0 auto", display: "flex", alignItems: "center" }}
        >
          <Container>
            <Version1Card />
          </Container>
        </Box>
        <Box component="footer" sx={{ flexShrink: 0 }}>
          <Version1Footer />
        </Box>
      </Box>
    </>
  );
};