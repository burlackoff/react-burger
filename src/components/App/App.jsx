import React from 'react';
import style from './App.module.css';
import AppHeader from '../AppHeader/AppHeader'; 
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import OrderDetails from '../OrderDetails/OrderDetails';
import {useSelector, useDispatch} from 'react-redux';
import {getIngredients} from '../../services/actions/getIngredients';
import {setOrder} from '../../services/actions/setOrder';

function App() {
  const ingredients = useSelector(store => store.ingredients.data);
  const dispatch = useDispatch();
  const [currentData, setCurrentData] = React.useState({});
  const [activeModalOrder, setActiveModalOrder] = React.useState(false);
  const [activeModalIngredient, setActiveModalIngredient] = React.useState(false);

  const handleCurrentData = (data) => {
    setCurrentData(data)
    setActiveModalIngredient(state => !state)
  }

  const handleCloseModalOrder = () => {
    setActiveModalOrder(false)
  }

  const handleOpenModalOrder = () => {
    setActiveModalOrder(true)
    dispatch(setOrder(ingredients.map(ing => ing._id)))
  }

  const handleCloseModalIngredient = () => {
    setActiveModalIngredient(false)
  }


  React.useEffect(() => {
    dispatch(getIngredients())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])


  return (
    <>
      <AppHeader />
      <main className={`${style.contentWrapper} mb-10`}>
        <BurgerIngredients openModal={handleCurrentData}/>
        <BurgerConstructor openModal={handleOpenModalOrder}/>
      </main>
      <Modal onClose={handleCloseModalIngredient} visible={activeModalIngredient} title={'Детали ингредиента'}>
        <IngredientDetails data={currentData}/>
      </Modal>
      <Modal onClose={handleCloseModalOrder} visible={activeModalOrder} >
        <OrderDetails/>
      </Modal>
    </>
  );
}

export default App;