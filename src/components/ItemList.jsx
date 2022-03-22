import Item from "./Item";
import props from "./ItemsDb";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ItemDetail from "./ItemDetail";
import ItemCount from "./ItemCount";

export default function ItemList(props) {
  const { id } = useParams();

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
            <a href={`/items/${products.id}`}>
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
            </a>
        </div>
      ))}
    </section>
  );
}
export { ItemList };
