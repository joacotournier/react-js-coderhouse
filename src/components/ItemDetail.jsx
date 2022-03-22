import { ItemCount } from "./ItemCount";

function ItemDetail({ title, price, image, effect, banner, stock, category, highlight }) {

  const onAdd = (props) => {
  };
  return (
    <>
    <div className={"highlighted-sauce"}>
      <img src={image} alt={title} className="sauce-img" />
      <img src={effect} alt={title} className="sauce-effect" />
      <div className="sauce-banner">
        <img src="../banner.png" alt={title} />
        <div className="sauce-banner-content">{stock}{"\n"}<span className="small">Stock</span></div>
      </div>
    </div>
    <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
    </>
  );
}

export default ItemDetail;
