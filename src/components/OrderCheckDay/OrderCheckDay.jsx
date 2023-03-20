import React from "react";
import PropTypes from "prop-types";

function OrderCheckDay({ order }) {
	const currentDay = new Date().getDate();
	const dayOfOrder = order.createdAt.slice(8, 10);

	const checkDay = () => {
		return dayOfOrder === currentDay;
	};

	return (
		<p className={`text text_type_main-default text_color_inactive`}>
			{checkDay() ? "Сегодня" : "Вчера"}, {order.createdAt.slice(11, 16)}{" "}
			{`i-GMT+3`}
		</p>
	);
}

OrderCheckDay.propTypes = {
	order: PropTypes.object.isRequired,
};

export default OrderCheckDay;
