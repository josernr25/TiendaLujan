import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import { Icon } from "semantic-ui-react";
import {CartContext} from './../../CartContext'
import './CartWidget.css'

const CartWidget = () => {
  const [cart] = useContext(CartContext);
    return (
        <Link to="/cart">
          <Icon name="shopping cart" size="large" />
          <div class="items-cart-count" style={cart === null || cart.length === 0 ? {display: 'none'} : {}}>
	    	    <span class="it"><span>{cart.length}</span></span>
	        </div>
        </Link>
    )
}

export default CartWidget
