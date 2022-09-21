import style from './BurgerConstructor.module.css';
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import {IngredientsContext} from '../../services/ingredientsContext';
import React from 'react';

function BurgerConstructor({openModal}) {
  const {ingredients} = React.useContext(IngredientsContext);
  // eslint-disable-next-line array-callback-return
  const buns = ingredients.filter((ing) => {if (ing.type === 'bun') return ing});

  


  return (
    <article className={`${style.constructor} pl-4`}>
      <div className={`${style.itembun} pr-4`}>
        {console.log(ingredients, buns)}
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${ingredients[0].name} (верх)`}
          price={ingredients[0].price}
          thumbnail={ingredients[0].image}
        />
      </div>
      <div>
        <ul className={style.filling}>
          {ingredients.filter((ing) => ing.type !== 'bun').map((ing) => (
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
          text={`${ingredients[0].name} (низ)`}
          price={ingredients[0].price}
          thumbnail={ingredients[0].image}
        />
      </div>
      <div className={`${style.order} mt-10`}>
        <div className={style.price}>
          <p className="text text_type_digits-medium">610</p>
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