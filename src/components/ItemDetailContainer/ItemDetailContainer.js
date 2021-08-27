import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
import axios from 'axios';



const ItemDetailContainer = ({ id }) => {
    const [item, setItem] = useState({});

    // UseEffect
    useEffect(() => {
      axios(`https://api.github.com/users/${id}`).then((res) =>
        setItem(res.data)
      );
    }, []);

    return <ItemDetail  item={item}/>
}

export default ItemDetailContainer