import React from 'react';
import AppHeader from '../AppHeader/AppHeader'; 
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import {data} from '../../utils/data';
import style from './App.module.css';

function App() {
  const [state, setState] = React.useState({
    data: data,
    success: true
  });

  React.useEffect(() => {
    const getData = async () => {
      setState({...state, success: false})
      const res = await fetch('https://norma.nomoreparties.space/api/ingredients');
      const data = await res.json();
      console.log(data);
      setState({data: data.data, success: data.success})
    }
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <AppHeader />
      <main className={style.contentWrapper + ' mb-10'}>
        
        <BurgerIngredients data={state.data}/>
        <BurgerConstructor data={state.data}/>
        
      </main>
    </>
  );
}

export default App;