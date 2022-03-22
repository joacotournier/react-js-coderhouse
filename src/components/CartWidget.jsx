import ShoppingBag3LineIcon from "remixicon-react/ShoppingBag3LineIcon";

export function CartWidget(cartCount) {
  return (
    <div className="cart-wrapper">
      <ShoppingBag3LineIcon color="#333333" />
      <div className="cart-count">0</div>
    </div>
  );
}

export default CartWidget;
