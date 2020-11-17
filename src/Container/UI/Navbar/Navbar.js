import React from "react";
import Classes from "./Navbar.module.scss";
import { FaAmazon } from "react-icons/fa";
import SignedOutLinks from "../../../Component/UI/SignedOutLinks/SignedOutLinks";
import SignedInLinks from "../../../Component/UI/SignedInLinks/SignedInLinks";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const iconStyle = {
  fontSize: "40px",
  marginRight: "5px",
  verticalAlign: "center",
};
const Navbar = (props) => {
  const { auth, profile } = props;
  return (
    <header className={Classes.Navbar}>
      <nav>
        <div className={Classes.NavWrapper}>
          <div className={Classes.Logo}>
            <FaAmazon style={iconStyle} />
            <NavLink to="/">Lamazon</NavLink>
          </div>
          {auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />}
        </div>
      </nav>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
