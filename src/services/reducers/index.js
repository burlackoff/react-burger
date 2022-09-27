import { combineReducers } from "redux";
import {GET_INGREDIENTS, GET_BURGER_INGREDIENTS, ADD_INGREDIENT_DETAILS, DELETE_INGREDIENT_DETAILS} from '../actions/index';

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

const getBurger = (state = [], action) => {
  switch (action.type) {
    case GET_BURGER_INGREDIENTS:
      return [
        ...state,
        action.data
      ]
    default: 
      return [
        ...state
      ]
  }
}

const initialStateDetails = {
  ingredient: {}
}

const getIngredientDetail = (state = initialStateDetails, action) => {
  switch (action.type) {
    case ADD_INGREDIENT_DETAILS:
      return {
        ...state,
        ingredient: action.ingredient
      }
    case DELETE_INGREDIENT_DETAILS:
      return {
        ...state,
        ingredient: {}
      }
    default:
      return {
        ...state
      }
  }
}

export const rootReducer = combineReducers({
  ingredients: getIngredietnsApi,
  burgerIngredients: getBurger,
  ingredientDetail: getIngredientDetail,
})