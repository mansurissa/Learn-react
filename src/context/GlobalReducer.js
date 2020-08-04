export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: action.payload,
      };

    default:
      break;
  }
};
