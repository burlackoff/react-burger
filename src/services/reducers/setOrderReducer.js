import {SET_ORDER, SET_ORDER_FAILED, SET_ORDER_SUCCESS} from '../actions/setOrder';

const initialState = {
  order: 0,
  orderRequest: false,
  orderFailed: false,
}

export const setOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER:
      return [
        ...state,
        action.numbers
      ]
    case SET_ORDER_FAILED:
      return []
    case SET_ORDER_SUCCESS: 
      return []
    default:
      return state
  }
}
