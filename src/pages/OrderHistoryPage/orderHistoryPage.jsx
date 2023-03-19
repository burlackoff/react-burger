import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";
import Order from "../../components/Order/Order";
import styles from "./orderHistoryPage.module.css";
import { logout } from "../../services/actions/usersAction";
import {
	WS_CONNECTION_START,
	WS_CONNECTION_STOP,
} from "../../services/actions/wsAction";

function OrderHistoryPage() {
	const orders = useSelector((store) => store.wsOrders.orders);
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();

	useEffect(() => {
		dispatch({
			type: WS_CONNECTION_START,
			payload: {
				url: "wss://norma.nomoreparties.space/orders",
				isAuth: true,
			},
		});
		return () => {
			dispatch({
				type: WS_CONNECTION_STOP,
			});
		};
	}, [dispatch]);

	const logoutUser = useCallback(() => {
		dispatch(logout());
		history.replace({ pathname: "/login" });
	}, [dispatch, history]);

	return (
		orders !== undefined && (
			<section className={styles.wrapper}>
				<nav className={styles.nav}>
					<ul className={styles.list}>
						<li className={styles.item}>
							<NavLink
								to={{ pathname: "/profile" }}
								className={`${styles.link} text text_type_main-medium text_color_inactive`}
							>
								Профиль
							</NavLink>
						</li>
						<li className={styles.item}>
							<NavLink
								to={{ pathname: "/profile/order" }}
								className={`${styles.link} text text_type_main-medium text_color_inactive`}
								activeClassName={styles.active_link}
							>
								История заказов
							</NavLink>
						</li>
						<li className={styles.item}>
							<NavLink
								to={{ pathname: "/login" }}
								className={`${styles.link} text text_type_main-medium text_color_inactive`}
								activeClassName={styles.active_link}
								onClick={logoutUser}
							>
								Выход
							</NavLink>
						</li>
					</ul>
					<p className="text text_type_main-default text_color_inactive">
						В этом разделе вы можете изменить свои персональные данные
					</p>
				</nav>
				<ul className={styles.orders}>
					{orders
						.map((order) => {
							return (
								<Link
									className={styles.link}
									to={{
										pathname: `/profile/orders/${order._id}`,
										state: { background: location },
									}}
									key={order._id}
								>
									<Order data={order} />
								</Link>
							);
						})
						.reverse()}
				</ul>
			</section>
		)
	);
}

export default OrderHistoryPage;
