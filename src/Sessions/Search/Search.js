import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../Hooks/useForm"
import { 
  SearchField,
  SearchContainer,
  AllTypeContainer,
  FoodTypeContainer,
  FoodTypes
 } from "./style"
 import Restaurants from "../Restaurants/Restaurants"
 import useRequestData from "../../Hooks/useRequestData";


const Search = () => {
  const history = useHistory();

  const { form, onChangeForm } = useForm({
    search: "",
  });
  const [filtered, setFiltered] = useState(false);
  const [RestaurantesFiltrados, setRestaurantesFiltrados] = useState([]);
  const token = localStorage.getItem("token");
  const { data } = useRequestData("/restaurants", token);

  const searchResult =
  form.search &&
  data.restaurants?.filter((item) => {
    return item.name.toLowerCase().includes(form.search.toLowerCase());
  });

  let nameRestaurants =
    form.search && searchResult.length > 0
      ? searchResult?.map((restaurant, index) => {
          return <Restaurants restaurant={restaurant} />;
        })
      : form.search &&
        !searchResult.length && (
          <p>Busca não coincide com nenhum restaurante :(</p>
        );

  const filteredTypes = [];
  let typesOfFood =
    data &&
    data.restaurants &&
    data.restaurants.map((restaurant) => {
      if (restaurant.category !== filteredTypes[restaurant.category]) {
        filteredTypes.push(restaurant.category);
        filteredTypes[restaurant.category] = [];
        filteredTypes[restaurant.category].push(restaurant);
      }

      return (
        <FoodTypeContainer
          onClick={() => onClickCategorias(restaurant.category)}
        >
          <FoodTypes>
            <strong>{restaurant.category}</strong>
          </FoodTypes>
        </FoodTypeContainer>
      );
    });

  const filteredRestaurants = [];
  const onClickCategorias = (selectCategory) => {
    data.restaurants.forEach((restaurant) => {
      if (restaurant.category === selectCategory) {
        filteredRestaurants.push(restaurant);
      }
    });
    setFiltered(true);
    setRestaurantesFiltrados(filteredRestaurants);
  };

  const renderRestaurants = RestaurantesFiltrados.map((restaurant) => {
    return <Restaurants key={restaurant.id} restaurant={restaurant} />;
  });

  return (
    <div>
   <SearchContainer>
            <SearchField
              placeholder="Restaurantes"
              type="text"
              onChange={onChangeForm}
              value={form.search}
              name={"search"}
              variant="outlined"
            />
          </SearchContainer>
          <AllTypeContainer>
            <FoodTypeContainer>{typesOfFood}</FoodTypeContainer>
          </AllTypeContainer>
    </div>
  );
};

export default Search;
