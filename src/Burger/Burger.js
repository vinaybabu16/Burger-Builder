import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import BurgerStyles from './Burger.css'

const Burger = () => (
    <div className = {BurgerStyles.Burger}>
        <BurgerIngredients types = 'bread-top' />
        <BurgerIngredients types = 'cheese' />
        <BurgerIngredients types = 'meat' />
        <BurgerIngredients types = 'bread-bottom' />
    </div>
);

export default Burger;