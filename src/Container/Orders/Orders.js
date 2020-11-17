import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../store/actions/actionCreaters/exporter";

class Orders extends Component {
  componentDidMount() {
    const { auth } = this.props;
    console.log(auth.uid);
    if (auth.uid) {
      this.props.fetchOrders(auth.uid);
    }
  }
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
const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: (uid) => dispatch(actions.fetchOrders(uid)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Orders);
