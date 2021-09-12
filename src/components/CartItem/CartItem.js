import React from "react";
import { Icon } from 'semantic-ui-react'

const CartItem = ({ item, removeItem }) => {
    return (
        <>
        <div className="basket-product">
          <div className="item">
            <div className="product-image">
              <img
                src={item.item.avatar_url}
                alt={item.item.name}
                className="product-frame"
              />
            </div>
            <div className="product-details">
              <h3>
                <strong>{item.item.name}</strong>
              </h3>
              <p className="sku">SKU: 232321939</p>
            </div>
          </div>
          <div className="price">{new Intl.NumberFormat("es-EN").format(item.item.followers)}</div>
          <div className="quantity">
            <input
              type="number"
              defaultValue={item.quantity}
              min={1}
              className="quantity-field"
            />
          </div>
          <div className="subtotal">{new Intl.NumberFormat("es-EN").format(item.item.followers * item.quantity)}</div>
          <div className="remove">
            <Icon onClick={() => removeItem(item)} name="trash" size="large" />
          </div>
        </div>
      </>
    )
}

export default CartItem