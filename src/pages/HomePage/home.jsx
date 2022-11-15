import React from "react";
import style from "./home.module.css";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";
import Modal from "../../components/Modal/Modal";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import { useSelector, useDispatch } from "react-redux";
import { setOrder } from "../../services/actions/setOrder";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function HomePage() {
	const { ingredients } = useSelector((store) => store.burgerIngredients);
	const { bun } = useSelector((store) => store.burgerIngredients);
	const dispatch = useDispatch();
	const [activeModalOrder, setActiveModalOrder] = React.useState(false);

	const handleCloseModalOrder = () => {
		setActiveModalOrder(false);
	};

	const handleOpenModalOrder = () => {
		setActiveModalOrder(true);
		dispatch(
			setOrder([bun._id, ...ingredients.map((ing) => ing._id), bun._id])
		);
	};

	return (
		<>
			<DndProvider backend={HTML5Backend}>
				<main className={`${style.contentWrapper} mb-10`}>
					<BurgerIngredients />
					<BurgerConstructor openModal={handleOpenModalOrder} />
				</main>
			</DndProvider>
			<Modal onClose={handleCloseModalOrder} visible={activeModalOrder}>
				<OrderDetails />
			</Modal>
		</>
	);
}

export default HomePage;
