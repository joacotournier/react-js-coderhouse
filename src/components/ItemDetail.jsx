function Item({ title, price, image, effect, banner, stock, category, highlight }) {
  return (
    <div class={highlight ? "highlighted-sauce" : "normal-sauce"}>
      <img src={image} alt={title} class="sauce-img" />
      <img src={effect} alt={title} class="sauce-effect" />
      <div class="sauce-banner">
        <img src={banner} alt={title} />
        <div class="sauce-banner-content">{stock}{"\n"}<span class="small">Stock</span></div>
      </div>
    </div>
  );
}
export default Item;
