import React from "react";
import Classes from "./OrderCard.module.scss";
import { Segment, Grid, Divider, Button, Image } from "semantic-ui-react";
import OrderProducts from "./OrderProducts";
import uniqid from "uniqid";
import moment from "moment";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actionCreaters/exporter";
const OrderCard = (props) => {
  const { order, id } = props;
  const {
    date,
    orderTotal,
    products,
    details: { address, delivered, payment, zipCode, cancelled },
  } = order;
  const cancelOrder = () => {
    props.cancel(id, props.order.details);
  };
  return (
    <React.Fragment>
      <Segment>
        <h1
          style={{
            textAlign: "center",
            fontWeight: "300",
            fontSize: "20px",
          }}
        >
          <b>Order ID:</b> &nbsp;({id})
        </h1>
        <br></br>
        <br />
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column computer={9} tablet={9} mobile={16}>
              {products.length > 0
                ? products.map((product) => (
                    <OrderProducts product={product} key={uniqid()} />
                  ))
                : null}
            </Grid.Column>
            <Grid.Column
              computer={7}
              tablet={7}
              mobile={16}
              className={Classes.Summary}
            >
              <h2 className={Classes.SummaryHeader}>Order Summary :</h2>
              <br />
              <p className={Classes.OrderDetails}>
                Total Price ={" "}
                <span className={Classes.RedText}> ${orderTotal}</span>
              </p>
              <Divider />
              <p className={Classes.OrderDetails}>
                Payment Method :{" "}
                <span className={Classes.BlueText}> {payment}</span>
              </p>
              <Divider />
              <p className={Classes.OrderDetails}>
                Status :
                <span className={Classes.OrangeText}>
                  {" "}
                  {delivered ? "Delivered" : "Not Delivered"}
                </span>
              </p>
              <Divider />
              <p className={Classes.OrderDetails}>Address : {address}</p>
              <Divider />
              <p className={Classes.OrderDetails}>Zip-Code : {zipCode}</p>
              <Divider />
              <p className={Classes.OrderDetails}>
                Ordered On :{" "}
                {moment(date.toDate().toString()).format(
                  "MMMM Do YYYY, h:mm:ss a"
                )}
              </p>
              <Divider />
              {delivered ? (
                <Button color="green" disabled size="large">
                  Delivered
                </Button>
              ) : cancelled ? (
                <p color="red" className={Classes.OrderDetails}>
                  <span className={Classes.RedText}>Cancelled</span>
                </p>
              ) : (
                <Button color="red" size="large" onClick={cancelOrder}>
                  Cancel Delivery
                </Button>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </React.Fragment>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    cancel: (orderId, details) =>
      dispatch(actions.cancelOrder(orderId, details)),
  };
};
export default connect(null, mapDispatchToProps)(OrderCard);
