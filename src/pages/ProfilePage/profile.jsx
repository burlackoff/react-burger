import React from "react";
import {
	EmailInput,
	Input,
	PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
import styles from "./profile.module.css";

function ProfilePage() {
	const [valueName, setValueName] = React.useState("Марк");
	const [valuePass, setValuePass] = React.useState("password");
	const [valueEmail, setValueEmail] = React.useState("mail@stellar.burgers");

	const onChange = (e) => {
		setValueEmail(e.target.value);
	};

	const onChangePass = (e) => {
		setValuePass(e.target.value);
	};

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
					<Input
						type="text"
						placeholder="Имя"
						onChange={(e) => setValueName(e.target.value)}
						icon={"EditIcon"}
						value={valueName}
						name={"name"}
						error={false}
						errorText={"Error"}
						size={"default"}
					></Input>
					<EmailInput
						onChange={onChange}
						value={valueEmail}
						name={"email"}
						placeholder="Логин"
						isIcon={true}
					></EmailInput>
					<PasswordInput
						onChange={onChangePass}
						value={valuePass}
						name={"password"}
						icon={"EditIcon"}
					></PasswordInput>
				</form>
			</div>
		</>
	);
}

export default ProfilePage;
