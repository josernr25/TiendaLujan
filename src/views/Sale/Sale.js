import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where} from 'firebase/firestore/lite';
import { db } from '../../firebase';
import './Sale.css'
import SaleItemList from "../../components/SaleItemList/SaleItemList";

const Sale = ({match}) => {
  const[sale, setSale] = useState({});

  async function getSale(db) {
    const q = query(collection(db, "sales"), where("saleId", "==", match.params.id));
    const saleSnapshot = await getDocs(q);
    
    //console.log(citySnapshot)
    const finalSale = saleSnapshot.docs.map(doc => doc.data());
    console.log("saleS",finalSale[0])
    setSale(finalSale[0]);
  }

  // UseEffect
  useEffect(() => {
    getSale(db)
  }, []);
  
  return sale && <div className="succeded-sale"><SaleItemList sale={sale}/></div>
}


export default Sale