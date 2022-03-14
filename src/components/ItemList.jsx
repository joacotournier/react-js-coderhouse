import Item from "./Item";
import ItemsDb from "./ItemsDb";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ItemDetail from "./ItemDetail";
import ItemCount from "./ItemCount";

const itemsDb = ItemsDb;

const itemsPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(itemsDb);
  }, 5000);
});

export default function ItemList({}) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
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
  const getItem = () => {
    return itemsPromise;
  };
  useEffect(() => {
    getItem()
      .then((data) => getItem(data))
      .catch((err) =>
        toast.error(`No more stock available ${String.fromCodePoint(0x1f614)}`)
      )
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  const handleClick = (id) => {
    const newHighlighted = [...highlighted];
    newHighlighted[id] = !newHighlighted[id];
    setHighlighted(newHighlighted);
  };

  return (
    <div class="items-wrapper">
      {itemsDb.map((itemsDb, i) => (
        <div>
          {highlighted[i] ? (
            <>
              <div onClick={() => handleClick(i)}>
                <ItemDetail
                  title={itemsDb.title}
                  price={itemsDb.price}
                  image={itemsDb.image}
                  key={itemsDb.id}
                  effect={itemsDb.effect}
                  banner={itemsDb.banner}
                  stock={itemsDb.stock}
                  category={itemsDb.category}
                />
              </div>
              <ItemCount stock={itemsDb.stock} initial={0} />
            </>
          ) : (
            <div onClick={() => handleClick(i)}>
            <Item
              title={itemsDb.title}
              price={itemsDb.price}
              image={itemsDb.image}
              key={itemsDb.id}
              effect={itemsDb.effect}
              banner={itemsDb.banner}
              stock={itemsDb.stock}
              category={itemsDb.category}
            />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export { ItemList };
