import * as React from "react"
import { useCart } from "../cart-context"
// import {useReducer} from "react"
import { useWishList } from "../wishlist-context"

export default function WishList({ items }) {

  const { itemsInWishList } = useWishList()

  // function reducerFunc(state, action) {
  //   switch (action.TYPE) {
  //     case "INCREMENT":
  //       return {
  //         ...state,
  //         itemsInWishList: state.itemsInWishList.map((item) =>
  //           item._id === action.payload._id
  //             ? { ...item, quantity: item.quantity + 1 }
  //             : item
  //         )
  //       }
  //     case "DECREMENT":
  //       return {
  //         ...state,
  //         itemsInWishList: state.itemsInWishList.map((item) =>
  //           item._id === action.payload._id
  //             ? { ...item, quantity: item.quantity - 1 }
  //             : item
  //         )
  //       }
  //     case "REMOVE":
  //       return {
  //         ...state,
  //         itemsInWishList: state.itemsInWishList.filter(
  //           (item) => item._id !== action.payload._id
  //         )
  //       }
  //     default:
  //       break
  //   }
  //   return state
  // }

  // const [state, dispatch] = useReducer(reducerFunc, { itemsInWishList })
  const { itemsInCart, setItemsInCart } = useCart()

  return(
  <>

{itemsInWishList.map((prod) => {
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
              Current Status: <span>{prod.inStock && "In Stock"}</span>  
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
            {/* <button className="button button-secondary"
                  onClick={() => dispatch({ TYPE: "REMOVE", payload: prod })}
                >
                  Remove from WishList
            </button> */}
            {itemsInCart.filter((i) => i._id === prod._id).length > 0 ? (
              <button
                className="button button-secondary"
                disabled
                style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
              >
                Already In Cart
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
   )
  })}
  </>)}
