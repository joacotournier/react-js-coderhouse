import Item from "./Item";
import props from "./ItemsDb";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ItemDetail from "./ItemDetail";
import ItemCount from "./ItemCount";

export default function ItemList(props) {
  const { id } = useParams();
  const [highlighted, setHighlighted] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleClick = (id) => {
    const newHighlighted = [...highlighted];
    newHighlighted[id] = !newHighlighted[id];
    setHighlighted(newHighlighted);
  };
  const products = props.items;
  const filteredItems = products.filter((item) => {
    if (id) {
      return item.category === id;
    }
    return item;
  });

  return (
    <section className="items-wrapper">
      {filteredItems.map((products, i) => (
        <div>
          {highlighted[i] ? (
            <>
              <div onClick={() => handleClick(i)}>
                <ItemDetail
                  title={products.title}
                  price={products.price}
                  image={products.image}
                  key={products.id}
                  effect={products.effect}
                  banner={products.banner}
                  stock={products.stock}
                  category={products.category}
                />
              </div>
              <ItemCount stock={products.stock} initial={0} />
            </>
          ) : (
            <div onClick={() => handleClick(i)}>
              <Item
                title={products.title}
                price={products.price}
                image={products.image}
                key={products.id}
                effect={products.effect}
                banner={products.banner}
                stock={products.stock}
                category={products.category}
              />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
export { ItemList };
