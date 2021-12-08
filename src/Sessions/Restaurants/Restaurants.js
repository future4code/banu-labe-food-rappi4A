import React, { useContext } from "react";
import GlobalStateContext from "../../Context/GlobalStateContext";
import useRequestData from "../../Hooks/useRequestData";
import { BASE_URL } from "../../Constants/Url";




const Restaurants = () => {

    const {restaurantList, setRestaurantList} = useContext(GlobalStateContext)




    return (
        <div>
            <input></input>
        {restaurantList && restaurantList.map((rl) => {
            return (
            <div>
                <p>{rl.name}</p>
            </div>
            )
        })}
            <button>Home</button>
            <button>Cart</button>
            <button>Profile</button>
        </div>
        
    )
            
}

export default Restaurants