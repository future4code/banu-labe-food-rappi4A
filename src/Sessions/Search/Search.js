import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { DivSearch } from "./style"
 import SearchIcon from '@material-ui/icons/Search';
 import { goToDetails } from "../../Router/Coordinate";
 import GlobalStateContext from "../../Context/GlobalStateContext";



const Search = () => {
  const history = useHistory();

  const [search, setSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  const [clearFilter, setClearFilter] = useState(false);
  const {restaurantList, setRestaurantList} = useContext(GlobalStateContext)

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const clearFilters = () => {
    setSearch("");
    setCategorySearch("");
    setClearFilter(false);
  };

  
  return (
    <div>
  <DivSearch>
        <SearchIcon color="secondary" />
        <input 
        placeholder="Restaurantes" 
        value={search}
        onChange={handleSearch} />
      <button onClick={clearFilters}>Limpar Filtros</button>
  </DivSearch>
  {restaurantList && restaurantList
  .filter(rl => {
    return rl.name.includes(search)
  })
  .filter((rl) => {
    return rl.category
      .toLowerCase()
      .includes(categorySearch.toLowerCase());
  })
  .map((rl) => {
            return (
            <div>
                <p>{rl.name}</p>
                <img src={rl.logoUrl} onClick={() => {goToDetails(history, rl.id)}}></img>
                <p>Tempo de entrega: {rl.deliveryTime} minutos</p>
            </div>
          );
        })}
    </div>
  );
};

export default Search;

