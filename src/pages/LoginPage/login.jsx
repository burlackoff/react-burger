import React from "react";
import {
	Button,
	EmailInput,
	PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../services/actions/usersAction";
import { useHistory, Redirect, useLocation } from "react-router-dom";

function LoginPage() {
	const { user } = useSelector((store) => store.userInfo);
	const history = useHistory();
	const location = useLocation();
	const dispatch = useDispatch();
	const [valuePass, setValuePass] = React.useState("");
	const [valueEmail, setValueEmail] = React.useState("");

	const onSubmit = React.useCallback(
		(e) => {
			e.preventDefault();
			dispatch(
				login({ email: valueEmail, password: valuePass, history: history })
			);
		},
		[valuePass, valueEmail]
	);

	const register = () => {
		history.replace({ pathname: "/register" });
	};

	const forgotPassword = () => {
		history.replace({ pathname: "/forgot-password" });
	};

	if (user.name) {
		return <Redirect to={location?.state?.from || "/"} />;
	}

	return (
		<>
			<div className={styles.wrapper}>
				<form className={`${styles.form} mb-20`} onSubmit={onSubmit}>
					<h1 className="text text_type_main-medium">Вход</h1>
					<EmailInput
						onChange={(e) => setValueEmail(e.target.value)}
						value={valueEmail}
						name={"email"}
						placeholder="E-mail"
					/>
					<PasswordInput
						onChange={(e) => setValuePass(e.target.value)}
						value={valuePass}
						name={"password"}
						icon={"HideIcon"}
					/>
					<Button type="primary" htmlType="submit">
						Вход
					</Button>
				</form>
				<div className={`${styles.text} mb-4`}>
					<p className="text text_type_main-default text_color_inactive">
						Вы — новый пользователь?
					</p>
					<Button
						type="secondary"
						htmlType="button"
						extraClass={styles.link}
						onClick={register}
					>
						Зарегистрироваться
					</Button>
				</div>
				<div className={styles.text}>
					<p className="text text_type_main-default text_color_inactive">
						Забыли пароль?
					</p>
					<Button
						type="secondary"
						htmlType="button"
						extraClass={styles.link}
						onClick={forgotPassword}
					>
						Восстановить пароль
					</Button>
				</div>
			</div>
		</>
	);
}

export default LoginPage;
