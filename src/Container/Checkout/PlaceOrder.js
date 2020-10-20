import React from "react";
import { Grid, Container, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import CheckOutCard from "./CheckoutCard";
import uniqid from "uniqid";
import Classes from "./Payment.module.css";
const PlaceOrder = (props) => {
  const { cart, price, total, shipping, checkoutPrice } = props;
  let orders = null;
  if (cart.length > 0) {
    orders = (
      <div style={{ marginTop: "50px" }}>
        <h1>Confirm Your Order :</h1>
        <Grid style={{ marginTop: "70px" }}>
          <Grid.Row columns={2}>
            <Grid.Column computer={8} tablet={16}>
              {cart.map((item) => (
                <CheckOutCard key={uniqid()} item={item} />
              ))}
            </Grid.Column>
            <Grid.Column computer={8} tablet={16}>
              <Container className={Classes.mt80}>
                <h1>Order Summary :</h1>
                <p>
                  Cart Subtotal: <span className={Classes.green}>${price}</span>
                </p>
                <p>+</p>
                <p>
                  Shipping : <span className={Classes.red}>${shipping}</span>
                </p>
                <p>
                  Total Price (Inc.Taxes) ={" "}
                  <span className={Classes.purple}>${checkoutPrice}</span>
                </p>
                <br />
                <Button color="green" size="huge" fluid>
                  Place Your Order
                </Button>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
  return <React.Fragment>{orders}</React.Fragment>;
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    price: state.cart.totalPrice,
    total: state.cart.total,
    shipping: state.cart.shippingCharges,
    checkoutPrice: state.cart.checkoutPrice,
  };
};

export default connect(mapStateToProps)(PlaceOrder);
