import React, {useState} from 'react'
import {Button, Input} from 'semantic-ui-react'
import './ItemCount.css'


const ItemCount = ({stock, initial}) => {

    const [count, setCount] = useState(initial);

    const countUp = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const countDown = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const onAdd = () => {
        alert('Agregado al carrito');
    }

    return (
        <>
            <div className="ItemCount">
                <Button basic
                    onClick={
                        () => {
                            countDown()
                        }
                }>
                    -
                </Button>
                <Input className="inputCount"
                    value={count}/>
                <Button basic color='red'
                    onClick={
                        () => {
                            countUp()
                        }
                }>
                    +
                </Button>
            </div>
            <div className="ButtonBuy">
                <Button basic color='blue' content='Agregar al Carrito'
                    onClick={
                        () => {
                            onAdd()
                        }
                    }/>
            </div>
    </>
    );
}

export default ItemCount
