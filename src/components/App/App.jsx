import React from 'react';
import AppHeader from '../AppHeader/AppHeader'; 
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import {data} from '../../utils/data'

function App() {
  const [state, setState] = React.useState({
    success: true,
    data: data
  });

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://norma.nomoreparties.space/api/ingredients');
      const data = await res.json();
      console.log(data);
      setState({success: data.success, data: data.data})
    }
    getData()
  }, [])

  return (
    <>
      <AppHeader />
      <main className="content-wrapper mb-10">
        
        <BurgerIngredients data={state.data}/>
        <BurgerConstructor data={state.data}/>
        
      </main>
    </>
  );
}

export default App;