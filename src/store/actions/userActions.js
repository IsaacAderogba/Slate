export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const UPDATE_FAILED = "UPDATE_FAILED";

export const updateProfile = profile => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("users")
      .doc(profile.id)
      .update({
        name: profile.name,
        theme: profile.theme
      })
      .then(() => {
        dispatch({ type: UPDATE_PROFILE });
      })
      .catch(() => {
        dispatch({ type: UPDATE_FAILED });
      });
  };
};
