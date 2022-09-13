import React from 'react';
import AppHeader from '../AppHeader/AppHeader'; 
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import style from './App.module.css';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import OrderDetails from '../OrderDetails/OrderDetails';

function App() {
  const [state, setState] = React.useState([]);
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
    const getData = () => {
      fetch('https://norma.nomoreparties.space/api/ingredients')
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(res.status);
            })
            .then(response => setState(response.data))
            .catch(err => console.error(err))
    }
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <AppHeader />
      <main className={style.contentWrapper + ' mb-10'}>
        
        <BurgerIngredients data={state} openModal={handleCurrentData}/>
        {state.length && <BurgerConstructor data={state} openModal={handleOpenModalOrder}/>}
        
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