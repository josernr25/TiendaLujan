import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
    
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
        setCart(newCart)
        }else{
          setCart([...cart, {item: item, quantity: quantity}])
        }
    }else{
      setCart([...cart, {item: item, quantity: quantity}])
    }
  }

  const removeItem = (itemId) => {
    setCart(cart.filter((e) => e.item.id !== itemId))
  }

  const clearCart = () => setCart([])

	return (
		<CartContext.Provider value={[cart, setCart, isInCart, addToCart, removeItem, clearCart]}>
			{children}
		</CartContext.Provider>
	);
};