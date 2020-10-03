import * as actionTypes from "../actions/actionTypes/actionTypes";

const initialState = {
  products: [],
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
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
