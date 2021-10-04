import CartItemList from "../../components/CartItemList/CartItemList";
import React, { useState } from 'react';
import { collection, getDocs, query, setDoc, doc} from 'firebase/firestore/lite';
import { db } from '../../firebase';
import { useHistory  } from 'react-router-dom';
import "./CartDetail.css";

const CartDetail = ({ cart, removeItem, total, setCart }) => {
  const history = useHistory();
  const [shippingCost, setShippingCost] = useState(0);
  const [shippingName, setShippingName] = useState(0);
  const [shippingCosts, setShippingCosts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [postalCode, setPostalCode] = useState('');

  console.log(cart)

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
      e.target.value === "pickup" || price.length === 0 ? setShippingName("Retiro") : setShippingName(e.target.value)
    }
  }

  const handlerOnChange = (e) => {
      if(e.target.name === "name") setName(e.target.value);
      if(e.target.name === "phone") setPhone(e.target.value);
      if(e.target.name === "email") setEmail(e.target.value);
      if(name && phone && email)
      {
          generateSale()
      }
  }

  const generateSale = async (e) => {
    let dateNow = new Date;
    dateNow = `${dateNow.getDate()}/${dateNow.getMonth() + 1}/${dateNow.getFullYear()} ${dateNow.getHours()}:${("0" + (dateNow.getMinutes() + 1)).slice(-2)}`;

    const itemsBuy = [];
    cart.forEach(i => {
      itemsBuy.push({id: i.item.id, title: i.item.name, price: i.item.price, quantity: i.quantity});
    });
    
    console.log("item buy", itemsBuy)
    const saleId = Math.floor(Math.random() * 9999999).toString();
    const buyer = {
      saleId: saleId,
			name: name,
			phone: phone,
			email: email,
			items: itemsBuy,
			date: dateNow,
      shippingName: shippingName,
      shippingCost: shippingCost,
      subTotal: total,
			total: total + shippingCost,
		};

    

    const salesRef = doc(collection(db, "sales"), saleId);

    await setDoc(salesRef, buyer);

    setCart([]);

    history.push("/sale/" + saleId);
  }

  const savePostalCode = (e) =>{
    
    console.log(shippingCosts)
    if(e.target.value.length === 4)
    {
      setPostalCode(e.target.value)
      getShippingCosts()
    }
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
              <div>
                <label>Codigo Postal:</label>
                <input className="postalCode" onKeyUp={savePostalCode} placeholder="Ingrese para buscar Medio de Envio"></input>
              </div>
            <div className="summary-delivery">
              <select
                name="delivery-collection"
                className={`summary-delivery-selection ${(postalCode) ? "" : "non-active"}`}
                onChange={handleChange}
              >
                <option value="pickup" defaultValue>Retiro en sucursal</option>
                <option value="Andreani">Envio a domicilio (Andreani)</option>
                <option value="Oca">Envio a domicilio (OCA)</option>
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
              <button data-bs-toggle="modal" data-bs-target="#exampleModal"  className="checkout-cta">Continuar</button>
            </div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Datos Personales</h5>
                        <button type="button"onClick={() => console.log('no hace nada')}  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label for="recipient-name" className="col-form-label">Nombre:</label>
                                <input type="text" className="form-control" name="name" id="recipient-name" value={name} onChange={handlerOnChange}></input>
                            </div>
                            <div className="mb-3">
                                <label for="recipient-phone" className="col-form-label">Telefono:</label>
                                <input type="text" className="form-control" name="phone" id="recipient-phone" value={phone} onChange={handlerOnChange}></input>
                            </div>
                            <div className="mb-3">
                                <label for="recipient-email" className="col-form-label">Email:</label>
                                <input type="email" className="form-control" name="email" id="recipient-email" value={email} onChange={handlerOnChange}></input>
                            </div>
                            <div className="modal-footer">
                                <button type="button"onClick={handlerOnChange}  className={`btn btn-primary ${(name && email && phone) ? "" : "non-active"}`} data-bs-dismiss="modal" aria-label="Close">Confirmar Compra</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CartDetail;