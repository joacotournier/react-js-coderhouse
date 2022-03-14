import { useEffect, useState } from "react";

function Item({ title, price, image, effect, banner, stock, category, highlight, id }) {
  const [highlighted, setHighlighted] = useState(false);

  const highlightItem = () => {
    setHighlighted(!highlighted);
  };

  return (
    <div
      className={highlighted ? "highlighted-sauce" : "normal-sauce"}
      onClick={highlightItem}
      id={id}
    >
      <img src={image} alt={title} class="sauce-img" />
      <img src={effect} alt={title} class="sauce-effect" />
      <div class="sauce-banner">
        <img src={banner} alt={title} />
        <div class="sauce-banner-content">
          {stock}
          {"\n"}
          <span class="small">Stock</span>
        </div>
      </div>
    </div>
  );
}
export default Item;
