import React, {useState, useEffect} from 'react'
import { Card } from 'semantic-ui-react'
import ItemCount from './../ItemCount/ItemCount'
import ItemList from './../ItemList/ItemList'

const extra = (
    <ItemCount stock={5} initial={1}/>
)

const ItemListContainer = () => {
  const [users, setUsers] = useState([]);
    console.log("Users", users);
    // UseEffect
    useEffect(() => {
            fetch("https://api.github.com/users")
              .then((response) => response.json())
              .then((data) => {
                setTimeout(() => {
                  setUsers(data)
                }, 2000);
              });
    }, []);

    return (
      <>
      <Card
        header='Bienvenidos de Tienda Lujan'
        description='Que tengas un buen dia'
        extra={extra}
      />
      <ItemList users={users}/>
      </>
    );
}

export default ItemListContainer
