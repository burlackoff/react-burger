import {GET_BURGER_INGREDIENTS} from '../actions/currentBurger';

export const currentBurgerReducer = (state = [], action) => {
  switch (action.type) {
    case GET_BURGER_INGREDIENTS:
      return [
        ...state,
        action.data
      ]
    default: 
      return state
  }
}