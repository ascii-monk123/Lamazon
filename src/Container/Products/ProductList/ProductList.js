import React from "react";
import Classes from "./ProductList.module.scss";
import { Card, Container, Icon, Image, Button } from "semantic-ui-react";
import uniqid from "uniqid";

const ProductList = (props) => {
  const { width, products } = props;
  let items = 4;
  if (width <= 900) {
    items = 3;
  }
  if (width <= 460) {
    items = 2;
  }
  if (width <= 400) {
    items = 1;
  }
  const dup = [...products];

  return (
    <div className={Classes.ProductList}>
      <Card.Group itemsPerRow={items}>
        {dup.map((product) => (
          <Card
            key={uniqid()}
            className={Classes.ProductCard}
            style={{
              marginBottom: "30px",
              height: "500px",
            }}
          >
            <Image
              src={`${product.images[0]}`}
              fluid
              style={{ height: "70%", width: "100%" }}
            />

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
        ))}
      </Card.Group>
    </div>
  );
};

export default ProductList;
