import * as actionTypes from "../actionTypes/actionTypes";
import { NotificationManager } from "react-notifications";
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
        NotificationManager.success(
          "Profile Editing Suceessful !!",
          "Profile Changed",
          1000
        );
        dispatch({ type: actionTypes.EDIT_PROFILE_SUCCESS });
      })
      .catch((err) => {
        NotificationManager.error(
          "Sorry Profile change not completed !!",
          "Error",
          1000
        );
        dispatch({ type: actionTypes.EDIT_PROFILE_FAIL });
      });
  };
};
