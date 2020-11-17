import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../store/actions/actionCreaters/exporter";
import Classes from "./Orders.module.scss";
import Spinner from "../../Component/UI/Spinner/Spinner";
import OrderCard from "../../Component/OrderCard/OrderCard";
import { Container } from "semantic-ui-react";
import uniqid from "uniqid";

class Orders extends Component {
  componentDidMount() {
    const { auth } = this.props;
    console.log(auth.uid);
    if (auth.uid) {
      this.props.fetchOrders(auth.uid);
    }
  }
  render() {
    const { auth, orders } = this.props;
    if (!auth.uid) return <Redirect to="/" />;
    if (orders.length === 0)
      return (
        <div className={Classes.SpinnerContainer}>
          <Spinner />
        </div>
      );
    else {
      return (
        <div className={Classes.OrdersContainer}>
          <h2 className={Classes.OrderHeader}>Your Orders</h2>
          <div className={Classes.Orders}>
            <Container>
              {orders.length > 0
                ? orders.map((order) => (
                    <OrderCard key={uniqid()} order={order} />
                  ))
                : null}
            </Container>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    orders: state.order.orders,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: (uid) => dispatch(actions.fetchOrders(uid)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Orders);
