import React from "react";
import Classes from "./Navbar.module.scss";
import { FaAmazon } from "react-icons/fa";
import SignedOutLinks from "../../../Component/UI/SignedOutLinks/SignedOutLinks";
import SignedInLinks from "../../../Component/UI/SignedInLinks/SignedInLinks";

const iconStyle = {
  fontSize: "40px",
  marginRight: "5px",
  verticalAlign: "center",
};
const Navbar = (props) => {
  const signedIn = false;
  return (
    <header className={Classes.Navbar}>
      <nav>
        <div className={Classes.NavWrapper}>
          <div className={Classes.Logo}>
            <FaAmazon style={iconStyle} />
            <a href="#">Lamazon</a>
          </div>
          {signedIn ? <SignedInLinks /> : <SignedOutLinks />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
