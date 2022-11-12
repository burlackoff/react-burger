import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
	HomePage,
	LoginPage,
	RegisterPage,
	ForgotPassPage,
	ResetPassPage,
	ProfilePage,
} from "../../pages";
import ProtectedRoute from "../ProtectedRouter/ProtectedRoute";

function App() {
	return (
		<>
			<Router>
				<AppHeader />
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
					<ProtectedRoute path="/profile" exact={true}>
						<ProfilePage />
					</ProtectedRoute>
				</Switch>
			</Router>
		</>
	);
}

export default App;
