import React from "react";
import {
	EmailInput,
	Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";

function LoginPage() {
	return (
		<>
			<div>
				<form>
					<EmailInput name={"email"} placeholder="E-mail" />
					<Input />
				</form>
			</div>
		</>
	);
}

export default LoginPage;
