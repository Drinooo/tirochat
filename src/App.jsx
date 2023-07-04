import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Divider,
  Stack,
  ThemeProvider,
} from "@mui/material";
import "./App.css";
import { theme } from "./components/ThemeProvider";
import { Version2 } from "./pages/Version2";
import { Version3 } from "./pages/Version3";
import { Version4 } from "./pages/Version4";
import { Version1 } from "./pages/Version1";
import envConfig from "./config/envConfig";

const selectAppVersion = () => {
  switch(envConfig.APP_VERSION){
    case "V1": 
    return <Version1 />;
    case "V2": 
    return <Version2 />;
    case "V3": 
    return <Version3 />;
    case "V4": 
    return <Version4 />;
    default: return <Version1 />
  }
}

const App = (theme) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Stack>
            {selectAppVersion()}
          </Stack>
      </ThemeProvider>
    </>
  );
};

export default App;
