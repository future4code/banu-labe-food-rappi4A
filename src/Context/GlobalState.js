import React from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/Url";
import useRequestData from "../Hooks/useRequestData";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  return (
    <GlobalStateContext.Provider>{props.children}</GlobalStateContext.Provider>
  );
};

export default GlobalState;
