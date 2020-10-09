import React, { Component } from "react";
import Classes from "./Checkout.module.scss";
import { Container, Step, Icon } from "semantic-ui-react";
class Checkout extends Component {
    render() {
        return (
<React.Fragment>
    <div className={Classes.Checkout}>
<Container>
<Step.Group style={{display:'flex',justifyConent:'center',width:'60%',margin:'20px auto'}}>
    <Step>
      <Icon name='truck' />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name='payment' />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>

    <Step disabled>
      <Icon name='info' />
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
</Container>
</div>
</React.Fragment>
        );
    }
}

export default Checkout;
