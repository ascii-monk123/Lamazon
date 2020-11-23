import React, { Component } from "react";
import Classes from "./ManageProducts.module.scss";
import { Icon, Button, Modal, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import uniqid from "uniqid";
import * as actions from "../../store/actions/actionCreaters/exporter";

class ManageProducts extends Component {
  state = {
    showModal: false,
    selectedProduct: null,
  };
  showModal = () => {
    this.setState({
      showModal: true,
    });
  };
  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };
  productSelected = (productId) => {
    this.setState({
      selectedProduct: productId,
    });
    this.showModal();
  };
  deleteProduct = () => {
    this.closeModal();
    this.props.removeProduct(this.state.selectedProduct);
  };
  editProduct = (id) => {
    this.props.history.push({
      pathname: "/edit-product",
      search: `id=${id}`,
      state: { id: id },
    });
  };
  render() {
    const { products } = this.props;
    let prods = (
      <div className={Classes["sk-cube-grid"]}>
        <div
          className={[Classes["sk-cube"], Classes["sk-cube1"]].join(" ")}
        ></div>
        <div
          className={[Classes["sk-cube"], Classes["sk-cube2"]].join(" ")}
        ></div>
        <div
          className={[Classes["sk-cube"], Classes["sk-cube3"]].join(" ")}
        ></div>
        <div
          className={[Classes["sk-cube"], Classes["sk-cube4"]].join(" ")}
        ></div>
        <div
          className={[Classes["sk-cube"], Classes["sk-cube5"]].join(" ")}
        ></div>
        <div
          className={[Classes["sk-cube"], Classes["sk-cube6"]].join(" ")}
        ></div>
        <div
          className={[Classes["sk-cube"], Classes["sk-cube7"]].join(" ")}
        ></div>
        <div
          className={[Classes["sk-cube"], Classes["sk-cube8"]].join(" ")}
        ></div>
        <div
          className={[Classes["sk-cube"], Classes["sk-cube9"]].join(" ")}
        ></div>
      </div>
    );
    if (products) {
      prods = (
        <ReactCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          classnames={{
            enterActive: Classes["appear-enter-active"],
            exitActive: Classes["appear-exit-active"],
          }}
        >
          <div className={Classes.Grid}>
            {products.map((product) => (
              <div className={Classes.Card} key={uniqid()}>
                <div className={Classes.CardImage}>
                  <img src={product.images[0]} alt="image not available" />
                </div>
                <div className={Classes.CardContent}>
                  <h3 className={Classes.CardTitle}>{product.company}</h3>
                  <p className={Classes.CardContent}>{product.title}</p>
                  <hr />
                  <Button
                    color="red"
                    size="small"
                    onClick={() => {
                      this.productSelected(product.id);
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    color="green"
                    size="small"
                    onClick={() => this.editProduct(product.id)}
                  >
                    Edit Product
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ReactCSSTransitionGroup>
      );
    }
    return (
      <React.Fragment>
        <h1 className={Classes.MainHeader}>Manage Your Products</h1>
        <br />
        <br />
        {prods}
        <Modal
          closeIcon
          open={this.state.showModal}
          onClose={() => this.closeModal()}
          onOpen={() => this.showModal()}
        >
          <Header icon="archive" content="Delete Product" />
          <Modal.Content>
            <p>Are you sure u want to delete this product ?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              color="red"
              onClick={() => {
                this.closeModal();
              }}
            >
              <Icon name="remove" /> No
            </Button>
            <Button
              color="green"
              onClick={() => {
                this.deleteProduct();
              }}
            >
              <Icon name="checkmark" /> Yes
            </Button>
          </Modal.Actions>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.firestore.ordered.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (productId) => dispatch(actions.deleteProduct(productId)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "products" }])
)(ManageProducts);
