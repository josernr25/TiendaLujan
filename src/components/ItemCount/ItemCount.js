import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const countUp = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const countDown = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="qty mt-5">
        <span
          onClick={() => {
            countDown();
          }}
          className="minus bg-dark"
        >
          -
        </span>
        <input type="number" value={count} className="count"></input>
        <span
          onClick={() => {
            countUp();
          }}
          className="plus bg-dark"
        >
          +
        </span>
      </div>
      <div className="ButtonBuy">
        <Button
          basic
          color="black"
          content="Agregar al Carrito"
          onClick={() => {
            onAdd(count);
          }}
        />
      </div>
    </>
  );
};

export default ItemCount;
