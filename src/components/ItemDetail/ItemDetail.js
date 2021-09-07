import { Tab, Table, Button } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import {CartContext} from './../../CartContext'

const panes = [
    {
      menuItem: 'Especificaciones',
      render: () => <Tab.Pane attached={false}>
          <Table celled>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Marca:</Table.Cell>
        <Table.Cell>Samsung</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Memoria RAM:</Table.Cell>
        <Table.Cell>4 GB</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Procesador:</Table.Cell>
        <Table.Cell>Mediatek MT6739</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
      </Tab.Pane>},
    {
      menuItem: 'Descripción',
      render: () => <Tab.Pane attached={false}>Aca va una descripcion mas larga del producto</Tab.Pane>,
    },
  ]


  const ItemDetail = ({ item }) => {
    const [cart, setCart, isInCart, addToCart] = useContext(CartContext);

    console.log("Console",cart);

    const onAdd = (quantityToAdd) => {
      addToCart(item, quantityToAdd)
    }


    return (
            <div style={{margin: "40px"}}>
                <div className="DetailContainer">
                    <div className="ImageDetail">
                        <img src={item.avatar_url} alt="Imagen del producto"></img>
                    </div>
                    <div className="Details">
                        <h2>{item.name} - {item.location}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien elit, rhoncus ut vehicula eu, lobortis commodo ligula. Donec ac viverra purus, at mollis ipsum. Proin blandit neque lacinia eros pharetra, sit amet interdum lectus fringilla. Donec at velit accumsan, vehicula urna nec, feugiat leo. Donec euismod, enim auctor tempor eleifend, erat elit facilisis nisi, eget scelerisque purus ipsum vitae arcu. Maecenas id pharetra turpis, quis mattis urna. Maecenas pharetra, urna quis cursus mollis, est tellus iaculis ante, sed placerat lacus quam et nunc. Nunc sed mauris pretium, viverra lectus ut, scelerisque magna. Maecenas viverra, justo a semper mollis, lacus dolor vehicula mauris, eu tempor dui quam sed magna. Donec vel turpis nulla. Pellentesque lorem metus, lacinia rutrum sem nec, cursus sollicitudin tellus. Duis eget bibendum lectus.</p>
                        <div className="ButtonBuy">
                            <h2>Precio: $199.00</h2>
                        </div>
                        {isInCart(item.id) ? <ItemCount stock={5} initial={1} onAdd={onAdd}/> : <Link to="/cart"><div className="ButtonBuy"><Button positive>Finalizar Compra</Button></div></Link>}
                    </div>
                </div>
                <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
            </div>
    );
}

export default ItemDetail