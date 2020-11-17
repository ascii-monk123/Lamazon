import React from "react";
import Classes from "./OrderCard.module.scss";
import { Grid, Image, Divider } from "semantic-ui-react";
const OrderProducts = (props) => {
  const { product } = props;
  return (
    <React.Fragment>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column computer={6}>
            <Image size="huge" src={product.image} />
          </Grid.Column>
          <Grid.Column computer={9}>
            <h2 className={Classes.ProductHeading}>{product.company}</h2>
            <p className={Classes.ProductDesc}>{product.title}</p>
            <p className={Classes.ProductDesc}>Id: {product.productId}</p>
            <br />
            <p className={Classes.ProductDesc}>Qty: {product.qty}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider />
    </React.Fragment>
  );
};

export default OrderProducts;
