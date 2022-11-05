import React from "react";
import style from "./IngredientDetails.module.css";
import { useSelector } from "react-redux";

function IngredientDetails() {
	const data = useSelector((store) => store.ingredientDetail.ingredient);

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
