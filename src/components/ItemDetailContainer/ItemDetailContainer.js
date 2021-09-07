import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
import axios from 'axios';



const ItemDetailContainer = ({ id }) => {
    const [itemDetail, setItemDetail] = useState({});

    // UseEffect
    useEffect(() => {
      axios(`https://api.github.com/users/${id}`).then((res) =>
        setItemDetail(res.data)
      );
    }, []);

    return <ItemDetail  item={itemDetail}/>
}

export default ItemDetailContainer