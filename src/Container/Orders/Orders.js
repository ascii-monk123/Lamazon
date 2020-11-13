import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Orders extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />;
    return <p>Hello we are currently inside the Orders component</p>;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(Orders);
