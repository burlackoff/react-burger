import React from "react";
import style from "./AppHeader.module.css";
import {
	Logo,
	BurgerIcon,
	ListIcon,
	ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";

function AppHeader() {
	return (
		<header className={style.header}>
			<div className={`${style.content} m-4`}>
				<nav>
					<ul className={style.nav_list}>
						<li>
							<NavLink
								className={`${style.link} p-4 m-4 text_color_inactive`}
								activeClassName=""
								to={{ pathname: "/" }}
							>
								<BurgerIcon type="primary" />
								<p className="text text_type_main-default">Конструктор</p>
							</NavLink>
						</li>
						<li>
							<NavLink
								className={`${style.link} p-4 m-4`}
								to={{ pathname: "/profile/order" }}
							>
								<ListIcon type="secondary" />
								<p className="text text_type_main-default">Лента заказов</p>
							</NavLink>
						</li>
					</ul>
				</nav>
				<div className={style.logo}>
					<Logo />
				</div>
				<nav>
					<ul className={style.nav_list}>
						<li>
							<NavLink
								className={`${style.link} p-4 m-4`}
								to={{ pathname: "/profile" }}
							>
								<ProfileIcon type="secondary" />
								<p className="text text_type_main-default">Личный кабинет</p>
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default AppHeader;
