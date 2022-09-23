import React from 'react';
import style from './IngredientsList.module.css';
import Ingredient from "../Ingredient/Ingredient";
import PropTypes from 'prop-types';
import {IngredientsContext} from '../../services/ingredientsContext';

function IngredientsList({openModal, list, title}) {
  const {ingredients} = React.useContext(IngredientsContext);

  return (
    <section className='mt-10'>
      <h2 className='text text_type_main-medium'>{title}</h2>
      <ul className={`${style.list} mt-6`}>
        {ingredients
          .filter((ing) => ing.type === list)
          .map((ing) => (
            <Ingredient data={ing} key={ing._id} openModal={openModal} />
          ))
        }
      </ul>
    </section>
  )
}

IngredientsList.propTypes = {
  openModal: PropTypes.func.isRequired,
  list: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default IngredientsList