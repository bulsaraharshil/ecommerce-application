import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { CartProvider } from "./cart-context";
import { ProductProvider } from "./product-context";
import { WishListProvider } from "./wishlist-context";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <WishListProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </WishListProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>,
  rootElement
);
