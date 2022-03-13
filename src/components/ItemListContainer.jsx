import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemCount } from "./ItemCount";
import { ItemDetailContainer } from "./ItemDetailContainer";
import itemsDb from "./ItemsDb";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(async () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setItems(itemsDb);
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>{props.heading}</h1>
      <h2>{props.subheading}</h2>
      <ItemDetailContainer items={items} />
      <ItemCount stock={5} initial={1} />
    </div>
  );
};
export default ItemListContainer;
