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

export default function ItemDetailContainer(props) {
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
    <>
    <h1>{props.heading}</h1>
    <h2>{props.subheading}</h2>
    <div class="items-wrapper">
      <ItemDetail
        title={itemsDb[id].title}
        price={itemsDb[id].price}
        image={itemsDb[id].image}
        key={itemsDb[id].id}
        effect={itemsDb[id].effect}
        banner={itemsDb[id].banner}
        stock={itemsDb[id].stock}
        category={itemsDb[id].category}
        highlight={true}
      />
      <ItemCount stock={5} initial={1} />
    </div>
    </>
  );
}
export { ItemDetailContainer };
