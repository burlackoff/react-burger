import React from 'react';
import AppHeader from '../AppHeader/AppHeader'; 
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import style from './App.module.css';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import OrderDetails from '../OrderDetails/OrderDetails';
import {setOrderApi} from '../../utils/api';
import {useSelector, useDispatch} from 'react-redux';
import {getIngredients} from '../../services/actions/getIngredients';


function App() {
  const ingredients = useSelector(store => store.data);
  const dispatch = useDispatch();
  const [currentData, setCurrentData] = React.useState({});
  const [activeModalOrder, setActiveModalOrder] = React.useState(false);
  const [activeModalIngredient, setActiveModalIngredient] = React.useState(false);
  const [orderState, setOrderState] = React.useState(0);

  const handleCurrentData = (data) => {
    setCurrentData(data)
    setActiveModalIngredient(state => !state)
  }

  const handleCloseModalOrder = () => {
    setActiveModalOrder(false)
  }

  const handleOpenModalOrder = () => {
    setActiveModalOrder(true)
    setOrderApi(ingredients.map(ing => ing._id))
      .then(res => setOrderState(res.order.number))
      .catch(err => console.error(err))
  }

  const handleCloseModalIngredient = () => {
    setActiveModalIngredient(false)
  }


  React.useEffect(() => {
    dispatch(getIngredients())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


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
        <OrderDetails order={orderState}/>
      </Modal>
    </>
  );
}

export default App;