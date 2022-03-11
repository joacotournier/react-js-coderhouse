import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer({ items }) {
  return (
    <div class="items-wrapper">
        <ItemDetail
          title={items[1].title}
          price={items[1].price}
          image={items[1].image}
          key={items[1].id}
          effect={items[1].effect}
          banner={items[1].banner}
          stock={items[1].stock}
          category={items[1].category}
          highlight={items[1].highlight}
        />
    </div>
  );
}
export { ItemDetailContainer };
