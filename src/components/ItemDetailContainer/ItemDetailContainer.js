import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
import { db } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore/lite';



const ItemDetailContainer = ({ id }) => {
    const [itemDetail, setItemDetail] = useState({});
    console.log("itemdetail",itemDetail)
    async function getProduct(db) {
      const q = query(collection(db, "products"), where("id", "==", parseInt(id)));
      const productsSnapshot = await getDocs(q);
      console.log(productsSnapshot)
      //console.log(citySnapshot)
      const finalProducts = productsSnapshot.docs.map(doc => doc.data());

      setItemDetail(finalProducts[0]);
    }
    // UseEffect
    useEffect(() => {
            getProduct(db)
    }, []);

    return itemDetail && <ItemDetail  item={itemDetail}/>
}

export default ItemDetailContainer