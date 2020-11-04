import React, { Component } from "react";
import {
  Form,
  Button,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  render() {
    return (
      <React.Fragment>
        <Grid
          textAlign="center"
          style={{ height: "auto", marginTop: "80px" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="green" textAlign="center" size="large">
              <Image src="https://cdn2.iconfinder.com/data/icons/funky/64/Amazon-2-512.png" />{" "}
              Log-in to your account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  style={{ height: "50px", fontSize: "20px" }}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  style={{ height: "50px", fontSize: "20px" }}
                />

                <Button color="green" fluid size="huge">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New User ? <NavLink to="/SignUp">Sign Up</NavLink>
            </Message>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

export default SignIn;
