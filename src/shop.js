/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

const Shop = () => {
  const { products, setProducts } = useContext(GlobalContext);
  // const fetchData = ;
  useEffect(() => {
    // fetchData();
    (async () => {
      const fetchItems = await fetch(
        "https://fortnite-api.theapinetwork.com/store/get"
      );
      const { data } = await fetchItems.json();
      setProducts(data);
    })();
  }, []);
  console.log("rendered shop");
  return (
    <div>
      {products.map((product) => (
        <a key={product.itemId} href={`/shop/${product.itemId}`}>
          <h2>{product.item.name}</h2>
        </a>
      ))}
    </div>
  );
};
export default Shop;
