import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ItemCount } from "./ItemCount";
import { ItemList } from "./ItemList";
export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(async () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setItems(data.results);
      })
      .catch((error) => {
        toast.error("Error loading items");
      });
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h2>{props.heading}</h2>
      <ItemCount stock={5} initial={1} />
      <ItemList items={items} />
    </div>
  );
};
export default ItemListContainer;
