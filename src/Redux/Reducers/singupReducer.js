import * as ActionTypes from "../ActionCreators/ActionTypes";

// This signup reducer is designed to begin as if signup has not happened.
// This will only fire if customer logs in from signup portal
export const Signup = (
  state = {
    isLoading: false,
    singupSucces: false,
    status: "",
    message: "",
    validationErr: false,
    errMess: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        signupSuccess: false,
        user: action.userInfo,
      };
    case ActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        signupSuccess: true,
        status: action.payload,
        message: action.payload,
      };
    case ActionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        signupSuccess: false,
        errMess: action.message,
      };
      case ActionTypes.SIGNUP_VALIDATION_NEEDED:
      return {
        ...state,
        isLoading: false,
        signupSuccess: false,
        validationErr: true,
        status: action.status,
        message: action.message,
      };
    default:
      return state;
  }
};
