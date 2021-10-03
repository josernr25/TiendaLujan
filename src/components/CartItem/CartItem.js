import React from "react";
import { Icon } from 'semantic-ui-react'

const CartItem = ({ item, removeItem, sale }) => {
    return (
        <>
        <div className="basket-product">
          <div className="item">
            <div className="product-image">
              <img
                src={item.item.image}
                alt={item.item.name}
                className="product-frame"
              />
            </div>
            <div className="product-details">
              <h3>
                <strong>{item.item.name}</strong>
              </h3>
              <p className="sku">SKU: {item.item.sku}</p>
            </div>
          </div>
          <div className="price">{new Intl.NumberFormat("es-EN").format(item.item.price)}</div>
          <div className="quantity">
            {sale ? <p>x{item.quantity}</p> : <input
              type="number"
              defaultValue={item.quantity}
              min={1}
              className="quantity-field"
            />}
          </div>
          <div className="subtotal">{new Intl.NumberFormat("es-EN").format(item.item.price * item.quantity)}</div>
          {sale ? null : <div className="remove">
            <Icon onClick={() => removeItem(item)} name="trash" size="large" />
          </div>}
        </div>
      </>
    )
}

export default CartItem