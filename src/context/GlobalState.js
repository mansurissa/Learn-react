import React, { createContext, useReducer } from "react";
import { GlobalReducer } from "./GlobalReducer";

const initialState = {
  products: [],
};
export const GlobalContext = createContext(initialState);

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const setProducts = (products) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: products,
    });
  };
  return (
    <GlobalContext.Provider value={{ ...state, setProducts }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalState;
