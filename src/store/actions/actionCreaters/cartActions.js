import * as actionTypes from "../actionTypes/actionTypes";

export const addToCart = (product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    product: product,
  };
};
export const addProduct = (product) => {
  return (dispatch) => {};
};

export const removeFromCart = (product) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    product: product,
  };
};

export const quantityChanged = (value, productId) => {
  return {
    type: actionTypes.QUANTITY_CHANGED,
    value: value,
    id: productId,
  };
};
