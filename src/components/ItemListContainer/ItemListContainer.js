import React, {useState, useEffect} from 'react'
import ItemList from './../ItemList/ItemList'
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { db } from '../../firebase';


const ItemListContainer = ({categoryId}) => {
  const [items, setItems] = useState([]);
    console.log("ITEMS", items);

    async function getProducts(db) {
      let q = query(collection(db, "products"));
      if(categoryId){
        q = query(collection(db, "products"), where("category", "==", parseInt(categoryId)));
      }
      const productsSnapshot = await getDocs(q);
      const finalProducts = productsSnapshot.docs.map(doc => doc.data());

      setItems(finalProducts);
    }

    useEffect(() => {
      getProducts(db)
    },[])

    return (
      <>
        <ItemList items={items}/>
      </>
    );
}

export default ItemListContainer
