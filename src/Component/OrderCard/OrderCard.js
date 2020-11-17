import React from "react";
import Classes from "./OrderCard.module.scss";
import { Segment, Grid, Divider } from "semantic-ui-react";
const OrderCard = (props) => {
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
          <b>Order ID:</b> <i> JK128940123</i>
        </h1>
        <br></br>
        <br />
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column computer={10} tablet={10} mobile={16}>
              Text 1
            </Grid.Column>
            <Grid.Column computer={6} tablet={6} mobile={16}>
              <h2 className={Classes.SummaryHeader}>Order Summary :</h2>
              <br />
              <p className={Classes.OrderDetails}>
                Total Price = <span className={Classes.RedText}> $100.90</span>
              </p>
              <Divider />
              <p className={Classes.OrderDetails}>
                Payment Method : <span className={Classes.BlueText}>COD</span>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </React.Fragment>
  );
};

export default OrderCard;
