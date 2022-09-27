import style from './BurgerConstructor.module.css';
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

function BurgerConstructor({openModal}) {
  const ingredients = useSelector(store => store.ingredients.data);

  const bun = ingredients.length > 0 && ingredients.find(ingredient => ingredient.type === 'bun');
  const price = ingredients.length > 0 && bun.price * 2 + ingredients.filter(ing => ing.type !== 'bun').reduce((a, b) => a + b.price, 0);

  return (
    <>
      {ingredients.length > 0 && (
      <article className={`${style.constructor} pl-4`}>
        <div className={`${style.item_bun} pr-4`}>
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
            {ingredients.filter(ing => ing.type !== 'bun').map((ing) => (
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
        <div className={`${style.item_bun} pr-4`}>
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
      </article>)}
    </>
  )
}

BurgerConstructor.propTypes = {
  openModal: PropTypes.func.isRequired
};

export default BurgerConstructor