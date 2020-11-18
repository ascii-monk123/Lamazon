import React, { Component } from "react";
import Classes from "./Profile.module.scss";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class Profile extends Component {
  render() {
    const { auth, profile } = this.props;
    if (!auth.uid) return <Redirect to="/" />;
    return (
      <div className={Classes.ProfileContainer}>
        <br />
        <br />
        <h1>{[profile.firstName, profile.lastName].join(" ")}</h1>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(Profile);
