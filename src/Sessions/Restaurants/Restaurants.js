import React, { useContext } from "react";
import GlobalStateContext from "../../Context/GlobalStateContext";
import { goToProfile } from "../../Router/Coordinate";
import { useHistory } from "react-router-dom";
import useRequestData from "../../Hooks/useRequestData";
import { BASE_URL } from "../../Constants/Url";

const Restaurants = () => {
  const { restaurantList, setRestaurantList } = useContext(GlobalStateContext);
  const history = useHistory();

  console.log(restaurantList);
  return (
    <div>
      <input></input>
      {restaurantList &&
        restaurantList.map((rl) => {
          return (
            <div>
              <p>{rl.name}</p>
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