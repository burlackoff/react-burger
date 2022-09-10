import style from './IngredientDetails.module.css'

function IngredientDetails({data}) {
  return (
    <div className={style.content}>
      <img src={data.image_large} alt={data.name} className={style.image}/>
      <h3 className='text text_type_main-medium mt-4'>{data.name}</h3>
      <ul className={style.infoList}>
        <li className={style.infoItem}>
          <span className='text text_type_main-default text_color_inactive'>Калории,ккал</span>
          <span className='text text_type_digits-default text_color_inactive'>{data.calories}</span>
        </li>
        <li className={style.infoItem}>
          <span className='text text_type_main-default text_color_inactive'>Белки, г</span>
          <span className='text text_type_digits-default text_color_inactive'>{data.proteins}</span>
        </li>
        <li className={style.infoItem}>
          <span className='text text_type_main-default text_color_inactive'>Жиры, г</span>
          <span className='text text_type_digits-default text_color_inactive'>{data.fat}</span>
        </li>
        <li className={style.infoItem}>
          <span className='text text_type_main-default text_color_inactive'>Углеводы, г</span>
          <span className='text text_type_digits-default text_color_inactive'>{data.carbohydrates}</span>
        </li>
      </ul>
    </div>
  )
}

export default IngredientDetails