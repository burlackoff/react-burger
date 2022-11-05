export const ADD_INGREDIENT_DETAILS = "ADD_INGREDIENT_DETAILS";
export const DELETE_INGREDIENT_DETAILS = "DELETE_INGREDIENT_DETAILS";

export const showIngredientDetails = data => ({
  type: ADD_INGREDIENT_DETAILS,
  ingredient: data
});
export const deleteIngredientDetails = () => ({
  type: DELETE_INGREDIENT_DETAILS
});
