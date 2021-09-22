import CartItemList from "../../components/CartItemList/CartItemList";
import React, { useState } from 'react';
import UserDataForm from "../UserDataForm/UserDataForm";
import { collection, getDocs, query, where, setDoc, doc} from 'firebase/firestore/lite';
import { db } from '../../firebase';
import { useHistory  } from 'react-router-dom';
import "./CartDetail.css";

const CartDetail = ({ cart, removeItem, total }) => {
  const history = useHistory();
  const [shippingCost, setShippingCost] = useState(0);
  const [shippingCosts, setShippingCosts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [showModal, setShowModal] = useState(false)

  console.log("Form", name + " - " + phone + " - " + email + " - " + postalCode)

  const getShippingCosts = async () => {
      if(postalCode){
        let q = query(collection(db, "shippingCosts"));

      const shippingCostsSnapshot = await getDocs(q);
      const finalShippingCosts = shippingCostsSnapshot.docs.map(doc => doc.data());

      setShippingCosts(finalShippingCosts);
    }
  }

  const handleChange = (e) => {
    if(postalCode && shippingCosts.length > 0){
      let cp = parseInt(postalCode);
      let price = shippingCosts.filter(sc => sc.from < cp && sc.to > cp && sc.company === e.target.value)
      e.target.value === "pickup" || price.length === 0 ? setShippingCost(0) : setShippingCost(price[0].price)
    }
  }

  const handlerOnChange = (e) => {
      if(e.target.name === "name") setName(e.target.value);
      if(e.target.name === "phone") setPhone(e.target.value);
      if(e.target.name === "email") setEmail(e.target.value);
      if(e.target.name === "postalCode") setPostalCode(e.target.value);
  }

  const generateSale = async (e) => {
    const dateNow = Date.now();

    const buyer = {
			name: name,
			phone: phone,
			email: email,
			items: [{ id: '454545', title: 'macbook', price: 152 }],
			date: dateNow,
			total: total + shippingCost,
		};

    const salesRef = doc(collection(db, "sales"));

    e.preventDefault();
    await setDoc(salesRef, buyer);

		let q = query(collection(db, "sales"), where("date", "==", dateNow));
    await getDocs(q).then((nn) => {
       history.push("/sale/" + nn.docs[0].id);
    })
    
  }

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
            <div className="summary-userdata">
              <UserDataForm name={name} phone={phone} email={email} postalCode={postalCode} handlerOnChange={handlerOnChange} getShippingCosts={getShippingCosts} />
            </div>
            <div className="summary-delivery">
              <select
                name="delivery-collection"
                className="summary-delivery-selection"
                onChange={handleChange}
              >
                <option value="pickup" defaultValue>Retiro en sucursal</option>
                <option value="andreani">Envio a domicilio (Andreani)</option>
                <option value="oca">Envio a domicilio (OCA)</option>
              </select>
            </div>
            <div className="summary-subtotal">
              <div className="subtotal-title">Subtotal</div>
              <div className="subtotal-value final-value" id="basket-subtotal">
                {new Intl.NumberFormat("es-EN").format(total)}
              </div>
              <div className="summary-promo">
                <div className="promo-title">Costo de envio</div>
                <div className="promo-value final-value" id="basket-promo">
                  {new Intl.NumberFormat("es-EN").format(shippingCost)}
                </div>
              </div>
            </div>
            <div className="summary-total">
              <div className="total-title">Total</div>
              <div className="total-value final-value" id="basket-total">
                {new Intl.NumberFormat("es-EN").format(total + shippingCost)}
              </div>
            </div>
            <div className="summary-checkout">
              <button onClick={generateSale} className="checkout-cta">Confirmar Compra</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CartDetail;