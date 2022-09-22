import style from './OrderDetails.module.css';
import iconImageDone from '../../images/done.png';
import PropTypes from 'prop-types';

function OrderDetails({order}) {
  return (
    <>
      <h3 className='text text_type_digits-large'>{order}</h3>
      <p className='text text_type_main-medium mt-8'>идентификатор заказа</p>
      <img src={iconImageDone} alt="Готово." className={style.icon}></img>
      <p className='text text_type_main-default'>Ваш заказ начали готовить</p>
      <p className='text text_type_main-default text_color_inactive mt-2'>Дождитесь готовности на орбитальной станции</p>
    </>
  )
}

OrderDetails.propTypes = {
  order: PropTypes.number.isRequired
};

export default OrderDetails