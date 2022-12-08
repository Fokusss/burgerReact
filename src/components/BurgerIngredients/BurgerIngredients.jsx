import { React, useState } from "react";
import Tabs from "../Tabs/Tabs";

import cl from './BurgerIngredients.module.css';

const BurgerIngredients = () => {
  const [current, setCurrent] = useState('bun');

  return (
    <section className={cl.box}>
      <h1 className={["text text_type_main-large", cl.title].join(' ')}>Собирите бургер</h1>
      <Tabs current={current} setCurrent={setCurrent}/>
    </section>
  )
}

export default BurgerIngredients;