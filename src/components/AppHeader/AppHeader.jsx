import './AppHeader.css';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import NavLink from '../NavLink/NavLink';
import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';


function AppHeader() {
  return (
      <header className="App-header p-4 m-4">
          <NavLink text={"Конструктор"} className="p-4 m-4" icon={<BurgerIcon type="primary" />} />
          <NavLink text={"Лента заказов"} className="p-4 m-4" icon={<ListIcon type="secondary" />} type="secondary" />
          <Logo/>
          <NavLink text={"Личный кабинет"} className="p-4 m-4" icon={<ProfileIcon type="secondary" />} type="secondary" />
      </header>
  );
}

export default AppHeader;
