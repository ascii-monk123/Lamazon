import React, { Component } from "react";
import Classes from "./Cart.module.scss";
import {
  Grid,
  Image,
  Icon,
  Segment,
  Container,
  Select,
  Button,
} from "semantic-ui-react";
import CartCard from "./CartCard";
import { connect } from "react-redux";
import uniqid from "uniqid";
class Cart extends Component {
  render() {
    const { cart } = this.props;
    if (cart.length === 0) {
      return <div>Cart Is empty!!</div>;
    }

    return (
      <React.Fragment>
        <div className={Classes.Container}>
          <Grid divided>
            <Grid.Row columns={2}>
              <Grid.Column computer={8} tablet={16}>
                <h2 className={Classes.CartTitle}>Your cart (1 item)</h2>
                {cart.map((cartItem) => (
                  <CartCard product={cartItem} key={uniqid()} />
                ))}
              </Grid.Column>
              <Grid.Column computer={8} table={16}>
                <h2 className={Classes.CartTitle}>
                  Cart Total{" "}
                  <span className={Classes.greenText}>${this.props.price}</span>
                </h2>
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
    cart: state.cart.cart,
    price: state.cart.totalPrice,
  };
};

export default connect(mapStateToProps)(Cart);
