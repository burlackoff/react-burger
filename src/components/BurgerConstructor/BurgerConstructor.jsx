import style from './BurgerConstructor.module.css';
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import {IngredientsContext} from '../../services/ingredientsContext';
import React from 'react';

function BurgerConstructor({openModal}) {
  const {ingredients} = React.useContext(IngredientsContext);
  const bun = React.useMemo(() => ingredients.find(ingredient => ingredient.type === 'bun'), [ingredients]);
  const ingredientsWithoutBun = React.useMemo(() => ingredients.filter(ingredient => ingredient.type !== 'bun'), [ingredients]);
  
  const price = React.useMemo(() => bun.price * 2 + ingredientsWithoutBun.reduce((a, b) => a + b.price, 0), [bun, ingredientsWithoutBun]);

  return (
    <article className={`${style.constructor} pl-4`}>
      <div className={`${style.itemBun} pr-4`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${bun.name} (верх)`}
          price={bun.price}
          thumbnail={bun.image}
        />
      </div>
      <div>
        <ul className={style.filling}>
          {ingredientsWithoutBun.map((ing) => (
            <li key={ing._id} className={`${style.item} pr-2`}>
              <div className={style.icon}>
                <DragIcon type="primary" />
              </div>
              <ConstructorElement
                text={ing.name}
                price={ing.price}
                thumbnail={ing.image}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={`${style.itemBun} pr-4`}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${bun.name} (низ)`}
          price={bun.price}
          thumbnail={bun.image}
        />
      </div>
      <div className={`${style.order} mt-10`}>
        <div className={style.price}>
          <p className="text text_type_digits-medium">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" onClick={openModal}>
          Оформить заказ
        </Button>
      </div>
    </article>
  )
}

BurgerConstructor.propTypes = {
  openModal: PropTypes.func.isRequired
};

export default BurgerConstructor