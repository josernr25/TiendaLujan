import CartDetail from "../../components/CartDetail/CartDetail";
import React, { useContext } from "react";
import {CartContext} from './../../CartContext'

const Cart = () => {
    const [cart, setCart, isInCart, addToCart, removeItem] = useContext(CartContext);
  return(
    <>
     {cart.length > 0 ? <CartDetail cart={cart} removeItem={removeItem}/> : <h1 style={{textAlign : 'center'}}>No hay productos en su carrito!</h1>}
    </>
  );
};

export default Cart;
