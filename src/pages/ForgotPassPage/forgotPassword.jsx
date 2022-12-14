import React, { useCallback } from "react";
import {
	Button,
	EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgotPassword.module.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../services/actions/usersAction";

function ForgotPassPage() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [valueEmail, setValueEmail] = React.useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(forgotPassword(valueEmail, history));
	};

	const login = useCallback(() => {
		history.replace({ pathname: "/login" });
	}, [history]);

	return (
		<>
			<div className={styles.wrapper}>
				<form className={`${styles.form} mb-20`} onSubmit={onSubmit}>
					<h1 className="text text_type_main-medium">Восстановление пароля</h1>
					<EmailInput
						onChange={(e) => setValueEmail(e.target.value)}
						value={valueEmail}
						name={"email"}
						placeholder="Укажите e-mail"
					/>
					<Button type="primary" htmlType="submit">
						Восстановить
					</Button>
				</form>
				<div className={`${styles.text} mb-4`}>
					<p className="text text_type_main-default text_color_inactive">
						Вспомнили пароль?
					</p>
					<Button
						type="secondary"
						htmlType="button"
						extraClass={styles.link}
						onClick={login}
					>
						Войти
					</Button>
				</div>
			</div>
		</>
	);
}

export default ForgotPassPage;
