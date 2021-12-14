import React from "react";
import GlobalState from "./Context/GlobalState";
import { Router } from "./Router/Routes";
import theme from './Constants/theme';
import { ThemeProvider } from "@material-ui/core";

const App = () => {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </GlobalState>
  );
};

export default App;
