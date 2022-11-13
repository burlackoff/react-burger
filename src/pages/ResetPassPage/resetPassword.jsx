import React, { useCallback } from "react";
import {
	Button,
	Input,
	PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./resetPassword.module.css";
import { setResetPassApi } from "../../utils/api";
import { useHistory, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function ResetPassPage() {
	const history = useHistory();
	const { user } = useSelector((store) => store.userInfo);

	const [valuePass, setValuePass] = React.useState("");
	const [valueCode, setValueCode] = React.useState("");

	const onSubmit = useCallback((e) => {
		e.preventDefault();
		setResetPassApi().then((data) => console.log(data));
	}, []);

	const login = useCallback(() => {
		history.replace({ pathname: "/login" });
	}, [history]);

	if (user.name) {
		return <Redirect to={{ pathname: "/" }} />;
	}

	return (
		<>
			<div className={styles.wrapper}>
				<form className={`${styles.form} mb-20`} onSubmit={onSubmit}>
					<h1 className="text text_type_main-medium">Восстановление пароля</h1>
					<PasswordInput
						onChange={(e) => setValuePass(e.target.value)}
						value={valuePass}
						name={"password"}
						icon={"HideIcon"}
					/>
					<Input
						type="text"
						placeholder="Введите код из письма"
						onChange={(e) => setValueCode(e.target.value)}
						value={valueCode}
						name={"name"}
						error={false}
						errorText={"Error"}
						size={"default"}
					/>
					<Button type="primary" htmlType="submit">
						Сохранить
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

export default ResetPassPage;
