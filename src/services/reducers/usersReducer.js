import {
  REGISTRATION_REQUEST,
  REGISTRATION_ERROR,
  REGISTRATION_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  GET_REFRESH_TOKEN_REQUEST,
  GET_REFRESH_TOKEN_ERROR,
  GET_REFRESH_TOKEN_SUCCESS,
  GET_USER_REQUEST,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
  SET_USER_ERROR,
  SET_USER_REQUEST,
  SET_USER_SUCCESS,
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

    case LOGIN_REQUEST:
      return {
        ...state,
        success: true,
        error: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        success: false,
        error: false,
        user: action.user,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        success: false,
        error: true,
      };
    case GET_REFRESH_TOKEN_REQUEST:
      return {
        ...state,
        success: true,
        error: false,
      };
    case GET_REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        success: false,
        error: false,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      };
    case GET_REFRESH_TOKEN_ERROR:
      return {
        ...state,
        success: false,
        error: true,
      };
    case GET_USER_REQUEST:
      return {
        ...state,
        success: true,
        error: false,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        success: false,
        error: false,
        user: action.user,
      };
    case GET_USER_ERROR:
      return {
        ...state,
        success: false,
        error: true,
      };
    case SET_USER_REQUEST:
      return {
        ...state,
        success: true,
        error: false,
      };
    case SET_USER_SUCCESS:
      return {
        ...state,
        success: false,
        error: false,
        user: action.user,
      };
    case SET_USER_ERROR:
      return {
        ...state,
        success: false,
        error: true,
      };
    default:
      return state;
  }
};
