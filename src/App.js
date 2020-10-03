import React, { Component } from "react";
import Classes from "./App.module.css";
import Navbar from "./Container/UI/Navbar/Navbar";
import Routes from "./routes/routes";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Routes />
      </React.Fragment>
    );
  }
}

export default App;
