import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductPage from "../Container/Products/ProductPage";
import ProductDetails from "../Container/Products/ProductDetails/ProductDetails";
import Cart from "../Container/Cart/Cart";
import Checkout from "../Container/Checkout/Checkout";
import SignIn from "../Component/Auth/SignIn";
import SignUp from "../Component/Auth/SignUp";
import Orders from "../Container/Orders/Orders";
import OrderNotPlaced from "../Component/OrderNotPlaced";
import Profile from "../Container/Profile/Profile";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={ProductPage} />
        <Route path="/product/:id" exact component={ProductDetails} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/SignIn" exact component={SignIn} />
        <Route path="/SignUp" exact component={SignUp} />
        <Route path="/Orders" exact component={Orders} />
        <Route path="/order-not-placed" exact component={OrderNotPlaced} />
        <Route path="/Profile" exact component={Profile} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
