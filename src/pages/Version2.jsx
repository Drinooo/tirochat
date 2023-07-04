import { Box, Container } from "@mui/material";
import React from "react";
import { Version2Card } from "../components/CustCard";
import { Version2AppBar } from "../components/CustAppBar";
import { Version2Footer } from "../components/CustFooter";

export const Version2 = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          background: "#100620"
        }}
      >
        <Version2AppBar />
        <Box component="main" sx={{ flex: "1 0 auto", display: "flex", alignItems: "center" }}>
          <Container>
            <Version2Card />
          </Container>
        </Box>

        <Box component="footer" sx={{ flexShrink: 0 }}>
          <Version2Footer />
        </Box>
      </Box>
    </>
  );
};
