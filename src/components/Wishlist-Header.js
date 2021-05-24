import { useWishList } from "../wishlist-context";
import React from "react";
import { NavLink } from "react-router-dom";

export default function WishListHeader() {
  const { itemsInWishList } = useWishList();
  return (
    <NavLink
      to="/wishlist"
      activeClassName="selected"
      activeStyle={{
        fontWeight: "bold"
      }}
    >
      <div class="badge-box">
        <div class="badge-item">
          <i class="fa fa-bell" aria-hidden="true"></i>
          <span class="num">{itemsInWishList.length}</span>
        </div>
      </div>
    </NavLink>
  );
}
