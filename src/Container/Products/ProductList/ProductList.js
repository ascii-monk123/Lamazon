import React from "react";
import Classes from "./ProductList.module.scss";
import { Card, Container, Icon, Image, Button } from "semantic-ui-react";
import uniqid from "uniqid";
import Cards from "../../../Component/UI/Cards/Cards";

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
          <Cards key={uniqid()} product={product} />
        ))}
      </Card.Group>
    </div>
  );
};

export default ProductList;
