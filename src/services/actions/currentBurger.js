export const ADD_BURGER_INGREDIENTS = 'ADD_BURGER_INGREDIENTS';
export const SET_BURGER_BUN = 'SET_BURGER_BUN';
export const DELETE_BURGER_INGREDIENT = 'DELETE_BURGER_INGREDIENT';
export const SORTED_BURGER_INGREDIENTS = 'SORTED_BURGER_INGREDIENTS';

export const setBurgerBun = item => ({type: SET_BURGER_BUN, data: item});
export const addBurgerIngredient = item => ({type: ADD_BURGER_INGREDIENTS, data: item});
export const sortedIngredients = ingredients => ({type: SORTED_BURGER_INGREDIENTS, sorted: ingredients})