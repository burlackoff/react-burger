import React, { useCallback } from "react";
import {
	Button,
	Input,
	PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./resetPassword.module.css";
import { resetPassword } from "../../services/actions/usersAction";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function ResetPassPage() {
	const dispatch = useDispatch();
	const history = useHistory();
	const { successEmail } = useSelector((store) => store.userInfo);
	const [password, setPass] = React.useState("");
	const [token, setToken] = React.useState("");

	React.useEffect(() => {
		if (!successEmail) {
			history.replace({ pathname: "forgot-password" });
		}
	});

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(resetPassword({ password, token }));
		history.replace({ pathname: "/login" });
	};

	const login = useCallback(() => {
		history.replace({ pathname: "/login" });
	}, [history]);

	return (
		<>
			<div className={styles.wrapper}>
				<form className={`${styles.form} mb-20`} onSubmit={onSubmit}>
					<h1 className="text text_type_main-medium">Восстановление пароля</h1>
					<PasswordInput
						onChange={(e) => setPass(e.target.value)}
						value={password}
						name={"password"}
						icon={"HideIcon"}
					/>
					<Input
						type="text"
						placeholder="Введите код из письма"
						onChange={(e) => setToken(e.target.value)}
						value={token}
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
