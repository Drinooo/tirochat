import styled from "@emotion/styled";
import { Badge, ThemeProvider } from "@mui/material";
import React from "react";
import { theme } from "./ThemeProvider";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -5,
    top: -1,
    width: '13px',
    height: "13px",
    borderRadius: "20px",
    "@media (max-width:600px)": {
      top: -1,
    },
  },
}));

const CustBadgeActive = () => {
  return (
    <StyledBadge
      color="green"
      badgeContent=""
      variant="dot"
      sx={{ ml: 1, verticalAlign: "right" }}
    />
  );
};

export default CustBadgeActive;

export const CustBadgeDisabled = () => {
  return (
    <StyledBadge
      color="gray"
      badgeContent=""
      variant="dot"
      sx={{ ml: 1, verticalAlign: "right" }}
    />
  );
};
