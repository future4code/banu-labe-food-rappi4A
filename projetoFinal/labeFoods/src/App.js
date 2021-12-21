import React from "react";
import GlobalState from "./Context/GlobalState";
import { Router } from "./Router/Routes";

const App = () => {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
};

export default App;
