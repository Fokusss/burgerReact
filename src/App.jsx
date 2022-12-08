import React from 'react';
import cl from './App.module.css';
import AppHeader from './components/AppHeader/AppHeader';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';

function App() {
  return (
    <div className={cl.box}>
      <AppHeader />
      <BurgerIngredients />
    </div>
  );
}

export default App;
