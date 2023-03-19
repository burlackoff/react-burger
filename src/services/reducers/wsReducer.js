import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDERS,
} from "../actions/wsAction";

const initialState = {
  success: false,
  orders: [],
  total: 0,
  totalToday: 0,
  error: undefined,
};

export const wsReducer = (state = initialState, action) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        success: true,
      };
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        success: false,
      };
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        success: false,
      };
    case WS_GET_ORDERS:
      return {
        ...state,
        error: undefined,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };

    default:
      return state;
  }
};
