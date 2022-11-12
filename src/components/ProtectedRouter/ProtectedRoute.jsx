import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getUser } from "../../services/actions/usersAction";

function ProtectedRoute({ children, ...rest }) {
	const { user } = useSelector((store) => store.userInfo);
	const [isUserLoaded, setUserLoaded] = useState(false);

	const init = () => {
		getUser();
		setUserLoaded(true);
	};

	useEffect(() => {
		init();
	}, []);

	if (!isUserLoaded) {
		return null;
	}

	return (
		<Route
			{...rest}
			render={() => (user.name ? children : <Redirect to={"/login"} />)}
		/>
	);
}

export default ProtectedRoute;
