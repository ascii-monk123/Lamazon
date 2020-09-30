import React from "react";
import Classes from "./ProductList.module.scss";
import { Card, Container, Icon, Image } from "semantic-ui-react";
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
  for (let i = 0; i < 5; i++) {
    dup.push(dup[0]);
  }
  return (
    <div className={Classes.ProductList}>
      <Container>
        <div className="ui grid">
          <Card.Group itemsPerRow={items}>
            {dup.map((product) => (
              <Card key={uniqid()} className={Classes.ProductCard}>
                <Card.Content
                  style={{
                    height: "300px",
                    backgroundImage: `url(${product.images[0]})`,
                    backgroundSize: "cover",
                  }}
                ></Card.Content>
                <Card.Content>
                  <Card.Header>{product.company}</Card.Header>
                  <Card.Description>{product.title}</Card.Description>
                  <Card.Description style={{ marginTop: "10px" }}>
                    <p style={{ fontSize: "20px" }}>
                      <b>{`$ ${product.price}`}</b>
                    </p>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="user" />
                    Add to cart
                  </a>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </div>
      </Container>
    </div>
  );
};

export default ProductList;
