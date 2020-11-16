import * as actionTypes from "../actionTypes/actionTypes";

export const createOrder = (orderData) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("orders")
      .add({ ...orderData })
      .then(() => dispatch({ type: actionTypes.CREATE_ORDER }))
      .catch((err) => {
        dispatch({ type: actionTypes.ORDER_ERROR });
      });
  };
};
