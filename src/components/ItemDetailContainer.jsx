import Item from "./ItemDetail";
export default function ItemDetailContainer({ items }) {
  return (
    <div class="items-wrapper">
      {items.map((item) => (
        <Item
          title={item.title}
          price={item.price}
          image={item.image}
          key={item.id}
          effect={item.effect}
          banner={item.banner}
          stock={item.stock}
          category={item.category}
          highlight={item.highlight}
        />
      ))}
    </div>
  );
}
export { ItemDetailContainer };
