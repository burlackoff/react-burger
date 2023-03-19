export const WS_CONNECTION_START = "WS_CONNECTION_START";
export const WS_CONNECTION_STOP = "WS_CONNECTION_STOP";
export const WS_CONNECTION_SUCCESS = "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR = "WS_CONNECTION_ERROR";
export const WS_CONNECTION_CLOSED = "WS_CONNECTION_CLOSED";
export const WS_GET_ORDERS = "WS_GET_ORDERS";
export const WS_SEND_ORDERS = "WS_SEND_ORDERS";

export const wsAction = {
  wsInit: WS_CONNECTION_START,
  wsClosed: WS_CONNECTION_STOP,
  onOpen: WS_CONNECTION_SUCCESS,
  onError: WS_CONNECTION_ERROR,
  onClose: WS_CONNECTION_CLOSED,
  onMessage: WS_GET_ORDERS,
  wsSendMessage: WS_SEND_ORDERS,
};