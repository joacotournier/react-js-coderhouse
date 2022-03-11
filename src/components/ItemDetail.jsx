function Item({ title, price, image, effect, banner, stock, category }) {
  return (
    <div>
      <div>
        <img src={image} alt={title} class="sauce-img"/>
      </div>
      <p>{price}</p>
    </div>
  );
}
export default Item;
