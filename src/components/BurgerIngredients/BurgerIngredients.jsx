import React from 'react';
import style from './BurgerIngredients.module.css'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from '../Ingredient/Ingredient';
import {ingredientType} from '../../utils/types';
import PropTypes from 'prop-types';

function BurgerIngredients({data, openModal}) {
  const [current, setCurrent] = React.useState('one');

  return (
    <article className={style.ingredients + ' mt-10'}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <nav className={style.tabs + ' mt-5'}>
        <li>
          <Tab value="one" active={current === 'one'} onClick={setCurrent}>
            Булки
          </Tab>
        </li>
        <li>
          <Tab value="two" active={current === 'two'} onClick={setCurrent}>
            Соусы
          </Tab>
        </li>
        <li>
          <Tab value="three" active={current === 'three'} onClick={setCurrent}>
            Начинки
          </Tab>
        </li>
      </nav>
      <div className={style.wrapper}>
        <section className='mt-10'>
          <h2 className='text text_type_main-medium'>Булки</h2>
          <ul className={style.list + ' mt-6'}>
            {data
              .filter((ing) => ing.type === 'bun')
              .map((ing) => (
                <Ingredient data={ing} key={ing._id} openModal={openModal} />
              ))
            }
          </ul>
        </section>
        <section className='mt-10'>
          <h2 className='text text_type_main-medium'>Соусы</h2>
          <ul className={style.list + ' mt-6'}>
          {data
              .filter((ing) => ing.type === 'sauce')
              .map((ing) => (
                <Ingredient data={ing} key={ing._id} openModal={openModal} />
              ))
            }
          </ul>
        </section>
        <section className='mt-10'>
          <h2 className='text text_type_main-medium'>Начинки</h2>
          <ul className={style.list + ' mt-6'}>
          {data
              .filter((ing) => ing.type === 'main')
              .map((ing) => (
                <Ingredient data={ing} key={ing._id} openModal={openModal} />
              ))
            }
          </ul>
        </section>
      </div>
    </article>
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired,
  openModal: PropTypes.func.isRequired
};

export default BurgerIngredients