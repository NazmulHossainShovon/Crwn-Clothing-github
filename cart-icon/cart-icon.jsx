import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../assets/111 shopping-bag.svg";
import { CartContext } from "../context/cart.context";
import "./cart-icon.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggle = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">5</span>
    </div>
  );
};
export default CartIcon;