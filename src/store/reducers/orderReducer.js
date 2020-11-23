import * as actionTypes from "../actions/actionTypes/actionTypes";

const initialState = {
  orderPlacing: true,
  orderPlaceError: false,
  orders: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_ORDER:
      console.log("Order was placed");
      return {
        ...state,
        orderPlaceError: false,
      };
    case actionTypes.ORDER_ERROR:
      console.log("Order place error", action.error);
      return {
        ...state,
        orderPlaceError: true,
      };
    case "RESET_ERROR":
      return {
        ...state,
        orderPlaceError: false,
      };
    case actionTypes.FETCH_ORDERS:
      return {
        ...state,
        orders: action.orders,
      };
    case actionTypes.CANCEL_ORDER:
      console.log("Order has been cancelled");
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
