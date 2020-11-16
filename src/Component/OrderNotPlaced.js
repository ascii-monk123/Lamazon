import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
const OrderNotPlaced = (props) => {
  const [redirect, changeRedirect] = useState(false);

  const { reset } = props;

  setTimeout(() => {
    reset();
    changeRedirect(true);
  }, 2000);

  let content = (
    <div>
      <p>
        There seems to be an error placing the order.... Redirecting to the home
        page.
      </p>
    </div>
  );
  if (redirect) {
    content = <Redirect to="/" />;
  }
  return <React.Fragment>{content}</React.Fragment>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => dispatch({ type: "RESET_ERROR" }),
  };
};

export default connect(null, mapDispatchToProps)(OrderNotPlaced);
