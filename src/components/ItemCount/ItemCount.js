import React, {useState} from 'react'
import {Button, Input} from 'semantic-ui-react'
import './ItemCount.css'


const ItemCount = ({stock, initial, onAdd}) => {

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
                            onAdd(count)
                        }
                    }/>
            </div>
    </>
    );
}

export default ItemCount
