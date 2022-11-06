import {
	EmailInput,
	Input,
	PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
import styles from "./profile.module.css";

function ProfilePage() {
	return (
		<>
			<div className={styles.wrapper}>
				<nav className={styles.nav}>
					<ul className={styles.list}>
						<li className={styles.item}>
							<NavLink
								to={{ pathname: "/profile" }}
								className={`${styles.link} text text_type_main-medium text_color_inactive`}
								activeClassName={`${styles.active_link}`}
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
								to={{ pathname: "/exit" }}
								className={`${styles.link} text text_type_main-medium text_color_inactive`}
								activeClassName={styles.active_link}
							>
								Выход
							</NavLink>
						</li>
					</ul>
					<p className="text text_type_main-default text_color_inactive">
						В этом разделе вы можете изменить свои персональные данные
					</p>
				</nav>
				<form className={styles.form}>
					<Input></Input>
					<EmailInput></EmailInput>
					<PasswordInput></PasswordInput>
				</form>
			</div>
		</>
	);
}

export default ProfilePage;
