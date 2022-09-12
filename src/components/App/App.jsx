import React from 'react';
import AppHeader from '../AppHeader/AppHeader'; 
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import {data} from '../../utils/data';
import style from './App.module.css';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import OrderDetails from '../OrderDetails/OrderDetails';

function App() {
  const [state, setState] = React.useState({
    data: data,
    success: true
  });
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
  }

  const handleCloseModalIngredient = () => {
    setActiveModalIngredient(false)
  }


  React.useEffect(() => {
    const getData = async () => {
      try {
        setState({...state, success: false})
        const res = await fetch('https://norma.nomoreparties.space/api/ingredients');
        const data = await res.json();
        setState({data: data.data, success: data.success})
      }
      catch(err) {
        console.log(err);
      }
    }
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <AppHeader />
      <main className={style.contentWrapper + ' mb-10'}>
        
        <BurgerIngredients data={state.data} openModal={handleCurrentData}/>
        <BurgerConstructor data={state.data} openModal={handleOpenModalOrder}/>
        
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