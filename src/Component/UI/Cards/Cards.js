import React from "react";
import Classes from "./Cards.module.scss";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Cards = (props) => {
  const { product } = props;
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
          to="/product"
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

        <Button animated="vertical" color="green" size="huge">
          <Button.Content hidden>Add to cart</Button.Content>
          <Button.Content visible>
            <Icon name="shop" />
          </Button.Content>
        </Button>
      </Card>
    </React.Fragment>
  );
};

export default Cards;
