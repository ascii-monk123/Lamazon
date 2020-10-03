import React, { Component } from "react";
import Classes from "./ProductDetails.module.scss";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  Container,
  Grid,
  Image,
  Button,
  Icon,
  Divider,
  List,
  Rating,
} from "semantic-ui-react";

class ProductDetails extends Component {
  componentDidMount() {}
  render() {
    if (!this.props.products) {
      // return <Redirect to="/" />;
      console.log("hi");
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
                        src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9713947/2020/9/21/43b643db-133c-4a5d-b275-f4c8f528bfa11600665382145-Roadster-Men-Green-Regular-Fit-Solid-Casual-Shirt-7471600665-1.jpg"
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
                        src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9713947/2020/9/21/8bfd830e-9853-4984-aba6-dc9d00008d351600665382104-Roadster-Men-Green-Regular-Fit-Solid-Casual-Shirt-7471600665-2.jpg"
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
                        src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9713947/2020/9/21/6279ac4d-2e58-4317-8398-c1d158e57c9f1600665382057-Roadster-Men-Green-Regular-Fit-Solid-Casual-Shirt-7471600665-3.jpg"
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
                        src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9713947/2020/9/21/44b11d6f-40a6-48d9-b38c-212d265cbe491600665381902-Roadster-Men-Green-Regular-Fit-Solid-Casual-Shirt-7471600665-6.jpg"
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
                    Roadster
                  </h1>
                  <p className={Classes.Description}>
                    Men Olive Green Regular Fit Solid Casual Shirt
                  </p>
                  <br />
                  <p className={Classes.Price}>$ 45.75</p>
                  <p className={Classes.taxText}>Inclusive of all taxes</p>
                  <br />
                  <Button fluid color="green" size="huge" animated="vertical">
                    <Button.Content visible>Add to cart</Button.Content>
                    <Button.Content hidden>
                      <Icon name="shop"></Icon>
                    </Button.Content>
                  </Button>
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
                      <List.Content>Company: Roadster</List.Content>
                    </List.Item>
                    <List.Item style={{ padding: "5px 0" }}>
                      <List.Content>Manufacturer : Roadster India</List.Content>
                    </List.Item>
                    <List.Item style={{ padding: "5px 0" }}>
                      <List.Content>Type : Fashion</List.Content>
                    </List.Item>
                    <List.Item style={{ padding: "5px 0" }}>
                      <List.Content>Weight : 100g</List.Content>
                    </List.Item>
                    <List.Item style={{ padding: "5px 0" }}>
                      <List.Content>Country Of Origin : India</List.Content>
                    </List.Item>
                    <List.Item style={{ padding: "5px 0" }}>
                      <List.Content>
                        Ratings:{" "}
                        <Rating
                          icon="star"
                          defaultRating={4.5}
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

const mapStateToProps = (state) => {
  return {
    currentProduct: state.products.currentProduct,
    products: state.products.products,
  };
};

export default connect(mapStateToProps)(ProductDetails);
