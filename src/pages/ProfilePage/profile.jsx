import React, { useCallback } from "react";
import {
	EmailInput,
	Input,
	PasswordInput,
	Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
import styles from "./profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
	getUser,
	updateUser,
	logout,
} from "../../services/actions/usersAction";
import { useHistory } from "react-router-dom";

function ProfilePage() {
	const dispatch = useDispatch();
	const history = useHistory();
	const { user } = useSelector((store) => store.userInfo);
	const [valueName, setValueName] = React.useState("");
	const [valuePass, setValuePass] = React.useState("");
	const [valueEmail, setValueEmail] = React.useState("");

	React.useEffect(() => {
		if (user) {
			setValueName(user.name);
			setValueEmail(user.email);
		}
	}, []);

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(
			updateUser({ email: valueEmail, password: valuePass, name: valueName })
		);
	};

	const cancleChange = () => {
		setValueName(user.name);
		setValueEmail(user.email);
	};

	const logoutUser = useCallback(() => {
		dispatch(logout());
		history.replace({ pathname: "/login" });
	}, []);

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
				<form className={styles.form} onSubmit={onSubmit}>
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
						onChange={(e) => setValueEmail(e.target.value)}
						value={valueEmail}
						name={"email"}
						placeholder="Логин"
						isIcon={true}
					></EmailInput>
					<PasswordInput
						onChange={(e) => setValuePass(e.target.value)}
						value={valuePass}
						name={"password"}
						icon={"EditIcon"}
					></PasswordInput>
					<div className={styles.buttons}>
						<Button type="secondary" htmlType="button" onClick={cancleChange}>
							Отмена
						</Button>
						<Button type="primary" htmlType="submit">
							Сохранить
						</Button>
					</div>
				</form>
			</div>
		</>
	);
}

export default ProfilePage;
