import React from "react";
import {
	Button,
	Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./resetPassword.module.css";

function ResetPassPage() {
	const [valuePass, setValuePass] = React.useState("");
	const [valueCode, setValueCode] = React.useState("");
	const refPass = React.useRef(null);

	const onIconClick = () => {
		setTimeout(() => refPass.current.focus(), 0);
		alert("Icon Click Callback");
	};

	return (
		<>
			<div className={styles.wrapper}>
				<form className={`${styles.form} mb-20`}>
					<h1 className="text text_type_main-medium">Восстановление пароля</h1>
					<Input
						type="password"
						placeholder="Введите новый пароль"
						onChange={(e) => setValuePass(e.target.value)}
						icon={"HideIcon"}
						value={valuePass}
						name={"name"}
						error={false}
						ref={refPass}
						onIconClick={onIconClick}
						errorText={"Error"}
						size={"default"}
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
					<Button type="secondary" htmlType="button" extraClass={styles.link}>
						Войти
					</Button>
				</div>
			</div>
		</>
	);
}

export default ResetPassPage;
