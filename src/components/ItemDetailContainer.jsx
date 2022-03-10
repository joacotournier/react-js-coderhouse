import Item from "./ItemDetail";
export default function ItemDetailContainer({ items }) {
  return (
    <div class="items-wrapper">
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
export { ItemDetailContainer };
