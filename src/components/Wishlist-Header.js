import { useWishList } from "../wishlist-context";
import React from "react";

export default function WishListHeader() {
  const { itemsInWishList } = useWishList();
  return (
    <div class="badge-box">
      <div class="badge-item">
        <i class="fa fa-bell"></i>
        <span class="num">{itemsInWishList.length}</span>
      </div>
    </div>
  );
}
