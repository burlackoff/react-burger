import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getCookie } from "../../utils/cookie";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ onlyAuth = false, children, ...rest }) => {
	const isAuthorized = getCookie("token");
	const location = useLocation();

	if (!onlyAuth && isAuthorized) {
		const { from } = location.state || { from: { pathname: "/" } };

		return (
			<Route {...rest}>
				<Redirect to={from} />
			</Route>
		);
	}

	if (onlyAuth && !isAuthorized) {
		return (
			<Route {...rest}>
				<Redirect to={{ pathname: "/login", state: { from: location } }} />
			</Route>
		);
	}

	return <Route {...rest}>{children}</Route>;
};

ProtectedRoute.propTypes = {
	children: PropTypes.node.isRequired,
	onlyAuth: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
