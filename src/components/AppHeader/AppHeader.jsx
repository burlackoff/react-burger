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
	const [type, setType] = React.useState("construct");

	return (
		<header className={style.header}>
			<div className={`${style.content} m-4`}>
				<nav>
					<ul className={style.nav_list}>
						<li>
							<NavLink
								className={`${style.link} p-4 text text_type_main-default`}
								activeClassName={style.link_active}
								to={{ pathname: "/" }}
								exact="true"
								onClick={() => setType("construct")}
							>
								<BurgerIcon
									type={type === "construct" ? "primary" : "secondary"}
								/>
								<p className={style.text}>Конструктор</p>
							</NavLink>
						</li>
						<li>
							<NavLink
								className={`${style.link} p-4 text text_type_main-default`}
								activeClassName={style.link_active}
								to={{ pathname: "/profile/order" }}
								exact="true"
								onClick={() => setType("strip")}
							>
								<ListIcon type={type === "strip" ? "primary" : "secondary"} />
								<p className={style.text}>Лента заказов</p>
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
								className={`${style.link} p-4 text text_type_main-default`}
								activeClassName={style.link_active}
								to={{ pathname: "/profile" }}
								exact="true"
								onClick={() => setType("profile")}
							>
								<ProfileIcon
									type={type === "profile" ? "primary" : "secondary"}
								/>
								<p className={style.text}>Личный кабинет</p>
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default AppHeader;
