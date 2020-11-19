import * as actionTypes from "../actionTypes/actionTypes";

export const updateProfile = (profileData, userId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("users")
      .doc(userId)
      .update({
        firstName: profileData.firstName,
        lastName: profileData.lastName,
        image: profileData.image,
      })
      .then((res) => {
        dispatch({ type: actionTypes.EDIT_PROFILE_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.EDIT_PROFILE_FAIL });
      });
  };
};
