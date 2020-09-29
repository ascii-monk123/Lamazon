import React, { Component } from "react";
import Classes from "./App.module.css";
import Navbar from "./Container/UI/Navbar/Navbar";
import ProductPage from "./Container/Products/ProductPage";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <ProductPage />
      </React.Fragment>
    );
  }
}

export default App;
