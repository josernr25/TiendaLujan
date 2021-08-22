import React from "react";
import Item from './../Item/Item';
import './ItemList.css'

/*
Utilizar una api externa de github, y mostrar por consola
la respuesta luego de que el primer renderizado del componente. 

Luego pasar la respuesta a un estado de React, y luego loopear
La respuesta y pintar en la UI una propiedad del objeto
*/

const ItemList = ({users}) => {

    return (
        <>
            <h1 className="productsTitle">Simulacion de productos</h1>
            <div className="wrapper" > {
                users.map((user) => {
                    return (
                        <Item key={
                                user.id
                            }
                            name={
                                user.login
                            }
                            image={
                                user.avatar_url
                            }/>
                    );
                })
            } </div>
        </>
    );
};

export default ItemList;
