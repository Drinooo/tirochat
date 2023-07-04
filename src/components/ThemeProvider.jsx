import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    yellow: {
      main: "#EDBE2E",
      light: "#EDBE2E",
      dark: "#ECB50E",
      contrastText: "#FFF",
    },
    black: {
      main: "#110F0F",
      light: "#110F0F",
      dark: "#110F0F",
      contrastText: "#000",
    },
    white: {
      main: "#FFFFFF",
      light: "#FFFFFF",
      dark: "#FFFFFF",
      contrastText: "none",
    },
    red: {
      main: "#E31818",
      light: "#E31818",
      dark: "#B20707",
      contrastText: "#E31818",
    },
    gray: {
      main: "#B6B6B6",
      light: "#B6B6B6",
      dark: "#B6B6B6",
      contrastText: "#B6B6B6",
    },
    green: {
      main: "#33FF00",
      light: "#33FF00",
      dark: "#33FF00",
      contrastText: "#33FF00",
    },
    fuchsia: {
      main: "#DCABA7",
      light: "#FDFBFB",
      dark: "#D48D87",
      contrastText: "#000",
    },
    purple: {
      main: "#800080",
      light: "#000000",
      dark: "#5C025C",
      contrastText: "#FFF",
    },
  },
  typography: {
    h1: {
      fontFamily: "Helvetica",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "24px",
      "@media (max-width:600px)": {
        fontSize: "16px",
        lineHeight: "24px",
      },
    },
    h2: {
      fontFamily: "Helvetica",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "24px",
      "@media (max-width:600px)": {
        fontSize: "16px",
        lineHeight: "24px",
      },
    },
    h3: {
      fontFamily: "Helvetica",
      fontSize: "26px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "38.4px",
      "@media (max-width:600px)": {
        fontSize: "20px",
        lineHeight: "24px",
      },
    },
    h4: {
      fontFamily: "Helvetica",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "24px",
      "@media (max-width:600px)": {
        fontSize: "16px",
        lineHeight: "24px",
      },
    },
    body1: {
      fontFamily: "Helvetica",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "24px",
      textTransform: "normal",
      "@media (max-width:600px)": {
        fontSize: "12px",
        lineHeight: "24px",
      },
    },
    body2: {
      fontFamily: "Helvetica",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "24px",
      textTransform: "normal",
      "@media (max-width:600px)": {
        fontSize: "12px",
        lineHeight: "24px",
      },
    },
    button: {
      fontFamily: "Helvetica",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "24px",
      textTransform: "normal",
      "@media (max-width:600px)": {
        fontSize: "16px",
        lineHeight: "24px",
      },
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 600,
      laptop: 900,
      desktop: 1200,
      largeDesktop: 1600,
    },
  },
});

export const styleCard = createTheme({
  bgLinear: {
    background:
      "linear-gradient(96.73deg, rgba(155, 115, 115, 0.6) -53.66%, rgba(155, 115, 115, 0.5) 139.29%)",
    padding: "24px 14px",
    borderRadius: "10px",
    display: "flex",
  },

  v3CardImg: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    marginBottom: "24px",
    borderRadius: "10px",
  },

  bgImage1: {
    background: "transparent",
    width: "400px",
    height: "350px",
    display: "flex",
    justifyContent: "end",
    flexDirection: "column",
    "@media (max-width:600px)": {
      width: "200px",
      height: "300px",
    },
  },
});
