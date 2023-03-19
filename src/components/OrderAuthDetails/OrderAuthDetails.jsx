import React from "react";
import style from "./OrderAuthDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import OrderInfo from "../OrderInfo/OrderInfo";

function OrderAuthDetails() {
	const orders = useSelector((store) => store.wsOrders.orders);
	const ingredients = useSelector((store) => store.ingredients.data);
	const location = useLocation();
	const params = useParams();
	const dispatch = useDispatch();

	const order = orders.find((item) => params.id === item._id);

	if (location.state === undefined) {
		return (
			order !== undefined &&
			order !== null && (
				<section className={style.wrapper_page}>
					<OrderInfo order={order} ingredients={ingredients} />
				</section>
			)
		);
	}

	return (
		order !== undefined &&
		order !== null && (
			<section className={style.wrapper}>
				<OrderInfo order={order} ingredients={ingredients} />
			</section>
		)
	);
}

export default OrderAuthDetails;
