import React from "react";
import Classes from "./Footer.module.scss";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={Classes.Footer}>
        <p>
          Made with <FaHeart style={{ color: "pink" }} /> by{" "}
          <span>Aahan Singh</span>
        </p>
        <p className={Classes.SmallText}>Copyright &copy; 2020</p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
