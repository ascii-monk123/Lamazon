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
import { NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actionCreaters/exporter";
import validateEmail from "../../helpers/emailValidate";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      showErr: false,
      errMsg: "",
    };
  }
  handleChange = (e, { name, value }) => {
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = () => {
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ showErr: true, errMsg: "Passwords do not match" });
      setTimeout(this.handleDismiss, 3000);
    } else if (
      this.state.firstName.length < 1 ||
      this.state.lastName.length < 1
    ) {
      this.setState({
        showErr: true,
        errMsg: "FirstName & Last Name must have at least 1 character",
      });
      setTimeout(this.handleDismiss, 3000);
    } else if (!validateEmail(this.state.email)) {
      this.setState({ showErr: true, errMsg: "Email noe valid" });
      setTimeout(this.handleDismiss, 3000);
    } else {
      this.props.signUp(this.state);
    }
  };
  handleDismiss = () => {
    this.setState({ showErr: false, errMsg: "" });
  };
  render() {
    let errMssg = null;
    const { error, auth } = this.props;
    if (auth.uid) return <Redirect to="/"></Redirect>;
    let errMsg = null;
    if (this.state.showErr) {
      errMssg = (
        <Message negative onDismiss={this.handleDismiss}>
          <Message.Header>Oops !</Message.Header>
          <p>{this.state.errMsg}</p>
        </Message>
      );
    }
    if (error) {
      errMsg = (
        <Message negative>
          <p>{error}</p>
        </Message>
      );
    }
    return (
      <React.Fragment>
        <Grid
          textAlign="center"
          style={{ height: "auto", marginTop: "80px" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            {errMssg}
            <Header as="h2" color="green" textAlign="center" size="large">
              <Image src="https://cdn2.iconfinder.com/data/icons/funky/64/Amazon-2-512.png" />{" "}
              Create a Lamazon Account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  placeholder="First Name"
                  type="text"
                  style={{ height: "50px", fontSize: "20px" }}
                  name="firstName"
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  placeholder="Last Name"
                  type="text"
                  style={{ height: "50px", fontSize: "20px" }}
                  name="lastName"
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  style={{ height: "50px", fontSize: "20px" }}
                  name="email"
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  style={{ height: "50px", fontSize: "20px" }}
                  name="password"
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Confirm Password"
                  type="password"
                  style={{ height: "50px", fontSize: "20px" }}
                  name="confirmPassword"
                  onChange={this.handleChange}
                />
                <Button
                  color="green"
                  fluid
                  size="huge"
                  onClick={this.handleSubmit}
                >
                  Create an Account
                </Button>
              </Segment>
            </Form>
            {errMsg}
            <Message>
              Already a user ? <NavLink to="/SignIn">Sign In</NavLink>
            </Message>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    error: state.auth.signUpError,
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(actions.signUp(newUser)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
