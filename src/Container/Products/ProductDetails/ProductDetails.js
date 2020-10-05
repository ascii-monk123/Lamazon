import React, { Component } from "react";
import Classes from "./ProductDetails.module.scss";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import * as actions from "../../../store/actions/actionCreaters/exporter";

import {
  Container,
  Grid,
  Image,
  Button,
  Icon,
  Divider,
  List,
  Rating,
  Dimmer,
  Loader,
} from "semantic-ui-react";

class ProductDetails extends Component {
  state = {
    productId: "",
  };
  added = (product) => {
    console.log(product);
    this.props.addToCart(product);
    this.props.addedToCart(this.props.id);
  };
  render() {
    if (!this.props.product) {
      return (
        <Container>
          <Dimmer active>
            <Loader size="huge">Loading</Loader>
          </Dimmer>
        </Container>
      );
    }
    const { product, selectedProduct } = this.props;
    let button = (
      <Button
        fluid
        color="green"
        size="huge"
        animated="vertical"
        onClick={() => this.added(product)}
      >
        <Button.Content visible>Add to cart</Button.Content>
        <Button.Content hidden>
          <Icon name="shop"></Icon>
        </Button.Content>
      </Button>
    );
    if (selectedProduct) {
      console.log(selectedProduct[0].isInCart);
      if (selectedProduct[0].isInCart) {
        button = (
          <Button disabled fluid color="red" size="huge">
            Added To Cart
          </Button>
        );
      }
    }
    return (
      <React.Fragment>
        <div className={Classes.ProductDetails}>
          <Grid
            style={{
              width: "95%",
              margin: "0 auto",
            }}
          >
            <Grid.Row columns={2}>
              <Grid.Column computer={8} tablet={16}>
                <Grid>
                  <Grid.Row columns={2}>
                    <Grid.Column
                      computer={8}
                      className={Classes.ImageColumn}
                      tablet={4}
                      mobile={8}
                    >
                      <Image
                        src={`${product.images[0]}`}
                        size="medium"
                        className={Classes.ProductImage}
                      />
                    </Grid.Column>
                    <Grid.Column
                      computer={8}
                      className={Classes.ImageColumn}
                      tablet={4}
                      mobile={8}
                    >
                      <Image
                        src={`${product.images[1]}`}
                        size="medium"
                        className={Classes.ProductImage}
                      />
                    </Grid.Column>
                    <Grid.Column
                      computer={8}
                      className={Classes.ImageColumn}
                      tablet={4}
                      mobile={8}
                    >
                      <Image
                        src={`${product.images[2]}`}
                        size="medium"
                        className={Classes.ProductImage}
                      />
                    </Grid.Column>
                    <Grid.Column
                      computer={8}
                      className={Classes.ImageColumn}
                      tablet={4}
                      mobile={8}
                    >
                      <Image
                        src={`${product.images[3]}`}
                        size="medium"
                        className={Classes.ProductImage}
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
              <Grid.Column computer={8} tablet={16} className={Classes.Details}>
                <Container
                  textAlign="justified"
                  text
                  style={{
                    width: "70%",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "30px",
                    }}
                  >
                    {product.company}
                  </h1>
                  <p className={Classes.Description}>{product.title}</p>
                  <br />
                  <p className={Classes.Price}>$ {product.price}</p>
                  <p className={Classes.taxText}>Inclusive of all taxes</p>
                  <br />
                  {button}
                  <br />
                  <br />
                  <br />
                  <Divider />
                  <h2 style={{ fontSize: "20px" }}>
                    Product Details{" "}
                    <Icon name="clipboard outline" style={{ color: "#ccc" }} />
                  </h2>

                  <br />
                  <List celled style={{ fontSize: "17px", color: "#777" }}>
                    <List.Item style={{ padding: "5px 0" }}>
                      <List.Content>Company: {product.company}</List.Content>
                    </List.Item>
                    <List.Item style={{ padding: "5px 0" }}>
                      <List.Content>
                        Manufacturer : {product.manufacturer}
                      </List.Content>
                    </List.Item>
                    <List.Item style={{ padding: "5px 0" }}>
                      <List.Content>Type : {product.type}</List.Content>
                    </List.Item>
                    <List.Item style={{ padding: "5px 0" }}>
                      <List.Content>Weight : {product.weight}</List.Content>
                    </List.Item>
                    <List.Item style={{ padding: "5px 0" }}>
                      <List.Content>
                        Country Of Origin : {product.country_of_origin}
                      </List.Content>
                    </List.Item>
                    <List.Item style={{ padding: "5px 0" }}>
                      <List.Content>
                        Ratings:{" "}
                        <Rating
                          icon="star"
                          defaultRating={product.ratings}
                          maxRating={5}
                          disabled
                        ></Rating>
                      </List.Content>
                    </List.Item>
                  </List>
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const products = state.firestore.data.products;
  const product = products ? products[id] : null;
  const selectedProduct =
    state.products.products && product
      ? state.products.products.filter((product) => product.id === id)
      : null;
  return {
    product: product,
    selectedProduct: selectedProduct,
    id: id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(actions.addToCart(product)),
    addedToCart: (id) => dispatch(actions.addedToCart(id)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "products" }])
)(ProductDetails);
