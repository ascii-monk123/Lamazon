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
  List
} from "semantic-ui-react";
import CartCard from "./CartCard";
import { connect } from "react-redux";
import uniqid from "uniqid";
import Background from "../../assets/shoppingbag.jpg";
class Cart extends Component {
  render() {
    const { cart } = this.props;
    if (cart.length === 0) {
      return (
        <div className={Classes.Empty}>
          <Container
            style={{
              textAlign: "center",
            }}
          >
            <Image
              src={Background}
              size="medium"
              style={{
                margin: "10px auto",
              }}
            />
            <h2>Hey,it feels so light!</h2>
            <p>There's nothing in your bag let's add some items.</p>
          </Container>
        </div>
      );
    }

    return (
      <React.Fragment>
        <div className={Classes.Container}>
          <Grid divided>
            <Grid.Row columns={2}>
              <Grid.Column computer={8} tablet={16}>
                <h2 className={Classes.CartTitle}>
                  Your cart ({this.props.total} item)
                </h2>
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
    total: state.cart.total,
  };
};

export default connect(mapStateToProps)(Cart);
