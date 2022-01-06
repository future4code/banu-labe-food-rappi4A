import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/Url";
import useRequestData from "../Hooks/useRequestData";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [profileList, setProfileList] = useState([]);

  const headers = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };

  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, [restaurantList]);




  const getRestaurants = () => {
    axios
      .get(`${BASE_URL}/restaurants`, headers)
      .then((res) => {
        setRestaurantList(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const data = {
    restaurantList,
    setRestaurantList,
    profileList,
    setProfileList,
  };


  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
