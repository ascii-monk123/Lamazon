import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button } from "semantic-ui-react";

class ProfileEdit extends Component {
  state = {
    showModal: false,
    firstName: "",
    lastName: "",
    image: "",
    allOkay: false,
  };
  checkAll = () => {
    const url = this.state.image;
    if (
      (this.state.firstName.length >= 1 &&
        this.state.lastName.length >= 1 &&
        url.match(/\.(jpeg|jpg|gif|png)$/) != null) ||
      url === ""
    ) {
      this.setState({ allOkay: true });
    }
  };
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
    this.checkAll();
  };
  componentDidMount() {
    const { profile } = this.props;
    this.setState({ ...profile, showModal: false });
    this.checkAll();
  }
  render() {
    return (
      <React.Fragment>
        <Form size="large">
          <Form.Field>
            <label>First Name</label>
            <Input
              type="text"
              value={this.state.firstName}
              name="firstName"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <Input
              type="text"
              value={this.state.lastName}
              name="lastName"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Image Url</label>
            <Input
              type="text"
              value={this.state.image}
              name="image"
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form>
        <br />
        <br />
        {this.state.allOkay ? (
          <Button color="green" size="large">
            Save Changes
          </Button>
        ) : (
          <Button disabled color="green" size="large">
            Save Changes
          </Button>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(ProfileEdit);
