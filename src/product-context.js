import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [itemsInProduct, setItemsInProduct] = useState([]);
  useEffect(() => {
    //to use async/await in useEffect use IIFE method of declaring function
    //IIFE starts
    (async function () {
      try {
        const response = await axios.get("https://doing-it-live-mongoose-1704.harshilbulsara.repl.co/products");
        console.log(response.data.products.map((i)=> i.id));
        setItemsInProduct(response.data.products);
      } catch (error) {
        console.error(error);
      }
    })();
    //IIFE ends in above line
  }, []);

  return (
    <ProductContext.Provider value={{ itemsInProduct, setItemsInProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}
