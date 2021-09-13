import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

const Category = ({match}) => (
    <div className="itemList">
        <ItemListContainer categoryId={match.params.id}/>
    </div>
)

export default Category