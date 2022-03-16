function ItemDetail({ title, price, image, effect, banner, stock, category, highlight }) {
  return (
    <>
    <div className={"highlighted-sauce"}>
      <img src={image} alt={title} className="sauce-img" />
      <img src={effect} alt={title} ClassName="sauce-effect" />
      <div className="sauce-banner">
        <img src="../banner.png" alt={title} />
        <div className="sauce-banner-content">{stock}{"\n"}<span className="small">Stock</span></div>
      </div>
    </div>
    </>
  );
}

export default ItemDetail;
