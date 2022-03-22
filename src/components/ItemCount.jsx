import { useState } from "react";
import { toast } from "react-toastify";

export const ItemCount = (props) => {
  const [count, setCount] = useState(props.initial);
  const [stock, setStock] = useState(props.stock);
  const onAdd = props.onAdd
  const add = () => {
    stock > 0 && setCount(count + 1);
    stock > 0 && setStock(stock - 1);
    stock < 2 &&
      toast.error(`No more stock available ${String.fromCodePoint(0x1f614)}`);
  };
  const substract = () => {
    count > 0 && setCount(count - 1);
    count > 0 && setStock(stock + 1);
  };

  const goToCheckout = () => {
    window.location.href = "/cart"
    onAdd(count)
  }

  return (
    <div>
      <img src="../less-circle-fill.svg" onClick={substract}></img>
      <button onClick={goToCheckout} >Treat Yourself</button>
      <img src="../add-circle-fill.svg" onClick={add}></img>
      <p>Count: {count}</p>
      <p>Stock: {stock}</p>
    </div>
  );
};

export default ItemCount;
