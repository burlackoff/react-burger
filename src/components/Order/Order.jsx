import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import OrderCheckDay from "../OrderCheckDay/OrderCheckDay";
import OrderIngredientImg from "../OrderIngredientImg/OrderIngredientImg";
import OrderStatus from "../OrderStatus/OrderStatus";
import style from "./Order.module.css";
import { v4 as uuid4 } from "uuid";

function Order(props) {
	const { number, name } = props.data;
	const ingredients = useSelector((store) => store.ingredients.data);
	const location = useLocation();

	const orderLength = props.data.ingredients.length;
	const disabledIngredientsCount = orderLength - 5;

	const orderIngredients = useMemo(
		() =>
			props.data.ingredients
				.filter((id) => id !== null)
				.map((id) => ingredients.find((item) => id === item._id)),
		[ingredients, props.data.ingredients]
	);

	const priceScore = useMemo(() => {
		return orderIngredients.reduce((acc, ing) => acc + ing.price, 0);
	}, [orderIngredients]);

	return (
		<li className={`${style.wrapper} mr-2`}>
			<div className={style.info}>
				<p
					className={`text text_type_digits-default ${style.title}`}
				>{`#${number}`}</p>
				<OrderCheckDay order={props.data} />
			</div>
			<h2 className={`text text_type_main-medium ${style.title}`}>{name}</h2>
			{location.pathname === "/profile/orders" && (
				<OrderStatus order={props.data} />
			)}
			<div className={style.details}>
				<ul className={style.ingredients_list}>
					{orderIngredients &&
						orderLength < 6 &&
						orderIngredients.map((ing) => {
							return (
								<li className={style.list} key={uuid4()}>
									{ing && <OrderIngredientImg img={ing.image} alt={ing.name} />}
								</li>
							);
						})}
					{orderIngredients &&
						orderLength >= 6 &&
						orderIngredients.slice(0, 5).map((ing) => {
							return (
								<li className={style.list} key={uuid4()}>
									{ing && <OrderIngredientImg img={ing.image} alt={ing.name} />}
								</li>
							);
						})}
					{orderIngredients &&
						orderLength > 6 &&
						orderIngredients.slice(5, 6).map((ing) => {
							return (
								<li className={style.list} key={uuid4()}>
									<p
										className={`text text_type_main-default ${style.disabled_count}`}
									>{`+${disabledIngredientsCount}`}</p>
									<div className={style.disabledImg}>
										{ing && (
											<OrderIngredientImg img={ing.image} alt={ing.name} />
										)}
									</div>
								</li>
							);
						})}
				</ul>
				<div className={style.price}>
					<p className={`text text_type_digits-default ${style.title}`}>
						{priceScore}
					</p>
					<CurrencyIcon type="primary" />
				</div>
			</div>
		</li>
	);
}

export default Order;
