import {GET_BURGER_INGREDIENTS} from '../actions/currentBurger';

const initialState = {
  ingredients: [],
}

export const currentBurgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BURGER_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, action.data]
      }
    default: 
      return state
  }
}