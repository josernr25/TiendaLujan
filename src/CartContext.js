import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
    
  const isInCart = (id) => {
    let result = true
    if(cart){
      cart.forEach(i => {
        if(i.item.id === id){
          result = false
        }
      });
    }
    return result
  }

  console.log("CART", cart)
  console.log("TOTAL", total)

  const addToCart = (item, quantity) => {
    if(!isInCart(item.id)){
      if(cart.length > 0){
          const newCart = cart.map((cartItem) => {
            if(cartItem.id === item.id){
              return {...cartItem, quantity: quantity}
            }else{
              return cartItem;
            }
          })
        setTotal(total + (item.followers * quantity))
        setCart(newCart)
        }else{
          setTotal(total + (item.followers * quantity))
          setCart([...cart, {item: item, quantity: quantity}])
        }
    }else{
      setTotal(total + (item.followers * quantity))
      setCart([...cart, {item: item, quantity: quantity}])
    }
  }

  const removeItem = (item) => {
    setTotal(total - (item.quantity * item.item.followers))
    setCart(cart.filter((e) => e.item.id !== item.item.id))
  }

  const clearCart = () => setCart([])

	return (
		<CartContext.Provider value={[cart, setCart, isInCart, addToCart, removeItem, total, clearCart]}>
			{children}
		</CartContext.Provider>
	);
};