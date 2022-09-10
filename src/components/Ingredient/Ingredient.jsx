import style from './Ingredient.module.css';
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import {ingredientType} from '../../utils/types';

import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

function Ingredient({data}) {
  const [count, setCount] = React.useState(0);
  const [activeModal, setActiveModal] = React.useState(false);

  const handleCloseModal = () => {
    setActiveModal(false)
  }

  const handleOpenModal = () => {
    setActiveModal(true)
  }

  const modal = (
    <Modal onClose={handleCloseModal} visible={activeModal}>
      <IngredientDetails data={data} />
    </Modal>
  )

  return (
    <>
      <li className={style.ingredient} onClick={handleOpenModal}>
        <img src={data.image} alt={data.name} className={style.image + ' pr-4 pl-4'}/>
        <div className={style.price + ' mt-1 pr-4 pl-4'}>
          <p className='text text_type_digits-default'>{data.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className='text text_type_main-default mt-1'>{data.name}</p>
        <Counter count={count} size="default" onClick={setCount} className={style.count} />
      </li>
      {activeModal && modal}
    </>
  )
}

Ingredient.propTypes = {
  data: ingredientType
};

export default Ingredient