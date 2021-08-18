import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import ItemCount from './../ItemCount/ItemCount'

const Item = ({image, name}) => (
  <Card>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <ItemCount stock={5} initial={1} />
    </Card.Content>
  </Card>
)

export default Item