import * as actionTypes from "../actionTypes/actionTypes";
import { NotificationManager } from "react-notifications";
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

export const clearAllCart = () => {
  return {
    type: actionTypes.REMOVE_ALL_FROM_CART,
  };
};

export const addProduct = (product) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("products")
      .add({
        ...product,
        launched: new Date(),
        weight: product.weight.toString() + "g",
      })
      .then((res) => {
        NotificationManager.success(
          "Product added successfully !!",
          "Added",
          1000
        );
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addLocalProduct = (products, localProducts) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.ADD_PRODUCT,
      products: products,
      localProducts: localProducts,
    });
  };
};

export const deleteProduct = (productId) => {
  return (dispatch, getStore, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("products")
      .doc(productId)
      .delete()
      .then((res) => {
        console.log(res);
        NotificationManager.error(
          "Product removed successfully",
          "Product Removed",
          1000
        );
        dispatch({ type: actionTypes.REMOVE_PRODUCT, prodId: productId });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateProduct = (product, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("products")
      .doc(id)
      .update({ ...product, weight: product.weight.toString() + "g" })
      .then((res) => {
        console.log("Product Updated");
        NotificationManager.success(
          "Product Updated Successfully",
          "Success",
          1000
        );
        dispatch({
          type: actionTypes.UPDATE_PRODUCT,
          product: { ...product, id: id },
        });
        dispatch({
          type: actionTypes.UPDATE_CART,
          product: { ...product, id: id },
        });
      })
      .catch((err) => {
        console.log("product not updated");
        NotificationManager.error("Unable to update product", "Error", 1000);
      });
  };
};
