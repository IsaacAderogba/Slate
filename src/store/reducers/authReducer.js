import * as types from "../actions/authActions";

const initState = {
  authError: null,
  signoutError: null,
  signupError: null,
  signupSuccess: null,
  signupLoader: false
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SIGN_IN:
      return state;
    case types.SIGN_IN_SUCCESS:
      return {
        ...state,
        authError: null
      };
    case types.SIGN_IN_FAILURE:
      return {
        ...state,
        authError: action.payload
      };
    case types.SIGN_OUT:
      return state;
    case types.SIGN_OUT_SUCCESS:
      return {
        ...state,
        signoutError: null
      };
    case types.SIGN_OUT_FAILURE:
      return {
        ...state,
        signoutError: action.payload
      };
    case types.SIGN_UP:
      return {
        ...state,
        signupLoader: true
      };
    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        signupError: null,
        signupSuccess: true,
        signupLoader: false
      };
    case types.SIGN_UP_FAILURE:
      return {
        ...state,
        signupError: action.payload,
        signupLoader: false
      };
    case types.ONBOARDING_STARTED:
      return {
        ...state,
        signupSuccess: false
      }
    default:
      return state;
  }
};

export default authReducer;
