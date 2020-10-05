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

export const addedToCart = (id) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.ADDED_TO_CART, id: id });
  };
};

export const removedFromCart = (id) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.REMOVED_FROM_CART, id: id });
  };
};
