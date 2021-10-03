import { Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const SaleItemList = ({sale}) => {

  console.log(sale.items)

    return (
    <>
      <div className="cart-container">
        <div className="main" style={{display: 'flex',justifyContent: 'center'}}>
          <div className="basket">
            <br/>
            <div className="sale-title">
              <Icon name='check circle outline' size='huge' />
              <h1>¡Gracias por tu Compra {sale.name}!</h1>
              <h4>Operacion: #{sale.saleId}</h4>
              <h4>Fecha: {sale.date}</h4>
            </div>
            <br/>
            <div className="basket-labels">
              <ul>
                <li className="item item-heading"><h4>Producto</h4></li>
                <li className="price"><h4>Precio</h4></li>
                <li className="quantity"><h4>Cantidad</h4></li>
                <li className="subtotal"><h4>Subtotal</h4></li>
              </ul>
            </div>
            <div>
            {sale.items && sale.items.map((item) => {
              return (
                <div className="basket-product">
                  <div className="item">
                    <div className="product-image">
                    </div>
                    <div className="product-details">
                      <h3>
                        <strong>{item.title}</strong>
                      </h3>
                    </div>
                  </div>
                  <div className="price">{new Intl.NumberFormat("es-EN").format(item.price)}</div>
                  <div className="quantity">
                    <p>x{item.quantity}</p>
                  </div>
                  <div className="subtotal">{new Intl.NumberFormat("es-EN").format(item.price * item.quantity)}</div>
                </div>
              );  
            })} 
           </div>  
            
            <div className="container-total">
              <div className="total-list">
                <h5>Sub Total: <p>${new Intl.NumberFormat("es-EN").format(sale.subTotal)}</p></h5>
                <h5>Costo de envio ({sale.shippingName}): <p>${sale.shippingCost}</p></h5>
                <h3>Total: <p>${new Intl.NumberFormat("es-EN").format(sale.total)}</p></h3>
              </div>
              
            </div>
            
          </div>
        </div>
        <div className="return">
          <Link to="/"><Button color='green'>Seguí Navegando</Button></Link>
        </div>
      </div>
    </>
    )
}

export default SaleItemList


