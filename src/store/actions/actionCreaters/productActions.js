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
      .add({ ...product })
      .then((res) => {
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
