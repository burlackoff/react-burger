import React, { useEffect } from "react";
import style from "./feed.module.css";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Order from "../../components/Order/Order";
import {
	WS_CONNECTION_START,
	WS_CONNECTION_STOP,
} from "../../services/actions/wsAction";

function FeedPage() {
	const orders = useSelector((store) => store.wsOrders.orders);
	const ordersData = useSelector((store) => store.wsOrders);
	const location = useLocation();
	const dispatch = useDispatch();

	const completedOrders = orders?.filter((order) => order.status === "done");
	const unCompletedOrders = orders?.filter((order) => order.status !== "done");

	useEffect(() => {
		dispatch({
			type: WS_CONNECTION_START,
			payload: {
				url: "wss://norma.nomoreparties.space/orders/all",
				isAuth: false,
			},
		});
		return () => {
			dispatch({
				type: WS_CONNECTION_STOP,
			});
		};
	}, [dispatch]);

	return (
		orders !== undefined && (
			<main className={style.main_wrapper}>
				<section className={`${style.feed} mt-10`}>
					<h1 className={"text text_type_main-large mb-5"}>Лента заказов</h1>
					<ul className={style.orders}>
						{orders?.map((order) => {
							return (
								<Link
									className={style.link}
									to={{
										pathname: `/feed/${order._id}`,
										state: { background: location },
									}}
									key={order._id}
								>
									<Order data={order} />
								</Link>
							);
						})}
					</ul>
				</section>
				<section className={style.statistics}>
					<div className={style.orders_number}>
						<div className={style.orders_wrapper}>
							<h2 className={style.title}>Готовы:</h2>
							<ul className={style.list}>
								{completedOrders.map((order) => {
									return (
										<li
											className={`text text_type_digits-default 
			  ${style.item} ${style.item_job}`}
											key={order._id}
										>
											{order.number}
										</li>
									);
								})}
							</ul>
						</div>
						<div className={style.orders_wrapper}>
							<h2 className={style.title}>В работе:</h2>
							<ul className={style.list}>
								{unCompletedOrders.map((order) => {
									return (
										<li
											className={`text text_type_digits-default ${style.item}`}
											key={order._id}
										>
											{order.number}
										</li>
									);
								})}
							</ul>
						</div>
					</div>
					<div>
						<h2 className={style.title}>Выполнено за все время:</h2>
						<p className={`text text_type_digits-large ${style.text}`}>
							{ordersData.total}
						</p>
					</div>
					<div>
						<h2 className={style.title}>Выполнено за сегодня:</h2>
						<p className={`text text_type_digits-large ${style.text}`}>
							{ordersData.totalToday}
						</p>
					</div>
				</section>
			</main>
		)
	);
}

export default FeedPage;
