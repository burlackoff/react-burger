import React from "react";
import {
	EmailInput,
	Input,
	PasswordInput,
	Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
import styles from "./profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../services/actions/usersAction";

function ProfilePage() {
	const dispatch = useDispatch();
	const { user } = useSelector((store) => store.userInfo);

	const [valueName, setValueName] = React.useState("");
	const [valuePass, setValuePass] = React.useState("");
	const [valueEmail, setValueEmail] = React.useState("");

	React.useEffect(() => {
		if (user) {
			dispatch(getUser());
			setValueName(user.name);
			setValueEmail(user.email);
		}
	}, []);

	const onSubmit = React.useCallback(
		(e) => {
			e.preventDefault();
			dispatch(
				updateUser({ email: valueEmail, password: valuePass, name: valueName })
			);
		},
		[valueEmail, valuePass, valueName]
	);

	const cancleChange = () => {
		setValueName(user.name);
		setValueEmail(user.email);
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
				<form className={styles.form} onSubmit={onSubmit}>
					<Input
						type="text"
						placeholder="Имя"
						onChange={(e) => setValueName(e.target.value)}
						icon={"EditIcon"}
						value={user.name}
						name={"name"}
						error={false}
						errorText={"Error"}
						size={"default"}
					></Input>
					<EmailInput
						onChange={(e) => setValueEmail(e.target.value)}
						value={user.email}
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
						<Button
							type="secondary"
							htmlType="button"
							onClick={() => cancleChange()}
						>
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
