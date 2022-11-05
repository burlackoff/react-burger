import React from "react";
import {
	Button,
	EmailInput,
	Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./register.module.css";

function RegisterPage() {
	const [valueName, setValueName] = React.useState("");
	const [valuePass, setValuePass] = React.useState("");
	const [valueEmail, setValueEmail] = React.useState("");
	const inputPassRef = React.useRef(null);

	const onChange = (e) => {
		setValueEmail(e.target.value);
	};

	const onIconClick = () => {
		setTimeout(() => inputPassRef.current.focus(), 0);
		alert("Icon Click Callback");
	};

	return (
		<>
			<div className={styles.wrapper}>
				<form className={`${styles.form} mb-20`}>
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
						ref={inputPassRef}
						onIconClick={onIconClick}
						errorText={"Error"}
						size={"default"}
					/>
					<Button type="primary" htmlType="submit">
						Зарегистрироваться
					</Button>
				</form>
				<div className={`${styles.text}`}>
					<p className="text text_type_main-default text_color_inactive">
						Уже зарегистрированы?
					</p>
					<Button type="secondary" htmlType="button" extraClass={styles.link}>
						Войти
					</Button>
				</div>
			</div>
		</>
	);
}

export default RegisterPage;
