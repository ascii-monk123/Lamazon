import React, { Component } from "react";
import Classes from "./ManageProducts.module.scss";
import { Card, Icon, Image, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class ManageProducts extends Component {
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
        <div className={Classes.Grid}>
          <div className={Classes.Card}>
            <div className={Classes.CardImage}>
              <img
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                alt="image not available"
              />
            </div>
            <div className={Classes.CardContent}>
              <h3 className={Classes.CardTitle}></h3>
              <p className={Classes.CardContent}></p>
            </div>
          </div>
          <div className={Classes.Card}>
            <div className={Classes.CardImage}>
              <img
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                alt="image not available"
              />
            </div>
            <div className={Classes.CardContent}>
              <h3 className={Classes.CardTitle}></h3>
              <p className={Classes.CardContent}></p>
            </div>
          </div>
          <div className={Classes.Card}>
            <div className={Classes.CardImage}>
              <img
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                alt="image not available"
              />
            </div>
            <div className={Classes.CardContent}>
              <h3 className={Classes.CardTitle}></h3>
              <p className={Classes.CardContent}></p>
            </div>
          </div>
          <div className={Classes.Card}>
            <div className={Classes.CardImage}>
              <img
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                alt="image not available"
              />
            </div>
            <div className={Classes.CardContent}>
              <h3 className={Classes.CardTitle}></h3>
              <p className={Classes.CardContent}></p>
            </div>
          </div>
        </div>
      );
    }
    return (
      <React.Fragment>
        <h1 className={Classes.MainHeader}>Manage Your Products</h1>
        <br />
        <br />
        {prods}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.firestore.ordered.products,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "products" }])
)(ManageProducts);
