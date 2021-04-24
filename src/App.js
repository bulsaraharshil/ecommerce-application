import React, { useReducer } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { useCart } from "./cart-context";
import { useProduct } from "./product-context";
import { useWishList } from "./wishlist-context";
import Products from "./components/Products";
import Cart from "./components/Cart";
import WishList from "./components/Wishlist";
// import Checkout from "./components/Checkout";
import CartHeader from "./components/Cart-Header";
import WishListHeader from "./components/Wishlist-Header";
import NotFound from "./components/NotFound";
import logo from "./logo.svg";
import "./styles.css";

export default function App() {
  const { itemsInProduct } = useProduct();
  const { itemsInCart } = useCart();
  const { itemsInWishList } = useWishList();
  const [
    { showInventoryAll, showFastDeliveryOnly, sortBy },
    dispatch
  ] = useReducer(
    function reducer(state, action) {
      switch (action.type) {
        case "TOGGLE_INVENTORY":
          return (state = {
            ...state,
            showInventoryAll: !state.showInventoryAll
          });

        case "TOGGLE_DELIVERY":
          return (state = {
            ...state,
            showFastDeliveryOnly: !state.showFastDeliveryOnly
          });
        case "SORT":
          return {
            ...state,
            sortBy: action.payload
          };
        default:
          return state;
      }
    },
    {
      showInventoryAll: true,
      showFastDeliveryOnly: false,
      sortBy: null
    }
  );

  function getSortedDataProduct(productList, sortBy) {
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return productList.sort((a, b) => b["price"] - a["price"]);
    }

    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return productList.sort((a, b) => a["price"] - b["price"]);
    }
    return productList;
  }

  function getFilteredDataProduct(
    productList,
    { showFastDeliveryOnly, showInventoryAll }
  ) {
    return productList
      .filter(({ fastDelivery }) =>
        showFastDeliveryOnly ? fastDelivery : true
      )
      .filter(({ inStock }) => (showInventoryAll ? true : inStock));
  }

  const sortedDataProduct = getSortedDataProduct(itemsInProduct, sortBy);
  const filteredDataProduct = getFilteredDataProduct(sortedDataProduct, {
    showFastDeliveryOnly,
    showInventoryAll
  });

  //For Cart
  function getSortedDataCart(cartList, sortBy) {
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return cartList.sort((a, b) => b["price"] - a["price"]);
    }

    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return cartList.sort((a, b) => a["price"] - b["price"]);
    }
    return cartList;
  }

  function getFilteredDataCart(
    cartList,
    { showFastDeliveryOnly, showInventoryAll }
  ) {
    return cartList
      .filter(({ fastDelivery }) =>
        showFastDeliveryOnly ? fastDelivery : true
      )
      .filter(({ inStock }) => (showInventoryAll ? true : inStock));
  }

  const sortedDataCart = getSortedDataCart(itemsInCart, sortBy);
  const filteredDataCart = getFilteredDataCart(sortedDataCart, {
    showFastDeliveryOnly,
    showInventoryAll
  });

  // For Wishlist
  function getSortedDataWishList(wishList, sortBy) {
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return wishList.sort((a, b) => b["price"] - a["price"]);
    }

    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return wishList.sort((a, b) => a["price"] - b["price"]);
    }
    return wishList;
  }

  function getFilteredDataWishList(
    wishList,
    { showFastDeliveryOnly, showInventoryAll }
  ) {
    return wishList
      .filter(({ fastDelivery }) =>
        showFastDeliveryOnly ? fastDelivery : true
      )
      .filter(({ inStock }) => (showInventoryAll ? true : inStock));
  }

  const sortedDataWishList = getSortedDataWishList(itemsInWishList, sortBy);
  const filteredDataWishList = getFilteredDataWishList(sortedDataWishList, {
    showFastDeliveryOnly,
    showInventoryAll
  });

  return (
    <>
      <div className="App">
        <h1 className="center-text">Bulsara Ecom : A Pilot's Hub</h1>

        <nav class="desktop-nav">
          <ul style={{ paddingInlineStart: "1rem" }}>
            <div class="logo">
              <img src={logo} style={{ width: "4rem" }} alt="logo" />
            </div>
            <li>
              <NavLink
                end
                to="/"
                activeClassName="selected"
                activeStyle={{
                  fontWeight: "bold"
                }}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                activeClassName="selected"
                activeStyle={{
                  fontWeight: "bold"
                }}
              >
                Cart
              </NavLink>{" "}
            </li>
            <li>
              <NavLink
                to="/wishlist"
                activeClassName="selected"
                activeStyle={{
                  fontWeight: "bold"
                }}
              >
                WishList
              </NavLink>{" "}
            </li>
            <div className="cart-wishlist">
              <CartHeader />
              <WishListHeader />
            </div>
            {/* <li>
              <NavLink
                to="/checkout"
                activeClassName="selected"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }}
              >
                Checkout
              </NavLink>
            </li> */}
          </ul>
        </nav>
        <br />
        <section id="page">
          <nav class="nav">
            <fieldset class="fieldset">
              <legend>Sort By</legend>
              <label>
                <input
                  type="radio"
                  name="sort"
                  onChange={() =>
                    dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
                  }
                  checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
                ></input>{" "}
                Price - High to Low
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="sort"
                  onChange={() =>
                    dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
                  }
                  checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
                ></input>{" "}
                Price - Low to High
              </label>
            </fieldset>

            <fieldset class="fieldset">
              <legend> Filters </legend>
              <label>
                <input
                  type="checkbox"
                  checked={showInventoryAll}
                  onChange={() => dispatch({ type: "TOGGLE_INVENTORY" })}
                />
                Include Out of Stock
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  checked={showFastDeliveryOnly}
                  onChange={() => dispatch({ type: "TOGGLE_DELIVERY" })}
                />
                Fast Delivery Only
              </label>
            </fieldset>
          </nav>

          <div
            class="main"
            style={{
              border: "1px solid #4B5563",
              borderRadius: "0 0 0.5rem 0.5rem",
              margin: "1rem",
              padding: "0 0 1rem",
              display: "flex",
              flexWrap: "wrap"
            }}
          >
            {" "}
            <Routes>
              {" "}
              <Route
                path="/"
                element={<Products items={filteredDataProduct} />}
              />{" "}
              <Route path="/cart" element={<Cart items={filteredDataCart} />} />{" "}
              <Route
                path="/wishlist"
                element={<WishList items={filteredDataWishList} />}
              />{" "}
              {/* <Route path="/checkout" element={<Checkout />} />{" "} */}
              <Route path="*" element={<NotFound />} />{" "}
            </Routes>{" "}
          </div>
        </section>
      </div>
    </>
  );
}
