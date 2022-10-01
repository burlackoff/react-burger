import React from 'react';
import style from './BurgerIngredients.module.css'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientsList from '../IngredientsList/IngredientsList';

function BurgerIngredients() {
  const [current, setCurrent] = React.useState('bun');

  const handleScroll = (e) => {
    let scrollDis = e.currentTarget.scrollTop;
    e.currentTarget.querySelectorAll('section').forEach((section) => {
      if (section.offsetTop - e.currentTarget.offsetTop <= scrollDis) {
        setCurrent(section.id)
      }
    });
  }
  
  return (
    <article className={`${style.ingredients} mt-10`}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <nav className={`${style.tabs} mt-5`}>
        <li>
          <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
            Булки
          </Tab>
        </li>
        <li>
          <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
            Соусы
          </Tab>
        </li>
        <li>
          <Tab value="main" active={current === 'main'} onClick={setCurrent}>
            Начинки
          </Tab>
        </li>
      </nav>
      <div className={style.wrapper} onScroll={handleScroll}>
        <IngredientsList list={'bun'} title={'Булки'}/>
        <IngredientsList list={'sauce'} title={'Соусы'}/>
        <IngredientsList list={'main'} title={'Начинки'}/>
      </div>
    </article>
  )
}

export default BurgerIngredients