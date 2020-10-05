import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import productReducer from "./productReducer";
import cartReducer from "./cartReducers";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;
