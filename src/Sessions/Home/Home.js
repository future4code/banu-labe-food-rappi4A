import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  goToCart,
  goToLogin,
  goToProfile,
  goToAddress,
  goToSignUp,
  goToToEdit,
} from "../../Router/Coordinate";
import { BASE_URL } from '../../Constants/Url';
import axios from "axios";
import useRequestData from "../../Hooks/useRequestData";


const Home = () => {
  const history = useHistory();

  // const headers = {headers: { Authorization: "rappi4A" }}

  const {restaurants, setRestaurants}= useRequestData(`${BASE_URL}/rappi4A/restaurants`);

  useEffect(() => {
    getRestaurants()
  }, [restaurants])

  const getRestaurants = () => {axios.get( restaurants, {
    headers: {
      auth: "{{token}}"
    }
  } )
  .then((res) => {
    setRestaurants(res.data.restaurants)
    console.log(res.data)
  }).catch((err) => {
    console.log(err)
  })}

  console.log(restaurants)

  return (
    <div>
      <h1>oi, sou a Home</h1>

      {restaurants?.map((restaurant) => {
        return <div>
          <p key={restaurant.id}>{restaurant.name}</p>
          <img src={restaurant.logoUrl} />
        </div>
      })}

      <button onClick={() => goToLogin(history)}>Login</button>
      <button onClick={() => goToCart(history)}>Cart</button>
      <button onClick={() => goToProfile(history)}>Profile</button>
      <button onClick={() => goToAddress(history)}>
        Registrar endereço
      </button>
      <button onClick={() => goToSignUp(history)}>Cadastro</button>
      <button onClick={() => goToToEdit(history)}>To edit</button>
    </div>
  );
};


export default Home;
