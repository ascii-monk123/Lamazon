import React, { Component } from "react";
import Classes from "./ProductDetails.module.scss";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class ProductDetails extends Component {
  componentDidMount() {}
  render() {
    if (!this.props.products) {
      return <Redirect to="/" />;
    }
    return (
      <React.Fragment>
        <div className={Classes.ProductDetails}>Hello world</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentProduct: state.products.currentProduct,
    products: state.products.products,
  };
};

export default connect(mapStateToProps)(ProductDetails);
