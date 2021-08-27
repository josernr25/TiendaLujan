import React, {useState, useEffect} from 'react'
import ItemList from './../ItemList/ItemList'


const ItemListContainer = () => {
  const [users, setUsers] = useState([]);
    console.log("Users", users);
    // UseEffect
    useEffect(() => {
            fetch("https://api.github.com/users")
              .then((response) => response.json())
              .then((data) => {
                  setUsers(data)
              });
    }, []);

    return (
      <>
      <ItemList users={users}/>
      </>
    );
}

export default ItemListContainer
