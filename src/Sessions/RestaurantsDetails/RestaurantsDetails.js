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
      setRestaurantsDetails(res.data.restaurant)
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}

  return (
    <div>
    {restaurantsDetails && restaurantsDetails.products.map((rd) => {
      return <div>

        <p>{rd.name}</p>
        <img src={rd.photoUrl}></img>
        <p>{rd.description}</p>
        <p>{rd.price}</p>

      </div>
    })}
    

    </div>
  )




}


    export default RestaurantsDetails