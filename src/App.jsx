import React from 'react';
import cl from './App.module.css';
import AppHeader from './components/AppHeader/AppHeader';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';

function App() {
  return (
    <div className={cl.box}>
      <AppHeader />
      <div className={cl.section}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </div>
  );
}

export default App;
