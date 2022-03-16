import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemCount } from "./ItemCount";
import { ItemList } from "./ItemList";
import itemsDb from "./ItemsDb";
import { toast } from "react-toastify";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const itemsPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(itemsDb);
      setItems(itemsDb);
      setLoading(false);
    }, 3000);
  }, []);

  const getItem = () => {
    return itemsPromise;
  };

  useEffect(async () => {
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
    <div>
      <h1>{props.heading}</h1>
      <h2>{props.subheading}</h2>
      <ItemList items={items} />
    </div>
  );
};
export default ItemListContainer;
