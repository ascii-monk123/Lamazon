import React, { Component } from "react";
import Classes from "./Checkout.module.scss";
import { Container, Step, Icon, Divider } from "semantic-ui-react";
import ShippingForm from "./ShippingForm";
import PaymentForm from "./PaymentForm";
import PlaceOrder from "./PlaceOrder";
import { connect, connnect } from "react-redux";
import { Redirect } from "react-router-dom";
import makeOrderFormat from "../../helpers/makeOrderFormat";
import * as actions from "../../store/actions/actionCreaters/exporter";
import { actionTypes } from "redux-firestore";
class Checkout extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    paymentMethod: "paypal",
    zipCode: "",
    country: "",
    state: "",
    phoneNumber: "",
  };
  next = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  changeHandler = (e, { name, value }) => {
    if (name === undefined) {
      this.setState({
        paymentMethod: value,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };
  handleSubmit = (type) => {
    if (type === "next") {
      this.next();
    } else if (type === "prev") {
      this.prevStep();
    }
  };
  placeOrder = () => {
    const { auth, products, total } = this.props;
    const userId = auth.uid;
    const orderData = makeOrderFormat(this.state, userId, products, total);
    this.props.placeOrder(orderData);
    this.props.clearCart();
    this.props.clearCartStatus();
    this.props.history.push("/");
  };
  render() {
    const { auth, orderErr } = this.props;
    if (orderErr) {
      return <Redirect to="/order-not-placed" />;
    }
    if (!auth.uid) {
      return <Redirect to="/" />;
    }
    const { step } = this.state;
    let curForm = null;
    const {
      firstName,
      lastName,
      address,
      email,
      paymentMethod,
      zipCode,
      country,
      state,
      phoneNumber,
    } = this.state;
    const values = {
      firstName,
      lastName,
      address,
      email,
      zipCode,
      country,
      state,
      phoneNumber,
    };
    switch (step) {
      case 1:
        curForm = (
          <ShippingForm
            values={values}
            handleChange={(e, { name, value }) => {
              this.changeHandler(e, { name, value });
            }}
            submit={() => this.handleSubmit("next")}
          />
        );
        break;
      case 2:
        curForm = (
          <PaymentForm
            handleChange={(e, { value }) => {
              const handle = "paymentMethod";
              this.changeHandler(e, { handle, value });
            }}
            back={this.prevStep}
            next={this.next}
            payment={this.state.paymentMethod}
          />
        );
        break;
      case 3:
        console.log(this.state);
        curForm = <PlaceOrder clicked={this.placeOrder} />;
        break;
      default:
        return;
    }
    return (
      <React.Fragment>
        <div className={Classes.Checkout}>
          <Container>
            <Step.Group
              style={{
                display: "flex",
                justifyConent: "center",
                width: "60%",
                margin: "20px auto",
              }}
            >
              {this.state.step === 1 ? (
                <Step active>
                  <Icon name="truck" />
                  <Step.Content>
                    <Step.Title>Shipping</Step.Title>
                    <Step.Description>
                      Choose your shipping options
                    </Step.Description>
                  </Step.Content>
                </Step>
              ) : this.state.step >= 2 ? (
                <Step completed>
                  <Icon name="truck" />
                  <Step.Content>
                    <Step.Title>Shipping</Step.Title>
                    <Step.Description>
                      Choose your shipping options
                    </Step.Description>
                  </Step.Content>
                </Step>
              ) : null}
              {this.state.step === 1 ? (
                <Step>
                  <Icon name="payment" />
                  <Step.Content>
                    <Step.Title>Billing</Step.Title>
                    <Step.Description>
                      Enter billing information
                    </Step.Description>
                  </Step.Content>
                </Step>
              ) : this.state.step === 2 ? (
                <Step active>
                  {" "}
                  <Icon name="payment" />
                  <Step.Content>
                    <Step.Title>Billing</Step.Title>
                    <Step.Description>
                      Enter billing information
                    </Step.Description>
                  </Step.Content>
                </Step>
              ) : (
                <Step completed>
                  {" "}
                  <Icon name="payment" />
                  <Step.Content>
                    <Step.Title>Billing</Step.Title>
                    <Step.Description>
                      Enter billing information
                    </Step.Description>
                  </Step.Content>
                </Step>
              )}

              {this.state.step < 3 ? (
                <Step>
                  <Icon name="info" />
                  <Step.Content>
                    <Step.Title>Confirm Order</Step.Title>
                  </Step.Content>
                </Step>
              ) : (
                <Step active>
                  <Icon name="info" />
                  <Step.Content>
                    <Step.Title>Confirm Order</Step.Title>
                  </Step.Content>
                </Step>
              )}
            </Step.Group>
            {curForm}
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    products: state.cart.cart.map((product) => {
      return {
        productId: product.id,
        qty: product.quantity,
        title: product.title,
        image: product.images[0],
        company: product.company,
      };
    }),
    total: state.cart.totalPrice,
    orderErr: state.order.orderPlaceError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    placeOrder: (orderData) => dispatch(actions.createOrder(orderData)),
    clearCart: () => dispatch(actions.clearCart()),
    clearCartStatus: () => dispatch(actions.clearAllCart()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
