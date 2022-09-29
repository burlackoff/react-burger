import {SET_ORDER, SET_ORDER_FAILED, SET_ORDER_SUCCESS} from '../actions/setOrder';

const initialState = {
  order: 0,
  orderRequest: false,
  orderFailed: false,
}

export const setOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER:
      return {
        ...state,
        orderRequest: true,
        orderFailed: false
      }
    case SET_ORDER_SUCCESS:
      return {
        ...state,
        orderRequest: false,
        orderFailed: false,
        order: action.order
      }
    case SET_ORDER_FAILED: 
      return {
        ...state,
        orderRequest: false,
        orderFailed: true
      }
    default:
      return state
  }
}
