import * as actionTypes from "../actions/actionTypes/actionTypes";

const initialState = {
  cart: [],
  total: 0,
  totalPrice: "0.0",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const newCart = state.cart.concat(action.product);

      return {
        ...state,
        cart: newCart,
        total: state.total + 1,
        totalPrice: (
          parseFloat(action.product.price) + parseFloat(state.totalPrice)
        ).toFixed(2),
      };

    case actionTypes.REMOVE_FROM_CART:
      const newCart2 = state.cart.filter(
        (cartItem) => cartItem.id !== action.product.id
      );
      return {
        ...state,
        cart: newCart2,
        total: state.total - 1,
        totalPrice: (
          parseFloat(state.totalPrice) - parseFloat(action.product.price)
        ).toFixed(2),
      };
    default: {
      return { ...state };
    }
  }
};

export default reducer;
