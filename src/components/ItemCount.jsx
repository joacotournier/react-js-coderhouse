import { useState } from "react";
import { toast } from "react-toastify";

export const ItemCount = (props) => {
  const [count, setCount] = useState(props.initial);
  const [stock, setStock] = useState(props.stock);
  const add = () => {
    stock > 0 && setCount(count + 1);
    stock > 0 && setStock(stock - 1);
    stock < 2 && toast.error(`No more stock available ${String.fromCodePoint(0x1F614)}`);
  };
  const substract = () => {
    count > 0 && setCount(count - 1);
    count > 0 && setStock(stock + 1);
  };
  return (
    <div>
      <button onClick={add}>MÁS</button>
      <button onClick={substract}>MENOS</button>
      <p>Count: {count}</p>
      <p>Stock: {stock}</p>
    </div>
  );
};

export default ItemCount;
