import {
  REGISTRATION_REQUEST,
  REGISTRATION_ERROR,
  REGISTRATION_SUCCESS,
} from "../actions/usersAction";

const initialState = {
  success: false,
  error: false,
  user: {
    email: "",
    name: "",
  },
  accessToken: "",
  refreshToken: "",
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return {
        ...state,
        success: true,
        error: false,
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        success: false,
        error: false,
        user: action.user,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      };
    case REGISTRATION_ERROR:
      return {
        ...state,
        success: false,
        error: true,
      };
    default:
      return state;
  }
};
