import style from './Ingredient.module.css';
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import {ingredientType} from '../../utils/types';
import {useDispatch, useSelector} from 'react-redux';
import {showIngredientDetails} from '../../services/actions/showIngredientDetails';
import { useDrag } from 'react-dnd';

function Ingredient({data}) {
  const {ingredients} = useSelector(store => store.burgerIngredients);
  const {bun} = useSelector(store => store.burgerIngredients);
  const dispatch = useDispatch();
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: data,
  });

  const openModal = () => {
    dispatch(showIngredientDetails(data))
  }

  const setCounter = () => {
    if (data.type !== 'bun') {
      return ingredients.filter((item) => item._id === data._id).length
    } else if (JSON.stringify(bun) === JSON.stringify(data)) {
      return 2
    } else return 0
  }
  
  return (
    <>
      <li className={style.ingredient} ref={dragRef} onClick={openModal}>
        <img src={data.image} alt={data.name} className={`${style.image} pr-4 pl-4`} />
        <div className={`${style.price} mt-1 pr-4 pl-4`}>
          <p className='text text_type_digits-default'>{data.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className='text text_type_main-default mt-1'>{data.name}</p>
        {setCounter() !== 0 ? <Counter count={setCounter()} size="default" className={style.count} /> : <></>}
      </li>
    </>
  )
}

Ingredient.propTypes = {
  data: ingredientType,
};

export default Ingredient