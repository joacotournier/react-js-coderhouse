import ItemDetail from "./ItemDetail";
import ItemsDb from "./ItemsDb";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const itemsDb = ItemsDb;

const itemsPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(itemsDb);
  }, 5000);
});

export default function ItemDetailContainer({}) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
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
  return (
    <div class="items-wrapper">
      <ItemDetail
        title={itemsDb[1].title}
        price={itemsDb[1].price}
        image={itemsDb[1].image}
        key={itemsDb[1].id}
        effect={itemsDb[1].effect}
        banner={itemsDb[1].banner}
        stock={itemsDb[1].stock}
        category={itemsDb[1].category}
        highlight={true}
      />
      <ItemCount stock={5} initial={1} />
    </div>
  );
}
export { ItemDetailContainer };
