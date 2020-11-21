import React, { Component } from "react";
import Classes from "./AddProduct.module.scss";
import { Container, Form, Input, Button } from "semantic-ui-react";
import validator from "../../helpers/addProductValidator";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actionCreaters/exporter";

class AddProduct extends Component {
  state = {
    formData: {
      title: null,
      type: "electronics",
      weight: null,
      ratings: 1,
      quantity: null,
      price: null,
      manufacturer: null,
      images: [],
      country_of_origin: null,
      company: null,
    },
  };
  handleSubmit = () => {
    const validated = validator(this.state.formData);
    if (validated) {
      this.props.addProduct({ ...this.state.formData });
    }
  };
  componentDidMount() {
    const images = ["", "", "", ""];
    this.setState({
      formData: { ...this.state.formData, images: images },
    });
  }
  onChangeHandler = (e, { name, value }) => {
    if (name.includes("image")) {
      const number = parseInt(name.split("image")[1]) - 1;
      const images = [...this.state.formData.images];
      images[number] = value;
      this.setState({
        formData: { ...this.state.formData, images: images },
      });
    } else {
      this.setState({
        formData: { ...this.state.formData, [name]: value },
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <h1 className={Classes.MainHeader}>Add A Product</h1>
        <Container>
          <Form size="huge" className={Classes.MainForm}>
            <Form.Group widths="equal">
              <Form.Field required>
                <label>Product Name :</label>
                <Input
                  type="text"
                  name="title"
                  onChange={this.onChangeHandler}
                />
              </Form.Field>
              <Form.Field required>
                <label>Company :</label>
                <Input
                  type="text"
                  name="company"
                  onChange={this.onChangeHandler}
                />
              </Form.Field>
              <Form.Field required>
                <label>Manufacturer :</label>
                <Input
                  type="text"
                  name="manufacturer"
                  onChange={this.onChangeHandler}
                />
              </Form.Field>
            </Form.Group>
            <br />
            <Form.Group widths="equal">
              <Form.Field required>
                <label>Product Quantity: (Max :10000,Min 1)</label>
                <Input
                  type="number"
                  name="quantity"
                  min="1"
                  max="10000"
                  onChange={this.onChangeHandler}
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
                />
              </Form.Field>
              <Form.Field required>
                <label>Product Price :</label>
                <Input
                  type="number"
                  name="price"
                  min="1.00"
                  step=".01"
                  onChange={this.onChangeHandler}
                />
              </Form.Field>
            </Form.Group>
            <br />
            <Form.Group widths="equal">
              <Form.Field
                label="Select Product Type"
                control="select"
                name="type"
                required
                value={this.state.formData.type}
                onChange={this.onChangeHandler}
              >
                <option value="Games">Games</option>
                <option value="electronics">Electronics</option>
                <option value="Sports">Sports</option>
                <option value="clothing">Clothing</option>
                <option value="Lifestyle">Life-Style</option>
                <option value="Books">Books</option>
                <option value="Pet">Pet</option>
              </Form.Field>
              <Form.Field required>
                <label>Contry Of Origin</label>
                <Input
                  type="text"
                  name="country_of_origin"
                  onChange={this.onChangeHandler}
                />
              </Form.Field>
            </Form.Group>
            <br />
            <Form.Group widths="equal">
              <Form.Field required>
                <label>Image Link 1:</label>
                <Input
                  type="text"
                  name="image1"
                  onChange={this.onChangeHandler}
                  maxLength="100000"
                />
              </Form.Field>
              <Form.Field required>
                <label>Image Link 2:</label>
                <Input
                  type="text"
                  name="image2"
                  onChange={this.onChangeHandler}
                  maxLength="100000"
                />
              </Form.Field>
              <Form.Field required>
                <label>Image Link 3:</label>
                <Input
                  type="text"
                  name="image3"
                  onChange={this.onChangeHandler}
                  maxLength="100000"
                />
              </Form.Field>
              <Form.Field required>
                <label>Image Link 4:</label>
                <Input
                  type="text"
                  name="image4"
                  onChange={this.onChangeHandler}
                  maxLength="100000"
                />
              </Form.Field>
            </Form.Group>
          </Form>
          <br />
          <Button color="green" size="massive" onClick={this.handleSubmit}>
            Add the Product
          </Button>
        </Container>
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (data) => dispatch(actions.addProduct(data)),
  };
};

export default connect(null, mapDispatchToProps)(AddProduct);
