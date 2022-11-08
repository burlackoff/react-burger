import { loginApi, registerApi, tokenApi } from "../../utils/api";

export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
export const REGISTRATION_ERROR = "REGISTRATION_ERROR";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD_ERROR";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";

export const GET_REFRESH_TOKEN = "GET_REFRESH_TOKEN";

export function register(form) {
  return function (dispatch) {
    dispatch({
      type: REGISTRATION_REQUEST,
    });
    registerApi(form).then((res) => {
      if (res && res.success) {
        dispatch({
          type: REGISTRATION_SUCCESS,
          user: res.user,
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
        });
      } else {
        dispatch({
          type: REGISTRATION_ERROR,
        });
      }
    });
  };
}

export function login(form) {
  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });
    loginApi(form).then((res) => {
      if (res && res.success) {
        dispatch({
          type: LOGIN_SUCCESS,
          user: res.user,
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
        });
        form.history.replace({ pathname: "/" });
      } else {
        dispatch({
          type: LOGIN_ERROR,
        });
      }
    });
  };
}

export function refreshToken(token) {
  return function (dispatch) {
    tokenApi(token).then((res) => {
      if (res && res.success) {
        dispatch({
          type: GET_REFRESH_TOKEN,
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
        });
      }
    });
  };
}
