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
import { getIngredients } from "../../services/actions/getIngredients";

function ModalSwitch() {
	const history = useHistory();
	let location = useLocation();

	let background = location.state && location.state.background;

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
					{}
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
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(getIngredients());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);

	return (
		<Router>
			<ModalSwitch />
		</Router>
	);
}

export default App;
