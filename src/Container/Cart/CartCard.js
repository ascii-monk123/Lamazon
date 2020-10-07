import React from "react";
import Classes from "./Cart.module.scss";
import {
  Grid,
  Image,
  Icon,
  Segment,
  Container,
  Select,
  Button,
} from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actionCreaters/exporter";
const qty = [];
for (let i = 1; i <= 5; i++) {
  qty.push({
    key: i,
    value: i,
    text: i,
  });
}
const CartCard = (props) => {
  const remove = () => {
    props.removeProduct(props.product);
    props.removedProduct(props.product.id);
  };
  const selectChangedHandler = (e, { value }) => {
    props.qtyChanged(value, props.product.id);
  };
  const { product } = props;
  return (
    <Segment>
      <Container>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column computer={4}>
              <Image
                src={`${product.images[0]}`}
                size="tiny"
                style={{
                  boxShadow:
                    "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
                }}
              />
            </Grid.Column>
            <Grid.Column computer={10} mobile={8}>
              <h2>{product.company}</h2>
              <p className={Classes.ProductTitle}>{product.title}</p>
              <p className={Classes.ProductRetail}>
                Sold By: {product.manufacturer}
              </p>
              <Select
                placeholder="qty"
                options={qty}
                onChange={selectChangedHandler}
                value={props.qty}
              />
            </Grid.Column>
            <Grid.Column computer={2} mobile={4}>
              <h2>$ {product.price}</h2>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <br></br>
      <br />
      <Button
        secondary
        animated
        fluid
        size="medium"
        onClick={() => {
          remove();
        }}
      >
        <Button.Content hidden>Remove From cart</Button.Content>
        <Button.Content visible>
          <Icon name="close"></Icon>
        </Button.Content>
      </Button>
    </Segment>
  );
};

const mapStateToProps = (state, ownProps) => {
  const requiredProduct = state.cart.cart.filter(
    (item) => item.id === ownProps.product.id
  );
  const quantity = requiredProduct[0].quantity;
  return {
    qty: quantity,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (product) => dispatch(actions.removeFromCart(product)),
    removedProduct: (id) => dispatch(actions.removedFromCart(id)),
    qtyChanged: (value, id) => dispatch(actions.quantityChanged(value, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartCard);
