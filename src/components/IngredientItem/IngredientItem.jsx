import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import cl from './IngredientItem.module.css';

const IngredientItem = ({ ingredient }) => {
  return (
    <div className={cl.box}>
      <img src={ingredient.image} />
      <div className={cl.price}>
        <p className={["text text_type_digits-default", cl.text_price].join(' ')}>{ingredient.price}</p>
        <CurrencyIcon type='primary'/>
      </div>
      <p className="text text_type_main-default">{ingredient.name}</p>
    </div>
  )
}

export default IngredientItem;