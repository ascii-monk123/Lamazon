import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import { Provider, useSelector } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import {
  ReactReduxFirebaseProvider,
  getFirebase,
  isLoaded,
} from "react-redux-firebase";
import firebase from "firebase/app";
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore,
} from "redux-firestore";
import fbconfig from "./config/fbconfig";
import rootReducer from "./store/reducers/rootReducer";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, fbconfig)
  )
);
const rrfProps = {
  firebase,
  config: fbconfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const AuthLoaded = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <div>Loading the app....</div>;
  return children;
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <AuthLoaded>
          <App />
        </AuthLoaded>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
