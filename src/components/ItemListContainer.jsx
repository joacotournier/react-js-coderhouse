import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemCount } from "./ItemCount";
import { ItemList } from "./ItemList";
import itemsDb from "./ItemsDb";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  
  useEffect(async () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>{props.heading}</h1>
      <h2>{props.subheading}</h2>
      <ItemList />
    </div>
  );
};
export default ItemListContainer;
