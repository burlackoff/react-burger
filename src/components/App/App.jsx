import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
	HomePage,
	LoginPage,
	RegisterPage,
	ForgotPassPage,
	ResetPassPage,
} from "../../pages";

function App() {
	return (
		<>
			<AppHeader />
			<Router>
				<Switch>
					<Route path="/" exact={true}>
						<HomePage />
					</Route>
					<Route path="/login" exact={true}>
						<LoginPage />
					</Route>
					<Route path="/register" exact={true}>
						<RegisterPage />
					</Route>
					<Route path="/forgot-password" exact={true}>
						<ForgotPassPage />
					</Route>
					<Route path="/reset-password" exact={true}>
						<ResetPassPage />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
