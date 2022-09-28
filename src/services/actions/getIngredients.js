import {getIngredientsApi} from '../../utils/api';

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';

export function getIngredients() {
  return function(dispatch) {
    dispatch({
      type: GET_INGREDIENTS
    })

    getIngredientsApi().then(res => {
      if (res && res.success) {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          data: res.data
        })
      } else {
        dispatch({
          type: GET_INGREDIENTS_FAILED
        })
      }
    })
  }
}