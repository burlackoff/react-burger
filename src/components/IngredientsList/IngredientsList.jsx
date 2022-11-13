import React from "react";
import style from "./IngredientsList.module.css";
import Ingredient from "../Ingredient/Ingredient";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";

function IngredientsList({ list, title }) {
	const ingredients = useSelector((store) => store.ingredients.data);
	const location = useLocation();

	return (
		<section className="mt-10" id={`${list}`}>
			<h2 className="text text_type_main-medium">{title}</h2>
			<ul className={`${style.list} mt-6`}>
				{ingredients.length > 0 &&
					ingredients
						.filter((ing) => ing.type === list)
						.map((ing) => (
							<Link
								className={style.link}
								key={ing._id}
								to={{
									pathname: `/ingredients/${ing._id}`,
									state: { background: location },
								}}
							>
								<Ingredient data={ing} />
							</Link>
						))}
			</ul>
		</section>
	);
}

IngredientsList.propTypes = {
	list: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default IngredientsList;
