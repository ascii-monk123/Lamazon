import * as actionTypes from "../actions/actionTypes/actionTypes";

const initialState = {
  profileEdited: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        profileEdited: true,
      };
    case actionTypes.EDIT_PROFILE_FAIL:
      return {
        ...state,
        profileEdited: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
