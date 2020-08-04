import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

const Single = (props) => {
  const [data, setData] = useState([]);
  const { products } = useContext(GlobalContext);
  console.log(products);
  useEffect(() => {
    (async () => {
      const fetched = await fetch(
        "https://fortnite-api.theapinetwork.com/store/get"
      );
      const products = await fetched.json();
      const [found] = products.data.filter(
        (product) => product.itemId === props.match.params.itemId
      );
      setData(found);
    })();
  }, [props]);

  return (
    <div>
      {data.item && (
        <>
          <h1>{data.item.name}</h1>
          <h2>{data.item.type}</h2>
          <img src={data.item.images.information} alt={data.item.name} />
        </>
      )}
    </div>
  );
};
export default Single;
