import {GET_BURGER_INGREDIENTS, GET_BURGER_BUN} from '../actions/currentBurger';

const initialState = {
  ingredients: [],
  bun: {}
}

export const currentBurgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BURGER_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, action.data]
      }
    case GET_BURGER_BUN:
      return {
        ...state,
        bun: action.data
      }  
    default: 
      return state
  }
}