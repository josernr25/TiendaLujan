import React, {useState, useEffect} from 'react'
import ItemList from './../ItemList/ItemList'
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { db } from '../../firebase';


const ItemListContainer = ({categoryId, searchName, oferta, destacado}) => {
  const [items, setItems] = useState([]);
    console.log("ITEMS", items);

    async function getProducts(db) {
      let q = query(collection(db, "products"));
      const productsSnapshot = await getDocs(q);
      const products = productsSnapshot.docs.map(doc => doc.data());

      let finalProducts = products

      if(searchName)
      {
        finalProducts = products.filter(x => x.name.includes(searchName.toUpperCase()))
      }
      if(categoryId)
      {
        finalProducts = products.filter(x => x.category === parseInt(categoryId))
      }
      if(oferta)
      {
        finalProducts = products.filter(x => x.oferta === true)
      }
      if(destacado)
      {
        finalProducts = products.filter(x => x.destacado === true)
      }

      setItems(finalProducts);
    }

    useEffect(() => {
      getProducts(db)
    },[searchName, categoryId])

    return (
      <>
        <ItemList items={items}/>
      </>
    );
}

export default ItemListContainer
