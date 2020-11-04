import * as actionTypes from "../actionTypes/actionTypes";
import { getFirestore } from "redux-firestore";

export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: actionTypes.SIGN_IN_SUCCESS });
      })
      .catch((error) => {
        dispatch({ type: actionTypes.SIGN_IN_ERROR, error });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: actionTypes.SIGN_OUT_SUCCESS });
      });
  };
};
