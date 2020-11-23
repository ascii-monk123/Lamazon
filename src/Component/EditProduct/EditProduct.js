import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import {
  Container,
  Grid,
  Image,
  Form,
  Button,
  Input,
  Modal,
  Select,
} from "semantic-ui-react";
import Spinner from "../UI/Spinner/Spinner";
import Classes from "./EditProduct.module.scss";
import * as actions from "../../store/actions/actionCreaters/exporter";
const options = [
  { key: "electronics", value: "electronics", text: "Electronics" },
  { key: "Games", value: "Games", text: "Games" },
  { key: "Sports", value: "Sports", text: "Sports" },
  { key: "Books", value: "Books", text: "Books" },
  { key: "Lifestyle", value: "Lifestyle", text: "Life-Style" },
  { key: "Pet", value: "Pet", text: "Pet" },
  { key: "clothing", value: "clothing", text: "Clothing" },
];

class EditProduct extends Component {
  state = { product: null };
  componentDidUpdate() {
    let { product } = this.props;
    let weight = product.weight.split("g")[0];
    weight = parseInt(weight);
    product = { ...product, weight: weight };

    if (product && !this.state.product) {
      this.setState({ product: { ...product } });
    }
  }
  onChangeHandler = (e, { name, value }) => {
    if (name.includes("image")) {
      const index = parseInt(name.split("$")[1]) - 1;
      const images = [...this.state.product.images];
      images[index] = value;
      this.setState({ product: { ...this.state.product, images: images } });
    } else {
      this.setState({ product: { ...this.state.product, [name]: value } });
    }
  };
  updateProduct = () => {
    this.props.update(this.state.product, this.props.id);
  };
  render() {
    let result = <Spinner />;
    const { product } = this.state;
    if (this.state.product) {
      result = (
        <div className={Classes.MarginTop}>
          <Container>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column computer={7}>
                  <Image src={product.images[0]} size="medium"></Image>
                </Grid.Column>
                <Grid.Column computer={8}>
                  <Form size="huge">
                    <Form.Group widths="equal">
                      <Form.Field required>
                        <label>Product Name :</label>
                        <Input
                          type="text"
                          name="title"
                          onChange={this.onChangeHandler}
                          value={this.state.product.title}
                          alt="Image not available"
                        />
                      </Form.Field>
                      <Form.Field required>
                        <label>Company :</label>
                        <Input
                          type="text"
                          name="company"
                          onChange={this.onChangeHandler}
                          value={this.state.product.company}
                        />
                      </Form.Field>
                    </Form.Group>
                    <br />
                    <Form.Group widths="equal">
                      <Form.Field required>
                        <label>Manufacturer :</label>
                        <Input
                          type="text"
                          name="manufacturer"
                          onChange={this.onChangeHandler}
                          value={this.state.product.manufacturer}
                        />
                      </Form.Field>
                      <Form.Field required>
                        <label>Product Quantity: (Max :10000,Min 1)</label>
                        <Input
                          type="number"
                          name="quantity"
                          min="1"
                          max="10000"
                          onChange={this.onChangeHandler}
                          value={this.state.product.quantity}
                        />
                      </Form.Field>
                    </Form.Group>
                    <br />
                    <Form.Group widths="equal">
                      <Form.Field required>
                        <label>Contry Of Origin</label>
                        <Input
                          type="text"
                          name="country_of_origin"
                          onChange={this.onChangeHandler}
                          value={this.state.product.country_of_origin}
                        />
                      </Form.Field>
                      <Form.Field required>
                        <label>Product Weight :</label>
                        <Input
                          type="number"
                          name="weight"
                          min="1.00"
                          step=".01"
                          onChange={this.onChangeHandler}
                          value={this.state.product.weight}
                        />
                      </Form.Field>
                    </Form.Group>
                    <br />
                    <Form.Group widths="equal">
                      <Form.Field required>
                        <label>Product Price :</label>
                        <Input
                          type="number"
                          name="price"
                          min="1.00"
                          step=".01"
                          onChange={this.onChangeHandler}
                          value={this.state.product.price}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Select
                          label="Select Product Type"
                          control="select"
                          name="type"
                          key="type"
                          required
                          value={this.state.product.type}
                          options={options}
                          onChange={(e, { value }) => {
                            this.setState({
                              product: {
                                ...this.state.product,
                                type: value,
                              },
                            });
                          }}
                        ></Select>
                      </Form.Field>
                    </Form.Group>
                    <br />

                    <Form.Group widths="equal">
                      <Form.Field required>
                        <label>Image Link 1:</label>
                        <Input
                          type="text"
                          name="image$1"
                          onChange={this.onChangeHandler}
                          maxLength="100000"
                          value={this.state.product.images[0]}
                        />
                      </Form.Field>
                      <Form.Field required>
                        <label>Image Link 2:</label>
                        <Input
                          type="text"
                          name="image$2"
                          onChange={this.onChangeHandler}
                          maxLength="100000"
                          value={this.state.product.images[1]}
                        />
                      </Form.Field>
                    </Form.Group>
                    <br />
                    <Form.Group widths="equal">
                      <Form.Field required>
                        <label>Image Link 3:</label>
                        <Input
                          type="text"
                          name="image$3"
                          onChange={this.onChangeHandler}
                          maxLength="100000"
                          value={this.state.product.images[2]}
                        />
                      </Form.Field>
                      <Form.Field required>
                        <label>Image Link 4:</label>
                        <Input
                          type="text"
                          name="image$4"
                          onChange={this.onChangeHandler}
                          maxLength="100000"
                          value={this.state.product.images[3]}
                        />
                      </Form.Field>
                    </Form.Group>
                  </Form>
                  <br />
                  <Button
                    size="huge"
                    color="green"
                    fluid
                    onClick={this.updateProduct}
                  >
                    Update Product Data
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      );
    }
    return <React.Fragment>{result}</React.Fragment>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.location.state.id;
  const products = state.firestore.data.products;
  let product = null;
  if (products) {
    product = products[id];
  }
  return {
    product: product,
    id: id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    update: (product, id) => dispatch(actions.updateProduct(product, id)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "products" }])
)(EditProduct);
