import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, LoginPage } from "../../pages";

function App() {
	return (
		<>
			<AppHeader />
			<Router>
				<Switch>
					<Route path="/">
						<HomePage />
					</Route>
					<Route path="/login">
						<LoginPage />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
