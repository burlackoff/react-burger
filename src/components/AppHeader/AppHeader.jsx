import style from './AppHeader.module.css';
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import NavLink from '../NavLink/NavLink';


function AppHeader() {
  return (
      <header className={style.header}>
        <div className={style.content + ' m-4'} >
          <nav>
            <ul className={style.navlist}>
              <li>
                <NavLink text={"Конструктор"} className="p-4 m-4" icon={<BurgerIcon type="primary" />} />
              </li>
              <li>
                <NavLink text={"Лента заказов"} className="p-4 m-4" icon={<ListIcon type="secondary" />} type="secondary" />
              </li>
            </ul>
          </nav>
          <div className={style.logo}>
            <Logo/>
          </div>
          <nav>
            <ul className={style.navlist}>
              <li>
                <NavLink text={"Личный кабинет"} className="p-4 m-4" icon={<ProfileIcon type="secondary" />} type="secondary" />
              </li>
            </ul>
          </nav>
        </div>
      </header>
  );
}

export default AppHeader;
