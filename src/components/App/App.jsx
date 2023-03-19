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
import { getUser, refreshToken } from "../../services/actions/usersAction";
import { getCookie } from "../../utils/cookie";
import FeedPage from "../../pages/FeedPage/feed";

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
				<Route path="/" exact>
					<HomePage />
				</Route>
				<Route path="/login" exact>
					<LoginPage />
				</Route>
				<Route path="/register" exact>
					<RegisterPage />
				</Route>
				<Route path="/forgot-password" exact>
					<ForgotPassPage />
				</Route>
				<Route path="/reset-password" exact>
					<ResetPassPage />
				</Route>
				<ProtectedRoute path="/profile" exact>
					<ProfilePage />
				</ProtectedRoute>
				<Route path="/ingredients/:id" exact>
					<IngredientDetails />
				</Route>
				<Route path="/feed" exact>
					<FeedPage />
				</Route>
				<Route path="/feed/:id" exact>
					<FeedPage />
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
	const cookie = getCookie("token");
	const token = localStorage.getItem("refreshToken");

	React.useEffect(() => {
		dispatch(getIngredients());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);

	React.useEffect(() => {
		if (!cookie && token) {
			dispatch(refreshToken());
		} else if (cookie && token) {
			dispatch(getUser());
		}
	}, [cookie, token]);

	return (
		<Router>
			<ModalSwitch />
		</Router>
	);
}

export default App;
