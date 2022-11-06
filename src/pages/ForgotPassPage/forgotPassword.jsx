import React from "react";
import {
	Button,
	EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgotPassword.module.css";
import { setEmailApi } from "../../utils/api";

function ForgotPassPage() {
	const [valueEmail, setValueEmail] = React.useState("");

	const onChange = (e) => {
		setValueEmail(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setEmailApi().then((data) => {
			console.log(data);
		});
	};
	return (
		<>
			<div className={styles.wrapper}>
				<form className={`${styles.form} mb-20`} onSubmit={(e) => onSubmit(e)}>
					<h1 className="text text_type_main-medium">Восстановление пароля</h1>
					<EmailInput
						onChange={onChange}
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
					<Button type="secondary" htmlType="button" extraClass={styles.link}>
						Войти
					</Button>
				</div>
			</div>
		</>
	);
}

export default ForgotPassPage;
