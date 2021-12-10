import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../Constants/Url";
import axios from "axios";

const RestaurantsDetails = () => {
  
  const params = useParams();
  const [restaurantsDetails, setRestaurantsDetails] = useState()

  const headers = {
    headers: {
      auth: localStorage.getItem("token")
    },
  };


  useEffect(() => {

    getDetails()

}, [])

 const getDetails = () => {
    axios.get(`${BASE_URL}/restaurants/${params.restaurantId}`, headers )
    .then((res) => {
      setRestaurantsDetails(res.data)
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}

  return (
    <div>
    
    

    </div>
  )




}


    export default RestaurantsDetails