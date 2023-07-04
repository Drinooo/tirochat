import { Box, Container } from "@mui/material";
import React from "react";
import { Version3Card } from "../components/CustCard";
import { Version3AppBar } from "../components/CustAppBar";
import { Version3Footer } from "../components/CustFooter";

export const Version3 = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          background: "white"
        }}
      >
        <Version3AppBar />
        <Box
          component="main"
          sx={{ flex: "1 0 auto", display: "flex", alignItems: "center" }}
        >
          <Container>
            <Version3Card />
          </Container>
        </Box>

        <Box component="footer" sx={{ flexShrink: 0 }}>
          <Version3Footer />
        </Box>
      </Box>
    </>
  );
};
