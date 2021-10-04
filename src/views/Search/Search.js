import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

const Search = ({match}) => (
    <div className="itemList">
        <ItemListContainer searchName={match.params.id}/>
    </div>
)

export default Search