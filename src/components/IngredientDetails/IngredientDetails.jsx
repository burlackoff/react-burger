import React from "react";
import style from "./IngredientDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { showIngredientDetails } from "../../services/actions/showIngredientDetails";

function IngredientDetails() {
	const dispatch = useDispatch();
	const ingredients = useSelector((store) => store.ingredients.data);
	const data = useSelector((store) => store.ingredientDetail.ingredient);
	const { id } = useParams();

	React.useEffect(() => {
		const findItem = ingredients.find((i) => i._id === id);
		dispatch(showIngredientDetails(findItem));
	}, [dispatch, id, ingredients]);

	console.log(data);
	console.log(ingredients);
	return (
		<>
			<img src={data.image_large} alt={data.name} className={style.image} />
			<h3 className="text text_type_main-medium mt-4">{data.name}</h3>
			<ul className={style.info_list}>
				<li className={style.info_item}>
					<span className="text text_type_main-default text_color_inactive">
						Калории,ккал
					</span>
					<span className="text text_type_digits-default text_color_inactive">
						{data.calories}
					</span>
				</li>
				<li className={style.info_item}>
					<span className="text text_type_main-default text_color_inactive">
						Белки, г
					</span>
					<span className="text text_type_digits-default text_color_inactive">
						{data.proteins}
					</span>
				</li>
				<li className={style.info_item}>
					<span className="text text_type_main-default text_color_inactive">
						Жиры, г
					</span>
					<span className="text text_type_digits-default text_color_inactive">
						{data.fat}
					</span>
				</li>
				<li className={style.info_item}>
					<span className="text text_type_main-default text_color_inactive">
						Углеводы, г
					</span>
					<span className="text text_type_digits-default text_color_inactive">
						{data.carbohydrates}
					</span>
				</li>
			</ul>
		</>
	);
}

export default IngredientDetails;
