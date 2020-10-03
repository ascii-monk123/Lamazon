import React, { Component } from "react";
import Classes from "./ProductDetails.module.scss";

class ProductDetails extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <React.Fragment>
        <div className={Classes.ProductDetails}>Hello world</div>
      </React.Fragment>
    );
  }
}

export default ProductDetails;
