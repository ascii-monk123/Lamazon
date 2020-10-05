import React from "react";
import Classes from "./Cards.module.scss";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import * as actions from "../../../store/actions/actionCreaters/exporter";
import { connect } from "react-redux";
const Cards = (props) => {
  const addToCart = () => {
    props.addToCart(props.product);
    props.addedToCart(props.product.id);
  };
  const { product } = props;
  const { isInCart } = product;
  let disable = false;
  let btnContent = (
    <React.Fragment>
      <Button.Content hidden>Add to cart</Button.Content>
      <Button.Content visible>
        <Icon name="shop" />
      </Button.Content>
    </React.Fragment>
  );
  if (isInCart) {
    disable = true;
    btnContent = <Button.Content>Added To Cart</Button.Content>;
  }
  return (
    <React.Fragment>
      <Card
        className={Classes.ProductCard}
        style={{
          marginBottom: "30px",
          height: "500px",
        }}
      >
        <NavLink
          to={{
            pathname: `/product/${product.id}`,
          }}
          exact={true}
          style={{ height: "70%", width: "100%" }}
        >
          <Image
            src={`${product.images[0]}`}
            fluid
            style={{ height: "100%", width: "100%" }}
          />
        </NavLink>

        <Card.Content>
          <Card.Header>{product.company}</Card.Header>
          <Card.Description style={{ fontSize: "12px" }}>
            {product.title}
          </Card.Description>
          <Card.Description style={{ marginTop: "10px" }}>
            <p style={{ fontSize: "10px" }}>
              <b>{`$ ${product.price}`}</b>
            </p>
          </Card.Description>
        </Card.Content>

        <Button
          animated="vertical"
          color="green"
          size="huge"
          disabled={disable ? true : false}
          onClick={() => {
            addToCart();
          }}
        >
          {btnContent}
        </Button>
      </Card>
    </React.Fragment>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(actions.addToCart(product)),
    addedToCart: (id) => dispatch(actions.addedToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Cards);
