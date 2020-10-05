import * as actionTypes from "../actions/actionTypes/actionTypes";

const initialState = {
  products: null,
  currentProduct: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      const newProducts = action.products.map((product) => ({
        ...product,
        isInCart: false,
      }));

      return {
        ...state,
        products: [...newProducts],
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
      console.log(updatedProducts2);
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
