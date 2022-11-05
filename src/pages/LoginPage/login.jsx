import React from "react";
import {
	Button,
	EmailInput,
	Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";

function LoginPage() {
	const [valuePass, setValuePass] = React.useState("");
	const [valueEmail, setValueEmail] = React.useState("");
	const inputRef = React.useRef(null);

	const onChange = (e) => {
		setValueEmail(e.target.value);
	};

	const onIconClick = () => {
		setTimeout(() => inputRef.current.focus(), 0);
		alert("Icon Click Callback");
	};

	return (
		<>
			<div className={styles.wrapper}>
				<form className={`${styles.form} mb-20`}>
					<h1 className="text text_type_main-medium">Вход</h1>
					<EmailInput
						onChange={onChange}
						value={valueEmail}
						name={"email"}
						placeholder="E-mail"
					/>
					<Input
						type="password"
						placeholder="Пароль"
						onChange={(e) => setValuePass(e.target.value)}
						icon={"HideIcon"}
						value={valuePass}
						name={"name"}
						error={false}
						ref={inputRef}
						onIconClick={onIconClick}
						errorText={"Error"}
						size={"default"}
					/>
					<Button type="primary" htmlType="submit">
						Вход
					</Button>
				</form>
				<div className={`${styles.text} mb-4`}>
					<p className="text text_type_main-default text_color_inactive">
						Вы — новый пользователь?
					</p>
					<Button type="secondary" htmlType="button" extraClass={styles.link}>
						Зарегистрироваться
					</Button>
				</div>
				<div className={styles.text}>
					<p className="text text_type_main-default text_color_inactive">
						Забыли пароль?
					</p>
					<Button type="secondary" htmlType="button" extraClass={styles.link}>
						Восстановить пароль
					</Button>
				</div>
			</div>
		</>
	);
}

export default LoginPage;
