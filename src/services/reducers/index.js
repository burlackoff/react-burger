import { combineReducers } from "redux";
import {GET_INGREDIENTS} from '../actions/index';

const initialState = {
  success: false,
  data: []
}

const getIngredietnsApi = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS: 
      return {
        ...state,
        data: action.data
      }
      default:
        return {
          ...state
        }
  }
}


export const rootReducer = combineReducers({
  ingredients: getIngredietnsApi
})