import React, { useState } from "react";
import {
  Container,
  Segment,
  Form,
  FormField,
  Radio,
  Button,
} from "semantic-ui-react";

const PaymentForm = (props) => {
  const { payment } = props;
  return (
    <React.Fragment>
      <Container style={{ marginTop: "70px" }}>
        <h1 style={{ textAlign: "center" }}>
          Please Select The Payment Method
          <Form style={{ marginTop: "40px" }}>
            <Form.Field>
              <Radio
                label="Paypal"
                name="Payment Type"
                value="paypal"
                checked={payment === "paypal"}
                onChange={(e, { value }) => props.handleChange(e, { value })}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="COD"
                name="Payment Type"
                value="cod"
                checked={payment === "cod"}
                onChange={(e, { value }) => props.handleChange(e, { value })}
              />
            </Form.Field>
            <br /> <br /> <br />
            <Button size="huge" color="red" onClick={props.back}>
              <Button.Content>Back To Shipping Details</Button.Content>
            </Button>
            <Button size="huge" color="green" onClick={props.next}>
              <Button.Content>Proceed To Pay</Button.Content>
            </Button>
          </Form>
        </h1>
      </Container>
    </React.Fragment>
  );
};

export default PaymentForm;
