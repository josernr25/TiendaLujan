import React, { useState, createContext } from 'react';

export const CartContext = createContext();

const initialState = null;

export const CartProvider = ({ children }) => {
	const [items, setItems] = useState(initialState);
    
    const isInCart = (id) => {
        let result = true
        if(items){
          items.forEach(i => {
            if(i.item.id === id){
              result = false
            }
          });
        }
        return result
      }

	return (
		<CartContext.Provider value={[items, setItems, isInCart]}>
			{children}
		</CartContext.Provider>
	);
};