import './BurgerConstructor.css';
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor({data}) {
  return (
    <article className='burger-constructor pl-4'>
      <div className='burger-constructor-item-bun pr-4'>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={data[0].name + ' (верх)'}
          price={data[0].price}
          thumbnail={data[0].image}
        />
      </div>
      <div>
        <ul className='burger-constructor-filling'>
          {data.filter((ing) => ing.type !== 'bun').map((ing) => (
            <li key={ing._id} className='burger-constructor-item pr-2'>
              <DragIcon type="primary" />
              <ConstructorElement
                text={ing.name}
                price={ing.price}
                thumbnail={ing.image}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className='burger-constructor-item-bun pr-4'>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={data[0].name + ' (низ)'}
          price={data[0].price}
          thumbnail={data[0].image}
        />
      </div>
      <div className='burger-constructor-order mt-10'>
        <div className='burger-constructor-price'>
          <p className="text text_type_digits-medium">610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </article>
  )
}

export default BurgerConstructor