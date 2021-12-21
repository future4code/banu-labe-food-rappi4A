import React, { useContext } from "react";
import GlobalStateContext from "../../Context/GlobalStateContext";
import { goToProfile } from "../../Router/Coordinate";
import { useHistory } from "react-router-dom";
import useRequestData from "../../Hooks/useRequestData";
import { BASE_URL } from "../../Constants/Url";
import { goToDetails } from "../../Router/Coordinate";
import { useHistory } from "react-router-dom";

const Restaurants = () => {

    const {restaurantList, setRestaurantList} = useContext(GlobalStateContext)

    const history = useHistory()


    return (
        <div>
            <input></input>
        {restaurantList && restaurantList.map((rl) => {
            return (
            <div>
                <p>{rl.name}</p>
                <img src={rl.logoUrl} onClick={() => {goToDetails(history, rl.id)}}></img>
                <p>Tempo de entrega: {rl.deliveryTime} minutos</p>
            </div>
          );
        })}
      <button>Home</button>
      <button>Cart</button>
      <button onClick={() => goToProfile(history)}>Profile</button>
    </div>
  );
};

export default Restaurants;