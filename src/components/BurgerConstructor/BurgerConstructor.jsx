import style from './BurgerConstructor.module.css';
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import {IngredientsContext} from '../../services/ingredientsContext';
import React from 'react';

function BurgerConstructor({openModal}) {
  const {burger} = React.useContext(IngredientsContext);

  return (
    <article className={`${style.constructor} pl-4`}>
      <div className={`${style.itembun} pr-4`}>
        <ConstructorElement
          type="top"S
          isLocked={true}
          text={`${burger[0].name} (верх)`}
          price={burger[0].price}
          thumbnail={burger[0].image}
        />
      </div>
      <div>
        <ul className={style.filling}>
          {burger.filter((ing) => ing.type !== 'bun').map((ing) => (
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
      <div className={`${style.itembun} pr-4`}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${burger[0].name} (низ)`}
          price={burger[0].price}
          thumbnail={burger[0].image}
        />
      </div>
      <div className={`${style.order} mt-10`}>
        <div className={style.price}>
          <p className="text text_type_digits-medium">0</p>
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