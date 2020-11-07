import * as actionTypes from "../actions/actionTypes/actionTypes";
const initialState = {
  errorMessage: null,
  signUpError: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN_SUCCESS:
      return { ...state, errorMessage: null };
    case actionTypes.SIGN_IN_ERROR:
      return { ...state, errorMessage: action.error.message };
    case actionTypes.SIGN_OUT_SUCCESS:
      console.log("signedOut");
      return {
        ...state,
      };
    case actionTypes.SIGN_UP_SUCCESS:
      console.log("signup success");
      return {
        ...state,
        signUpError: null,
      };
    case actionTypes.SIGN_UP_ERROR:
      console.log("Sign Up Error");
      return {
        ...state,
        signUpError: action.error.message,
      };
    default:
      return { ...state };
  }
};

export default reducer;
