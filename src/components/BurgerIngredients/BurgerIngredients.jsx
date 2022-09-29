import React from 'react';
import style from './BurgerIngredients.module.css'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientsList from '../IngredientsList/IngredientsList';

function BurgerIngredients() {
  const [current, setCurrent] = React.useState('one');
  
  return (
    <article className={`${style.ingredients} mt-10`}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <nav className={`${style.tabs} mt-5`}>
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
        <IngredientsList list={'bun'} title={'Булки'}/>
        <IngredientsList list={'sauce'} title={'Соусы'}/>
        <IngredientsList list={'main'} title={'Начинки'}/>
      </div>
    </article>
  )
}

export default BurgerIngredients