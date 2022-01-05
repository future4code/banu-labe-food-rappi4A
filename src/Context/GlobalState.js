import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/Url";
import useRequestData from "../Hooks/useRequestData";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [profileList, setProfileList] = useState([]);
  // const [cart, setCart] = useState([])
  // const [activeOrder, setActiveOrder] = useState({})

  const headers = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };

  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, [restaurantList]);




  const getRestaurants = () => {
    axios
      .get(`${BASE_URL}/restaurants`, headers)
      .then((res) => {
        setRestaurantList(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //ADICIONA OBJETOS AO CARRINHO //////////////////////////////////////////////////////////
  // const makeCart = (product, qntd, resID) => {

  //   const cartProduct = {}

  //   cartProduct.product = product
  //   cartProduct.qnt = qntd
  //   cartProduct.resID = resID


  //   setCart([...cart, cartProduct])

  //   alert("Produto adicionado com sucesso!");

  // }
  //RECEBE PEDIDO ATIVO////////////////////////////////////////////////////////////

  // const getActiveOrder = () => {
  //   const token = localStorage.getItem("token")

  //   axios.get(`${BASE_URL}/active-order`, {
  //     headers: {
  //       auth: token
  //     }
  //   })
  //     .then((res) => {
  //       setActiveOrder(res.data.order)
  //     })
  //     .catch((err) => {
  //       alert(err.response.data)
  //     })
  // }

  //REMOVE DO CARRINHO/////////////////////////////////////////////////////////////
  // const removeCart = (id) => {
  //   let novaLista = [...cart]
  //   for (let i = 0; i < novaLista.length; i++) {
  //     if (novaLista[i].product.id === id) {
  //       if (novaLista.length === 1) {
  //         setCart([])
  //         localStorage.removeItem('cart')
  //       }
  //       novaLista.splice(i, 1)
  //       setCart(novaLista)
  //     }
  //   }
  // }

  // useEffect(() => {
  //   if (cart && cart.length > 0) { //Caso Cart tenha conteudo, envia para localStorage
  //     localStorage.setItem("cart", JSON.stringify(cart))
  //   } else if (cart.length <= 0 && localStorage.getItem("cart") && localStorage.getItem("cart").length) {
  //     //Caso esteja vazio e exista cart no localStorage, recebe o que está no localstorage
  //     setCart(JSON.parse(localStorage.getItem("cart")))
  //   }
  // }, [cart])





  const data = {
    restaurantList,
    setRestaurantList,
    profileList,
    setProfileList,
    // makeCart,
    // cart,
    // getActiveOrder,
    // removeCart,
  };


  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
