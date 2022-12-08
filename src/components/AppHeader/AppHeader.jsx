import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons';
import React from 'react';
import NavItem from '../NavItem/NavItem';
import cl from './AppHeader.module.css';

const AppHeader = () => {
  return (
    <header className={cl.box}>
      <nav>
        <ul className={cl.list}>
          <li>
            <NavItem text='Конструктор'><BurgerIcon type="primary" /></NavItem>
          </li>
          <li>
            <NavItem text='Лента заказов'><ListIcon type="secondary" /></NavItem>
          </li>
        </ul>
      </nav>
      <div className={cl.logo}>
        <Logo />
      </div>
      <NavItem text='Личный кабинет'><ProfileIcon type="secondary" /></NavItem>
    </header>
  )
}

export default AppHeader;