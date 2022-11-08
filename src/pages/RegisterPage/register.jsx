import React, { useCallback } from "react";
import {
	Button,
	EmailInput,
	PasswordInput,
	Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./register.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../services/actions/usersAction";
import { useHistory } from "react-router-dom";

function RegisterPage() {
	const history = useHistory();
	const dispatch = useDispatch();
	const [valueName, setValueName] = React.useState("");
	const [valuePass, setValuePass] = React.useState("");
	const [valueEmail, setValueEmail] = React.useState("");

	const onSubmit = React.useCallback(
		(e) => {
			e.preventDefault();
			dispatch(
				register({ email: valueEmail, password: valuePass, name: valueName })
			);
		},
		[valueEmail, valuePass, valueName]
	);

	const login = useCallback(() => {
		history.replace({ pathname: "/login" });
	}, [history]);

	return (
		<>
			<div className={styles.wrapper}>
				<form className={`${styles.form} mb-20`} onSubmit={onSubmit}>
					<h1 className="text text_type_main-medium">Регистрация</h1>
					<Input
						type="text"
						placeholder="Имя"
						onChange={(e) => setValueName(e.target.value)}
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
						placeholder="E-mail"
					/>
					<PasswordInput
						onChange={(e) => setValuePass(e.target.value)}
						value={valuePass}
						name={"password"}
						icon={"HideIcon"}
					/>
					<Button type="primary" htmlType="submit">
						Зарегистрироваться
					</Button>
				</form>
				<div className={`${styles.text}`}>
					<p className="text text_type_main-default text_color_inactive">
						Уже зарегистрированы?
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

export default RegisterPage;
