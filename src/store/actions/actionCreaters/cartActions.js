import * as actionTypes from "../actionTypes/actionTypes";
import { NotificationManager } from "react-notifications";

export const addToCart = (product) => {
  NotificationManager.success("Item added to cart", "Succesful", 500);
  return {
    type: actionTypes.ADD_TO_CART,
    product: product,
  };
};
export const addProduct = (product) => {
  return (dispatch) => {};
};

export const removeFromCart = (product) => {
  NotificationManager.error("Item removed from cart !", "Successful", 500);
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

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART,
  };
};
