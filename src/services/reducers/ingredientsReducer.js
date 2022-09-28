import {GET_INGREDIENTS, GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS} from '../actions/getIngredients';

const initialState = {
  dataRequest: false,
  dataFailed: false,
  data: []
}


export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS: 
      return {
        ...state,
        dataRequest: true,
        dataFailed: false
      }
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        data: action.data,
        dataRequest: false,
        dataFailed: false
      }
    case GET_INGREDIENTS_FAILED: 
      return {
        ...state,
        dataRequest: false,
        dataFailed: true
      }
    default:
      return state
  }
}