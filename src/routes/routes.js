import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductPage from "../Container/Products/ProductPage";
import ProductDetails from "../Container/Products/ProductDetails/ProductDetails";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={ProductPage} />
        <Route path="/product/:id" component={ProductDetails} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
