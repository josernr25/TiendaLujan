import React from 'react'
import { Message } from 'semantic-ui-react'
import './Sale.css'

const Sale = ({match}) => (
  <div className="succeded-sale">
    <Message
      success
      header='Gracias por su compra!'
      content={"ID: " + match.params.id}
    />
  </div>
)

export default Sale