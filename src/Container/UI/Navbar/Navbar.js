import React from "react";
import Classes from "./Navbar.module.scss";
import { FaAmazon } from "react-icons/fa";
import SignedOutLinks from "../../../Component/UI/SignedOutLinks/SignedOutLinks";
import SignedInLinks from "../../../Component/UI/SignedInLinks/SignedInLinks";
import { connect } from "react-redux";

const iconStyle = {
  fontSize: "40px",
  marginRight: "5px",
  verticalAlign: "center",
};
const Navbar = (props) => {
  const { auth } = props;
  return (
    <header className={Classes.Navbar}>
      <nav>
        <div className={Classes.NavWrapper}>
          <div className={Classes.Logo}>
            <FaAmazon style={iconStyle} />
            <a href="#">Lamazon</a>
          </div>
          {auth.uid ? <SignedInLinks /> : <SignedOutLinks />}
        </div>
      </nav>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
