import React from "react";
import PropTypes from "prop-types";

function OrderStatus({ order }) {
	const status =
		order.status === "done"
			? { text: "Выполнен", color: "var(--colors-interface-success)" }
			: order.status === "pending"
			? { text: "Готовится", color: "var(--colors-interface-accent)" }
			: { text: "Отменен", color: "var(--colors-interface-error)" };

	return (
		<>
			<p
				className={`text text_type_main-default mt-3`}
				style={{ color: status.color }}
			>
				{status.text}
			</p>
		</>
	);
}

OrderStatus.propTypes = {
	order: PropTypes.object.isRequired,
};

export default OrderStatus;
