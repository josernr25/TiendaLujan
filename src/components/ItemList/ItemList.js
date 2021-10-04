import React from "react";
import Item from './../Item/Item';
import './ItemList.css'

/*
Utilizar una api externa de github, y mostrar por consola
la respuesta luego de que el primer renderizado del componente. 

Luego pasar la respuesta a un estado de React, y luego loopear
La respuesta y pintar en la UI una propiedad del objeto
*/

const ItemList = ({items}) => {

    return (
        <>
            <div className="wrapper" > {
                items.map((item) => {
                    return (
                        <Item key={item.id} item={item}/>
                    );
                })
            } </div>
        </>
    );
};

export default ItemList;
