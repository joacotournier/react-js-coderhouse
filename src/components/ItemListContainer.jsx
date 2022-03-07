import { useEffect, useState } from "react";
import { ItemCount } from "./ItemCount";
import { ItemList } from "./ItemList";
export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
/*
  try {
    useEffect(async () => {
      const data = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${props.heading}`
      )
        .then((response) => response.json())
        .then((data) => {
          setItems(data.results);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, [props.heading]);
    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>{error.message}</p>;
    }
    */
    return (
      <div>
        <h2>{props.heading}</h2>
        <ItemCount />
        <ItemList items={items} />
      </div>
    );
    /*
  } catch (error) {
    return <p>{error.message}</p>;
  }
  */
}
export default ItemListContainer;
