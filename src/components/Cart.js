import * as React from "react"
// import {useReducer} from "react"
import { useCart } from "../cart-context"
import { useWishList } from "../wishlist-context"

export default function Cart({ items }) {
  const { itemsInCart } = useCart()

  // function reducerFunc(state, action) {
  //   switch (action.TYPE) {
  //     case "INCREMENT":
  //       return {
  //         ...state,
  //         itemsInCart: state.itemsInCart.map((item) =>
  //           item._id === action.payload._id
  //             ? { ...item, quantity: item.quantity + 1 }
  //             : item
  //         )
  //       }
  //     case "DECREMENT":
  //       return {
  //         ...state,
  //         itemsInCart: state.itemsInCart.map((item) =>
  //           item._id === action.payload._id
  //             ? { ...item, quantity: item.quantity - 1 }
  //             : item
  //         )
  //       }
  //     case "REMOVE":
  //       return {
  //         ...state,
  //         itemsInCart: state.itemsInCart.filter(
  //           (item) => item._id !== action.payload._id
  //         )
  //       }
  //     default:
  //       break
  //   }
  //   return state
  // }

  // const [state, dispatch] = useReducer(reducerFunc, { itemsInCart })

  const { itemsInWishList, setItemsInWishList } = useWishList()

  return(
  <>
    {itemsInCart.map((prod) => {
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
        <div class="card">
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
                  Remove from cart
            </button> */}
            {itemsInWishList.filter((i) => i._id === prod._id).length > 0 ? (
              <button
                className="button button-secondary"
                disabled
                style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
              >
                Added To Wishlist
              </button>
            ) : (
              <button
                className="button button-primary"
                style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
                onClick={() => setItemsInWishList((items) => [...items, prod])}
              >
                Add To Wishlist
              </button>
            )}
          </div>
        </div>
      </div>
    )
  })}
  </>)
  


  //  +, - and remove functionality code

    // return (
    //   <>
    //     {state.itemsInCart.map((prod) => {
    //       return (
    //         <>
    //           <div
    //             style={{
    //               border: "1px solid #4B5563",
    //               borderRadius: "0 0 0.5rem 0.5rem",
    //               margin: "1rem",
    //               maxWidth: "40%",
    //               padding: "0 0 1rem"
    //             }}
    //             key={prod.id}
    //           >
    //             <img
    //               src={prod.image}
    //               width="100%"
    //               height="auto"
    //               alt={prod.productName}
    //             />
    //             {prod.name} <p>Rs.{prod.price}</p>{" "}
    //             {prod.inStock && <p> In Stock </p>}
    //             {!prod.inStock && <p> Out of Stock </p>}
    //             <p>{prod.level}</p>
    //             {prod.fastDelivery ? (
    //               <p> Fast Delivery </p>
    //             ) : (
    //               <p> 3 days minimum </p>
    //             )}
    //             <p>Rating: {prod.ratings} stars</p>
    //             <button
    //               onClick={() => dispatch({ TYPE: "INCREMENT", payload: prod })}
    //             >
    //               +
    //             </button>
    //             {prod.quantity}
    //             <button
    //               onClick={() => dispatch({ TYPE: "DECREMENT", payload: prod })}
    //             >
    //               -
    //             </button>
    //             <button
    //               onClick={() => dispatch({ TYPE: "REMOVE", payload: prod })}
    //             >
    //               Remove from cart
    //             </button>
    //             {itemsInWishList.filter((i) => i.id === prod.id).length > 0 ? (
    //               <button
    //                 disabled
    //                 style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
    //               >
    //                 Added To Wishlist
    //               </button>
    //             ) : (
    //               <button
    //                 style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
    //                 onClick={() =>
    //                   setItemsInWishList((items) => [...items, prod])
    //                 }
    //               >
    //                 Add To Wishlist
    //               </button>
    //             )}
    //           </div>
    //         </>
    //       )
    //     })}
    //   </>
    // )
}
