import style from './IngredientsList.module.css';
import Ingredient from "../Ingredient/Ingredient";
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

function IngredientsList({list, title}) {
  const ingredients = useSelector(store => store.ingredients.data);

  return (
    <section className='mt-10' id={`${list}`}>
      <h2 className='text text_type_main-medium'>{title}</h2>
      <ul className={`${style.list} mt-6`}>
        {ingredients.length > 0 && ingredients
          .filter((ing) => ing.type === list)
          .map((ing) => (
            <Ingredient data={ing} key={ing._id} />
          ))
        }
      </ul>
    </section>
  )
}

IngredientsList.propTypes = {
  list: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default IngredientsList