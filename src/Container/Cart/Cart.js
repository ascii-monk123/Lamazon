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
  List,
} from "semantic-ui-react";
import CartCard from "./CartCard";
import { connect } from "react-redux";
import uniqid from "uniqid";
import Background from "../../assets/shoppingbag.jpg";
import { Redirect } from "react-router-dom";
class Cart extends Component {
  state = {
    isSignedIn: false,
  };
  proceedToCheckOut = () => {
    if (this.props.auth.uid) {
      this.props.history.push("/checkout");
    } else {
      this.props.history.push("/signIn");
    }
  };
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
              <Grid.Column computer={8} tablet={16} className={Classes.mt40}>
                <h2 className={Classes.CartTitle}>
                  Cart Total{" "}
                  <span className={Classes.greenText}>${this.props.price}</span>
                </h2>
                <br />
                <br />
                <List
                  divided
                  verticalAlign="middle"
                  style={{
                    textAlign: "center",
                    width: "40%",
                    margin: "0 auto",
                  }}
                >
                  <List.Item>
                    <List.Content>
                      <p>
                        Total Price including taxes ={" "}
                        <span className={Classes.blueText}>
                          ${this.props.price}
                        </span>
                      </p>
                    </List.Content>
                  </List.Item>
                  <p>+</p>
                  <List.Item>
                    <List.Content>
                      <p>
                        Shipping Charges ={" "}
                        <span className={Classes.redText}>
                          ${this.props.shipping}
                        </span>
                      </p>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <p>
                        Total Charges ={" "}
                        <span className={Classes.greenText}>
                          ${this.props.checkoutPrice}
                        </span>
                      </p>
                    </List.Content>
                  </List.Item>
                </List>

                <Button
                  size="huge"
                  style={{
                    width: "60%",
                    display: "block",
                    margin: "40px auto",
                  }}
                  color="green"
                  onClick={this.proceedToCheckOut}
                >
                  <Button.Content>Procced To Checkout</Button.Content>
                </Button>
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
    shipping: state.cart.shippingCharges,
    checkoutPrice: state.cart.checkoutPrice,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Cart);
