import React from 'react';
import Tab from "../UI/Tab/Tab";
import cl from './Tabs.module.css';

const Tabs = ({current, setCurrent}) => {
  return (
    <div className={cl.tabs}>
        <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
  )
}

export default Tabs;