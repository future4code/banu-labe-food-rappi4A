import React from "react";
import { useHistory } from "react-router-dom";
import {
  goToCart,
  goToLogin,
  goToProfile,
  goToRegisterAdress,
  goToSingUp,
  goToToEdit,
} from "../../Routes/Coordinate";

const Home = () => {
  const history = useHistory();

  return (
    <div>
      <h1>oi, sou a Home</h1>
      <button onClick={() => goToLogin(history)}>Login</button>
      <button onClick={() => goToCart(history)}>Cart</button>
      <button onClick={() => goToProfile(history)}>Profile</button>
      <button onClick={() => goToRegisterAdress(history)}>
        Registrar endereço
      </button>
      <button onClick={() => goToSingUp(history)}>Cadastro</button>
      <button onClick={() => goToToEdit(history)}>To edit</button>
    </div>
  );
};

export default Home;
