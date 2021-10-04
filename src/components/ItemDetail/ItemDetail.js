import { Tab, Table, Button, Icon, Step } from 'semantic-ui-react'
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
              <div className="detail-center">
                <div className="DetailContainer">
                    <div className="ImageDetail">
                        <img src={item.image} alt="Imagen del producto"></img>
                    </div>
                    <div className="Details">
                        <span className="category-detail">{item.categoryName}</span>
                        <h2>{item.name}</h2>
                        <span className="sku-detail">{item.sku}</span>
                        <p>{item.largeDescription}</p>
                        <div className="line-detail"></div>
                        <div className="ButtonBuy">
                            <h2>${new Intl.NumberFormat("es-EN").format(item.price)}</h2>
                            {isInCart(item.id) ? <ItemCount stock={5} initial={1} onAdd={onAdd}/> : <Link to="/cart"><Button positive>Finalizar Compra</Button></Link>}
                        </div>
                        
                        <Step.Group>
                          <Step>
                            <Icon name='truck' />
                            <Step.Content>
                              <Step.Title>Envios</Step.Title>
                              <Step.Description>A todo el pais, las 24 Hs.</Step.Description>
                            </Step.Content>
                          </Step>
                          <Step>
                            <Icon name='credit card' />
                            <Step.Content>
                              <Step.Title>Medios de pagos</Step.Title>
                              <Step.Description>100% Seguros y confiables</Step.Description>
                            </Step.Content>
                          </Step>
                        </Step.Group> 
                    </div>
                </div>
                </div>
                
            </div>
    );
}

export default ItemDetail