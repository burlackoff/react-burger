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
import {DELETE_INGREDIENT_DETAILS} from '../../services/actions/showIngredientDetails';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const ingredients = useSelector(store => store.ingredients.data);
  const activeModalIngredient = useSelector(store => store.ingredientDetail.active);
  const dispatch = useDispatch();
  const [activeModalOrder, setActiveModalOrder] = React.useState(false);

  const handleCloseModalOrder = () => {
    setActiveModalOrder(false)
  }

  const handleOpenModalOrder = () => {
    setActiveModalOrder(true)
    dispatch(setOrder(ingredients.map(ing => ing._id)))
  }

  const handleCloseModalIngredient = () => {
    dispatch({type: DELETE_INGREDIENT_DETAILS})
  }

  React.useEffect(() => {
    dispatch(getIngredients())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])


  return (
    <>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <main className={`${style.contentWrapper} mb-10`}>
          <BurgerIngredients/>
          <BurgerConstructor openModal={handleOpenModalOrder}/>
        </main>
      </DndProvider>
      <Modal onClose={handleCloseModalIngredient} visible={activeModalIngredient} title={'Детали ингредиента'}>
        <IngredientDetails/>
      </Modal>
      <Modal onClose={handleCloseModalOrder} visible={activeModalOrder} >
        <OrderDetails/>
      </Modal>
    </>
  );
}

export default App;