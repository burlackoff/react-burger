import './BurgerConstructor.css';
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor({data}) {
  return (
    <ul className='burger-constructor mt-25'>
      <li>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={data[0].name + ' (верх)'}
          price={data[0].price}
          thumbnail={data[0].image}
        />
      </li>
      <li>
        <ul className='burger-constructor-filling'>
          {data.filter((ing) => ing.type !== 'bun').map((ing) => (
            <li key={ing._id}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={ing.name}
                price={ing.price}
                thumbnail={ing.image}
              />
            </li>
          ))}
        </ul>
      </li>
      <li>
      <ConstructorElement
          type="bottom"
          isLocked={true}
          text={data[0].name + ' (низ)'}
          price={data[0].price}
          thumbnail={data[0].image}
        />
      </li>
    </ul>
  )
}

export default BurgerConstructor