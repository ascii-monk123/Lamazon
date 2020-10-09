import React, { Component } from "react";
import Classes from "./Checkout.module.scss";
import { Container, Step, Icon, Divider } from "semantic-ui-react";
import ShippingForm from "./ShippingForm";
class Checkout extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    paymentMethod: "",
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
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = () => {
    console.log(this.state);
  };
  render() {
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
            submit={this.handleSubmit}
          />
        );
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
              <Step active>
                <Icon name="truck" />
                <Step.Content>
                  <Step.Title>Shipping</Step.Title>
                  <Step.Description>
                    Choose your shipping options
                  </Step.Description>
                </Step.Content>
              </Step>

              <Step>
                <Icon name="payment" />
                <Step.Content>
                  <Step.Title>Billing</Step.Title>
                  <Step.Description>Enter billing information</Step.Description>
                </Step.Content>
              </Step>

              <Step disabled>
                <Icon name="info" />
                <Step.Content>
                  <Step.Title>Confirm Order</Step.Title>
                </Step.Content>
              </Step>
            </Step.Group>
            {curForm}
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Checkout;
