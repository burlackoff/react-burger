import React from "react";
import style from "./OrderIngredientImg.module.css";
import PropTypes from "prop-types";

function OrderIngredientImg({ img, alt }) {
	return (
		<div className={style.wrapper}>
			<div className={style.img}>
				<img className={style.pic} src={img} alt={alt} />
			</div>
		</div>
	);
}

OrderIngredientImg.propTypes = {
	img: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

export default OrderIngredientImg;
