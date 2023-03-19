import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Modal from "../Modal/Modal";
import OrderAuthDetails from "../OrderAuthDetails/OrderAuthDetails";
import OrderDetailsInfo from "../OrderDetailsInfo/OrderDetailsInfo";

function ModalOrderInfo() {
	const history = useHistory();
	const location = useLocation();

	const closeOrderInfoModal = () => {
		history.goBack();
	};

	return (
		<Modal onClose={closeOrderInfoModal} visible>
			{location.state.background.pathname === "/profile/orders" ? (
				<OrderAuthDetails />
			) : (
				<OrderDetailsInfo />
			)}
		</Modal>
	);
}

export default ModalOrderInfo;
