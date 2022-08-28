import './AppHeader.css';
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import NavLink from '../NavLink/NavLink';


function AppHeader() {
  return (
      <header className="App-header">
        <div className="App-content m-4">
          <nav className="App-navbar">
            <li>
              <NavLink text={"Конструктор"} className="p-4 m-4" icon={<BurgerIcon type="primary" />} />
            </li>
            <li>
              <NavLink text={"Лента заказов"} className="p-4 m-4" icon={<ListIcon type="secondary" />} type="secondary" />
            </li>
          </nav>
          <div className='App-logo'>
            <Logo/>
          </div>
          <nav className="App-navbar">
            <NavLink text={"Личный кабинет"} className="p-4 m-4" icon={<ProfileIcon type="secondary" />} type="secondary" />
          </nav>
        </div>
      </header>
  );
}

export default AppHeader;
