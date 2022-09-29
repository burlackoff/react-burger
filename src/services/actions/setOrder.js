import { setOrderApi } from "../../utils/api";

export const SET_ORDER = 'SET_ORDER';
export const SET_ORDER_FAILED = 'SET_ORDER_FAILED';
export const SET_ORDER_SUCCESS = 'SET_ORDER_SUCCESS';

export function setOrder(arr) {
  return function(dispatch) {
    dispatch({
      type: SET_ORDER
    })
    setOrderApi(arr).then(res => {
      if (res && res.success) {
        dispatch({
          type: SET_ORDER_SUCCESS,
          order: res.order.number
        })
      } else {
        dispatch({
          type: SET_ORDER_FAILED
        })
      }
    })
  }
}