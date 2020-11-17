import React from "react";
import Classes from "./Spinner.module.scss";

const Spinner = (props) => {
  return (
    <div className={Classes.Spinner}>
      <div className={Classes.loader}></div>
    </div>
  );
};

export default Spinner;
