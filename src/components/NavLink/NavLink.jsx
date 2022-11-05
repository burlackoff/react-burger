import style from "./NavLink.module.css";
import PropTypes from "prop-types";

function NavLink({ text, icon, type }) {
	const color =
		type === "secondary"
			? "text text_type_main-default text_color_inactive"
			: "text text_type_main-default";

	return (
		<a className={`${style.link} pt-4 pb-4 pr-5 pl-5`} href="/#">
			{icon}
			<p className={color}>{text}</p>
		</a>
	);
}

NavLink.propTypes = {
	text: PropTypes.string,
	icon: PropTypes.object,
	type: PropTypes.string
};

export default NavLink;
