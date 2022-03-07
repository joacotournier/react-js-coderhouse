import { useState } from "react";
export const ItemCount = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  const substract = () => {
    count > 0 && setCount(count - 1);
  };
  return (
    <div>
      <button onClick={add}>MÁS</button>
      <button onClick={substract}>MENOS</button>
      <p>{count}</p>
    </div>
  );
};

export default ItemCount;
