import CartItemList from "../../components/CartItemList/CartItemList";
import React from 'react';
import "./CartDetail.css";

const CartDetail = ({ cart, removeItem }) => {
    

    console.log("CARTITEMS",cart);

  return (
    <div className="cart-container">
      <div className="main">
        <div className="basket">
          <div className="basket-labels">
            <ul>
              <li className="item item-heading"><h4>Producto</h4></li>
              <li className="price"><h4>Precio</h4></li>
              <li className="quantity"><h4>Cantidad</h4></li>
              <li className="subtotal"><h4>Subtotal</h4></li>
            </ul>
          </div>
          <CartItemList items={cart} removeItem={removeItem}/>
        </div>
        <aside>
          <div className="summary">
            <div className="summary-total-items">
              <h3 className="total-items"> Productos en tu carrito</h3>
            </div>
            <div className="summary-subtotal">
              <div className="subtotal-title">Subtotal</div>
              <div className="subtotal-value final-value" id="basket-subtotal">
                130.00
              </div>
              <div className="summary-promo hide">
                <div className="promo-title">Promocion</div>
                <div className="promo-value final-value" id="basket-promo" />
              </div>
            </div>
            <div className="summary-delivery">
              <select
                name="delivery-collection"
                className="summary-delivery-selection"
              >
                <option value={0} selected="selected">
                  Metodos de envio
                </option>
                <option value="collection">Retiro en sucursal</option>
                <option value="first-class">Envio a domicilio (Andreani)</option>
                <option value="second-class">Envio a domicilio (OCA)</option>
              </select>
            </div>
            <div className="summary-total">
              <div className="total-title">Total</div>
              <div className="total-value final-value" id="basket-total">
                130.00
              </div>
            </div>
            <div className="summary-checkout">
              <button className="checkout-cta">Continuar</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CartDetail;