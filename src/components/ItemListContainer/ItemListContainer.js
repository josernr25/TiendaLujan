import React from 'react'
import { Card } from 'semantic-ui-react'
import ItemCount from './../ItemCount/ItemCount'

const extra = (
    <ItemCount stock={5} initial={1}/>
)

const ItemListContainer = () => (
  <Card
    header='Bienvenidos de Tienda Lujan'
    description='Que tengas un buen dia'
    extra={extra}
  />
)

export default ItemListContainer
