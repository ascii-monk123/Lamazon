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

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (e, { name, value }) => {
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = () => {
    this.props.login(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
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

                <Button
                  color="green"
                  fluid
                  size="huge"
                  onClick={this.handleSubmit}
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New User ? <NavLink to="/SignUp">Sign Up</NavLink>
            </Message>
            {authError ? <Message color="red">{authError}</Message> : null}
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.errorMessage,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => dispatch(actions.signIn(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
