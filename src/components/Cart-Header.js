import React from "react";
import { useCart } from "../cart-context";

export default function CartHeader() {
  //using useContext
  // const { cartItems, cartLogger } = useContex(CartContext);
  // using custom hook
  const { itemsInCart } = useCart();

  return (
    <div class="badge-box">
      <div class="badge-item">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        <span class="num">{itemsInCart.length}</span>
      </div>
    </div>
  );
}
