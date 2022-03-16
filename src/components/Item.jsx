import { useEffect, useState } from "react";

function Item({ title, price, image, effect, banner, stock, category, highlight, id }) {

  return (
    <div
      className={"normal-sauce"}
      id={id}
    >
      <img src={image} alt={title} class="sauce-img" />
      <img src={effect} alt={title} class="sauce-effect" />
      <div className="sauce-banner">
        <img src={banner} alt={title} />
        <div class="sauce-banner-content">
          {stock}
          {"\n"}
          <span className="small">Stock</span>
        </div>
      </div>
    </div>
  );
}
export default Item;
