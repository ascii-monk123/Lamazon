import * as actionTypes from "../actions/actionTypes/actionTypes";
const initialState = {
  errorMessage: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN_SUCCESS:
      return { ...state };
    case actionTypes.SIGN_IN_ERROR:
      return { ...state, errorMessage: action.error.message };
    case actionTypes.SIGN_OUT_SUCCESS:
      console.log("signedOut");
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default reducer;
