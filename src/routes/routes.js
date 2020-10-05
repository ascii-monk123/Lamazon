import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductPage from "../Container/Products/ProductPage";
import ProductDetails from "../Container/Products/ProductDetails/ProductDetails";
import Cart from "../Container/Cart/Cart";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={ProductPage} />
        <Route path="/product/:id" exact component={ProductDetails} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
