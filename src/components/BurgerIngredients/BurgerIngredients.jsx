import React from 'react';

import './BurgerIngredients.css'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients() {
  
  const [current, setCurrent] = React.useState('Булки')

  return (
    <article className="Ingredients mt-10">
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <nav className="Ingredients-tabs">
        <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
          Начинки
        </Tab>
      </nav>
      <section className='Ingredients-section mt-10'>
        <h2 className='text text_type_main-medium'>Булки</h2>
        
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