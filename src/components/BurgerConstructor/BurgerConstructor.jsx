import style from "./BurgerConstructor.module.css";
import {
	ConstructorElement,
	Button,
	CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import {
	sortedIngredients,
	setBurgerBun,
	addBurgerIngredient
} from "../../services/actions/currentBurger";
import { useCallback, useMemo } from "react";
import BurgerConstructorItem from "../BurgerConstructorItem/BurgerConstructorItem";

function BurgerConstructor({ openModal }) {
	const { ingredients } = useSelector(store => store.burgerIngredients);
	const { bun } = useSelector(store => store.burgerIngredients);
	const dispatch = useDispatch();

	const [{ isOver }, dropRef] = useDrop({
		accept: "ingredient",
		drop(item) {
			if (item.type === "bun") {
				dispatch(setBurgerBun(item));
			} else {
				dispatch(addBurgerIngredient(item));
			}
		},
		collect: monitor => ({
			isOver: monitor.isOver()
		})
	});

	const price = useMemo(() => {
		return (
			ingredients.length > 0 &&
			bun.price * 2 + ingredients.reduce((acc, item) => acc + item.price, 0)
		);
	}, [ingredients, bun]);

	const moveIngredient = useCallback(
		(dragIndex, hoverIndex) => {
			const dragItem = ingredients[dragIndex];
			const hoverItem = ingredients[hoverIndex];
			const newIngredients = [...ingredients];
			newIngredients[dragIndex] = hoverItem;
			newIngredients[hoverIndex] = dragItem;
			dispatch(sortedIngredients(newIngredients));
			// eslint-disable-next-line react-hooks/exhaustive-deps
		},
		[ingredients]
	);

	const renderIngredients = (ing, index) => {
		return (
			<BurgerConstructorItem
				ing={ing}
				index={index}
				key={ing.keyId}
				moveIng={moveIngredient}
			/>
		);
	};

	return (
		<>
			<div
				ref={dropRef}
				className={
					isOver
						? `${style.constructor} ${style.border_color}`
						: `${style.constructor}`
				}
			>
				<article className="pl-4">
					{bun ? (
						<div className={`${style.item_bun} pr-4`}>
							<ConstructorElement
								type="top"
								isLocked={true}
								text={`${bun.name} (верх)`}
								price={bun.price}
								thumbnail={bun.image}
							/>
						</div>
					) : (
						<div className={`${style.drop}`}>
							<h2 className={`${style.title}`}>Добавьте булку</h2>
						</div>
					)}

					{ingredients.length > 0 ? (
						<ul className={style.filling}>
							{ingredients.map((ing, index) => renderIngredients(ing, index))}
						</ul>
					) : (
						<>
							<div className={`${style.drop}`}>
								<h2 className={`${style.title}`}>Добавьте начинку</h2>
							</div>
						</>
					)}

					{bun ? (
						<div className={`${style.item_bun} pr-4`}>
							<ConstructorElement
								type="bottom"
								isLocked={true}
								text={`${bun.name} (низ)`}
								price={bun.price}
								thumbnail={bun.image}
							/>
						</div>
					) : (
						<div className={`${style.drop}`}>
							<h2 className={`${style.title}`}>Добавьте булку</h2>
						</div>
					)}

					{ingredients.length > 0 && bun ? (
						<div className={`${style.order} mt-10`}>
							<div className={style.price}>
								<p className="text text_type_digits-medium">{price}</p>
								<CurrencyIcon type="primary" />
							</div>
							<Button type="primary" size="large" onClick={openModal}>
								Оформить заказ
							</Button>
						</div>
					) : (
						<></>
					)}
				</article>
			</div>
		</>
	);
}

BurgerConstructor.propTypes = {
	openModal: PropTypes.func.isRequired
};

export default BurgerConstructor;
