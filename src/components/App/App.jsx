import AppHeader from '../AppHeader/AppHeader'; 
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

function App({data}) {
  return (
    <>
      <AppHeader />
      <main className="content-wrapper mb-10">
        
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={data}/>
        
      </main>
    </>
  );
}

export default App;