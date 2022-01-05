import React, { useContext, useLayoutEffect, useState } from 'react';
import GlobalStateContext from '../../Context/GlobalStateContext'
import axios from 'axios'
import { BASE_URL } from '../../Constants/Url';
import { useHistory } from 'react-router-dom'
import useProtectedPage from '../../Hooks/useProtectedPage';


const Cart = () => {
  // document.title = "Labe Eats | Carrinho"
  // useProtectedPage()
  // const history = useHistory()
  // const [cart, setCart] = useState([])
  // const [payment, setPayment] = useState("")
  // const { activeOrder, getActiveOrder } = useContext(GlobalStateContext)
  // const [shipping, setShipping] = useState(0)
  // const [total, setTotal] = useState(0)

  // let totalProduto = 0

  // useLayoutEffect(() => {
  //   getLocalStore()
  //   getActiveOrder()
  // }, [])

  // const getLocalStore = () => { // Carrinho recebe dados de produtos pelo Local Store
  //   if (localStorage.getItem("cart") && localStorage.getItem("cart").length) {
  //     setCart(JSON.parse(localStorage.getItem("cart")))
  //   }
  // }

  // const cartList = cart.length > 0 && cart.map((cart) => { //Cria card com produtos od carrinho
  //   return (
  //     <p product={cart.product} qntd={cart.qnt}> </p>
  //   )
  // })

  // const handlePayment = (event) => { //Armazena tipo de pagamento
  //   setPayment(event.target.value)
  // }

  // const getShipping = (price) => {
  //   setShipping(price)
  //   setTotal(shipping + totalProduto)
  // }

  // for (let i = 0; i < cart.length; i++) { // Cria valor total
  //   totalProduto = cart[i].product.price * parseInt(cart[i].qnt) + totalProduto
  // }

  // const BuyFood = () => { // Cria Body e faz a compra
  //   const id = cart[0].resID
  //   let body = {}

  //   //Resgata os dados para o Body
  //   const result = cart.length > 0 && cart.map(cart => ({ id: cart.product.id, quantity: cart.qnt }))
  //   //Cria o Body
  //   body.products = result
  //   body.paymentMethod = payment

  //Inicia processo de compra
  // const header = {
  //   headers: {
  //     auth: localStorage.getItem("token")
  //   }
  // }

  // axios.
  //   post(`${BASE_URL}/restaurants/${id}/order`, body, header)
  //   .then((res) => {
  //     localStorage.removeItem('cart')
  //     getLocalStore() //Resgata Local Store
  //     document.location.reload();
  //   })
  //   .catch((err) => {
  //     alert(err.response.data)
  //   })


  return (
    <div>
      <h1>Meu Carrinho</h1>


      {/* {cart && cart.products.map((rd) => {
        return <div>

          <p>{rd.name}</p>
          <img src={rd.photoUrl}></img>
          <p>{rd.description}</p>
          <p>{rd.price}</p>

        </div>
      })} */}


    </div>
  )


}


export default Cart;
