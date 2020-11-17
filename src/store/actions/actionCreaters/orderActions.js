import { act } from "react-dom/test-utils";
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

export const fetchOrders = (uid) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const orders = [];
    firestore
      .collection("orders")
      .where("userid", "==", uid)
      .get()
      .then((res) => {
        res.forEach((doc) => orders.push(doc.data()));
        dispatch({ type: actionTypes.FETCH_ORDERS, orders: orders });
      })
      .catch((err) => console.log(err));
  };
};
