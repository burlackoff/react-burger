import { combineReducers } from "redux";
import {GET_INGREDIENTS} from '../../utils/constants';

const initialState = {
  ingredients: [],
  ingredientsBurger: {},
  ingredientDetails: {},
  order: {}
};

const getIngredietns = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS: 
      return {
        ...state,
        ingredients: [action.data]
      }
      default:
        return {
          ...state
        }
  }
}


export const rootReducer = combineReducers({getIngredietns})