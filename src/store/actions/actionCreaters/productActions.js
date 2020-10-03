import * as actionTypes from "../actionTypes/actionTypes";

export const setProducts = (products) => {
  return {
    type: actionTypes.FETCH_PRODUCTS,
    products: products,
  };
};
export const getProducts = (products) => {
  return (dispatch) => {
    dispatch(setProducts(products));
  };
};
