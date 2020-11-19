import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Modal, Header, Icon } from "semantic-ui-react";
import * as actions from "../../../store/actions/actionCreaters/exporter";

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
  showModal = () => {
    this.setState({ showModal: true });
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };
  submitData = () => {
    const profileDetails = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      image: this.state.image,
    };

    this.closeModal();
    this.props.editProfile(profileDetails, this.props.auth.uid);
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
          <Modal
            closeIcon
            open={this.state.showModal}
            trigger={
              <Button color="green" size="large" onClick={this.showModal}>
                Save Changes
              </Button>
            }
            onClose={() => {
              this.closeModal();
            }}
            onOpen={() => {
              this.showModal();
            }}
          >
            <Header icon="archive" content="Save Changes ?" />
            <Modal.Content>
              <p>
                Do you wanna save changes ? You can change details at any time .
              </p>
            </Modal.Content>
            <Modal.Actions>
              <Button
                color="red"
                onClick={() => {
                  this.closeModal();
                }}
              >
                <Icon name="remove" /> No
              </Button>
              <Button
                color="green"
                onClick={() => {
                  this.submitData();
                }}
              >
                <Icon name="checkmark" /> Yes
              </Button>
            </Modal.Actions>
          </Modal>
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
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    editProfile: (profileData, userId) =>
      dispatch(actions.updateProfile(profileData, userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
