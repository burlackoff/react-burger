import style from './BurgerConstructor.module.css';
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';

function BurgerConstructor({openModal}) {
  const {ingredients} = useSelector(store => store.burgerIngredients);
  const {bun} = useSelector(store => store.burgerIngredients);

  const [{isHover}, dropRef] = useDrop({
    accept: 'ingredient',
    collect: monitor => ({
      isHover: monitor.isOver()
    })
  })

  const borderColor = isHover ? 'lightgreen' : 'transparent';
  console.log(Object.keys(bun).length !== 0);

  let price = ingredients.length > 0 && bun.price * 2 + ingredients.filter(ing => ing.type !== 'bun').reduce((acc, item) => acc + item.price, 0);
  
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