import { act } from "react-dom/test-utils";
import * as actionTypes from "../actionTypes/actionTypes";
import { NotificationManager } from "react-notifications";

export const createOrder = (orderData) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("orders")
      .add({ ...orderData })
      .then(() => {
        NotificationManager.success(
          "Order Placed Successfully",
          "Success",
          1000
        );
        dispatch({ type: actionTypes.CREATE_ORDER });
      })
      .catch((err) => {
        NotificationManager.error(`Order Wasn't Placed`, "Server Error", 1000);
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
        let index = 0;
        res.forEach((doc) => {
          orders.push({ ...doc.data(), id: res.docs[index].id });
          index++;
        });
        dispatch({ type: actionTypes.FETCH_ORDERS, orders: orders });
      })
      .catch((err) => console.log(err));
  };
};

export const cancelOrder = (orderId, details) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("orders")
      .doc(orderId)
      .update({
        details: { ...details, cancelled: true },
      })
      .then((res) => {
        NotificationManager.error("Order has been cancelled", "Success", 1000);
        dispatch({ type: actionTypes.CANCEL_ORDER });
      })
      .catch((err) => {
        NotificationManager.erro(
          "Order cannot be cancelled !!",
          "Please try again",
          1000
        );
      });
  };
};
