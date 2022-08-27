import './Ingredient.css';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

function Ingredient({data}) {
  return (
    <li className='Ingredient'>
      <img src={data.image} alt={data.name} className="Ingredient-image pr-4 pl-4"/>
      <div className='Ingredient-price mt-1 pr-4 pl-4'>
        <p className='text text_type_digits-default'>{data.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className='text text_type_main-default mt-1'>{data.name}</p>
    </li>
  )
}

export default Ingredient