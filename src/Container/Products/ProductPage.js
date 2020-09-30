import React, { Component } from "react";
import Classes from "./ProductPage.module.scss";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import ProductList from "./ProductList/ProductList";

class ProductPage extends Component {
  state = { width: 0 };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
    });
  };
  render() {
    const { products } = this.props;

    return (
      <React.Fragment>
        <Container>
          <br />
          <br />
          <div class="ui horizontal divider">
            <h1
              style={{
                fontSize: "29px",
                color: " #7bed9f",
                fontWeight: "100",
              }}
            >
              Our Products
            </h1>
            <br />
          </div>

          {products ? (
            <ProductList width={this.state.width} products={products} />
          ) : null}
        </Container>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.firestore.ordered.products,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "products" }])
)(ProductPage);
//firestore connect to the projects collection i.e when this component is active ,we will connect to the products collection in the firestore
//whenever this collection is changed fire the firestore reducer which changes the firestore state and updates the component acc..
