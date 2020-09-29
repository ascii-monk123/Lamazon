import React from "react";
import Classes from "./SignedInLinks.module.scss";
import { FaShoppingCart } from "react-icons/fa";

const signedInLinks = (props) => {
  return (
    <div className={Classes.NavLinksWrapper}>
      <ul className={Classes.NavLinks}>
        <li>
          <a href="#" className={Classes.NavLink}>
            <FaShoppingCart />
          </a>
          <a className="ui red circular label">0</a>
        </li>
        <li>
          <a href="#" className={Classes.NavLink}>
            Checkout
          </a>
        </li>
        <li>
          <a href="#" className={Classes.NavLink}>
            Orders
          </a>
        </li>
      </ul>
    </div>
  );
};

export default signedInLinks;
