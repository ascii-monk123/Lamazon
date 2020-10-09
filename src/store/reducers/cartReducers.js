import * as actionTypes from "../actions/actionTypes/actionTypes";
let storage = null;
if (!localStorage.getItem("cart")) {
  localStorage.setItem(
    "cart",
    JSON.stringify({
      cart: [],
      total: 0,
      totalPrice: "0.0",
    })
  );
  storage = {
    cart: [],
    total: 0,
    totalPrice: "0.0",
  };
} else {
  storage = JSON.parse(localStorage.getItem("cart"));
}

const initialState = storage;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const newCart = state.cart.concat({ ...action.product, quantity: 1 });
      localStorage.setItem(
        "cart",
        JSON.stringify({
          ...state,
          cart: newCart,
          total: state.total + 1,
          totalPrice: (
            parseFloat(action.product.price) + parseFloat(state.totalPrice)
          ).toFixed(2),
        })
      );

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
      const reqProd = state.cart.filter(
        (item) => item.id === action.product.id
      );
      localStorage.setItem(
        "cart",
        JSON.stringify({
          ...state,
          cart: newCart2,
          total: state.total - 1,
          totalPrice: (
            parseFloat(state.totalPrice) -
            parseFloat(action.product.price * reqProd[0].quantity)
          ).toFixed(2),
        })
      );
      return {
        ...state,
        cart: newCart2,
        total: state.total - 1,
        totalPrice: (
          parseFloat(state.totalPrice) -
          parseFloat(action.product.price * reqProd[0].quantity)
        ).toFixed(2),
      };
    case actionTypes.QUANTITY_CHANGED:
      const cartItem = state.cart.filter((item) => item.id === action.id);
      const oldTotal=parseFloat( parseFloat(cartItem[0].price)*parseFloat(cartItem[0].quantity)).toFixed(2);
      const newCartItem = { ...cartItem[0], quantity: action.value };
      const newTotal = (
        parseFloat(state.totalPrice) -
        oldTotal +
        parseFloat(newCartItem.price) *parseFloat( action.value)
      ).toFixed(2);
      localStorage.setItem(
        "cart",
        JSON.stringify({
          ...state,
          totalPrice: newTotal,
          cart: state.cart.map((item) => {
            if (item.id === action.id)
              return {
                ...newCartItem,
              };
            else
              return {
                ...item,
              };
          }),
        })
      );
      return {
        ...state,
        totalPrice: newTotal,
        cart: state.cart.map((item) => {
          if (item.id === action.id)
            return {
              ...newCartItem,
            };
          else
            return {
              ...item,
            };
        }),
      };
    default: {
      return { ...state };
    }
  }
};

export default reducer;
