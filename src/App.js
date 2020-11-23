import React, { Component } from "react";
import Classes from "./App.module.css";
import Navbar from "./Container/UI/Navbar/Navbar";
import Routes from "./routes/routes";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import Footer from "./Component/Footer/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Routes />
        <Footer />
        <NotificationContainer />
      </React.Fragment>
    );
  }
}

export default App;
