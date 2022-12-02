import React from "react";
import {
	ConstructorElement,
	DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { deleteBurgerIngredient } from "../../services/actions/currentBurger";
import style from "./BurgerConstructorItem.module.css";
import { useRef } from "react";

function BurgerConstructorItem({ ing, index, moveIng }) {
	const dispatch = useDispatch();
	const ref = useRef(null);

	const [{ isDragging }, dragRef] = useDrag({
		type: "item",
		item: { index },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	const [, drop] = useDrop({
		accept: "item",
		hover: (item, monitor) => {
			if (!ref.current) return;
			const dragIndex = item.index;
			const hoverIndex = index;

			if (dragIndex === hoverIndex) return;

			const hoverBoundingRect = ref.current?.getBoundingClientRect();
			const hoverMiddleY =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;

			if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
			if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

			moveIng(dragIndex, hoverIndex);
			item.index = hoverIndex;
		},
	});

	dragRef(drop(ref));

	const onHandleClose = () => {
		dispatch(deleteBurgerIngredient(index));
	};

	return (
		<li
			className={
				isDragging
					? `${style.item} ${style.item_hover} pr-2`
					: `${style.item} pr-2`
			}
			ref={ref}
		>
			<div className={style.icon}>
				<DragIcon type="primary" />
			</div>
			<ConstructorElement
				text={ing.name}
				price={ing.price}
				thumbnail={ing.image}
				handleClose={() => onHandleClose()}
			/>
		</li>
	);
}

export default BurgerConstructorItem;
