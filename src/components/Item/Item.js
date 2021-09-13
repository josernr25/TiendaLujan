import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'

const Item = ({item}) => (
  <Link to={`/Item/${item.id}`}>
    <Card>
      <Image src={item.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{item.name}</Card.Header>
        <Card.Description>
          {item.shortDescription}
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <Card.Meta>
          <div className="card-price">
            <h2 className='date'>${new Intl.NumberFormat("es-EN").format(item.price)}</h2>
          </div>
        </Card.Meta>
      </Card.Content>
      <div className="bottom-line"></div>
    </Card>
  </Link>
)

export default Item