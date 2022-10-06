import style from './BurgerConstructor.module.css';
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import {GET_BURGER_INGREDIENTS, GET_BURGER_BUN} from '../../services/actions/currentBurger';

function BurgerConstructor({openModal}) {
  const {ingredients} = useSelector(store => store.burgerIngredients);
  const {bun} = useSelector(store => store.burgerIngredients);
  const dispatch = useDispatch();

  const [{isHover}, dropRef] = useDrop({
    accept: 'ingredient',
    drop(item) {
      if (item.type === 'bun') {dispatch({type: GET_BURGER_BUN, data: item})}
      else {dispatch({type: GET_BURGER_INGREDIENTS, data: item})}
    },
    collect: monitor => ({
      isHover: monitor.isOver()
    })
  })

  const borderColor = isHover ? 'lightgreen' : 'transparent';

  const price = ingredients.length > 0 && bun.price * 2 + ingredients.reduce((acc, item) => acc + item.price, 0);
  
  return (
    <>
      <div ref={dropRef} className={`${style.constructor}`} style={{borderColor}}>
        <article className='pl-4'>

          {Object.keys(bun).length !== 0 ?
          <div className={`${style.item_bun} pr-4`}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
          : 
          <div className={`${style.drop}`}>
            <h2 className={`${style.title}`}>Добавьте булку</h2>
          </div>
          }

          {ingredients.length > 0 ?
          <ul className={style.filling}>
            {ingredients.filter(ing => ing.type !== 'bun').map((ing, index) => (
              <li key={index} className={`${style.item} pr-2`}>
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
          :
          <>
            <div className={`${style.drop}`}>
              <h2 className={`${style.title}`}>Добавьте начинку</h2>
            </div>
          </>
          }
          
          {Object.keys(bun).length !== 0 ?
          <div className={`${style.item_bun} pr-4`}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
            : 
          <div className={`${style.drop}`}>
            <h2 className={`${style.title}`}>Добавьте булку</h2>
          </div>
          }

          {ingredients.length > 0 && Object.keys(bun).length !== 0 ?
          <div className={`${style.order} mt-10`}>
            <div className={style.price}>
              <p className="text text_type_digits-medium">{price}</p>
              <CurrencyIcon type="primary" />
            </div>
            <Button type="primary" size="large" onClick={openModal}>
              Оформить заказ
            </Button>
          </div>
          : <></>
          }
        </article>
      </div>
    </>
  )
}

BurgerConstructor.propTypes = {
  openModal: PropTypes.func.isRequired
};

export default BurgerConstructor