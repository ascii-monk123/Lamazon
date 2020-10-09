import React, { useState } from "react";
import { Form, Button, Segment, Input } from "semantic-ui-react";

const ShippingForm = (props) => {
  const {
    values: {
      firstName,
      lastName,
      email,
      zipCode,
      country,
      state,
      phoneNumber,
      address,
    },
  } = props;
  const [errors, setErrors] = useState({
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    zipError: false,
    countryError: false,
    stateError: false,
    phoneError: false,
    addressError: false,
  });
  const checkErrors = (type, value) => {
    switch (type) {
      case "firstName":
        if (
          value === "" ||
          value === null ||
          value === undefined ||
          value.length <= 1
        )
          setErrors({ ...errors, firstNameError: true });
        else setErrors({ ...errors, firstNameError: false });
        return;
      case "lastName":
        if (
          value === "" ||
          value === null ||
          value === undefined ||
          value.length <= 1
        )
          setErrors({ ...errors, lastNameError: true });
        else setErrors({ ...errors, lastNameError: false });
        return;
      case "email":
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const result = re.test(String(value).toLowerCase());
        if (!result) setErrors({ ...errors, emailError: true });
        else setErrors({ ...errors, emailError: false });
        return;
      case "zipCode":
        const reg = /^[1-9][0-9]{5}$/;
        const res = reg.test(String(value));
        if (!res) setErrors({ ...errors, zipError: true });
        else setErrors({ ...errors, zipError: false });
        return;
      case "country":
        if (value === "" || value === null || value === undefined)
          setErrors({ ...errors, countryError: true });
        else setErrors({ ...errors, countryError: false });
        return;
      case "state":
        if (
          value === "" ||
          value === null ||
          value === undefined ||
          value.length <= 3
        )
          setErrors({ ...errors, stateError: true });
        else setErrors({ ...errors, stateError: false });
        return;
      case "address":
        if (
          value === "" ||
          value === null ||
          value === undefined ||
          value.length <= 5
        )
          setErrors({ ...errors, addressError: true });
        else setErrors({ ...errors, addressError: false });
        return;
      default:
        return;
    }
  };
  return (
    <React.Fragment>
      <h1 style={{ marginTop: "70px" }}>Enter Shipping Details</h1>
      <Segment style={{ marginTop: "30px" }}>
        <Form size="large">
          <Form.Group widths={2}>
            <Form.Field
              control={Input}
              label="First Name"
              placeholder="e.g John"
              name="firstName"
              value={firstName}
              required
              onChange={(e, { name, value }) => {
                props.handleChange(e, { name, value });
                checkErrors("firstName", value);
              }}
              error={errors.firstNameError}
            />
            <Form.Field
              control={Input}
              label="Last Name"
              placeholder="e.g Doe"
              name="lastName"
              value={lastName}
              required
              onChange={(e, { name, value }) => {
                props.handleChange(e, { name, value });
                checkErrors("lastName", value);
              }}
              error={errors.lastNameError}
            />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Field
              control={Input}
              label="Email"
              placeholder="jdoe@gmail.com"
              name="email"
              value={email}
              required
              onChange={(e, { name, value }) => {
                props.handleChange(e, { name, value });
                checkErrors("email", value);
              }}
              error={errors.emailError}
            />
            <Form.Field
              control={Input}
              label="ZIP-CODE"
              placeholder=""
              name="zipCode"
              value={zipCode}
              required
              onChange={(e, { name, value }) => {
                props.handleChange(e, { name, value });
                checkErrors("zipCode", value);
              }}
              error={errors.zipError}
            />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Field
              control={Input}
              label="country"
              placeholder="e.g India"
              name="country"
              value={country}
              required
              onChange={(e, { name, value }) => {
                props.handleChange(e, { name, value });
                checkErrors("country", value);
              }}
              error={errors.countryError}
            />
            <Form.Field
              control={Input}
              label="Phone Number"
              placeholder=""
              name="phoneNumber"
              value={phoneNumber}
              required
              onChange={props.handleChange}
            />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Field
              control={Input}
              label="State"
              placeholder="State"
              name="state"
              value={state}
              required
              onChange={(e, { name, value }) => {
                props.handleChange(e, { name, value });
                checkErrors("state", value);
              }}
              error={errors.stateError}
            />
            <Form.Field
              control={Input}
              label="Address"
              placeholder=""
              name="address"
              value={address}
              required
              onChange={(e, { name, value }) => {
                props.handleChange(e, { name, value });
                checkErrors("address", value);
              }}
              error={errors.addressError}
            />
          </Form.Group>
        </Form>
        <br></br>
        <Button color="green" size="huge" onClick={props.submit}>
          Submit Data
        </Button>
      </Segment>
    </React.Fragment>
  );
};

export default ShippingForm;
