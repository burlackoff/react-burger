import React from 'react';
import AppHeader from '../AppHeader/AppHeader'; 
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

function App() {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://norma.nomoreparties.space/api/ingredients');
      const data = await res.json();
      console.log(data);
      setState({state: data})
    }
    getData()
  }, [])

  return (
    <>
      <AppHeader />
      <main className="content-wrapper mb-10">
        
        <BurgerIngredients data={state}/>
        <BurgerConstructor data={state}/>
        
      </main>
    </>
  );
}

export default App;