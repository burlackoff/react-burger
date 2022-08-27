import React from 'react';

import './BurgerIngredients.css'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from '../Ingredient/Ingredient';

function BurgerIngredients({data}) {
  const [current, setCurrent] = React.useState('Булки')

  return (
    <article className="Ingredients mt-10">
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <nav className="Ingredients-tabs">
        <li>
          <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
            Булки
          </Tab>
        </li>
        <li>
          <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
            Соусы
          </Tab>
        </li>
        <li>
          <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
            Начинки
          </Tab>
        </li>
      </nav>
      <section className='Ingredients-section mt-10'>
        <h2 className='text text_type_main-medium'>Булки</h2>
        <ul className='Ingredients-list'>
          {data
            .filter((ing) => ing.type === 'bun')
            .map((ing) => (
              <Ingredient data={ing} key={ing._id} />
            ))
          }
        </ul>
      </section>
      <section className='Ingredients-section mt-10'>
        <h2 className='text text_type_main-medium'>Соусы</h2>
      </section>
      <section className='Ingredients-section mt-10'>
        <h2 className='text text_type_main-medium'>Начинки</h2>
      </section>
    </article>
  )
}

export default BurgerIngredients