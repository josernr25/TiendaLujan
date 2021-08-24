import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'



const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    // UseEffect
    useEffect(() => {
            fetch("https://api.github.com/users/1")
              .then((response) => response.json())
              .then((data) => {
                setTimeout(() => {
                  setItem(data)
                }, 2000);
              });
    }, []);

    return <ItemDetail  item={item}/>
}

export default ItemDetailContainer