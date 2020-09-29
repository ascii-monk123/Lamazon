import React, { Component } from "react";
import Classes from "./ProductPage.module.scss";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class ProductPage extends Component {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <Container>
          <div className={Classes.ProducList}>Product List</div>
        </Container>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {};
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "products" }])
)(ProductPage);
//firestore connect to the projects collection i.e when this component is active ,we will connect to the products collection in the firestore
//whenever this collection is changed fire the firestore reducer which changes the firestore state and updates the component acc..
