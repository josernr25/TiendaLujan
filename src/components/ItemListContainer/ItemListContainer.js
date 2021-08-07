import React from 'react'
import { Card } from 'semantic-ui-react'

const items = [
  {
    header: 'Bienvenido a Tienda Lujan',
    description:
      'Que tengas un Buen dia.',
  }
]

const ItemListContainer = () => <Card.Group items={items} />

export default ItemListContainer
