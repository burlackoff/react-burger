import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AppHeader from "../AppHeader/AppHeader";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { deleteIngredientDetails } from "../../services/actions/showIngredientDetails";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	useLocation,
	useHistory,
} from "react-router-dom";
import {
	HomePage,
	LoginPage,
	RegisterPage,
	ForgotPassPage,
	ResetPassPage,
	ProfilePage,
} from "../../pages";
import ProtectedRoute from "../ProtectedRouter/ProtectedRoute";

function ModalSwitch() {
	const history = useHistory();
	const location = useLocation();

	const background = location.state && location.state.background;

	const dispatch = useDispatch();
	const activeModalIngredient = useSelector(
		(store) => store.ingredientDetail.active
	);
	const handleCloseModalIngredient = () => {
		dispatch(deleteIngredientDetails());
		history.goBack();
	};

	return (
		<>
			<AppHeader />
			<Switch location={background || location}>
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
				<Route path="/ingredients/:id" exact={true}>
					<IngredientDetails />
				</Route>
			</Switch>
			{background && (
				<Route path="/ingredients/:id">
					<Modal
						onClose={handleCloseModalIngredient}
						visible={activeModalIngredient}
						title={"Детали ингредиента"}
					>
						<IngredientDetails />
					</Modal>
				</Route>
			)}
		</>
	);
}

function App() {
	return (
		<Router>
			<ModalSwitch />
		</Router>
	);
}

export default App;
