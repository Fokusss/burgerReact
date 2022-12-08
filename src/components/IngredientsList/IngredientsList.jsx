import React from 'react';
import IngredientItem from '../IngredientItem/IngredientItem';
import cl from './IngredientsList.module.css';

const IngredientsList = ({ ingredients }) => {
  return (
    <div className={cl.box}>
      <p className={["text text_type_main-medium", cl.text].join(' ')}>Булки</p>
      <ul className={cl.list}>
        {ingredients.map((ingredient) => {
          if (ingredient.type === 'bun') {
            return (<li><IngredientItem ingredient={ingredient} key={ingredient.id} /></li>)
          }
        })}
      </ul>
      <p className={["text text_type_main-medium", cl.text].join(' ')}>Соусы</p>
      <ul className={cl.list}>
        {ingredients.map((ingredient) => {
          if (ingredient.type === 'sauce') {
            return (<li><IngredientItem ingredient={ingredient} key={ingredient.id} /></li>)
          }
        })}
      </ul>
      <p className={["text text_type_main-medium", cl.text].join(' ')}>Начинки</p>
      <ul className={cl.list}>
        {ingredients.map((ingredient) => {
          if (ingredient.type === 'main') {
            return (<li><IngredientItem ingredient={ingredient} key={ingredient.id} /></li>)
          }
        })}
      </ul>
    </div >
  )
}

export default IngredientsList;