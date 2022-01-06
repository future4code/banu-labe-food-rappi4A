import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom"
import { BASE_URL } from "../../Constants/Url";
import axios from "axios";
import { goToCart } from "../../Router/Coordinate";


const RestaurantsDetails = (props) => {


  const params = useParams();
  const history = useHistory()
  const [restaurantsDetails, setRestaurantsDetails] = useState()
  const [cart, setCart] = useState([])
  const headers = {
    headers: {
      auth: localStorage.getItem("token")
    },
  };


  useEffect(() => {

    getDetails()

  }, [])

  const getDetails = () => {
    axios.get(`${BASE_URL}/restaurants/${params.restaurantId}`, headers)
      .then((res) => {
        setRestaurantsDetails(res.data.restaurant)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const addToCart = (rd) => {
    const cartIndex = restaurantsDetails.findIndex(
      (item) => item.name === rd.name
    );

    const newCartList = [...cart, restaurantsDetails[cartIndex]];

    setCart(newCartList);

    alert("Produto adicionado com sucesso!");
  };


  return (
    <div>

      <button onClick={() => goToCart(history)}> Ir para Carrinho </button>

      {restaurantsDetails && restaurantsDetails.products.map((rd) => {
        return <div>

          <p>{rd.name}</p>
          <img src={rd.photoUrl}></img>
          <p>{rd.description}</p>
          <p>{rd.price}</p>

          <div>
            <button onClick={() => addToCart(rd)}>
              {" "}
              Adicionar no Carrinho{" "}
            </button>
          </div>

        </div>
      })}



    </div>
  )




}


export default RestaurantsDetails