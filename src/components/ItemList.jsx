import Item from "./Item";
export default function ItemList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <Item
          title={item.title}
          price={item.price}
          img={item.thumbnail}
          key={item.id}
        />
      ))}
    </div>
  );
}
export {ItemList};