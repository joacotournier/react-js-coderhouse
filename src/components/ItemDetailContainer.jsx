import ItemDetail from "./ItemDetail";
import ItemsDb from "./ItemsDb";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function ItemDetailContainer(props) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const itemsDb = ItemsDb;
  const itemsPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(itemsDb);
      setItems(itemsDb);
    }, 2000);
  });

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
      <section className="items-wrapper">
        <ItemDetail
          title={items[id].title}
          price={items[id].price}
          image={items[id].image}
          key={items[id].id}
          effect={items[id].effect}
          banner={items[id].banner}
          stock={items[id].stock}
          category={items[id].category}
          highlight={true}
        />
      </section>
    </>
  );
}
export { ItemDetailContainer };
