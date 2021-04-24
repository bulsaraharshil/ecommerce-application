import * as React from "react";
import { useCart } from "../cart-context";

export default function WishList({ items }) {
  const { itemsInCart, setItemsInCart } = useCart();

  return items.map((prod) => {
    return (
      <div
        style={{
          borderRadius: "0 0 0.5rem 0.5rem",
          margin: "1rem",
          marginLeft: "7.5rem",
          padding: "0 0 1rem",
          display: "flex",
          flexWrap: "wrap"
        }}
        className="card-container"
        key={prod._id}
      >
        <div class="card" >
          <div class="card-image">
            <img
              class="img-responsive"
              src={prod.image}
              width="100%"
              height="auto"
              alt={prod.productName}
            />
          </div>
          <div className="card-details"> 
              {prod.name} <br/><br/> 
              Price: Rs.{prod.price}{" "} <br/><br/>
              Stock: <span>{prod.inStock && "In Stock"}</span>  
              {!prod.inStock && "Out of Stock"} <br/><br/>
              Delivery:
              <span>
              {prod.fastDelivery ? (
                " Fast Delivery" 
              ) : (
                " 3 days minimum "
              )}
              </span> <br/><br/>
             
            {/* <p>Rating: {prod.ratings} stars</p> */}
            {itemsInCart.filter((i) => i._id === prod._id).length > 0 ? (
              <button
                className="button button-secondary"
                disabled
                style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
              >
                Added To Cart
              </button>
            ) : (
              <button
                className="button button-primary"
                style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
                onClick={() => setItemsInCart((items) => [...items, prod])}
              >
                Add To Cart
              </button>
            )}
          </div>
        </div>
      </div>
    );
  });
}
