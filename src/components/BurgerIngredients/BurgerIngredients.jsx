import { React, useState } from "react";
import Tabs from "../Tabs/Tabs";
import ingri from './ingridients';

import cl from './BurgerIngredients.module.css';
import IngredientsList from "../IngredientsList/IngredientsList";

const BurgerIngredients = () => {
  const [current, setCurrent] = useState('bun');

  const [ingredients, setIngredients] = useState(ingri)

  return (
    <section className={cl.box}>
      <h1 className={["text text_type_main-large", cl.title].join(' ')}>Собирите бургер</h1>
      <Tabs current={current} setCurrent={setCurrent}/>
      <IngredientsList ingredients={ingredients} />
    </section>
  )
}

export default BurgerIngredients;