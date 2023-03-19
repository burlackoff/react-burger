import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useMemo } from "react";
import OrderCheckDay from "../OrderCheckDay/OrderCheckDay";
import OrderIngredientImg from "../OrderIngredientImg/OrderIngredientImg";
import OrderStatus from "../OrderStatus/OrderStatus";
import style from "./OrderInfo.module.css";
import PropTypes from "prop-types";

function OrderInfo(props) {
	const sortOrders = [];

	const orderIngredients = useMemo(
		() =>
			props.order.ingredients
				.filter((id) => id !== null)
				.map(
					(id) =>
						props.ingredients !== undefined &&
						props.ingredients.find((item) => id === item._id)
				),
		[props.ingredients, props.order.ingredients]
	);

	const priceScore = useMemo(() => {
		return orderIngredients.reduce((acc, ing) => acc + ing.price, 0);
	}, [orderIngredients]);

	// eslint-disable-next-line array-callback-return
	orderIngredients.map((ing) => {
		const isLocated =
			sortOrders.filter((el) => el.item._id === ing._id).length !== 0;

		if (!isLocated) {
			sortOrders.push({
				item: ing,
				count: orderIngredients.filter((item) => item._id === ing._id).length,
			});
		}
	});

	return (
		<>
			<p
				className={`text text_type_digits-default ${style.order_number}`}
			>{`#${props.order.number}`}</p>
			<h1 className={`text text_type_main-medium ${style.title} mt-10`}>
				{props.order.name}
			</h1>
			<OrderStatus order={props.order} />
			<p className={`text text_type_main-medium ${style.title} mt-15`}>
				Состав:
			</p>
			<ul className={style.ingredients}>
				{sortOrders.map(({ item, count }) => {
					return (
						<li className={style.ingredient} key={item._id}>
							<OrderIngredientImg img={item.image} alt={item.name} />
							<p className={`text text_type_main-default ${style.name}`}>
								{item.name}
							</p>
							<div className={style.price}>
								<p
									className={`text text_type_digits-default`}
								>{`${count} х ${item.price}`}</p>
								<CurrencyIcon type="primary" />
							</div>
						</li>
					);
				})}
			</ul>
			<div className={style.footer}>
				<OrderCheckDay order={props.order} />
				<div className={style.total_price}>
					<p className={`text text_type_digits-default`}>{priceScore}</p>
					<CurrencyIcon type="primary" />
				</div>
			</div>
		</>
	);
}

OrderInfo.propTypes = {
	order: PropTypes.object.isRequired,
	ingredients: PropTypes.array.isRequired,
};

export default OrderInfo;
