import * as actionTypes from "../actions/actionTypes/actionTypes";
let storage = null;
if (!localStorage.getItem("products")) {
  localStorage.setItem(
    "products",
    JSON.stringify({
      products: null,
      currentProduct: null,
    })
  );
  storage = {
    products: null,
    currentProduct: null,
  };
} else {
  storage = JSON.parse(localStorage.getItem("products"));
}
const initialState = storage;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      const newProducts = action.products.map((product) => ({
        ...product,
        isInCart: false,
      }));
      localStorage.setItem(
        "products",
        JSON.stringify({
          ...state,
          products: [...newProducts],
        })
      );

      return {
        ...state,
        products: [...newProducts],
      };
    case actionTypes.REMOVE_ALL_FROM_CART:
      const nprods = state.products.map((product) => {
        return {
          ...product,
          isInCart: false,
        };
      });
      localStorage.setItem(
        "products",
        JSON.stringify({
          ...state,
          products: nprods,
        })
      );
      return {
        ...state,
        products: nprods,
      };
    case actionTypes.ADDED_TO_CART:
      const updatedProducts = state.products.map((product) => {
        if (product.id === action.id)
          return {
            ...product,
            isInCart: true,
          };
        else
          return {
            ...product,
          };
      });
      localStorage.setItem(
        "products",
        JSON.stringify({
          ...state,
          products: updatedProducts,
        })
      );
      return {
        ...state,
        products: updatedProducts,
      };
    case actionTypes.REMOVED_FROM_CART:
      const updatedProducts2 = state.products.map((product) => {
        if (product.id === action.id)
          return {
            ...product,
            isInCart: false,
          };
        else
          return {
            ...product,
          };
      });
      localStorage.setItem(
        "products",
        JSON.stringify({
          ...state,
          products: updatedProducts2,
        })
      );
      return {
        ...state,
        products: updatedProducts2,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
