export const SIGN_IN = "SIGN_IN";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";

export const SIGN_OUT = "SIGN_OUT";
export const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS";
export const SIGN_OUT_FAILURE = "SIGN_OUT_FAILRE";

export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const ONBOARDING_STARTED = "ONBOARDING_STARTED"

export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    dispatch({ type: SIGN_IN });
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: SIGN_IN_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: SIGN_IN_FAILURE, payload: err.message });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch({ type: SIGN_OUT });

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGN_OUT_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: SIGN_OUT_FAILURE, payload: err.message });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getstate, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    dispatch({ type: SIGN_UP });

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(res => {
        return firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            email: newUser.email,
            isDark: false,
            firstName: "Your first name",
            lastName: "Your last name",
            image: ''
          });
      })
      .then(() => {
        dispatch({ type: SIGN_UP_SUCCESS, payload: true });
      })
      .catch(err => {
        dispatch({ type: SIGN_UP_FAILURE, payload: err.message });
      });
  };
};

export const onboardingStarted = () => {
  return (dispatch) => {
    dispatch({ type: ONBOARDING_STARTED, payload: false})
  }
}