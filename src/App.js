import React, { Component } from "react";
import Classes from "./App.module.css";
import Navbar from "./Container/UI/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
      </React.Fragment>
    );
  }
}

export default App;
