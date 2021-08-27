import React from 'react'
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer'


const Item = ({match}) => (
    <ItemDetailContainer id={match.params.id}/>
)

export default Item